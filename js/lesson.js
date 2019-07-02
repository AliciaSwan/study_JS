'use strict';
 let money = +prompt('Ваш месячный доход?'),
     addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
 console.log(addExpenses.split(','));
 let deposit = confirm('Есть ли у вас депозит в банке?'),
     income = "фриланс"; 
 console.log(typeof money, typeof income, typeof deposit );
 let expenses = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
     costs = +prompt("Во сколько это обойдется?"), 
     expenses2 = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
     costs2 = +prompt("Во сколько это обойдется?"), 
     budgetMonth = money - costs - costs2;

 console.log(budgetMonth);

 let mission = 500000,  
     aim = Math.ceil(mission / budgetMonth);
 console.log('Цель будет достигнута за ' + aim + ' месяцев');

 let budgetDay = Math.floor(budgetMonth/30);
 console.log(budgetDay);

 if (budgetDay>=800){
    console.log("Высокий уровень дохода");
 } else if (budgetDay<800 && budgetDay>300 ){
    console.log("Средний уровень дохода");
 } else if (budgetDay<=300 && budgetDay>=0){
    console.log("Низкий уровень дохода");
 } else {
    console.log("Что то пошло не так");
 }