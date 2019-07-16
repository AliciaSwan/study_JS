
window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    // Timer

    let timer = setInterval(function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds'),
            timerClock = document.querySelector('#timer');

        function getTimeRemainig(){
            let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) /1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / 60 / 60) % 24);

            if(seconds < 10){
                seconds = '0' + seconds;
            }
            if (minutes < 10){
                minutes = '0' + minutes;
            }
            if (hours < 10){
                hours = '0' + hours;
            }
            if(timeRemaining <= 0){
                hours = '00'; minutes = '00'; seconds = '00';
                timerClock.style.color = 'red';
            }

            return {timeRemaining, hours, minutes, seconds};
        }

        function updateClock(){
            let timer = getTimeRemainig();

            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if(timer.timeRemaining > 0){
              setTimeout(updateClock, 1000);
            } else if (timer.timeRemaining <= 0){
                clearInterval(timer);
            }
            

        }
        updateClock();
  
    }, 1000, '14 july 2019');

}); 