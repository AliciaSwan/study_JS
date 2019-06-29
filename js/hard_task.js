let num = 266219;
// переводим число в строку
let transform = String(num);
// разделяем на простые числа
let numArray = transform.split('');
// перемножаем числа
//console.log(numArray[0]*numArray[1]*numArray[2]*numArray[3]*numArray[4]*numArray[5]);
let multip = numArray.reduce((multip,elem) => multip * elem);
console.log(multip);
//возводим в степень
//let result = numArray[0]*numArray[1]*numArray[2]*numArray[3]*numArray[4]*numArray[5];

multip **= 3; 

console.log(multip);

let str = String(multip);

console.log(str.substr(0,2));

