"use strict";
let start = document.getElementById('start'),
    incomeAdd = document.getElementsByTagName('button')[0],
    expensesAdd = document.getElementsByTagName('button')[1],
    checkBoxx = document.querySelector('#deposit-check'),
    addIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetDay = document.querySelector('.budget_day-value'),
    budgetMonth = document.querySelector('.budget_month-value'),
    expensesMonth = document.querySelector('.expenses_month-value'),
    accumulatedMonth = document.querySelector('.accumulated_month-value'),
    additionalIncome = document.querySelector('.additional_income-value'),
    additionalExpenses = document.querySelector('.additional_expenses-value'),
    incomePeriod = document.querySelector('.income_period-value'),
    targetMonth = document.querySelector('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    additionalIncomeItemOne = document.querySelector('.additional_income-item')[0],
    additionalIncomeItemTwo = document.querySelector('.additional_income-item')[1],
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select');
    
    

    console.log(start, incomeAdd, expensesAdd, checkBoxx, addIncomeItem, budgetDay, budgetMonth, expensesMonth, 
        accumulatedMonth, additionalIncome,additionalExpenses, incomePeriod, targetMonth, salaryAmount,incomeTitle, 
        incomeAmount, additionalIncomeItemOne, additionalIncomeItemTwo, expensesTitle, expensesAmount, additionalExpensesItem,
        targetAmount,periodSelect);