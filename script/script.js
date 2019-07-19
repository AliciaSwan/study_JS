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

const AppData = function() {
    this.budget =  0;
    this.income = {};
    this.addIncome = [];
    this.incomeMonth =  0;
    this.budgetMonth =  0;
    this.budgetDay =  0;
    this.expensesMonth =  0;
    this.percentDeposit =  0;
    this.moneyDeposit =  0;
    this.expenses =  {};
    this.addExpenses =  [];
    this.deposit =  false;
};
AppData.prototype.start = function(){

    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getInfoDeposit();
    this.getBudget();
    //this.getAddExpenses();
    //this.getAddIncome();       
    this.getAddData(this.addExpenses, true, additionalExpensesItem);
    this.getAddData(this.addIncome, false, addIncomeItem);
    this.showResult();
    this.blockedInput();   
};
AppData.prototype.blockedInput = function(){
    document.querySelectorAll('.data input[type = text]').forEach((item)=>{
        item.disabled = true;
    });
    start.style.display = "none";
    cancel.style.display = "block";
    cancel.addEventListener('click', this.reset);
};
AppData.prototype.showResult = function(){
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = this.calcSaveMoney();
    periodSelect.addEventListener('change', function(event){
        incomePeriodValue.value = this.calcSaveMoney();
    });
};
AppData.prototype.reset = function(){
    document.querySelectorAll('input').forEach((item)=>{
        item.disabled = false;
        item.value = '';
    });
    start.style.display = "block";
    cancel.style.display = "none";
};
AppData.prototype.addDataBlock = function(dataItems, dataAdd , inputClass)
{
    // let aClone = dataItems[0].cloneNode(true);
    // dataItems[0].parentNode.insertBefore(aClone, dataAdd);

    // dataItems = document.querySelectorAll(inputClass);
    // if (dataItems.length == 3) {
    //     dataAdd.style.display = 'none';
    // }

        let cloneDataItem = dataItems[0].cloneNode(true);
        dataItems[0].parentNode.insertBefore(cloneDataItem, dataAdd);
        let allInputs = cloneDataItem.querySelectorAll('input');
        allInputs.forEach((item)=>{item.value = '';});
        dataItems = document.querySelectorAll(inputClass);
        if(dataItems.length === 3){
                dataAdd.style.display = 'none';
        }
};

// AppData.prototype.addExpensesBlock = function(){
//     let cloneExpensesItem = expensesItems[0].cloneNode(true);
//     expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
//     let allInputs = cloneExpensesItem.querySelectorAll('input');
//    // allInputs.forEach(function(item){item.value = '';});
//     expensesItems = document.querySelectorAll('.expenses-items');
//     if(expensesItems.length === 3){
//             expensesAdd.style.display = 'none';
//     }
//     cloneExpensesItem.querySelectorAll('input').forEach((item)=>{
//         item.value = '';
//     });
// };
    
// AppData.prototype.addIncomeBlock = function(){
//     let cloneIncomeItem = incomeItems[0].cloneNode(true);
//     incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
//     let allInputs = cloneIncomeItem.querySelectorAll('input');
//     allInputs.forEach((item)=>{item.value = '';});
//     incomeItems = document.querySelectorAll('.income-items');
//     if(incomeItems.length === 3){
//             incomeAdd.style.display = 'none';
//     }
// };
AppData.prototype.getExpenses = function(){
    expensesItems.forEach((item)=>{
        const itemExpenses = item.querySelector('.expenses-title').value;
        const cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
                this.expenses[itemExpenses] = cashExpenses;
        }
    });
};
AppData.prototype.getIncome = function(){
    incomeItems.forEach((item) => {
        const itemIncome = item.querySelector('.income-title').value;
        const cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
                this.income[itemIncome] = cashIncome;
        }
        for(let key in this.income){
                this.incomeMonth += +this.income[key];
        }
    });
};
AppData.prototype.getAddData = function(addData, verif, addItem){
    if(verif == true){
        addItem = addItem.value.split(',');
    }
    addItem.forEach((item) =>{
        if((verif == true)){
            item = item.trim();
            if(item !== ''){
                    addData.push(item);
            }
        }else {
            item = item.value.trim();
            if(item !== ''){
                addData.push(item);
            }
        }  
    }); 
};
// AppData.prototype.getAddExpenses = function(){
//     let addExpenses = additionalExpensesItem.value.split(',');
//     addExpenses.forEach((item) =>{
//             item = item.trim();
//             if(item !== ''){
//                     this.addExpenses.push(item);
//             }
//     });
// };
// AppData.prototype.getAddIncome = function(){
//     addIncomeItem.forEach((item) => {
//             let itemValue = item.value.trim();
//             if(itemValue !== ''){
//                     this.addIncome.push(itemValue);
//             }
//     });
// };

AppData.prototype.getRangeAmount = function(){
        div.innerText = periodSelect.value;
};
AppData.prototype.getExpensesMonth = function(){
    for (let key in this.expenses){
        return this.expensesMonth += +this.expenses[key];
    }
};
AppData.prototype.getBudget = function(){
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function(){
    return targetAmount.value / this.budgetMonth;
};
AppData.prototype.getInfoDeposit = function(){
    if(this.deposit){
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
    }
};
AppData.prototype.calcSaveMoney = function(){
    return this.budgetMonth * periodSelect.value;
};
AppData.prototype.eventsListeners = function(){
    start.disabled = true;
    salaryAmount.addEventListener('keyup', function(event){
        start.disabled = false;
    });
    start.addEventListener('click', this.start.bind(this));
    expensesAdd.addEventListener('click', this.addDataBlock(expensesItems, expensesAdd, '.expenses-items'));
    incomeAdd.addEventListener('click', this.addDataBlock(incomeItems, incomeAdd, '.income-items'));
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
            this.deposit = true;
            depositBank.addEventListener('change', function(){
                const selectIndex = this.options[this.selectedIndex].value;
                if(selectIndex === 'other'){
                    depositPercent.style.display = 'inline-block';
                    depositPercent.value = '';
                }else{
                    depositPercent.style.display = 'none';
                    depositPercent.value = selectIndex;
                }
            });
        }else{
            depositBank.style.display ='none';
            depositAmount.style.display = 'none';
            depositAmount.value = '';
            this.deposit = false;
        }
    });
};

let appData = new AppData();   
appData.eventsListeners();


//-----cookies и  localStorage

// (function(){
// let input = document.querySelectorAll('.result-total');
// if (localStorage.result-total) {
// input.value = localStorage.result-total; }
// input.onchange = function() {
// localStorage.result-total = this.value; }
// })();

