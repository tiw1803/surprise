const song=document.getElementById('song'),tog=document.getElementById('music-toggle');
window.startMusic=()=>{tog.hidden=false;song.volume=.7;song.play().catch(()=>tog.classList.add('off'))};
tog.onclick=()=>{if(song.paused){song.play();tog.classList.remove('off')}else{song.pause();tog.classList.add('off')}};
