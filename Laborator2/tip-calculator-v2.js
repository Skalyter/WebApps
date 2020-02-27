function calculate() {
    var billAmount = 0
    var tip = 0
    var tipRate = 0
    var total = 0
    billAmount = document.getElementById("billAmount").value
    tipRate = document.getElementById("tipRate").value
    if (isNaN(billAmount)) {
        window.alert("Please enter a valid number")
        location.reload();
    } else if (billAmount < 0){
        window.alert("Please enter a positive number")
        location.reload();
    }

        tip = billAmount * (tipRate / 100)

    var billAmountRound = Math.round(billAmount * 100) / 100
    var tipRound = Math.round(tip * 100) / 100
    total = billAmountRound + tipRound

    document.getElementById("tipRound").value = tipRound
    document.getElementById("total").value = total
}