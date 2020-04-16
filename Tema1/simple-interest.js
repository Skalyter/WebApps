

function getValues(){
    let principal = document.getElementById("principal").value
    let rate = document.getElementById("rate").value
    let period = document.getElementById("period").value
    calculateInterest(principal, rate, period)
}

function calculateInterest(principal, rate, period){
    if(principal < 0){
        alert("Principal should be a positive number")
        return;
    } 

    if(rate > 0 && rate < 1){
        alert(`If the rate is ${rate*100}%, you should write ${rate*100} instead of ${rate}!`)
    } else if(rate < 0){
        alert("Interest rate should not be negative")
        return;
    }
    
    if(period < 0){
        alert("Period should be a positive number!")
        return
    }
    if(principal > 0 && rate > 0 && period > 0){
    let result = (Math.ceil((principal * ( 1 + rate/100 * period))*100)/100).toFixed(2)
    document.getElementById("result").innerHTML = `After ${period} years, for a rate of ${rate}%, 
        the investment will be worth $${result}<br> Investment worth over years:<br>`
    
    for(let i = 1; i < period; i++){
        let partialResult =  (Math.ceil((principal * ( 1 + rate/100 * i))*100)/100).toFixed(2)
        document.getElementById("result").insertAdjacentHTML("afterend",`After ${i} year(s), the investment will be worth $${partialResult}<br>`)
    }
} else {
    alert("Please fill in all the inputs with positive numeral values!")    
}
}