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

function calculateMonthsUntilPaidOff(b, i, p) {
    return Math.ceil((-1) / 30 * (Math.log(1 + b / p * (1 - Math.pow(1 + i, 30))) / Math.log(1 + i)));
}

function calculateAmountToPayPerMonth(b, i, n) {
    return Math.ceil((-b + b * Math.pow((1 + i), 30)) / (1 - Math.pow((1 + i), (-30 * n))));
}