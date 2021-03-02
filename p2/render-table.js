export function renderTableRow(userItem, expenseItem) {
    const carBudget = document.getElementById('car-budget');
    const carSpent = document.getElementById('car-spent');
    const carRemaining = document.getElementById('car-remaining');

    carBudget.textContent = userItem.expenses.car;
    carSpent.textContent = expenseItem.car;
    // nice use of nested object properties thoughout this function
    carRemaining.textContent = Number(userItem.expenses.car) - Number(expenseItem.car);

    const foodBudget = document.getElementById('food-budget');
    const foodSpent = document.getElementById('food-spent');
    const foodRemaining = document.getElementById('food-remaining');
    foodBudget.textContent = userItem.expenses.food;
    foodSpent.textContent = expenseItem.food;
    foodRemaining.textContent = Number(userItem.expenses.food) - Number(expenseItem.food);

    const houseBudget = document.getElementById('house-budget');
    const houseSpent = document.getElementById('house-spent');
    const houseRemaining = document.getElementById('house-remaining');
    houseBudget.textContent = userItem.expenses.house;
    houseSpent.textContent = expenseItem.house;
    houseRemaining.textContent = Number(userItem.expenses.house) - Number(expenseItem.house);

    const utilitiesBudget = document.getElementById('utilities-budget');
    const utilitiesSpent = document.getElementById('utilities-spent');
    const utilitiesRemaining = document.getElementById('utilities-remaining');
    utilitiesBudget.textContent = userItem.expenses.utilities;
    utilitiesSpent.textContent = expenseItem.utilities;
    utilitiesRemaining.textContent = Number(userItem.expenses.utilities) - Number(expenseItem.utilities);

    const otherBudget = document.getElementById('other-budget');
    const otherSpent = document.getElementById('other-spent');
    const otherRemaining = document.getElementById('other-remaining');
    otherBudget.textContent = userItem.expenses.other;
    otherSpent.textContent = expenseItem.other;
    otherRemaining.textContent = Number(userItem.expenses.other) - Number(expenseItem.other);

    const savingsBudget = document.getElementById('savings-budget');
    const savingsSpent = document.getElementById('savings-spent');
    const savingsRemaining = document.getElementById('savings-remaining');
    savingsBudget.textContent = userItem.expenses.savings;
    savingsSpent.textContent = expenseItem.savings;
    savingsRemaining.textContent = Number(userItem.expenses.savings) - Number(expenseItem.savings);
}

