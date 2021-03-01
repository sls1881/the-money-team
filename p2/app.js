// import functions 
import { getExpenses, setExpenses, getUser, clearStorage } from '../localStorage.js';
import { renderTableRow } from './render-table.js';

const finButton = document.getElementById('fin-button');

const resetButton = document.createElement('button');
const addButton = document.getElementById('reset-button');
resetButton.textContent = 'Clear Profile';
addButton.append(resetButton);

const dynamicExpense = getExpenses();
const user = getUser();
renderTableRow(user, dynamicExpense);

// form button - event listener that ties to the (p3) which reduces the table data so user could see in the chart on p3 / at the end it should also redirect the user to the p3 display 
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    //Create data object from form on p2
    const expenseItem = getExpenses();

    //Pulls the data from the drop-down
    const expense = formData.get('expense');
    const amount = formData.get('amount');


    //compare new expenseItem to current EXPENSE in local storage
    // nice use of dynamic property access to maintain state!
    expenseItem[expense] += Number(amount);
    //add new item to existing stored item
    setExpenses(expenseItem);

    //call the render function
    renderTableRow(user, expenseItem);

    form.reset();
});

// redirects to financial advice page (p3)
finButton.addEventListener('click', () => {
    window.location = '../p3-results';
});

//Clear expenses
resetButton.addEventListener('click', () => {
    clearStorage();

    const expense = getExpenses();
    renderTableRow(user, expense);
});


