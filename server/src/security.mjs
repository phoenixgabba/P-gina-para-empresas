import {randomBytes,scryptSync,timingSafeEqual,createHash} from 'node:crypto';
export const digest=x=>createHash('sha256').update(x).digest('hex');
export function hashPassword(password){if(typeof password!=='string'||password.length<12||password.length>128)throw Error('Invalid password length');const salt=randomBytes(16).toString('hex');return salt+':'+scryptSync(password,salt,64).toString('hex')}
export function verifyPassword(password,stored){try{if(typeof password!=='string'||password.length>128)return false;const [salt,hash]=stored.split(':');return timingSafeEqual(Buffer.from(hash,'hex'),scryptSync(password,salt,64))}catch{return false}}
export function quoteTotal(lines){if(!Array.isArray(lines)||!lines.length||lines.length>100)throw Error('Invalid lines');let total=0;for(const l of lines){if(typeof l.name!=='string'||!l.name.trim()||l.name.length>200||!Number.isSafeInteger(l.qty)||l.qty<1||l.qty>10000||!Number.isSafeInteger(l.unit_cents)||l.unit_cents<0||l.unit_cents>100000000)throw Error('Invalid line');total+=l.qty*l.unit_cents}if(!Number.isSafeInteger(total)||total>1000000000)throw Error('Invalid total');return total}
export const canRead=(account,project)=>!!account&&!!project&&account.studio_id===project.studio_id&&(account.role==='owner'||account.role==='staff'||account.id===project.client_id);
export const canManage=(a)=>a?.role==='owner'||a?.role==='staff';
export function checkOrigin(origin,expected){return typeof origin==='string'&&origin===expected}
