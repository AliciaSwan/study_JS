'use strict';

let money,
    expenses,
    expenses2,
    start = function(){
        do {
            money = +prompt('Ваш месячный доход?');
        }
        while(isNaN(money) || money == '' || money == null){
            //money = prompt('Ваш месячный доход?');
            console.log(money);
        }
    };
start();

let appData = {
    income:{},
    addIncome:[],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
      //  let sum = 0;
        for (let i = 0; i < 2; i++){
            if(i === 0){
                appData.[expenses] =  prompt("Какие обязательные ежемесячные расходы у вас есть?", "Ипотека");
                do{
                    appData.expenses =  +prompt("Во сколько это обойдется?");
                    } while(isNaN(sum) || sum == '' || sum == null){}
            }else if (i === 1) {
                appData.[expenses] = prompt("Какие обязательные ежемесячные расходы у вас есть?", "бензин");
                do{
                    appData.expenses =  +prompt("Во сколько это обойдется?");
                    } while(isNaN(sum) || sum == '' || sum == null){}
            }
        }
      //  return sum;
    },
    expenses: {},

    budget: money,
    budgetDay: 0,
    budgetMonth: 0,

    getExpensesMonth:  function(){
        for (let expensesMonth in appData){
            return expenses + expenses2;
        }
    },
    expensesMonth: appData.getExpensesMonth,
    getBudget: function(){
        let accumulatedMonth = appData.getBudget();
            appData.budgetDay = Math.floor(accumulatedMonth/30);
        return money - expensesAmount;
    },
    getTargetMonth: function(){
        let month = Math.floor( appData.mission / appData.accumulatedMonth);
        if (month>=0){
            return 'Цель будет достигнута за ' + month + ' месяцев';
        }else{
            return 'Цель не будет достигнута';
        }
    },
    getStatusIncome: function() {
        if (appData.budgetDay>=800){
            return "Высокий уровень дохода";
        } else if (appData.budgetDay<800 && appData.budgetDay>300 ){
            return "Средний уровень дохода";
        } else if (appData.budgetDay<=300 && appData.budgetDay>=0){
            return "Низкий уровень дохода";
        } else {
            return "Что то пошло не так";
        }
    },
};
appData.expenses = {
    "ответ на первый вопрос" : "expenses",
    "ответ на второй вопрос" : "expenses2"
}

// let expensesMonth = function(){
//     let sum = 0;
    
//     for (let i = 0; i < 2; i++){
//         if(i === 0){
//             expenses = prompt("Какие обязательные ежемесячные расходы у вас есть?", "Ипотека");
//             do{
//                 sum += +prompt("Во сколько это обойдется?");
//                 console.log(sum, typeof sum);
//                 } while(isNaN(sum) || sum == '' || sum == null){
//                    // sum += prompt("Во сколько это обойдется?");    
//                 }
//         }else if (i === 1) {
//             expenses2 = prompt("Какие обязательные ежемесячные расходы у вас есть?", "бензин");
//             do{
//                 sum += +prompt("Во сколько это обойдется?");
//                 console.log(sum, typeof sum);
//                 } while(isNaN(sum) || sum == '' || sum == null){
//                   //  sum += prompt("Во сколько это обойдется?");    
//                 }
//         }
//     }
//     return sum;
// };

   let expensesAmount = appData.expensesMonth;
// console.log(expensesAmount);

// function getAccumulatedMonth (){
//     return money - expensesAmount;
// }
//   let accumulatedMonth = appData.getAccumulatedMonth();
// console.log(accumulatedMonth);

// function getTargetMonth(){
//     let month = Math.floor( appData.mission / accumulatedMonth);
//     if (month>=0){
//         return 'Цель будет достигнута за ' + month + ' месяцев';
//     }else{
//         return 'Цель не будет достигнута';
//     }
// }
// console.log(getTargetMonth());

//let budgetDay = Math.floor(accumulatedMonth/30);

// function getStatusIncome(){
//     if (budgetDay>=800){
//         return "Высокий уровень дохода";
//     } else if (budgetDay<800 && budgetDay>300 ){
//         return "Средний уровень дохода";
//     } else if (budgetDay<=300 && budgetDay>=0){
//         return "Низкий уровень дохода";
//     } else {
//         return "Что то пошло не так";
//     }
// }
// console.log('getStatusIncome : ', getStatusIncome());

// function getExpensesMonth() {
//     return expensesAmount;
// }
// console.log(getExpensesMonth());

console.log(appData.getExpensesMonth);
console.log(appData.getTargetMonth);
console.log(appData.getStatusIncome);
let show = function(){
    for (let key in appData ){
         return key + ':' + appData[key];
    }
}
console.log('Наша программа включает в себя данные:' + show);