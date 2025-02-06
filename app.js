var timer = 60;
var score =0;
var hitrn;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
   document.querySelector('#hitval').textContent=hitrn;
}
function makeBubble(){
    var clutter="";

    for(var i=1; i<=160; i++){
     clutter +=`<div class="bubble">${Math.floor(Math.random()*10)+1}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter;
}

function  runTimer() {
     var timerint= setInterval(function () {
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
        }
            
    }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum ===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
        
    }
});
runTimer();
makeBubble();
getNewHit();

