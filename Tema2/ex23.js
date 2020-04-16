function startQuiz() {
    document.getElementById("result").innerHTML = askQuestions();
}

let response = "";
let solution = "";
function askQuestions() {
    askNextQuestion("Is the car silent when you turn the key? (Y/N)")
    if (response === "y") {
        askNextQuestion("Are the battery terminals corroded? (Y/N)");
        if (response === "y") {
            solution = "Clean terminals and try starting again."
        } else {
            solution = "Replace cables and try again.";
        }
    } else {
        askNextQuestion("Does the car make a clicking noise?");
        if(response === "y"){
            solution = "Replace the battery.";
        } else {
            askNextQuestion("Does the car crank up but fail to start?");
            if(response === "y"){
                solution = "Check spark plug connections.";
            } else {
                askNextQuestion("Does the engine start and then die?");
                if(response === "y"){
                    askNextQuestion("Does your car have fuel injection?");
                    if(response === "n"){
                        solution = "Check to ensure the choke is opening and closing.";
                    } else {
                        solution = "Get it in for service."
                    }
                } else {
                    solution = "Sorry, but no instruction given for this branch :( But you should definitely consider getting your car in for service."
                }
            }
        }
    }
    return solution;
}

function askNextQuestion(question) {
    do {
        response = prompt(question);
        response = response.toLowerCase();
    } while (response != "y" && response != "n");
}