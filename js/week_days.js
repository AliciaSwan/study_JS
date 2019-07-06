'use strict';

 
let week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота' ], 
    date = new Date(),
    numberDay = date.getDay();
 
for (let i = 0; i < week.length; i++) { 
  if (i == numberDay) { 
    if (week[i] == 'суббота' || week[i] == 'воскресенье') { 
      document.write('<p style="font-style: italic;"><b>' + week[i] +'</b></p>'); 
    } else { 
      document.write('<p>'+ week[i].italics()+'</p>'); 
    }
  } else if (week[i] == 'суббота' || week[i] == 'воскресенье') { 
    document.writeln('<p>'+ week[i].italics() +'</p>'); 
  } else { 
    document.writeln('<p>'+ week[i]+'</p>'); 
  } 
} 
  