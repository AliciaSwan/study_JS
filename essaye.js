// если у тебя получилось 2 строки, в которых записаны соответственно расходы и доход можно еще сделать так:
// 1. Склеить их в одну через простую конкатенацию (оператор +)
// 2. Через split() нарезать и создать массив из элементов (это было в уроках)
// 3. Пропустить через цикл, где у каждого элемента будет меняться первая буква(изменено)

// let str = prompt('введите имя?', 'вася');
// let strg = prompt('Введите имя?', 'петя,слава,игорь');
let str = 'вася';
let stro = ['петя','слава','игорь'];
let strg = stro.join(',');
// for(let i=0; i<stro.length; i++){
//      strg[i] = stro[i];
//      i++;
// }
console.log(strg);
let stri = str +','+ strg.replace(/\s+/g, " ").trim();
console.log(stri);
let numbers = stri.split(',');
//let number = numbers.trim();
console.log(numbers);

function myFunction(item, i, arr) {
    arr[i] = item.charAt(0).toUpperCase() + item.slice(1);
  }

numbers.forEach(myFunction);
console.log(numbers.join(', '));

// function myFunction(item, index, arr) {
//   arr[index] = item.charAt(0).toUpperCase() + item.slice(1);
// }
// numbers.forEach(myFunction);

  
// console.log(numbers.forEach(myFunction));

// // function Twu(){
//     for(let i=0; i<strin.length; i++){

//         strin[i].charAt(0).toUpperCase() + strin[i].slice(1);

//        console.log(strin);
//     }
// // }
// console.log(Twu());



// function extraction(){
//     if(Array.isArray(Object)){
//         for (let key in arr){
//             console.log( arr[key] + ',');
//         }
//     } else {}
//         for (let key in Object){
//             console.log( key + ', ');


//     }
// }
// extraction();
let Object  = { "фриланс": "50000" };
let arr = [ "ипотека", "сад", "школа"];

function extraction(arrey){
    if(Array.isArray(arrey)){
        for (let key in arrey){
            console.log( arrey[key].charAt(0).toUpperCase() + arrey[key].slice(1) + ',');
        }
    } else {
        for (let key in arrey){
            console.log( key.charAt(0).toUpperCase() + key.slice(1) + ',');

        }
    }
}
extraction(Object);
extraction(arr);

let string = extraction(Object) + extraction(arr);
console.log(str);