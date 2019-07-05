'use strict';

let money,
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

        for (let i = 0; i < 2; i++){
            let question =  prompt("Какие обязательные ежемесячные расходы у вас есть?", ""),
                response =  prompt("Во сколько это обойдется?");
   
                if( !isNaN(response) || response != '' || response != null){
                    appData.expenses[question] = +response;
                } else {
                i=i-1;   
                }     
        }
    },

    budget: +money,
    
    getExpensesMonth:  function(){
        let sum = 0;
        for (let key in appData.expenses){
            sum += +appData.expenses[key];
        }
        appData.expensesMonth = +sum;
        console.log('appData.expensesMonth:', appData.expensesMonth, typeof(appData.expensesMonth));
    },
    getBudget: function(){
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth/30;
        console.log('appData.budgetDay:', appData.budgetDay);
        console.log('appData.budget:', appData.budget, typeof(appData.budget));
        console.log('appData.budgetMonth:', appData.budgetMonth, typeof(appData.budgetMonth));
    },


    getTargetMonth: function(){
        let month = Math.floor( appData.mission / appData.budgetMonth);
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

appData.asking();
appData.getBudget();
appData.getExpensesMonth();
appData.getTargetMonth();
appData.getStatusIncome();
console.log(appData.getExpensesMonth());

console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
// let show = function(){
//     for (let key in appData ){
//          return key + ':' + appData[key];
//     }
// }
// console.log('Наша программа включает в себя данные:' + show);

console.log(appData);