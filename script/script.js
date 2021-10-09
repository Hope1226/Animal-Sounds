window.addEventListener('keydown', function(e){
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 const card = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 audio.play();
 if(!audio) return;
 audio.currentTime = 0;

 

});

const keys = document.querySelectorAll('.key');



keys.forEach(key => key.addEventListener('transitionend', removeTransition));