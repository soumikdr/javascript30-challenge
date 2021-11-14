window.addEventListener('keydown', function(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    if(!audio) return;          //if no audio object found stop function
    audio.currentTime = 0;      //for repeated press, to start over
    audio.play();
    key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', function(e){
    if(e.propertyName !== "transform") return;      //to ignore on other properties
    this.classList.remove('playing');
}));