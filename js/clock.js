window.addEventListener('DOMContentLoaded', function(){
    'use strict';

  let sec = document.querySelector('#sec'),
      min = document.querySelector('#min'),
      hour = document.querySelector('#hour'),
      clocks = document.querySelector('#clocks'),
      seconds = 0,
      minutes = 0,
      hours = 0,
      tour = 0,
      clockAnimate;

    //setInterval(clock, 10);

    function clock(){
        clockAnimate = requestAnimationFrame(clock);
        sec.style.transform = 'rotate( '+ seconds +'deg)'; 
        min.style.transform = 'rotate('+ minutes +'deg)';
        hour.style.transform = 'rotate('+ hours +'deg)';
        clocks.style.transform = 'rotate('+ tour +'deg)';

            if(seconds == 366){
                seconds = 0;
                minutes += 6;
                if(minutes == 366){
                    hours += 6;
                // cancelAnimationFrame(clockAnimate);
                }   
            }
            seconds += 6;
            if(tour == -366){
                tour = 0;
            }

    }

    let animate = false;
    document.querySelector('#play').addEventListener('click',function(){
        if(!animate){
            clockAnimate = requestAnimationFrame(clock);
            animate = true;
        // } else {
           
        //     cancelAnimationFrame(clockAnimate); 
        //     animate = false;
        }
    });       
    document.querySelector('#stop').addEventListener('click',() => {
        if(animate){
            cancelAnimationFrame(clockAnimate); 
            animate = false;
        }
    });
    
    
   
   document.querySelector("#reset").addEventListener('click', () => {
       if(animate){
        seconds = 0; minutes = 0; hours = 0; tour = 0;
        sec.style.transform = 'rotate(0deg)'; 
        min.style.transform = 'rotate(0deg)';
        hour.style.transform = 'rotate(0deg)';
        clocks.style.transform = 'rotate(0deg)';
        cancelAnimationFrame(clockAnimate); 
        animate = false;
       }else{
        seconds = 0; minutes = 0; hours = 0; tour = 0;
        sec.style.transform = 'rotate(0deg)'; 
        min.style.transform = 'rotate(0deg)';
        hour.style.transform = 'rotate(0deg)';
        clocks.style.transform = 'rotate(0deg)'; 
        cancelAnimationFrame(clockAnimate);
       }

   });

});