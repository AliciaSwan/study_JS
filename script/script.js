"use strict";
const start = document.getElementById('start'),
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
        incomeItems = document.querySelectorAll('.income-items'),
        additionalIncomeItemOne = document.querySelector('.additional_income-item')[0],
        additionalIncomeItemTwo = document.querySelector('.additional_income-item')[1],
        expensesTitle = document.querySelector('.expenses-title'),
        expensesItems = document.querySelectorAll('.expenses-items'),
        additionalExpensesItem = document.querySelector('.additional_expenses-item'),
        targetAmount = document.querySelector('.target-amount'),
        periodSelect = document.querySelector('.period-select'),
        div = document.querySelector('.period-amount'),
        depositBank = document.querySelector('.deposit-bank'),
        depositAmount = document.querySelector('.deposit-amount'),
        depositPercent = document.querySelector('.deposit-percent');


class AppData  {
    constructor(budget = 0, income = {},addIncome = [], incomeMonth = 0, budgetMonth = 0, budgetDay = 0, expensesMonth = 0, percentDeposit = 0,  moneyDeposit = 0, expenses = 0, addExpenses = 0, deposit = false){
    this.budget = budget;
    this.income = income;
    this.addIncome = addIncome;
    this.incomeMonth = incomeMonth;
    this.budgetMonth = budgetMonth;
    this.budgetDay = budgetDay;
    this.expensesMonth = expensesMonth;
    this.percentDeposit = percentDeposit;
    this.moneyDeposit =  moneyDeposit;
    this.expenses = expenses;
    this.addExpenses = addExpenses;
    this.deposit = deposit;
    }
    start(){

        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getInfoDeposit();
        this.getBudget();
        this.getAddExpenses();
        this.getAddIncome();       
        this.blockedInput();

        this.showResult();
        
    }
    showResult(){
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
    }
    blockedInput (){
        document.querySelectorAll('.data input[type = text]').forEach(function(item){
            item.disabled = true;
        });
        start.style.display = "none";
        cancel.style.display = "block";
    }
    reset(){
        document.querySelectorAll('input').forEach(function(item){
            item.disabled = false;
            item.value = '';
        });
        start.style.display = "block";
        cancel.style.display = "none";
    }
    addExpensesBlock(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
        let allInputs = cloneExpensesItem.querySelectorAll('input');
        allInputs.forEach(function(item){item.value = '';});
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
                expensesAdd.style.display = 'none';
        }
    }
    getExpenses(){
        expensesItems.forEach(function(item){
            const itemExpenses = item.querySelector('.expenses-title').value;
            const cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                    this.expenses[itemExpenses] = cashExpenses;
            }
        });
    }
    addIncomeBlock(){

        const cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
        const allInputs = cloneIncomeItem.querySelectorAll('input');
        allInputs.forEach(function(item){item.value = '';});
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
                incomeAdd.style.display = 'none';
        }
    }
    getIncome(){
        incomeItems.forEach(function(item){
                const itemIncome = item.querySelector('.income-title').value;
                const cashIncome = item.querySelector('.income-amount').value;
                if(itemIncome !== '' && cashIncome !== ''){
                        this.income[itemIncome] = cashIncome;
                }
                for(let key in this.income){
                        this.incomeMonth += +this.income[key];
                }
        });
    }
    getAddExpenses(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
                item = item.trim();
                if(item !== ''){
                        this.addExpenses.push(item);
                }
        });
    }
    getAddIncome(){
            addIncomeItem.forEach(function(item){
                    let itemValue = item.value.trim();
                    if(itemValue !== ''){
                            this.addIncome.push(itemValue);
                    }
            });
    }
    getRangeAmount(){
        div.innerText = periodSelect.value;
    }
    getExpensesMonth(){
        for (let key in this.expenses){
            return this.expensesMonth += +this.expenses[key];
        }

    }
    getBudget(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    }
    getTargetMonth(){
        return targetAmount.value / this.budgetMonth;
    }
    getStatusIncome() {
        if (this.budgetDay>=800){
            return "Высокий уровень дохода";
        } else if (this.budgetDay<800 && this.budgetDay>300 ){
            return "Средний уровень дохода";
        } else if (this.budgetDay<=300 && this.budgetDay>=0){
            return "Низкий уровень дохода";
        } else {
            return "Что то пошло не так";
        }
    }
    getInfoDeposit(){
        if(this.deposit){
            this.percentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value;
        }
    }
    calcSaveMoney(){
        return this.budgetMonth * periodSelect.value;
    }
    eventsListeners(){
        start.disabled = true;
        salaryAmount.addEventListener('keyup', function(event){
            start.disabled = false;
        });
        start.addEventListener('click', this.start.bind(AppData));
        expensesAdd.addEventListener('click', this.addExpensesBlock);
        incomeAdd.addEventListener('click', this.addIncomeBlock);
        periodSelect.addEventListener('change', this.getRangeAmount);
        cancel.addEventListener('click', this.reset);

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
        depositCheck.addEventListener('change',() => {
            if(depositCheck.checked){
                depositBank.style.display ='block';
                depositAmount.style.display = 'block';
                appData.deposit = true;
                depositBank.addEventListener('change', function(){
                    const selectIndex = this.options[this.selectedIndex].value;
                    if(selectIndex === 'other'){
                        depositPercent.style.display = 'inline-block';
                        deposiPercent.value = '';
                    }else{
                        depositPercent.style.display = 'none';
                        depositPercent.value = selectIndex;
                    }
                });
            }else{
                depositBank.style.display ='none';
                depositAmount.style.display = 'none';
                depositAmount.value = '';
                appData.deposit = false;
            }
        });
    }
}
const begin = new AppData();
begin.start();

const listeners = new AppData();
listeners.eventsListeners();


//-----cookies и  localStorage

// (function(){
// let input = document.querySelectorAll('.result-total');
// if (localStorage.result-total) {
// input.value = localStorage.result-total; }
// input.onchange = function() {
// localStorage.result-total = this.value; }
// })();

