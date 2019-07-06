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
