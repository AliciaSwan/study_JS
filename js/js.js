window.addEventListener('DOMContentLoaded', function(){
    "use strict";

    let div = document.querySelector('div'),
        start = document.getElementById('start'),
        reset = document.getElementById('reset'),
        mouveID,
        count = 0,
        animation = false;

    function moveRight() {
        count += 1;
        div.style.width = count + "px";
        mouveID = requestAnimationFrame(moveRight);
    }

    start.addEventListener("click", () => {
        if(!animation){
            mouveID = requestAnimationFrame(moveRight);
            animation = true;
        }else{
            cancelAnimationFrame(mouveID);
            animation = false;
        }
    });

    reset.addEventListener("click", ()=> {
        count = 0;
        div.style.width = "10px";
        cancelAnimationFrame(mouveID);
    });
});