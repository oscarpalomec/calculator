const display = document.querySelector("#calculator-display");
const buttonNumbers = document.querySelectorAll(".number");
const equalbutton = document.querySelector("#equal-button");
const operators = document.querySelectorAll(".operator");
const clearbutton = document.querySelector("#clear-button");
let number1 ="";
let number2 ="";
let operation = "";

let add = ((n1,n2) => n1+n2);

let substract = ((n1,n2) => n1-n2);

let multiply = ((n1,n2) => n1*n2);

let divide = ((n1,n2) => n1/n2);

let operate = ((operator, n1,n2) => {
    console.log(operator, n1, n2 );
    switch (operator){
        case "+":
            return add(n1, n2);
            break;
        case "-":
            return substract(n1, n2);
            break;
        case "X":
            return multiply(n1,n2);
            break;
        case "/":
            return divide(n1,n2);
            break;
        default:
            console.log("ERROR");
    }
});

let populateDisplay = (() => {
    console.log("display jeje");

})

buttonNumbers.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent = display.textContent + button.textContent;
        number1 = display.textContent;
    });
});

equalbutton.addEventListener("click", () => {
    console.log(number1);
    display.textContent = operate(operation, parseInt(number2), parseInt(number1));
    number2 = "";
    number1 = "";
});


operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        display.textContent = "";
        number2 = number1;
        operation = operator.textContent;
        console.log(operation);
    });
});

clearbutton.addEventListener("click", () => {
    display.textContent = "";
    number2 = "";
    number1 = "";
});