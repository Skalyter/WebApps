function calculateMonths() {

    let balance = 0;
    let apr = 0;
    let monthlyPayment = 0;
    let numberOfMonths = 0;
    do {
        balance = prompt("What is your balance?", 5000);

    } while (isNaN(balance));
    do {
        apr = prompt("What is the APR on the card? (As a percent, NOT decimal", 12);
    } while (isNaN(apr) && apr < 1);
    apr = apr / 36500;
    if (document.getElementById("radio1").checked) {
        do {
            monthlyPayment = prompt("What is the monthly payment you can make?", 100);
        } while (isNaN(monthlyPayment))
        numberOfMonths = calculateMonthsUntilPaidOff(balance, apr, monthlyPayment);
        document.getElementById("result").innerHTML = `It will take you ${numberOfMonths} months to pay off this card.`
    } else {
        do {
            numberOfMonths = prompt("What is the number of months you'd like to pay for this card?", 70);

        } while (isNaN(numberOfMonths))
        monthlyPayment = calculateAmountToPayPerMonth(balance, apr, numberOfMonths);
        document.getElementById("result").innerHTML = `You will have to pay $${monthlyPayment} per month to pay off this card.`
    }
    console.log(`apr = ${apr} payment = ${monthlyPayment}, balance = ${balance}, months=${numberOfMonths}`)
}

function calculateMonthsUntilPaidOff(balance, apr, monthlyPayment) {
    return Math.ceil((-1) / 30 * (Math.log(1 + balance / monthlyPayment * (1 - Math.pow(1 + apr, 30))) / Math.log(1 + apr)));
}

function calculateAmountToPayPerMonth(balance, apr, numberOfMonths) {
    return Math.trunc(((balance * (1 - Math.pow(1 + apr, 30))) / (Math.pow(1 / 10, 30 * Math.log(1 + apr) * numberOfMonths) - 1)), -2);
}