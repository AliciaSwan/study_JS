"use strict";
let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    incomeAdd = document.getElementsByTagName('button')[0],
    expensesAdd = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    addIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    accumulatedMonthValue = document.querySelector('.accumulated_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
 //   incomeAmount = document.querySelector('.income-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    additionalIncomeItemOne = document.querySelector('.additional_income-item')[0],
    additionalIncomeItemTwo = document.querySelector('.additional_income-item')[1],
    expensesTitle = document.querySelector('.expenses-title'),
 //   expensesAmount = document.querySelector('.expenses-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    div = document.querySelector('.period-amount');

let appData = {
    budget: 0,
    income:{},
    addIncome:[],
    incomeMonth: 0,
    budgetMonth: 0,
    budgetDay: 0,
    expensesMonth: 0,
    percentDeposit: 0,
    moneyDeposit: 0,
    expenses: {},
    addExpenses: [],
    deposit: false,
    start: function(){
        // if(salaryAmount.value == ''){               
        //         alert('Ошибка, поле "Месячный доход" должно быть заполнено');
        //         return;
        // }

        this.budget = +salaryAmount.value;
        
        this.getIncome();
        this.getAddExpenses();
        this.getAddIncome();
        this.getExpenses();
        this.getExpensesMonth();
        //appData.getRangeAmount();
        this.getBudget();
        this.blockedInput();

        this.showResult();
        
    },
    showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = this.calcSaveMoney();
        periodSelect.addEventListener('change', function(event){
            incomePeriodValue.value = appData.calcSaveMoney();
        });
    },
    blockedInput: function(){
        document.querySelectorAll('.data input[type = text]').forEach(function(item){
            item.disabled = true;
        });
        start.style.display = "none";
        cancel.style.display = "block";
    },
    reset: function(){
        document.querySelectorAll('input').forEach(function(item){
            item.disabled = false;
            item.value = '';
        });
        start.style.display = "block";
        cancel.style.display = "none";
    },
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
        let allInputs = cloneExpensesItem.querySelectorAll('input');
        allInputs.forEach(function(item){item.value = '';});
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
                expensesAdd.style.display = 'none';
        }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                    appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    addIncomeBlock: function(){

        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
        let allInputs = cloneIncomeItem.querySelectorAll('input');
        allInputs.forEach(function(item){item.value = '';});
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
                incomeAdd.style.display = 'none';
        }
    },
    getIncome: function(){
        incomeItems.forEach(function(item){
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if(itemIncome !== '' && cashIncome !== ''){
                        appData.income[itemIncome] = cashIncome;
                }
                for(let key in appData.income){
                        appData.incomeMonth += +appData.income[key];
                }
        });
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
                item = item.trim();
                if(item !== ''){
                        appData.addExpenses.push(item);
                        // console.log(appData.addExpenses);
                }
        });
    },
    getAddIncome: function(){
            addIncomeItem.forEach(function(item){
                    let itemValue = item.value.trim();
                    if(itemValue !== ''){
                            appData.addIncome.push(itemValue);
                    }
            });
    },
    getRangeAmount: function(){
        div.innerText = periodSelect.value;
    },
    asking: function(){
            this.deposit = confirm('Есть ли у вас депозит в банке?');
    },
    getExpensesMonth:  function(){
        for (let key in this.expenses){
            return this.expensesMonth += +this.expenses[key];
        }
     // appData.expensesMonth = +sum;
     //  return sum;
    },
    getBudget: function(){
        this.budgetMonth = this.budget + appData.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);

//        appData.budgetMonth = budgetMonth;
//        appData.budgetDay = budgetDay;
    },
    getTargetMonth: function(){
       /* let month =*/return targetAmount.value / this.budgetMonth;
        // if (month>=0){
        //     return 'Цель будет достигнута за ' + month + ' месяцев';
        // }else{
        //     return 'Цель не будет достигнута';
        // }
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
        return appData.budgetMonth * periodSelect.value;
    }
};
start.disabled = true;
salaryAmount.addEventListener('keyup', function(event){
    start.disabled = false;
});
start.addEventListener('click', appData.start.bind(appData));
expensesAdd.addEventListener('click', appData.addExpensesBlock);
incomeAdd.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', appData.getRangeAmount);
cancel.addEventListener('click', appData.reset);

    // document.querySelectorAll('input[placeholder="Наименование"]').forEach(function(item){

    //     item.addEventListener('input',()=> {
    //       let input = document.querySelector('input');
    //         input.value = input.value.replace(/[^\.\,\-\:\$ А-Яа-я()]/g, '');
    //   });
    // });

let allInputsText = document.querySelectorAll('input[placeholder="Наименование"]');
for(let i = 0; i < allInputsText.length; i++) {
    allInputsText[i].addEventListener('input', function() {
    this.value = this.value.replace(/[^\:\.\, А-ЯЁа-яё]/gi, '');
    });
}
let allInputsNumbers = document.querySelectorAll('input[placeholder="Сумма"]');
for(let i = 0; i < allInputsNumbers.length; i++) {
    allInputsNumbers[i].addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/i, '');
    });
}


let incomeData = function(){
    for(let key in appData.income){
        return key;
    }
};

//let expensesData = appData.addExpenses.join(',');
let makeString = incomeData() +','+ appData.addExpenses.join(',');
//console.log(makeString);
let makeArray = makeString.split(',');
//console.log(makeArray);

function capitalizeFirstLetter(item, i, arr) {
    arr[i] = item.charAt(0).toUpperCase() + item.slice(1);
  }

makeArray.forEach(capitalizeFirstLetter);
// console.log(makeArray.join(', '));
