function calculateTax() {
    let orderAmount = 0;
    let tax = 0;
    let total = 0;
    let state = "";
    let county = "";

    do {
        orderAmount = prompt("What is the order amount?", "10");
    } while (isNaN(orderAmount));

    state = prompt("What state do you live in?", "Wisconsin");

    switch (state.toLowerCase()) {
        case "wisconsin" || "wi":
            tax = orderAmount * 0.05;
            county = prompt("What county do you live in?", "Eau Claire");

            switch (county.toLowerCase()) {
                case "eau claire":
                    tax += orderAmount * 0.005;
                    break;
                case "dunn":
                    tax += orderAmount * 0.004;
                    break;
            }
            break;

        case "illinois" || "il":
            tax = orderAmount * 0.08;
            break;

        case "romania" || "ro":
            tax = orderAmount * 0.15;

            county = prompt("What county do you live in?", "Bacau");
            if (county.toLowerCase() == "bacau" || county.toLowerCase() == "bc") {
                tax -= orderAmount * 0.05;
            }
            break;
    }
    console.log(`order amount ${orderAmount}, tax = ${tax}`)
    total = +orderAmount + +tax;
    tax = tax.toFixed(2);
    total = total.toFixed(2);
    if (county != "") {
        document.getElementById("result").innerHTML = `Order amount: $${orderAmount}<br>State: ${state}
        <br>County: ${county}<br>Tax: $${tax}<br>Total value:$${total}`;
    } else {
        document.getElementById("result").innerHTML = `Order amount: $${orderAmount}<br>State: ${state}
        <br>Tax: $${tax}<br>Total value:$${total}`
    }

}