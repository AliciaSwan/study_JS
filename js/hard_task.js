'use strict';
let lang = 'ru';

if(lang == 'en'){
    console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
} else if (lang === 'ru') {
    console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'); 
}

let lang1 = 'en';
switch(lang1){
    case 'en': console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
    break;
    case 'ru': console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
}

let lang3 = prompt("Выберите язык 'ru' или 'en'");
console.log( lang3);
let week = 
        {"ru":["понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"], "fr":["monday, tuesday, wednesday, thursday, friday, saturday, sunday"]
    };   
console.log( week[lang3]);            

// вторая часть

let namePerson = prompt('Введите имя'),
    result = (namePerson === 'Артём')? 'директор' :
             (namePerson === 'Максим') ? "преподаватель" : "студент";
console.log(result);

