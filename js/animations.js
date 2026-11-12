(()=>{const c=document.getElementById('stars'),x=c.getContext('2d');let w,h,p=[];
const size=()=>{w=c.width=innerWidth;h=c.height=innerHeight};size();addEventListener('resize',size);
for(let i=0;i<70;i++)p.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.3+.3,s:Math.random()*.25+.05,a:Math.random()});
const calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
(function f(){x.clearRect(0,0,w,h);for(const d of p){d.y-=calm?0:d.s;d.a+=.01;if(d.y<0)d.y=h;
x.fillStyle=`rgba(212,175,114,${.15+.35*Math.abs(Math.sin(d.a))})`;x.beginPath();x.arc(d.x,d.y,d.r,0,7);x.fill()}requestAnimationFrame(f)})();
window.typewriter=(el,t,ms,done)=>{let i=0;(function n(){el.textContent=t.slice(0,++i);i<t.length?setTimeout(n,ms):done&&done()})()}})();
