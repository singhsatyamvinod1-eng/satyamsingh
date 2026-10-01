import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Avatar,usePortfolio,validExternal,photoSource} from './App.jsx';
import {Icon} from './icons.jsx';
import {contentCalendarEvidence} from './data.js';
import {PostArtwork} from './PostArtwork.jsx';

function PageHead({kicker,title,description,action}){return <header className="page-head"><div><span className="tiny-caps">{kicker}</span><h1>{title}</h1><p>{description}</p></div>{action}</header>}
function EditButton({kind,index=0,children='Edit'}){const {edit}=usePortfolio();return <button className="button small subtle" onClick={()=>edit(kind,index)}><Icon name="edit"/>{children}</button>}
function PostHead({sub,badge}){const {data}=usePortfolio();return <div className="post-head"><Avatar name={data.profile.name} photo={data.profile.photo}/><div><strong>{data.profile.name}</strong><small>{sub}</small></div>{badge&&<span className="post-label">{badge}</span>}</div>}
function Reactions({id,to='/work'}){const [liked,setLiked]=useState(false),[saved,setSaved]=useState(false);return <footer className="post-actions"><button className={`reaction ${liked?'on':''}`} onClick={()=>setLiked(!liked)} aria-pressed={liked} aria-label="Appreciate this post"><Icon name="heart"/><span>{liked?'Appreciated':'Appreciate'}</span></button><Link className="reaction" to={to}><Icon name="message"/>Explore</Link><button className={`reaction save ${saved?'on':''}`} onClick={()=>setSaved(!saved)} aria-pressed={saved} aria-label={saved?'Unsave this post':'Save this post'}><Icon name="bookmark"/></button></footer>}
const experienceFocus = [
  [
    ['calendar','Content planning'],
    ['message','Creator coordination'],
    ['chart','Performance reporting'],
    ['target','Competitor research']
  ],
  [
    ['message','Social media management'],
    ['target','Competitor analysis'],
    ['spark','Trend research'],
    ['calendar','Content calendar']
  ]
];

function ExperienceArt({project,index}){
  const focus=experienceFocus[index]||experienceFocus[0];
  return <div className={`campaign-art experience-art experience-art-${index}`}>
    <div className="experience-art-head"><span>{project.type} / {String(index+1).padStart(2,'0')}</span><b>CONFIRMED EXPERIENCE</b></div>
    <div className="experience-art-title"><span>{project.brand}</span><strong>{project.role}</strong></div>
    <div className="experience-focus" aria-label={`Key responsibilities at ${project.brand}`}>{focus.map(([icon,label])=><span key={label}><Icon name={icon}/>{label}</span>)}</div>
    <div className="experience-art-foot"><span>VIEW EXPERIENCE BREAKDOWN</span><Icon name="arrow"/></div>
  </div>;
}

export function CampaignArt({project,index}){
  const image=photoSource(project.image),linkedPost=project.source==='LINKEDIN POST'&&validExternal(project.link);
  if(linkedPost)return <PostArtwork item={project} variant="campaign"/>;
  if(!image)return <ExperienceArt project={project} index={index}/>;
  return <div className={`campaign-art art-${index}`}><img src={image} alt={`${project.name} creative`} loading="lazy"/><div className="art-overlay"><span className="tiny-caps">{project.type} / {String(index+1).padStart(2,'0')}</span><strong>{project.name}</strong><span className="art-footer">CREATIVE IMAGE <span>↗</span></span></div></div>;
}

