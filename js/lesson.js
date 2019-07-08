"use strict";

let money,
    start = function(){
        do {
            money = +prompt('Ваш месячный доход?', '30000');
        }
        while(isNaN(money) || money == '' || money == null){
            //money = prompt('Ваш месячный доход?');
            console.log(money);
        }
    };
start();

let appData = {
    budget: money,
    income:{},
    addIncome:[],
    budgetMonth: 0,
    budgetDay: 0,
    expensesMonth: 0,
    percentDeposit: 0,
    moneyDeposit: 0,
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function(){

        if(confirm('Есть ли у Вас дополнительный источник заработка?')){
            let itemIncome,
                cashIncome;
            do{
                itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'freelance');
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '5000');
            }while(!isNaN(itemIncome) || itemIncome == '' || itemIncome == null  || isNaN(cashIncome) || cashIncome == '' || cashIncome == null);
                    appData.income[itemIncome] = cashIncome;
        }
        for (let i = 0; i < 2; i++){
        let addExpenses;
        do{
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'credit,school,babysitter');
        }while (addExpenses === '' || addExpenses === null || !isNaN(addExpenses));
            appData.addExpenses = addExpenses.toLowerCase().split(',');
    }   
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++){
            let question,
                response;
                do{
                    question =  prompt("Какие обязательные ежемесячные расходы у вас есть?" );
                    response =  +prompt("Во сколько это обойдется?");
                }while(isNaN(response) || response === '' || response === null || question == ''|| question == null || typeof(question) !== 'string');
                appData.expenses[question] = response;
                // if(  || response != '' || response != null || !isNaN(response) || question != ''|| question != null){
                //     appData.expenses[question] = response;
                // } else {
                // i--;   
                // }     
        }
    },
  
    getExpensesMonth:  function(){
        for (let key in appData.expenses){
            appData.expensesMonth += +appData.expenses[key];
        }
     // appData.expensesMonth = +sum;
     //  return sum;
    },
    getBudget: function(){
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        
        
//        appData.budgetMonth = budgetMonth;
//        appData.budgetDay = budgetDay;

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
    getInfoDeposit: function(){
        if(appData.deposit){
            let percentDepositQuestion,
                moneyDepositResponse;
            do{
                percentDepositQuestion = prompt('Какой годовой процент?', 10);
                moneyDepositResponse = prompt('Какая сумма заложена?', 10000);
            }while(isNaN(percentDepositQuestion) || percentDepositQuestion === ''|| percentDepositQuestion === null || isNaN(moneyDepositResponse) || moneyDepositResponse ===  '' || moneyDepositResponse === null);
            appData.percentDeposit = percentDepositQuestion;
            appData.moneyDeposit = moneyDepositResponse;
        }
    },
    calcSaveMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getBudget();
appData.getExpensesMonth();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSaveMoney();
console.log('Расходы за месяц : ' + appData.getExpensesMonth());
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
console.log(appData.percentDeposit, appData.calcSaveMoney(), appData.moneyDeposit);
let incomeData = function(){
    for(let key in appData.income){
        return key;
    }
}

// let expensesData = function(){
//     let y ='';
//     for(let key in appData.addExpenses){
//         y += appData.addExpenses[key];
//          return y;
//     }
// }
// expensesData();
//let expensesData = appData.addExpenses.join(',');
let makeString = incomeData() +','+ appData.addExpenses.join(',');
//console.log(makeString);
let makeArray = makeString.split(',');
//console.log(makeArray);

function capitalizeFirstLetter(item, i, arr) {
    arr[i] = item.charAt(0).toUpperCase() + item.slice(1);
  }

makeArray.forEach(capitalizeFirstLetter);
console.log(makeArray.join(', '));


console.log(appData.addExpenses);
console.log(appData.income);
console.log(appData.addExpenses.concat(appData.income));
//console.log('Возможные доходы :' +  appData.money + incomeData.join('') );
console.log(appData);
console.log('Наша программа включает в себя данные:');
function show(){
    for (let key in appData ){
        console.log( key + ' : ' + appData[key]);
    }
}
show();


//string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')

