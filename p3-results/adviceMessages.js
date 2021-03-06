//advice messages 
//underSpent, overSpent, sweetSpot

export function message(result, expenseName) {
    if (expenseName === 'car') {
        if (result === 'underSpent') {
            return 'We know it is a pandemic, but have you left the house at all?';
        } else if (result === 'overSpent') {
            return 'You do not have to drive to the mailbox.';
        } else {
            return 'Not too bad. You are right where you want to be!';
        }
    } else if (expenseName === 'utilities') {
        if (result === 'underSpent') {
            return 'It is not the 1800s, use some electricity.';
        } else if (result === 'overSpent') {
            return 'You should not run your AC or heat with the windows open.';
        } else {
            return 'Nice job, you are right where you want to be!';
        }
    } else if (expenseName === 'other') {
        if (result === 'underSpent') {
            return 'Treat yourself, LIKE please.';
        } else if (result === 'overSpent') {
            return 'Close the Amazon app.';
        } else {
            return 'Great balance of self-care and self-control!';
        }
    } else if (expenseName === 'savings') {
        if (result === 'underSpent') {
            return 'You will never take a vacation at this rate mate!';
        } else if (result === 'overSpent') {
            return 'WOW! Well done you!';
        } else {
            return 'Right on target. Keep it up!!';
        }
    } else {
        return '';
    }
}