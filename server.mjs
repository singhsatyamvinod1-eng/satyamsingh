import http from 'node:http';
import nodemailer from 'nodemailer';
import {createServer as createViteServer,loadEnv} from 'vite';

const mode=process.argv.includes('--production')?'production':'development';
const env={...loadEnv(mode,process.cwd(),''),...process.env};
const port=Number(env.PORT)||4317;
const gmailUser=(env.GMAIL_USER||'').trim();
const gmailPassword=(env.GMAIL_APP_PASSWORD||'').replace(/\s+/g,'');
const contactTo=(env.CONTACT_TO_EMAIL||gmailUser).trim();
const transporter=gmailUser&&gmailPassword?nodemailer.createTransport({service:'gmail',auth:{user:gmailUser,pass:gmailPassword}}):null;
const rateLimits=new Map();
let vite;

const escapeHtml=value=>String(value).replace(/[&<>"']/g,character=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[character]));
const sendJson=(response,status,payload)=>{response.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});response.end(JSON.stringify(payload))};
const readJson=request=>new Promise((resolve,reject)=>{let body='';request.on('data',chunk=>{body+=chunk;if(body.length>16_000){reject(new Error('Request is too large.'));request.destroy()}});request.on('end',()=>{try{resolve(JSON.parse(body||'{}'))}catch{reject(new Error('Invalid request.'))}});request.on('error',reject)});
const clean=(value,max)=>typeof value==='string'?value.trim().slice(0,max):'';
const validEmail=value=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

function allowedToSend(address){
  const now=Date.now(),windowMs=10*60*1000,maxRequests=5;
  const recent=(rateLimits.get(address)||[]).filter(time=>now-time<windowMs);
  if(recent.length>=maxRequests)return false;
  recent.push(now);rateLimits.set(address,recent);return true;
}

async function handleContact(request,response){
  if(!transporter||!contactTo)return sendJson(response,503,{ok:false,message:'Email delivery is not configured yet.'});
  const address=request.socket.remoteAddress||'unknown';
  if(!allowedToSend(address))return sendJson(response,429,{ok:false,message:'Too many messages were sent. Please wait a few minutes and try again.'});
  let input;
  try{input=await readJson(request)}catch(error){return sendJson(response,400,{ok:false,message:error.message})}
  if(input.companyWebsite)return sendJson(response,200,{ok:true,message:'Message sent successfully.'});
  const name=clean(input.name,100),email=clean(input.email,200),phone=clean(input.phone,40),message=clean(input.message,4000);
  if(name.length<2||!validEmail(email)||message.length<10)return sendJson(response,400,{ok:false,message:'Please enter a valid name, email address and message.'});
  const receivedAt=new Intl.DateTimeFormat('en-IN',{dateStyle:'long',timeStyle:'short',timeZone:'Asia/Kolkata'}).format(new Date());
  const safeName=name.replace(/[\r\n]+/g,' ');
  const replyHref=`mailto:${email}?subject=${encodeURIComponent(`Re: Portfolio enquiry from ${safeName}`)}`;
  try{
    await transporter.sendMail({
      from:{name:'Satyam Singh Portfolio',address:gmailUser},
      to:contactTo,
      replyTo:{name:safeName,address:email},
      subject:`Portfolio enquiry from ${safeName}`,
      text:`New portfolio enquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone||'Not provided'}\nReceived: ${receivedAt}\n\nMessage:\n${message}`,
      html:`<div style="font-family:Arial,sans-serif;max-width:640px;color:#172033"><h1 style="font-size:24px">New portfolio enquiry</h1><table style="border-collapse:collapse;width:100%;margin:20px 0"><tr><td style="padding:8px 0;color:#657089">Name</td><td style="padding:8px 0"><strong>${escapeHtml(name)}</strong></td></tr><tr><td style="padding:8px 0;color:#657089">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr><tr><td style="padding:8px 0;color:#657089">Phone</td><td style="padding:8px 0">${escapeHtml(phone||'Not provided')}</td></tr><tr><td style="padding:8px 0;color:#657089">Received</td><td style="padding:8px 0">${escapeHtml(receivedAt)}</td></tr></table><div style="padding:18px;background:#f3f6fb;border-radius:10px;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</div><p style="margin:24px 0"><a href="${escapeHtml(replyHref)}" style="display:inline-block;padding:12px 20px;border-radius:8px;background:#273866;color:#fff;text-decoration:none;font-weight:700">Reply to ${escapeHtml(safeName)}</a></p><p style="color:#657089;font-size:13px">The visitor is also set as Reply-To, so Gmail’s normal Reply button will respond directly to ${escapeHtml(safeName)}.</p></div>`
    });
    let confirmationSent=true;
    try{
      await transporter.sendMail({
        from:{name:'Satyam Singh',address:gmailUser},
        to:{name:safeName,address:email},
        replyTo:{name:'Satyam Singh',address:contactTo},
        subject:'Thank you for contacting Satyam Singh',
        text:`Hi ${name},\n\nThank you for reaching out through my portfolio. I have received your message and will get back to you as soon as I can.\n\nBest,\nSatyam Singh\nSocial Media Manager / Digital Marketer`,
        html:`<div style="font-family:Arial,sans-serif;max-width:600px;color:#172033;line-height:1.7"><p style="color:#52617a;font-size:13px;letter-spacing:1px;text-transform:uppercase">Message received</p><h1 style="font-size:28px;margin:8px 0 20px">Thank you for reaching out, ${escapeHtml(safeName)}.</h1><p>I have received your message through my portfolio and will get back to you as soon as I can.</p><p style="margin-top:28px">Best,<br><strong>Satyam Singh</strong><br><span style="color:#657089">Social Media Manager / Digital Marketer</span></p></div>`
      });
    }catch(error){confirmationSent=false;console.error('Visitor confirmation email failed:',error?.code||'unknown_error')}
    return sendJson(response,200,{ok:true,confirmationSent,message:'Message sent successfully.'});
  }catch(error){
    console.error('Contact email delivery failed:',error?.code||'unknown_error');
    return sendJson(response,502,{ok:false,message:'Email delivery is temporarily unavailable. Please try again.'});
  }
}

const server=http.createServer(async(request,response)=>{
  try{
    const pathname=new URL(request.url||'/','http://127.0.0.1').pathname;
    if(pathname==='/api/contact'){
      if(request.method!=='POST')return sendJson(response,405,{ok:false,message:'Method not allowed.'});
      return await handleContact(request,response);
    }
    return vite.middlewares(request,response);
  }catch(error){
    console.error('Server request failed:',error?.message||'unknown_error');
    if(!response.headersSent)sendJson(response,500,{ok:false,message:'The server could not complete this request.'});
  }
});

vite=await createViteServer({server:{middlewareMode:true,hmr:{server}},appType:'spa'});
server.listen(port,'127.0.0.1',()=>console.log(`Portfolio ready at http://127.0.0.1:${port}`));

const shutdown=async()=>{await vite.close();server.close(()=>process.exit(0))};
process.on('SIGINT',shutdown);
process.on('SIGTERM',shutdown);
