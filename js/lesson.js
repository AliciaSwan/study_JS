'use strict';

let money = +prompt('Ваш месячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    income = "фриланс"; 

let showTypeOf = function (item){
    console.log(item, typeof item);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
    costs = +prompt("Во сколько это обойдется?"), 
    expenses2 = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
    costs2 = +prompt("Во сколько это обойдется?"),
    mission = 500000;

function getAccumulatedMonth (){
    return money - costs - costs2;
}
let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);

function getTargetMonth(){
    return Math.floor( mission / accumulatedMonth);
}
console.log('Цель будет достигнута за ' + getTargetMonth() + ' месяцев');

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
    return costs + costs2;
}
console.log(getExpensesMonth());