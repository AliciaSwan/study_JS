'use strict';
 let money = prompt('Ваш месячный доход?');
 let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
 console.log(addExpenses.split(','));
 let deposit = !!(prompt('Есть ли у вас депозит в банке?'));
 let income = "фриланс"; 
 console.log(money, income, deposit );
 let expenses = prompt("Какие обязательные ежемесячные расходы у вас есть?");
 let costs = prompt("Во сколько это обойдется?"); 
 let expenses2 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
 let costs2 = prompt("Во сколько это обойдется?"); 

 let budgetMonth = money - costs - costs2;
 console.log(budgetMonth);

 let mission = 500000; 
 let aim = Math.ceil(mission / budgetMonth);
 console.log('Цель будет достигнута за ' + aim + ' месяцев');

 let budgetDay = Math.floor(budgetMonth/30);
 console.log(budgetDay);

 if (budgetDay>=800){
    console.log("Высокий уровень дохода");
 } else if (budgetDay>300 && budgetDay<800){
    console.log("Средний уровень дохода");
 } else if (budgetDay>=0 && budgetDay<=300){
    console.log("Низкий уровень дохода");
 } else {
    console.log("Что то пошло не так");
 }

// let money = 3200;
// let income = "фриланс"; 
// let addExpenses = 'бензин, ресторан, Аттрационы'; 
// let deposit = true; 
// let mission = 500000; 
// let period = 6;

// alert("It's my first lesson");

// console.log("It's working! I'm so happy.");

// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);

// console.log(income.length);

// console.log("Перод " + period + "месяцев." );
// console.log("Цель заработать " + mission + "евро." );

// console.log(addExpenses.toLowerCase);
// console.log(addExpenses.split(', '));


// let budgetDay = money/30;
// console.log(budgetDay, budgetDay%30 );