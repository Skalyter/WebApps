function calculateInterest(){
    let principal = document.getElementById("principal").value
    let rate = document.getElementById("rate").value
    let period = document.getElementById("period").value
    let compounded = document.getElementById("compounded").value

    if(principal < 0){
           alert("Principal should be a positive number")
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
    if(principal > 0 && rate > 0 && period > 0 && compounded > 0){
    let result =Math.ceil(principal * Math.pow((1 + rate/100/compounded),(compounded * period))*100)/100 
    document.getElementById("result").innerHTML = `After ${period} years, for a rate of ${rate}%, the investment will be worth $${result}`
    } else {
        alert("Please fill in all the inputs with positive numeral values!")
    }
}