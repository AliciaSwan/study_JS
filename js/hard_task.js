'use strict';
let line = " lkjlhkgjhfhjfh jhgjgujfyfhfh ggggggggg jjjjjjjjj lllllll     ";
function getString (line){
    if (typeof line === 'string'){
        return line.trim();
    } else {
        return "Вы должны ввести строку";
    }
}
let lineTrim = getString(line);

function lineCut(lineTrim){
    if (Number(lineTrim.length) > 30){
        return lineTrim.substring(0, 29) + '.' + '.' + '.';
     } else {
         return lineTrim;
     }
}
console.log(lineCut(lineTrim));


