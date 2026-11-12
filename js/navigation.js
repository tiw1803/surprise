const order=['intro','birthday','note','memories','letter','gifts','ending'];let cur=0;
window.go=i=>{document.getElementById(order[cur]).classList.remove('active');cur=i;
const s=document.getElementById(order[cur]);setTimeout(()=>{s.classList.add('active');window.onScreen&&window.onScreen(order[cur])},900)};
document.querySelectorAll('.next').forEach(b=>b.onclick=()=>go(cur+1));
