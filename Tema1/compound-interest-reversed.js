function calculatePrincipal(){
    let result = document.getElementById("result").value
    let rate = document.getElementById("rate").value
    let period = document.getElementById("period").value
    let compounded = document.getElementById("compounded").value

    if(result < 0){
           alert("Result should be a positive number")
        return
    } 
    if(rate > 0 && rate < 1){
        alert(`If the rate is ${rate*100}%, you should write ${rate*100} instead of ${rate}!`)
    } else if(rate < 0){
        alert("Interest rate should not be negative")
        return
    }
    if(period < 0){
        alert("Period should be a positive number!")
        return
    }
    if(compounded < 0){
        alert("The interest should be compounded at least once per year")
        return
    }
    if(result > 0 && rate > 0 && period > 0 && compounded > 0){
    let principal = (Math.floor(result / Math.pow((1 + rate/100/compounded), (compounded * period))*100)/100).toFixed(2)
    document.getElementById("principal").innerHTML = `<p>For the investment to be worth of $${result}, 
    given the rate, period and number of compounds per year, you should invest <strong>$${principal}</strong></p>`    
    } else {
        alert("Please fill in all the inputs with positive numeral values!")
    }
}