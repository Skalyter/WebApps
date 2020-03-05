$(document).ready(function(){
    var billAmount = 0, tip = 0, tipRate = 0, total =0
    var viewApp = {
        prompt: function(){
            billAmount = Number(prompt("What is the bill amount?"))
            tipRate = Number(prompt("What is the tip rate?"))

        }, 
        display: function(tip, total){
            $("div").html(`<p>Bill Amount: $ ${billAmount} </p>
            <p>Tip: $ ${tip} </p>
            <p>Total: $ ${total} </p>`)
        }
    }

    var tipApp = {
        init: function(){
            this.tip()
            this.validate()
        },
        tip: function(){
            var tip = Math.round(billAmount * tipRate)/100
            tipApp.total(tip)
            return $('#tip-percent').text(`Tip Rate: ${tipRate}%`)
        },
        total: function(tip){
            var total = billAmount + tip
            viewApp.display(tip, total)
        },
        validate: function(){
            if(billAmount < 0 || isNaN(billAmount) || (tipRate <0) || isNaN(tipRate)){
                window.alert("That is not a valid bill amount or tip rate")
                window.location.reload()
            }
        }
    }

    viewApp.prompt()
    tipApp.init()
})