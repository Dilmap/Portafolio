const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
let T={},lang='es',roles=['Desarrollador Full Stack','Especialista en Angular','Backend con Node.js','Bases de datos MySQL'],copied='Correo copiado';
// Órbita de tecnologías (anillo = nivel)
const rings=[[['angular','Angular'],['nodejs','Node.js'],['database','MySQL']],[['typescript','TypeScript'],['javascript','JavaScript'],['python','Python']],[['html5','HTML5'],['css3','CSS3'],['git','Git']]];
const ico=n=>`img/${n}${n==='database'||n==='git'||n==='python'||n==='javascript'||n==='html-5'||n==='css3'?'':''}-svgrepo-com.svg`;
const orb=document.getElementById('orbit');
const PAL=['234,240,247','74,222,128','212,175,55'];let last=-1;
const roll=el=>{let n;do{n=Math.floor(Math.random()*3)}while(n===last);last=n;el.style.setProperty('--hc',PAL[n])};
rings.forEach((r,k)=>{const d=document.createElement('div');d.className='ring';d.style.cssText=`--i:${[18,6,-6][k]}%;--s:${[26,38,52][k]}s;--c:${PAL[k]}`;if(k===2)d.style.inset='-4%';
 r.forEach((t,j)=>{const i=document.createElement('i');i.dataset.n=t[1];i.innerHTML=`<img src="${ico(t[0])}" alt="">`;roll(i);i.addEventListener('mouseenter',()=>roll(i));d.appendChild(i)});orb.appendChild(d)});
// posicionar iconos en el círculo
document.querySelectorAll('.ring').forEach(d=>[...d.children].forEach((i,j)=>{const a=j*2*Math.PI/3-Math.PI/2;i.style.left=50+50*Math.cos(a)+'%';i.style.top=50+50*Math.sin(a)+'%'}));
// Typewriter de roles
const roleEl=document.getElementById('role');let ri=0,ci=0,del=false;
(function tick(){const w=roles[ri%roles.length];if(RM){roleEl.textContent=w;return}
 ci+=del?-1:1;roleEl.textContent=w.slice(0,ci);let ms=del?35:70;
 if(!del&&ci===w.length){del=true;ms=1400}else if(del&&ci===0){del=false;ri++;ms=300}setTimeout(tick,ms)})();
// Campo de estrellas
const cv=document.getElementById('stars'),cx=cv.getContext('2d');let S=[];
function size(){cv.width=innerWidth;cv.height=innerHeight;S=Array.from({length:Math.min(140,innerWidth/8)},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,r:Math.random()*1.3+.2,p:Math.random()*6,v:Math.random()*.15+.03}))}
function draw(t){cx.clearRect(0,0,cv.width,cv.height);S.forEach(s=>{cx.globalAlpha=.35+.5*Math.abs(Math.sin(t/1200+s.p));cx.fillStyle=s.r>1?'#F2D16B':'#EAF0F7';cx.beginPath();cx.arc(s.x,s.y,s.r,0,7);cx.fill();if(!RM){s.y-=s.v;if(s.y<0)s.y=cv.height}});if(!RM)requestAnimationFrame(draw)}
size();addEventListener('resize',size);requestAnimationFrame(draw);
// Parallax suave de la órbita
if(!RM)addEventListener('mousemove',e=>{orb.style.transform=`translate(${(e.clientX/innerWidth-.5)*16}px,${(e.clientY/innerHeight-.5)*16}px)`});
// LEDs
document.querySelectorAll('.led-bar').forEach(b=>{const n=+b.dataset.l;for(let i=0;i<10;i++){const s=document.createElement('s');s.style.setProperty('--k',i);if(i<n)s.className='on';b.appendChild(s)}});
// Revelado + progreso de ruta
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv,.sk').forEach((el,i)=>{el.style.transitionDelay=(el.classList.contains('sk')?(i%3)*100:0)+'ms';io.observe(el)});
const route=document.getElementById('route'),prog=document.getElementById('prog'),sts=[...route.querySelectorAll('.st')];
const dot=s=>{const p=s.querySelector('span');return s.offsetTop+p.offsetTop+p.offsetHeight-1};let A=0,H=1;
function geo(){A=dot(sts[0]);H=Math.max(1,dot(sts[sts.length-1])-A);route.style.setProperty('--a',A+'px');route.style.setProperty('--h',H+'px')}
function scroll(){const h=document.documentElement;prog.style.transform=`scaleX(${h.scrollTop/(h.scrollHeight-innerHeight||1)})`;
 const y=innerHeight*.6-route.getBoundingClientRect().top;route.style.setProperty('--p',Math.min(1,Math.max(0,(y-A)/H)));sts.forEach(s=>s.classList.toggle('in',y>=dot(s)))}
addEventListener('scroll',scroll,{passive:true});addEventListener('resize',()=>{geo();scroll()});geo();scroll();document.fonts&&document.fonts.ready.then(()=>{geo();scroll()});
// Copiar email + toast
const toast=document.getElementById('toast');
document.getElementById('mail').onclick=function(){const m=this.dataset.mail;(navigator.clipboard?navigator.clipboard.writeText(m):Promise.reject()).catch(()=>{location.href='mailto:'+m}).finally(()=>{toast.textContent=copied;toast.classList.add('on');setTimeout(()=>toast.classList.remove('on'),1800)})};
// Reloj Colombia
const ck=document.getElementById('clock');const tk=()=>ck.textContent=new Date().toLocaleTimeString('es-CO',{timeZone:'America/Bogota',hour12:false});tk();setInterval(tk,1000);
// Idioma
async function setLang(l){try{T=await (await fetch(`lang/${l}.json`)).json()}catch(e){console.error('Usa un servidor local o GitHub Pages',e);return}
 document.documentElement.lang=l;document.querySelectorAll('[data-i18n]').forEach(e=>{if(T[e.dataset.i18n])e.innerHTML=T[e.dataset.i18n]});
 roles=T.roles.split('|');copied=T.copied;ri=0;ci=0;del=false;geo();scroll()}
document.getElementById('lang').onclick=function(){lang=lang==='es'?'en':'es';this.textContent=lang==='es'?'ES / EN':'EN / ES';setLang(lang)};
