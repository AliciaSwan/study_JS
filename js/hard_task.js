'use srict';
let arr = ['35697', '23657789', '426319', '62169787', '5236', '3265', '7852'];
for (let i = 0; i < 7; i++ ){
    if (arr[i][0] == '4' || arr[i][0] == '2'){
        console.log(arr[i]);
    }else{
        continue;
    } 
}

//  Простые числа

/*Для всех i от 1 до 10 {
    проверить, делится ли число i на какое - либо из чисел до него
    если делится, то это i не подходит, берем следующее
    если не делится, то i - простое число
  }
*/
for (let i = 2; i <= 100; i++){
    let count = 0;
    for (let n = 2; n < i; n++){
        if ( i%n != 0) {
           continue; 
        }       
        count += 1;   
    }
    if(!count){console.log(i + ' делители 1 '+ i );}
}



