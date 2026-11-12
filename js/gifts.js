const GIFTS=[
{name:'Spotify Premium',msg:'Contact your favourite headache for further instructions. 💀'},
{name:'Snapchat+',msg:'Congratulations! You\u2019ve unlocked the ability to annoy me. 😭'}];
const box=document.getElementById('cards');
box.innerHTML=GIFTS.map((g,i)=>`<div class="gift"><h3>${g.name}</h3><p class="msg" hidden>${g.msg}</p><button class="btn" data-i="${i}">Click to reveal</button></div>`).join('');
box.onclick=e=>{const b=e.target.closest('button');if(!b)return;
b.previousElementSibling.hidden=false;b.hidden=true};
