'use strict';
function now() {
    let date = new Date(),
        month = date.getMonth()+1,
        day = date.getDate(),
        hour = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
    // let fullDate = (hour < 10 ? '0' : '') + hour + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ' '+ (day < 10 ? '0' : '') + day + "." + (month < 10 ? '0' : '') + month + '.' + date.getFullYear();
        fullDate = addZero(hour) + ':' + addZero(minutes) + ':' + addZero(seconds) + ' ' + addZero(day) + '.' + addZero((month) + 1) + '.' + date.getFullYear(); 
                     
    function addZero(i) {
      return (i < 10) ? '0' + i : i;
    }
  return fullDate;
  }
setInterval(function(){
    document.getElementById("clock").innerHTML = now();
}, 1000);
  