export function Profile(){const {data,edit,showProject}=usePortfolio();const [filter,setFilter]=useState('all');const posts=[{type:'thinking',node:<article className="post panel" key="intro"><PostHead sub="Who I am · Introduction" badge="PINNED INTRO"/><h2>{data.intro.heading}</h2><p>{data.intro.question}</p><p className="muted">{data.intro.body}</p><div className="inline-row"><Link className="text-link" to="/about">Get to know my approach <Icon name="arrow"/></Link><EditButton kind="intro"/></div><Reactions id="intro" to="/about"/></article>},{type:'content',node:<article className="post panel" key="capabilities"><PostHead sub="What I do · The capabilities"/><h2>From the first idea<br/>to the next conversation.</h2><div className="capability-trio">{[['target','Find the direction','Content strategy'],['spark','Create the connection','Content creation'],['chart','Read the response','Analytics & reporting']].map(([icon,title,label])=><Link to="/skills" key={title}><Icon name={icon}/><strong>{title}</strong><span>{label}</span></Link>)}</div><p className="micro">Skills drawn from my LinkedIn experience; real work examples can make each one stronger.</p><Reactions id="capabilities" to="/skills"/></article>},{type:'campaigns',node:<article className="post panel campaign-post" key="campaign"><PostHead sub="Work · Experience highlight" badge={data.projects[0].source||'WORK EXAMPLE'}/><button className="art-button" onClick={()=>showProject(0)} aria-label="Open project 01"><CampaignArt project={data.projects[0]} index={0}/></button><div className="campaign-caption"><div><span className="tiny-caps">{data.projects[0].platform} / {data.projects[0].type}</span><h2>{data.projects[0].name}</h2><p>{data.projects[0].brand}</p></div><button className="round-button" onClick={()=>showProject(0)} aria-label="View campaign"><Icon name="arrow"/></button></div><Reactions id="campaign"/></article>},{type:'campaigns',node:<article className="post panel" key="results"><PostHead sub="Impact · Evidence first" badge="RESULTS AWAITING DATA"/><h2>Good work deserves<br/>good evidence.</h2><p className="muted">My LinkedIn profile and posts show the work. Campaign analytics, dates and baselines are still needed before I can publish performance results.</p><Link className="text-link" to="/impact">See the evidence and what's needed <Icon name="arrow"/></Link><Reactions id="results" to="/impact"/></article>},{type:'thinking',node:<article className="post panel thinking-post" key="thinking"><PostHead sub="Creative thinking · The mindset"/><span className="quote-mark">“</span><h2>{data.philosophy[5].text}</h2><p className="muted">{data.philosophy[0].text}</p><Link className="text-link" to="/about">Explore how I think <Icon name="arrow"/></Link><Reactions id="thinking" to="/about"/></article>}];return <><section className="profile-card panel"><div className="profile-cover"><div className="cover-copy"><span className="tiny-caps">STRATEGY × CREATIVITY × CONNECTION</span><p>Made for<br/><em>meaningful impact.</em></p></div><div className="cover-signal" aria-hidden="true"><span className="signal-ring signal-ring-one"/><span className="signal-ring signal-ring-two"/><span className="signal-node signal-node-a"/><span className="signal-node signal-node-b"/><span className="signal-node signal-node-c"/><span className="signal-bars"><i/><i/><i/><i/></span><span className="signal-chip signal-chip-a">CONTENT</span><span className="signal-chip signal-chip-b">INSIGHT</span><span className="signal-chip signal-chip-c">GROWTH</span></div></div><div className="profile-info"><div className="profile-top"><Avatar size="profile-avatar" name={data.profile.name} photo={data.profile.photo} caption/><button className="button small" onClick={()=>edit('profile')}><Icon name="edit"/>Edit profile</button></div><h1>{data.profile.name}</h1><p className="role">{data.profile.title}</p><p className="bio">{data.profile.bio}</p><div className="profile-meta"><span><Icon name="pin"/>{data.profile.location||'[LOCATION]'}</span>{validExternal(data.profile.linkedin)&&<a href={validExternal(data.profile.linkedin)} target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="external"/></a>}{validExternal(data.profile.website)&&<a href={validExternal(data.profile.website)} target="_blank" rel="noopener noreferrer">Website <Icon name="external"/></a>}</div><div className="profile-tags"><span>Content & strategy</span><span>Creative thinking</span><span>Digital communities</span></div></div></section><div className="story-row">{[['/about','spark','violet','The mindset'],['/work','grid','blue','The work'],['/skills','layers','silver','The toolkit'],['/journey','route','teal','The journey']].map(([to,icon,color,text])=><Link to={to} key={to}><span className={`story-icon ${color}`}><Icon name={icon}/></span><span>{text}</span></Link>)}</div><div className="feed-head"><h2>The feed<span className="count">05</span></h2><span className="muted">A look inside my work</span></div><div className="feed-tabs" role="tablist" aria-label="Feed filter">{[['all','For you'],['campaigns','Campaigns'],['content','Content'],['thinking','Thinking']].map(([key,label])=><button key={key} role="tab" aria-selected={filter===key} className={filter===key?'selected':''} onClick={()=>setFilter(key)}>{label}</button>)}</div><div id="feed">{posts.filter(p=>filter==='all'||p.type===filter).map(p=>p.node)}</div></>}

const platformIcons={Instagram:'◎',Facebook:'f',LinkedIn:'in',X:'𝕏','Google Ads':'G'};
export function Work(){
  const {data,showProject,showContent}=usePortfolio();
  const [mode,setMode]=useState('campaigns'),[platform,setPlatform]=useState('All platforms'),[campaign,setCampaign]=useState('all');
  const platforms=['All platforms',...new Set([...data.projects,...data.content].map(p=>p.platform))];
  const matches=(item,index)=>(platform==='All platforms'||platform===item.platform)&&(campaign==='all'||campaign===String(mode==='content'?item.campaign:index));
  const campaigns=data.projects.map((project,index)=>({project,index})).filter(({project,index})=>matches(project,index));
  const content=data.content.map((item,index)=>({item,index})).filter(({item,index})=>matches(item,index));
  return <>
    <PageHead kicker="THE WORK" title="Ideas, out in the world." description="Campaigns, content and the thinking behind them."/>
    <div className="segmented" role="tablist" aria-label="Work view">
      <button role="tab" aria-selected={mode==='campaigns'} className={mode==='campaigns'?'selected':''} onClick={()=>setMode('campaigns')}>Work highlights</button>
      <button role="tab" aria-selected={mode==='content'} className={mode==='content'?'selected':''} onClick={()=>setMode('content')}>Content showcase</button>
    </div>
    <div className="filter-row">
      <label>Platform<select value={platform} onChange={e=>setPlatform(e.target.value)}>{platforms.map(p=><option key={p}>{p}</option>)}</select></label>
      <label>Work example<select value={campaign} onChange={e=>setCampaign(e.target.value)}><option value="all">All examples</option>{data.projects.map((p,i)=><option value={i} key={i}>{p.name}</option>)}</select></label>
    </div>
    <p className="notice">Work examples from LinkedIn and details confirmed by Satyam · client campaign results have not been supplied.</p>
    {mode==='campaigns'?<div>{campaigns.map(({project,index})=><article className="post panel campaign-post" key={index}>
      <PostHead sub={`${project.platform} · ${project.type}`} badge={project.source||'WORK EXAMPLE'}/>
      {project.source==='LINKEDIN POST'&&validExternal(project.link)
        ?<a className="art-button" href={validExternal(project.link)} target="_blank" rel="noopener noreferrer" aria-label={`View original LinkedIn post: ${project.name}`}><CampaignArt project={project} index={index}/></a>
        :<button className="art-button" onClick={()=>showProject(index)} aria-label={`View ${project.name}`}><CampaignArt project={project} index={index}/></button>}
      <div className="campaign-caption"><div><span className="tiny-caps">{project.brand}</span><h2>{project.name}</h2><p>{project.objective}</p></div><button className="round-button" onClick={()=>showProject(index)} aria-label={`Open ${project.name}`}><Icon name="arrow"/></button></div>
      <div className="inline-row"><span className="tag">{project.role}</span><EditButton kind="projects" index={index}>Edit case study</EditButton></div>
    </article>)}</div>:<div className="content-grid">{content.map(({item,index})=><button className="content-tile" onClick={()=>showContent(index)} aria-label={`Open post: ${item.title}`} key={index}>
      <PostArtwork item={item}/>
      <span className="content-info"><small className="post-type">{item.type}</small><strong>{item.title}</strong><small>{item.platform} · {data.projects[item.campaign]?.name||'Independent post'}</small><span className="post-open">View post <Icon name="arrow"/></span></span>
    </button>)}</div>}
    {((mode==='campaigns'&&!campaigns.length)||(mode==='content'&&!content.length))&&<div className="empty panel">No content matches these filters.<button className="button" onClick={()=>{setCampaign('all');setPlatform('All platforms')}}>Clear filters</button></div>}
  </>;
}

export function Skills(){
  const {data,edit}=usePortfolio(),[filter,setFilter]=useState('All');
  return <>
    <PageHead kicker="THE CAPABILITIES" title="The thinking. The toolkit." description="A connected view of strategy, creativity and execution."/>
    <div className="skill-overview panel"><div><span className="tiny-caps">CAPABILITY MAP</span><h2>Built around the whole picture.</h2><p className="micro">Each skill is connected to experience evidence. Add a self-assessment only when it helps a reviewer.</p></div><div className="capability-map" role="img" aria-label="Three connected capability areas: strategy, creativity and management"><span>STRATEGY</span><span>CREATIVE</span><span>MANAGEMENT</span><b>social</b></div></div>
    <div className="chip-filters">{['All','Strategy','Management','Creative'].map(group=><button key={group} className={`chip ${filter===group?'selected':''}`} aria-pressed={filter===group} onClick={()=>setFilter(group)}>{group}</button>)}</div>
    <div className="skills-grid">{data.skills.map((skill,index)=>({skill,index})).filter(({skill})=>filter==='All'||skill.category===filter).map(({skill,index})=><button className="skill-card panel" key={index} onClick={()=>edit('skills',index)} aria-label={`Edit ${skill.name}`}>
      <span className="skill-icon"><Icon name={{Strategy:'target',Management:'layers',Creative:'spark'}[skill.category]||'spark'}/></span>
      <strong>{skill.name}</strong>
      {skill.level===''?<div className="skill-proof"><span>EXPERIENCE EVIDENCE</span><p>{skill.evidence}</p></div>:<><div className="skill-level"><span>Self-assessed</span><b>{skill.level}%</b></div><div className="progress-track"><span style={{width:`${Math.max(0,Math.min(100,Number(skill.level)||0))}%`}}/></div></>}
    </button>)}</div>
    <div className="section-title"><div><span className="tiny-caps">THE TOOLS BEHIND THE THINKING</span><h2>Platform stack</h2></div><span className="micro">LinkedIn-listed channels and tools</span></div>
    <div className="stack-grid">{data.platforms.map((platform,index)=><button className="stack-card panel" onClick={()=>edit('platforms',index)} key={index}><span className={`platform-logo ${platform.name.toLowerCase().split(' ')[0]}`}>{platformIcons[platform.name]||'•'}</span><strong>{platform.name}</strong><span className="micro">{platform.experience}</span></button>)}</div>
  </>;
}

export function Impact(){
  const {data}=usePortfolio();
  const calendar=contentCalendarEvidence;
  const evidence=[
    {eyebrow:'LINKEDIN EXPERIENCE',title:'Social channel management',body:'My LinkedIn profile documents social media management at IDSSPL Technologies, including content planning, campaign coordination and reporting.',url:data.profile.linkedin,label:'View LinkedIn profile'},
    {eyebrow:'LINKEDIN EXPERIENCE · OWNER-CONFIRMED DUTIES',title:'Social media internship',body:'My 3rd Planet Global OJT internship covered social media management, competitor analysis, trend research and content calendar management.',url:'https://www.linkedin.com/in/satyam-singh77/details/experience/',label:'View LinkedIn experience'},
    {eyebrow:'AUTHORED POST',title:'Tropical Escape concept',body:'An independently published travel-promotion concept. It demonstrates creative direction and copy; it does not claim client results.',url:data.content[0]?.link,label:'View original post'},
    {eyebrow:'AUTHORED POST · POST-LEVEL RESULT',title:'Strategy and marketing point of view',body:'My LinkedIn post about marketing clarity, strategy and AI recorded 223 impressions and 4 reactions when reviewed on 1 Oct 2026.',url:data.content[1]?.link,label:'View original post'}
  ];
  return <>
    <PageHead kicker="THE IMPACT" title="The plan behind the posts." description="A view of the content planning I can document, with performance results kept separate." action={<EditButton kind="metrics">Edit metrics</EditButton>}/>
    <section className="calendar-proof panel" aria-labelledby="calendar-title">
      <div className="calendar-proof-intro"><div><span className="tiny-caps">OWNER-SHARED PLANNING EVIDENCE · IDSSPL</span><h2 id="calendar-title">A calendar built for consistency.</h2><p>{calendar.name} covers {calendar.period}. It maps topics across core banking, digital payments and financial inclusion into a mix of formats.</p></div><div className="calendar-total"><strong>{calendar.slots}</strong><span>dated content slots</span></div></div>
      <div className="calendar-formats" aria-label="Planned content by format">{calendar.formats.map(format=><div className="calendar-format" key={format.name}><div><span>{format.name}</span><strong>{format.count}</strong></div><div className="calendar-track"><span style={{width:`${format.count/calendar.slots*100}%`}}/></div></div>)}</div>
      <div className="calendar-proof-footer"><p>Counted rows with a date and content topic. These are planned slots, not published posts or performance results. One row is marked “Done” in the Approval column; the sheet does not show reach, engagement, impressions or leads. The year is not specified in the sheet.</p><a className="text-link" href={calendar.url} target="_blank" rel="noopener noreferrer">View source calendar <Icon name="external"/></a></div>
    </section>
    <div className="notice">The calendar documents planning output. My public LinkedIn profile and posts document experience and creative work. Campaign performance still needs platform analytics before I can claim results.</div>
    <div className="section-title"><div><span className="tiny-caps">PUBLIC EVIDENCE</span><h2>What LinkedIn documents</h2></div></div>
    <div className="impact-evidence-grid">{evidence.map(item=><article className="impact-evidence-card panel" key={item.title}><span className="tiny-caps">{item.eyebrow}</span><h3>{item.title}</h3><p className="micro">{item.body}</p>{validExternal(item.url)&&<a className="text-link" href={validExternal(item.url)} target="_blank" rel="noopener noreferrer">{item.label} <Icon name="external"/></a>}</article>)}</div>
    <div className="section-title"><div><span className="tiny-caps">MEASURED OUTCOMES</span><h2>Results awaiting evidence</h2></div><span className="micro">No sample or estimated figures</span></div>
    <div className="metrics-grid">{data.metrics.map(m=><div className="metric-card panel" key={m.label}><span>{m.label}</span><strong>{m.value||'—'}</strong><small>{m.value?'OWNER-ENTERED DRAFT · SOURCE & PERIOD NEEDED':'ANALYTICS SOURCE NEEDED'}</small></div>)}</div>
    <section className="impact-needs panel"><span className="tiny-caps">TO COMPLETE THIS SECTION</span><h2>What I need for each result</h2><ul><li>The campaign or account name, platform and date range.</li><li>An analytics screenshot or export showing the figure, plus the starting value when claiming growth.</li><li>My role in the work and a link to the live post or campaign, when available.</li><li>Permission to publish the brand name and result.</li></ul><p className="micro">Reach, impressions, engagement, follower change, clicks, leads or conversions can be added when their source and time period are clear.</p></section>
  </>;
}

export function Journey(){
  const {data}=usePortfolio();
  return <>
    <PageHead kicker="THE JOURNEY" title="Always moving forward." description="The roles, experiences and lessons that shape the work."/>
    <div className="notice">Role dates and responsibilities are drawn from LinkedIn. The Teqfox company name is owner-supplied because the company field is blank on LinkedIn. Campaign-wide results still need analytics evidence.</div>
    <div className="journey-line">{data.journey.map((j,i)=><article className="journey-item" key={i}><span className="journey-node">{String(i+1).padStart(2,'0')}</span><div className="panel journey-card"><span className="tiny-caps">{j.duration}</span><h2>{j.role}</h2><h3>{j.company}</h3><p>{j.responsibilities}</p><details><summary>Explore this chapter <Icon name="arrow"/></summary><div className="detail-grid">{[['campaigns','Campaigns handled'],['platforms','Platforms managed'],['achievements','Achievements']].map(([key,label])=><section key={key}><h3>{label}</h3><p>{j[key]}</p></section>)}</div></details><EditButton kind="journey" index={i}>Edit experience</EditButton></div></article>)}</div>
    <div className="section-title"><div><span className="tiny-caps">EDUCATION</span><h2>Learning that shaped the work.</h2></div></div>
    <div className="journey-line">{data.education.map((e,i)=><article className="journey-item" key={i}><span className="journey-node">{String(i+1).padStart(2,'0')}</span><div className="panel journey-card"><span className="tiny-caps">{e.period}</span><h2>{e.qualification}</h2><h3>{e.school}</h3><EditButton kind="education" index={i}>Edit education</EditButton></div></article>)}</div>
    <div className="section-title"><div><span className="tiny-caps">CERTIFICATIONS</span><h2>Continuing to learn.</h2></div><span className="micro">Shared on LinkedIn</span></div>
    <div className="cert-grid">{data.certifications.map((c,i)=><article className="panel cert-card" key={i}><span className="tiny-caps">{c.issuer}</span><h3>{c.name}</h3><div className="inline-row"><a className="text-link" href={validExternal(c.link)} target="_blank" rel="noopener noreferrer">View LinkedIn post <Icon name="external"/></a><EditButton kind="certifications" index={i}/></div></article>)}</div>
    <div className="journey-end"><span>✳</span><h2>The next chapter?</h2><p className="muted">Let's make it a good one.</p><Link className="button primary" to="/contact">Start a conversation <Icon name="arrow"/></Link></div>
  </>
}

export function About(){const {data}=usePortfolio();return <><PageHead kicker="HOW I THINK" title={<>Behind every post,<br/>a point of view.</>} description="The principles that turn content into connection."/><div className="philosophy-grid">{data.philosophy.map((p,i)=><article className="philosophy-card panel" key={i}><span className="philosophy-number">0{i+1}</span><Icon name={['target','spark','chart','route','calendar','message'][i]}/><span className="tiny-caps">{p.title}</span><h2>{p.text}</h2><EditButton kind="philosophy" index={i}/></article>)}</div><div className="about-footer panel"><span className="tiny-caps">MY APPROACH</span><h2>Think intentionally.<br/>Create thoughtfully.<br/><em>Keep the conversation going.</em></h2><Link className="text-link" to="/contact">Let's connect <Icon name="arrow"/></Link></div></>}

export function Contact(){
  const {data,toast}=usePortfolio(),[draft,setDraft]=useState(''),[copied,setCopied]=useState(false);
  const hasEmail=/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(data.profile.email||'');
  const copyMessage=async text=>{let success=false;try{if(!navigator.clipboard?.writeText)throw new Error('Clipboard API unavailable');await navigator.clipboard.writeText(text);success=true}catch{const helper=document.createElement('textarea');helper.value=text;helper.setAttribute('readonly','');helper.style.position='fixed';helper.style.opacity='0';document.body.appendChild(helper);helper.select();success=document.execCommand('copy');helper.remove()}setCopied(success);toast(success?'Message copied. LinkedIn is ready for you.':'Select the message and copy it manually.');return success};
  const send=event=>{event.preventDefault();const fields=new FormData(event.currentTarget),message=`Hello ${data.profile.name},\\n\\n${fields.get('message')}\\n\\nFrom: ${fields.get('name')}\\nEmail: ${fields.get('email')}${fields.get('phone')?`\\nPhone: ${fields.get('phone')}`:''}`;if(hasEmail){window.location.href=`mailto:${encodeURIComponent(data.profile.email)}?subject=${encodeURIComponent('Let’s work together — '+fields.get('name'))}&body=${encodeURIComponent(message)}`;toast('Your email draft is ready. Send it from your email app.')}else{setDraft(message);setCopied(false);toast('Your LinkedIn message is ready.');setTimeout(()=>document.querySelector('.message-preview')?.scrollIntoView({behavior:'smooth',block:'center'}),0)}};
  const socials=['linkedin','instagram','website','other'].filter(key=>validExternal(data.profile[key]));
  return <>
    <PageHead kicker="LET’S WORK TOGETHER" title={<>A conversation<br/>can change everything.</>} description="A project, a role or an idea. Tell me what you have in mind."/>
    <section className="contact-card panel"><div className="contact-profile"><Avatar name={data.profile.name} photo={data.profile.photo}/><div><strong>{data.profile.name}</strong><span>{data.profile.title}</span></div></div>
      <form className="contact-form" onSubmit={send}><div className="form-grid"><label>Name<input name="name" autoComplete="name" placeholder="Your name" required maxLength="100"/></label><label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength="200"/></label><label className="full">Phone <span className="muted">(optional)</span><input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" maxLength="40"/></label><label className="full">Message<textarea name="message" rows="5" required placeholder="A little about your idea…" maxLength="4000"/></label></div><button className="button primary" type="submit">{hasEmail?'Create email draft':'Create LinkedIn message'} <Icon name="arrow"/></button><p className="micro">{hasEmail?'Creates a draft in your email app. Nothing is sent automatically.':'Create a ready-to-send message, then copy it and open LinkedIn.'}</p></form>
      {draft&&<div className="message-preview" role="region" aria-live="polite"><div className="message-preview-head"><div><span className="tiny-caps">MESSAGE READY</span><h2>Your conversation starter</h2></div><span className={`message-status ${copied?'is-copied':''}`}><Icon name={copied?'check':'message'}/>{copied?'Copied':'Ready to copy'}</span></div><p className="muted">Review the message, then copy it into a LinkedIn conversation with Satyam.</p><textarea className="message-draft" value={draft} readOnly rows="8" aria-label="Prepared LinkedIn message"/><div className="contact-message-actions"><button type="button" className="button" onClick={()=>copyMessage(draft)}>{copied?'Copy again':'Copy message'} <Icon name={copied?'check':'message'}/></button><a className="button primary" href={validExternal(data.profile.linkedin)} target="_blank" rel="noopener noreferrer" onClick={()=>copyMessage(draft)}>Copy & open LinkedIn <Icon name="external"/></a></div></div>}
      <div className="contact-links">{socials.map(key=><a className="button" href={validExternal(data.profile[key])} key={key} target="_blank" rel="noopener noreferrer">{key==='linkedin'?'LinkedIn':key==='other'?'Social profile':key[0].toUpperCase()+key.slice(1)} <Icon name="external"/></a>)}</div>
      <div className="contact-info"><span><Icon name="pin"/>{data.profile.location||'Location available on request'}</span>{hasEmail&&<span><Icon name="mail"/>{data.profile.email}</span>}{data.profile.phone&&<span>{data.profile.phone}</span>}{!hasEmail&&!data.profile.phone&&<span className="contact-status"><Icon name="message"/>Contact through LinkedIn until direct details are added.</span>}</div>
    </section>
  </>;
}

export function NotFound(){return <><PageHead kicker="PAGE NOT FOUND" title="This page isn’t here." description="The portfolio has moved on, but you can return to the profile."/><Link className="button primary" to="/">Return to profile <Icon name="arrow"/></Link></>}
