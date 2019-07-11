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

let this = {
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
                    this.income[itemIncome] = cashIncome;
        }
        for (let i = 0; i < 1; i++){
        let addExpenses;
        do{
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'credit,school,babysitter');
        }while (addExpenses === '' || addExpenses === null || !isNaN(addExpenses));
            this.addExpenses = addExpenses.toLowerCase().split(',');
    }   
            this.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++){
            let question,
                response;
                do{
                    question =  prompt("Какие обязательные ежемесячные расходы у вас есть?" );
                    response =  +prompt("Во сколько это обойдется?");
                }while(isNaN(response) || response === '' || response === null || question == ''|| question == null || typeof(question) !== 'string');
                this.expenses[question] = response;
                // if(  || response != '' || response != null || !isNaN(response) || question != ''|| question != null){
                //     this.expenses[question] = response;
                // } else {
                // i--;   
                // }     
        }
    },
  
    getExpensesMonth:  function(){
        for (let key in this.expenses){
            this.expensesMonth += +this.expenses[key];
        }
     // this.expensesMonth = +sum;
     //  return sum;
    },
    getBudget: function(){
        this.budgetMonth = this.budget - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
        
        
//        this.budgetMonth = budgetMonth;
//        this.budgetDay = budgetDay;

        console.log('this.budgetDay:', this.budgetDay);
        console.log('this.budget:', this.budget, typeof(this.budget));
        console.log('this.budgetMonth:', this.budgetMonth, typeof(this.budgetMonth));
    },


    getTargetMonth: function(){
        let month = Math.floor( this.mission / this.budgetMonth);
        if (month>=0){
            return 'Цель будет достигнута за ' + month + ' месяцев';
        }else{
            return 'Цель не будет достигнута';
        }
    },
    getStatusIncome: function() {
        if (this.budgetDay>=800){
            return "Высокий уровень дохода";
        } else if (this.budgetDay<800 && this.budgetDay>300 ){
            return "Средний уровень дохода";
        } else if (this.budgetDay<=300 && this.budgetDay>=0){
            return "Низкий уровень дохода";
        } else {
            return "Что то пошло не так";
        }
    },
    getInfoDeposit: function(){
        if(this.deposit){
            let percentDepositQuestion,
                moneyDepositResponse;
            do{
                percentDepositQuestion = prompt('Какой годовой процент?', 10);
                moneyDepositResponse = prompt('Какая сумма заложена?', 10000);
            }while(isNaN(percentDepositQuestion) || percentDepositQuestion === ''|| percentDepositQuestion === null || isNaN(moneyDepositResponse) || moneyDepositResponse ===  '' || moneyDepositResponse === null);
            this.percentDeposit = percentDepositQuestion;
            this.moneyDeposit = moneyDepositResponse;
        }
    },
    calcSaveMoney: function(){
        return this.budgetMonth * this.period;
    }
};

this.asking();
this.getBudget();
this.getExpensesMonth();
this.getTargetMonth();
this.getStatusIncome();
this.getInfoDeposit();
this.calcSaveMoney();
console.log('Расходы за месяц : ' + this.getExpensesMonth());
console.log(this.getTargetMonth());
console.log(this.getStatusIncome());
console.log(this.percentDeposit, this.calcSaveMoney(), this.moneyDeposit);
let incomeData = function(){
    for(let key in this.income){
        return key;
    }
}

//let expensesData = this.addExpenses.join(',');
let makeString = incomeData() +','+ this.addExpenses.join(',');
//console.log(makeString);
let makeArray = makeString.split(',');
//console.log(makeArray);

function capitalizeFirstLetter(item, i, arr) {
    arr[i] = item.charAt(0).toUpperCase() + item.slice(1);
  }

makeArray.forEach(capitalizeFirstLetter);
console.log(makeArray.join(', '));


console.log(this.addExpenses);
console.log(this.income);
console.log(this.addExpenses.concat(this.income));
//console.log('Возможные доходы :' +  this.money + incomeData.join('') );
console.log(this);
console.log('Наша программа включает в себя данные:');
function show(){
    for (let key in this ){
        console.log( key + ' : ' + this[key]);
    }
}
show();


