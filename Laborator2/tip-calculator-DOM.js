function tipCalculator(slider, bill){
    var tip = 0
    var total = 0
    var bill = parseInt(document.getElementById("bill").value)

    if(isNaN(bill) || bill<0 || bill==null){
        document.getElementById("display").innerHTML = "<p>Please enter a valid amount. </p>"
    } else if (!isNaN(bill)){
        tip = bill * (slider / 100)
        total = bill + tip

        document.getElementById("display").innerHTML = `<p>Slider: ${slider + '%'}</p><p>Tip: \$
        ${tip.toFixed(2)}</p><p>Total: \$${total.toFixed(2)}</p>`
    }
}