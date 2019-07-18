
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
                setTimeout(updateClock, 86400);
            }
            

        }
        updateClock();
  
    }, 1000, 'deadline');

    //  menu

    const toggleMenu = ()=>{
        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu'),
              closeBtn = document.querySelector('.close-btn'),
              menuItems = menu.querySelectorAll('ul>li');
        
        const handlerMenu = ()=>{
            // if(!menu.style.transform || menu.style.transform === `translate(-100%)`){
            //     menu.style.transform =`translate(0)`;
            // }else{
            //     menu.style.transform = `translate(-100%)`;
            // }
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((elem)=> elem.addEventListener('click',handlerMenu));
    };
    toggleMenu();

    //  Pop-up

    const togglePopUp = ()=>{
        const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content');
    
    // const handlerPopup = () => {
    //     popup.style.display = 'block';
    // };
    popupBtn.forEach((elem)=> elem.addEventListener('click', () =>{ 

        if(screen.width > 480){
            popup.style.display = 'block'; 
            let count = 0,
                popupDown;

            let popupAnimate = ()=>{
                popupDown = requestAnimationFrame(popupAnimate);
                count++;
                if(count < 150){
                    popupContent.style.top = count + 'px';
                    count +=10;
                }else{
                    cancelAnimationFrame(popupAnimate);
                }
            };
        popupDown = requestAnimationFrame(popupAnimate);
        }else{
            popup.style.display = 'block';
        }
    }));

           
    popupClose.addEventListener('click', ()=>{popup.style.display = 'none';});
    };
    togglePopUp();

    // scroll
    const scroll = ()=>{
        //const 
    };
    scroll();

}); 

let date = new Date();

function returnEndDate(d,h,m){
 date.setDate(date.getDate()+d);
 date.setHours(date.getHours()+h);
 date.setMinutes(date.getMinutes()+m);
 return date;
}