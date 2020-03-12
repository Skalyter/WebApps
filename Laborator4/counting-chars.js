var inputString
function countChars(){
    inputString = document.getElementById('count').value
    result = inputString.length
    document.getElementById('result').innerHTML = `${inputString} has ${result} characters.`
    document.getElementById('counter').value = result
}

function isEmpty(){
    if(document.getElementById('count').value == ""){
        document.getElementById('result').innerHTML = "Please enter something"
    }
    return;
}

function startTimer(){
    setTimeout('countChars()', 500)
}