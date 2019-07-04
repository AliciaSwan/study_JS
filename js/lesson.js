'use strict';

let money,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    income = "фриланс"; 

let start = function(){
    do {
        money = +prompt('Ваш месячный доход?');
    }
    while(isNaN(money) || money == '' || money == null){
        //money = prompt('Ваш месячный доход?');
        console.log(money);
    }
};

start();

let showTypeOf = function (item){
    console.log(item, typeof item);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses,
    expenses2,
    mission = 500000;

let expensesMonth = function(){
    let sum = 0;
    
    for (let i = 0; i < 2; i++){
        if(i === 0){
            expenses = prompt("Какие обязательные ежемесячные расходы у вас есть?", "Ипотека");
            do{
                sum += +prompt("Во сколько это обойдется?");
                console.log(sum, typeof sum);
                } while(isNaN(sum) || sum == '' || sum == null){
                   // sum += prompt("Во сколько это обойдется?");    
                }
        }else if (i === 1) {
            expenses2 = prompt("Какие обязательные ежемесячные расходы у вас есть?", "бензин");
            do{
                sum += +prompt("Во сколько это обойдется?");
                console.log(sum, typeof sum);
                } while(isNaN(sum) || sum == '' || sum == null){
                  //  sum += prompt("Во сколько это обойдется?");    
                }
        }
    }
    return sum;
};

let expensesAmount = expensesMonth();
console.log(expensesAmount);

function getAccumulatedMonth (){
    return money - expensesAmount;
}
let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);

function getTargetMonth(){
    let month = Math.floor( mission / accumulatedMonth);
    if (month>=0){
        return 'Цель будет достигнута за ' + month + ' месяцев';
    }else{
        return 'Цель не будет достигнута';
    }
    
}
console.log(getTargetMonth());

let budgetDay = Math.floor(accumulatedMonth/30);

function getStatusIncome(){
    if (budgetDay>=800){
        return "Высокий уровень дохода";
    } else if (budgetDay<800 && budgetDay>300 ){
        return "Средний уровень дохода";
    } else if (budgetDay<=300 && budgetDay>=0){
        return "Низкий уровень дохода";
    } else {
        return "Что то пошло не так";
    }
}
console.log('getStatusIncome : ', getStatusIncome());

function getExpensesMonth() {
    return expensesAmount;
}
console.log(getExpensesMonth());