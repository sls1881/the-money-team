export function percentMaker(userItem, expenseItem) {
    return expenseItem / userItem;
}

export function adviceGenerator(percent) {
    if (percent <= 0.1) {
        return 'underSpent';
    }

    return percent >= 0.9 ? 'overSpent' : 'sweetSpot';
}

