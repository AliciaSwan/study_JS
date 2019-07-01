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
// let lang3 = 'ru';
// lang3['ru'] = {'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'};
// lang3['en'] = {'monday, tuesday, wednesday, thursday, friday, saturday, sunday'};
// console.log(lang3);
// lang3 = array(array('ru' => 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье),
//               array('en' => 'monday, tuesday, wednesday, thursday, friday, saturday, sunday')
//               );

//               a = new Array(
//                 {"attr1":"text1","attr2":"text2"},
//                 {"attr1":"text3","attr2":"text4"}
//                 );
//                 alert( a[0].attr1 );   //Выведет "text1"
//                 alert( a[1].attr2 );   //Выведет "text4"
let lang3 = prompt("Выберите язык 'ru' или 'en'");
console.log( lang3);
let week = new Array(
        {"ru":"понедельник, вторник, среда, четверг, пятница, суббота, воскресенье", "fr":"monday, tuesday, wednesday, thursday, friday, saturday, sunday"}
);   
console.log( week[0].lang3);            

// вторая часть

let namePerson = prompt('Введите имя'),
    result = (namePerson === 'Артём')? 'директор' :
             (namePerson === 'Максим') ? "преподаватель" : "студент";
console.log(result);

