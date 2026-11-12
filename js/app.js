const LETTER=`Shivi,

Okay, so I’m not great at this part. You know I’d usually make a joke and move on, but you deserve the real version, so bear with me.

I still remember the day we met for the first time, thanks to Richa Narway. I still remember that day in the back of my head. I know ki ab vo vaala bond vo baat nhi rhi but I still care for you the same and I hope you too. WE WILL SORT THINGS OUT ONE DAY.

Anyways, it's not the time for this. 

You're still and always will be the most chaotic, annoying, caring sister EVERRRR.. Just so you know I would always care for you and I'll do anything and i mean ANYTHING to protect you and our bond. 

You've taught me so much and I am always grateful for it. At the end of the day, You were the one who made my Breakup easier and helped me to Move On and i would appreciate if you could stop saying her name at everything.

I don't have much to say but i would say this that i will always give you the love, the care, you always deserved you ungrateful potato. You will be the best pan pan ever. 

I bet he couldn't have done anything like this :). But don't worry, if he won't, i will.

Stay the same, we'll eventually fix things one day i promise. Enjoy your day, focus on the things which actually matter. This is an imporatant year, I understand. Focus on your studies and get Good Marks.

12/12 was a good day for the world, whether it noticed or not. 

Once again,

Happy birthday you ungrateful potato <3. 
For the best sister by his annoying brother,
Enjoy your day.
Om.
`;
document.addEventListener('DOMContentLoaded',()=>{
const t=document.getElementById('intro-text'),b=document.getElementById('open-btn');
setTimeout(()=>t.classList.add('show'),600);setTimeout(()=>b.hidden=false,4200);
b.onclick=()=>{startMusic();go(1)}; // music begins on the birthday screen
});
window.onScreen=id=>{
if(id==='birthday'){document.querySelector('.hbd').classList.add('go');setTimeout(()=>document.querySelector('#birthday .next').hidden=false,5200)}
if(id==='letter'){const n=document.querySelector('#letter .next');typewriter(document.getElementById('letter-text'),LETTER,45,()=>n.hidden=false)}};
