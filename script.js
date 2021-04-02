const display = document.querySelector("#calculator-display");
const buttonNumbers = document.querySelectorAll(".number");
const equalbutton = document.querySelector("#equal-button");
const operators = document.querySelectorAll(".operator");
let number1 ="";
let number2 ="";

let add = ((n1,n2) => n1+n2);

let substract = ((n1,n2) => n1-n2);

let multiply = ((n1,n2) => n1*n2);

let divide = ((n1,n2) => n1/n2);

let operate = ((operator, n1,n2) => console.log(operator));

let populateDisplay = (() => {
    console.log("display jeje");

})

buttonNumbers.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent = display.textContent + button.textContent;
        number1 = display.textContent;
    });
});

equalbutton.addEventListener("click", () => console.log(number1));
