import nodemailer from 'nodemailer';
import {loadEnv} from 'vite';

const env={...loadEnv('development',process.cwd(),''),...process.env};
const user=(env.GMAIL_USER||'').trim();
const pass=(env.GMAIL_APP_PASSWORD||'').replace(/\s+/g,'');
if(!user||!pass)throw new Error('Set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local first.');
await nodemailer.createTransport({service:'gmail',auth:{user,pass}}).verify();
console.log('Gmail SMTP connection verified.');
