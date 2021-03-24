container = document.querySelector('.container');
text = document.querySelector('#text');

var totalTime = 7500;
var breathTime = (totalTime/5);
var holdTime = (totalTime/5)*2;

bAnimation();


function bAnimation(){
    text.innerHTML = 'Breath In!'
    container.className = 'container grow';
    setTimeout(()=>{
        text.innerHTML = 'Hold!';
        
        setTimeout(()=>{
            text.innerHTML = 'Breath Out!';
            container.className = 'container shrink';
        },holdTime);
    },breathTime)
}

setInterval(bAnimation,totalTime);