(()=>{const wall=document.getElementById('wall');
const EXT=['jpg','jpeg','png','webp','JPG','JPEG','PNG'];
for(let i=0;i<12;i++){const n=String(i+1).padStart(2,'0'),el=document.createElement('div');el.className='polaroid';
el.innerHTML=`<div class="in"><div class="face cap">Memory ${i+1}</div><div class="face back"><img src="assets/images/photo-${n}.jpg" alt="Memory ${i+1}"></div></div>`; // front shows the caption, flip shows the photo
const img=el.querySelector('img');let k=0;
img.onerror=()=>{if(++k<EXT.length)img.src=`assets/images/photo-${n}.${EXT[k]}`};
const r=Math.floor(i/4),c=i%4;
el.style.left=`${c*24+Math.random()*3}%`;el.style.top=`${r*34+Math.random()*4}%`;el.style.rotate=`${Math.random()*14-7}deg`;
let sx,sy,ox,oy,moved=false;
el.onpointerdown=e=>{el.setPointerCapture(e.pointerId);sx=e.clientX;sy=e.clientY;ox=el.offsetLeft;oy=el.offsetTop;moved=false;el.style.zIndex=Date.now()%100000};
el.onpointermove=e=>{if(!el.hasPointerCapture(e.pointerId))return;const dx=e.clientX-sx,dy=e.clientY-sy;if(Math.abs(dx)+Math.abs(dy)>5)moved=true;el.style.left=ox+dx+'px';el.style.top=oy+dy+'px'};
el.onpointerup=()=>{if(!moved)el.classList.toggle('flip')};
wall.appendChild(el)}})();