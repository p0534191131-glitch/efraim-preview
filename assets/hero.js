/* אזור הפתיחה, גרסה 3 (9.11.2026): מערבולת המשימות, לפי התמונה של אפרים.
   חמש משימות גדולות (מחברת, וואטסאפ, מסמך, מייל, אקסל), ולכל אחת שובל שנשאב בספירלה אל הכוכב.
   כשהעכבר מתקרב הכל מסתובב, ונעצר בעדינות כשהוא מתרחק. הכוכב כמו שהיה ולא זז.
   הגרסאות הקודמות: hero-v1-backup.js (הבלגן והכוכב שתופס). */
(()=>{
const NS='http://www.w3.org/2000/svg',$=id=>document.getElementById(id),stage=$('stage'),svg=$('s'),sw=$('sw');
const N=12,R=132,START=46,SW=17,DOT=15,M='#3DDBB0';
document.body.classList.add('dense');
const cl=v=>v<0?0:v>1?1:v,D2R=Math.PI/180,HEB="font-family=\"'Google Sans',Arial,sans-serif\"";
const badge=(x,y)=>`<g transform="translate(${x},${y})"><rect x="-27" y="-16" width="54" height="32" rx="16" fill="#D93025" stroke="#fff" stroke-width="3.5"/><text x="0" y="6.5" font-size="18" font-weight="700" fill="#fff" text-anchor="middle" direction="ltr" ${HEB}>99+</text></g>`;
/* הציורים: דף עם עובי מאחור (תלת ממד), כמו בתמונה */
const ICONS=[
/* 0 · גיליון אקסל */
`<g transform="rotate(-8)"><path d="M-52 -66H30L52 -44V74H-52Z" fill="#17703F" transform="translate(7 8)"/><path d="M-52 -66H30L52 -44V74H-52Z" fill="#fff" stroke="#1F8A4C" stroke-width="4" stroke-linejoin="round"/><path d="M30 -66V-44H52" fill="#D6EEDF" stroke="#1F8A4C" stroke-width="4" stroke-linejoin="round"/><rect x="-40" y="-36" width="80" height="17" fill="#21A35A"/><rect x="-14" y="-3" width="26" height="16" fill="#7FD0A0"/><rect x="12" y="29" width="28" height="16" fill="#7FD0A0"/><rect x="-40" y="45" width="26" height="16" fill="#BDE5CB"/><path d="M-40 -19H40M-40 -3H40M-40 13H40M-40 29H40M-40 45H40M-40 61H40M-14 -36V61M12 -36V61M-40 -36V61M40 -36V61" stroke="#8CCBA4" stroke-width="2" fill="none"/></g>`,
/* 1 · מחברת ספירלה ועיפרון */
`<g transform="rotate(-7)"><rect x="-50" y="-70" width="104" height="140" rx="8" fill="#7A4A22" transform="translate(7 8)"/><rect x="-50" y="-70" width="104" height="140" rx="6" fill="#FFF7E3" stroke="#3A2A1A" stroke-width="3.5"/><path d="M-34 -40H44M-34 -24H44M-34 -8H44M-34 8H44M-34 24H44M-34 40H44M-34 56H44" stroke="#B5C3E4" stroke-width="2"/><path d="M-30 -70V70" stroke="#E07A7A" stroke-width="2.2"/><g fill="none" stroke="#2B2B2B" stroke-width="3.5"><ellipse cx="-50" cy="-56" rx="9" ry="4.5"/><ellipse cx="-50" cy="-38" rx="9" ry="4.5"/><ellipse cx="-50" cy="-20" rx="9" ry="4.5"/><ellipse cx="-50" cy="-2" rx="9" ry="4.5"/><ellipse cx="-50" cy="16" rx="9" ry="4.5"/><ellipse cx="-50" cy="34" rx="9" ry="4.5"/><ellipse cx="-50" cy="52" rx="9" ry="4.5"/></g><g transform="translate(34 -34) rotate(38)"><rect x="-8" y="-58" width="16" height="84" rx="2" fill="#F2B632" stroke="#3A2A1A" stroke-width="2.5"/><rect x="-8" y="-72" width="16" height="15" rx="4" fill="#E8838C" stroke="#3A2A1A" stroke-width="2.5"/><rect x="-8" y="-60" width="16" height="7" fill="#C9CCD1" stroke="#3A2A1A" stroke-width="2"/><path d="M-8 26H8L0 46Z" fill="#F4D7A8" stroke="#3A2A1A" stroke-width="2.5" stroke-linejoin="round"/><path d="M-2.8 39.5H2.8L0 46Z" fill="#2B2B2B"/></g></g>`,
/* 2 · בועת וואטסאפ עם 99+ */
`<defs><linearGradient id="hwg" x1="0" y1="-1" x2="0" y2="1"><stop offset="0" stop-color="#43D777"/><stop offset="1" stop-color="#1EAE55"/></linearGradient></defs><g transform="rotate(5)"><path d="M0 -56C40 -56 66 -31 66 2C66 35 40 60 0 60C-12 60 -24 57 -34 52L-62 64L-51 37C-61 27 -66 15 -66 2C-66 -31 -40 -56 0 -56Z" fill="#11823F" transform="translate(6 8)"/><path d="M0 -56C40 -56 66 -31 66 2C66 35 40 60 0 60C-12 60 -24 57 -34 52L-62 64L-51 37C-61 27 -66 15 -66 2C-66 -31 -40 -56 0 -56Z" fill="url(#hwg)"/><circle cx="-24" cy="3" r="8.5" fill="#fff"/><circle cx="0" cy="3" r="8.5" fill="#fff"/><circle cx="24" cy="3" r="8.5" fill="#fff"/>${badge(48,-50)}</g>`,
/* 3 · מסמך כחול */
`<g transform="rotate(7)"><path d="M-50 -68H28L50 -46V70H-50Z" fill="#1C4699" transform="translate(7 8)"/><path d="M-50 -68H28L50 -46V70H-50Z" fill="#fff" stroke="#2A5BC4" stroke-width="4" stroke-linejoin="round"/><path d="M28 -68V-46H50" fill="#DCE6FA" stroke="#2A5BC4" stroke-width="4" stroke-linejoin="round"/><rect x="-36" y="-52" width="46" height="10" rx="5" fill="#2A5BC4"/><g fill="#8FB0EE"><rect x="-36" y="-26" width="72" height="6" rx="3"/><rect x="-36" y="-10" width="64" height="6" rx="3"/><rect x="-36" y="6" width="72" height="6" rx="3"/><rect x="-36" y="22" width="56" height="6" rx="3"/><rect x="-36" y="38" width="70" height="6" rx="3"/><rect x="-36" y="54" width="44" height="6" rx="3"/></g></g>`,
/* 4 · מעטפה אדומה עם 99+ */
`<g transform="rotate(-6)"><rect x="-66" y="-44" width="132" height="90" rx="7" fill="#A3241D" transform="translate(7 8)"/><rect x="-66" y="-44" width="132" height="90" rx="7" fill="#fff" stroke="#D93025" stroke-width="4.5"/><path d="M-63 41L-15 -1M63 41L15 -1" stroke="#EE9A93" stroke-width="3" fill="none"/><path d="M-63 -40L0 9L63 -40" fill="none" stroke="#D93025" stroke-width="4.5" stroke-linejoin="round"/>${badge(52,-46)}</g>`];
/* חמש זרועות במנוחה (0 = ימין, עם כיוון השעון): מחברת למעלה, וואטסאפ, מסמך, מייל, אקסל */
const ARMS=[{a:-105,m:-135,i:1},{a:-52,m:-45,i:2},{a:45,m:35,i:3},{a:122,m:145,i:4},{a:188,m:95,i:0}];
/* זרימה פנימה: לכל זרוע 5 משימות שנעות כל הזמן לאורך הספירלה אל הכוכב. בחוץ גדולה ומלאה, בפנים קטנה ודהויה,
   ונבלעת מתחת לטבעת. המשימה הבאה מגיעה מבחוץ. כך זה מרגיש שהן נכנסות, ולא רק מסתובבות. */
const K=5,U0=-.12,LU=1.12;
const fU=u=>u<0?1-1.2*u:1-1.2*u+.32*u*u, daU=u=>u<0?70*u:70*u+50*u*u, sU=u=>u<0?1:.22+.78*Math.pow(1-u,1.5),
 oU=u=>cl((u-U0)/.12)*(u<0?1:1-.8*Math.pow(u,.7))*cl((1-u)/.1);
let W=0,H=0,CX=0,MOB=false,RX=280,RY=250,BOX=140,TR=[],P=0,phi=0,prox=0,proxT=0,last=0,dirty=true;
const els=[];
for(let j=K-1;j>=0;j--)for(const A of ARMS){const el=document.createElement('div');el.className='wi';
 el.innerHTML=`<svg viewBox="-100 -100 200 200" aria-hidden="true">${ICONS[A.i].replace(/hwg/g,'hwg'+j)}</svg>`;stage.append(el);els.push({el,A,j,big:null});}
/* איפה יושב המלל של הפתיחה, כדי שהמשימות לא יעברו עליו */
function textRects(){if(MOB)return[];const sr=stage.getBoundingClientRect(),ox=sr.left+CX,oy=sr.top+H/2,out=[];
 const seen=new Set(),add=q=>{if(q.width<3)return;const r=[q.left-ox-14,q.top-oy-8,q.right-ox+14,q.bottom-oy+8],key=r.map(Math.round).join();if(!seen.has(key)){seen.add(key);out.push(r);}};
 for(const el of document.querySelectorAll('#top h1,#top .lead,#top .note')){const rg=document.createRange();rg.selectNodeContents(el);for(const q of rg.getClientRects())add(q);}
 add(document.querySelector('#top .btn-m').getBoundingClientRect());return out;}
function vis(x,y,h){let v=MOB?cl((x-h+CX-2)/16)*cl((W-CX-2-(x+h))/16)*cl((y-h+H/2-8)/24)*cl((H/2-12-(y+h))/20):cl((x-h+CX-6)/40)*cl((W-CX-6-(x+h))/40)*cl((y-h+H/2-70)/40)*cl((H/2-24-(y+h))/40);
 for(const r of TR){const d=Math.max(r[0]-(x+h),(x-h)-r[2],r[1]-(y+h),(y-h)-r[3]);v*=cl((d+18)/44);if(!v)break;}return v;}
function size(){W=stage.clientWidth;H=stage.clientHeight;MOB=W<900;CX=MOB?W/2:W*.26;
 stage.style.setProperty('--cx',CX+'px');const vb=`${-CX} ${-H/2} ${W} ${H}`;[svg,$('s2'),sw].forEach(e=>e.setAttribute('viewBox',vb));
 BOX=MOB?88:142;stage.style.setProperty('--wb',BOX+'px');
 if(MOB){RX=Math.min(W/2-23,190);RY=Math.min(H/2-66,190);}else{RX=Math.min(CX-90,310);RY=Math.min(H/2-150,300);}
 TR=textRects();lines();dirty=true;render(0);}
/* קווי המסלול: זוג קווים דקים לכל זרוע, בדיוק על המסלול שהמשימות נוסעות בו. הקו השני מקווקו וזורם פנימה */
function lines(){const fade=TR.map(r=>`<rect x="${r[0].toFixed(0)}" y="${r[1].toFixed(0)}" width="${(r[2]-r[0]).toFixed(0)}" height="${(r[3]-r[1]).toFixed(0)}" rx="18"/>`).join('');
 let h=`<defs><filter id="swb" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="16"/></filter><mask id="swm" maskUnits="userSpaceOnUse" x="${-CX}" y="${-H/2}" width="${W}" height="${H}"><rect x="${-CX}" y="${-H/2}" width="${W}" height="${H}" fill="#fff"/><g fill="#000" filter="url(#swb)">${fade}</g></mask></defs><g mask="url(#swm)">`;
 for(const A of ARMS)[[0,.4,2.4,''],[10,.34,1.8,' class="flow" stroke-dasharray="10 22"']].forEach(([off,op,wd,ex])=>{let d='';for(let q=0;q<=70;q++){const u=-.1+q/70*1.04,a=((MOB?A.m:A.a)+daU(u))*D2R,fr=fU(u),rx=fr*(RX+off),ry=fr*(RY+off);d+=(q?'L':'M')+(Math.cos(a)*rx).toFixed(1)+' '+(Math.sin(a)*ry).toFixed(1);}
  h+=`<path d="${d}" fill="none" stroke="${M}" stroke-opacity="${op}" stroke-width="${wd}" stroke-linecap="round"${ex}/>`;});
 sw.innerHTML=h+'</g>';}
/* מהירות: לאט כל הזמן, וכשהעכבר מתקרב הכל נשאב מהר יותר, והכוכב מסתובב יחד איתן */
const V0=LU/11,V1=LU/2.6;
/* גלילה (9.11): בנקישה הראשונה הסחרור נעצר, וכל המשימות נשאבות פנימה ונבלעות בטבעת. חוזר אחורה כשגוללים למעלה.
   window.__heroSuck (0 עד 1) מגיע מהגלילה של הפתיחה */
let lastK=-1;
function render(dt){
 const k=window.__heroSuck||0;if(k!==lastK){lastK=k;dirty=true;}
 prox+=(proxT-prox)*Math.min(1,dt*2.4);const v=(V0+(V1-V0)*Math.pow(prox,1.2))*(1-k);
 if(dt>0&&v>0){P=(P+v*dt)%(LU*1000);phi=(phi+115*v*dt)%360;dirty=true;}
 if(!dirty)return;dirty=false;
 for(const e of els){const u0=U0+((P+e.j*LU/K-U0)%LU+LU)%LU,u=u0+(1-u0)*k,a=((MOB?e.A.m:e.A.a)+daU(u))*D2R,fr=fU(u),x=Math.cos(a)*fr*RX,y=Math.sin(a)*fr*RY,s=sU(u),h=BOX*.36*s;
  const o=oU(u)*vis(x,y,h);e.el.style.opacity=o.toFixed(3);e.el.style.visibility=o<.01?'hidden':'';
  e.el.style.transform=`translate(${x.toFixed(1)}px,${y.toFixed(1)}px) rotate(${(50*Math.max(0,u)).toFixed(1)}deg) scale(${s.toFixed(3)})`;
  const big=u<.3;if(big!==e.big){e.big=big;e.el.classList.toggle('big',big);}}
 $('rays').setAttribute('transform',`rotate(${phi.toFixed(2)})`);
 for(const p of sw.querySelectorAll('.flow'))p.style.strokeDashoffset=(-(P*600)%32).toFixed(1);
 $('glowc').setAttribute('opacity',Math.min(1,.12+prox*.45*(1-k)+.7*Math.sin(Math.PI*k)).toFixed(2));}
/* העכבר מתקרב לכוכב = הכל נשאב מהר יותר. מתרחק = חוזר לאט, בעדינות */
addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=stage.getBoundingClientRect(),d=Math.hypot((e.clientX-r.left-CX)/(RX+70),(e.clientY-r.top-H/2)/(RY+70));proxT=cl((1.6-d)/.9);},{passive:true});
document.addEventListener('pointerleave',()=>proxT=0);addEventListener('blur',()=>proxT=0);
const rays=[];
for(let i=0;i<N;i++){const a=i/N*Math.PI*2-Math.PI/2,g=document.createElementNS(NS,'g'),l=document.createElementNS(NS,'line'),c=document.createElementNS(NS,'circle');
 l.setAttribute('stroke',M);l.setAttribute('stroke-width',SW);l.setAttribute('stroke-linecap','round');c.setAttribute('r',DOT);c.setAttribute('fill',M);g.append(l,c);$('rays').append(g);const r={a,l,c};set(r,R);rays.push(r);}
function set(r,len){const ca=Math.cos(r.a),sa=Math.sin(r.a);r.l.setAttribute('x1',ca*START);r.l.setAttribute('y1',sa*START);r.l.setAttribute('x2',ca*len);r.l.setAttribute('y2',sa*len);r.c.setAttribute('cx',ca*len);r.c.setAttribute('cy',sa*len);}
size();addEventListener('resize',size);if(document.fonts)document.fonts.ready.then(size);
function loop(now){const dt=last?Math.min(.05,(now-last)/1000):0;last=now;if(window.__heroOn)render(dt);else last=0;requestAnimationFrame(loop);}
requestAnimationFrame(loop);
})();
