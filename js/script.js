'use strict';
let hello = document.querySelector('.hello'),
    today = document.querySelector('.today'),
    clock = document.querySelector('.time'),
    newyear = document.querySelector('.newyear'),
    date = new Date();
function noon(){
    let hours = date.getHours(),
        sayHello;
    if(hours >= 0 && hours <= 6){
        sayHello = "Доброй ночи";
    } else if(hours > 6 && hours < 12){
        sayHello = "Доброе утро";
    }else if(hours >= 12 && hours <= 18){
        sayHello = "Добрый день";
    }else if(hours > 18 && hours <= 23){
        sayHello = "Добрый вечер";
    }
return sayHello;
}
hello.innerHTML = noon();

function formatAMPM() {
    let hours = date.getHours(),
        minutes = date.getMinutes(),
        secondes =date.getSeconds(),
        ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    secondes = secondes < 10? '0' + secondes : secondes;
    let strTime = hours + ':' + minutes + ':' + secondes + ' ' + ampm;
    return strTime;
 }
// function timeNow() {
//     let timeString = date.toTimeString('en-GB', options);
//         var options = {
//             timezone: 'UTC',
//             hour: 'numeric',
//             minute: 'numeric',
//             second: 'numeric',
//             hour12: true 
//           };
//     return timeString;
//     }
setInterval(function(){
    clock.innerHTML = `Текущее время: ${formatAMPM()}`;
}, 1000);

function weekDay(){
    let weeks = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        week = weeks[ date.getDay() ];
        return week;
}
today.innerHTML = `Сегодня: ${weekDay()}` ;
//today.innerHTML = `Сегодня: ${date.toLocaleString('ru', {weekday: 'long'}) }` ;

function newYear(){
    let dateStop = new Date('01 jan 2020').getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) /1000,
        days = Math.floor(timeRemaining / 60 / 60 / 24);
    //let dedline = '01 dec 2020';
    return days;
}
newyear.innerHTML = `До нового года осталось ${newYear()} дней`;
