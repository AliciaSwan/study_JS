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
  
'use srict';

let week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота' ];
let date = new Date();
let numberDay = date.getDay();

 for ( let i = 0; i > 7; i++){
     if (week[i] == 0 || week[i] == 6){
        document.write(week[i].italics());
        if (week[i] == date){
            document.write(week[i].bold());
        }
    } else {
        document.write(week.join("\n"));
    }
}

// }	
for (let item of week){
    document.write(week[numberDay].bold());
}

document.write(week.join ("\n"));




 for ( let i = 0; i > 7; i++){
    if (week[i] == date){
        document.write(week[i].bold());
    }
    if (week[i] == 0 || week[i] == 6){
        document.write(week[i].italics()); 
    } else {
        document.write(week.join("\n"));
    }
}






// var worldString = 'Привет, мир';
// document.write(worldString.bold());
// document.write(worldString.italics());
