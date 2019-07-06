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
    budgetMonth: 0,
    budgetDay: 0,
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
                response =  +prompt("Во сколько это обойдется?");
   
                if( !isNaN(response) || response != '' || response != null){
                    appData.expenses[question] = +response;
                } else {
                i--;   
                }     
        }
    },

    budget: money,
    
    getExpensesMonth:  function(){
        let sum = 0;
        for (let key in appData.expenses){
            sum += +appData.expenses[key];
        }
     // appData.expensesMonth = +sum;
       return sum;
      //  console.log('appData.expensesMonth:', appData.expensesMonth, typeof(appData.expensesMonth));
    },
    getBudget: function(){
        let budgetDay = Math.floor(appData.budget / 30);
        let budgetMonth = appData.budget - appData.getExpensesMonth();
        
        appData.budgetMonth = budgetMonth;
        appData.budgetDay = budgetDay;

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
console.log('Расходы за месяц : ' + appData.getExpensesMonth());
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
console.log(appData);
console.log('Наша программа включает в себя данные:');
function show(){
    for (let key in appData ){
        console.log( key + ' : ' + appData[key]);
    }
}
show();


