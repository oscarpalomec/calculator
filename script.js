const display = document.querySelector("#calculator-display");
const buttonNumbers = document.querySelectorAll(".number");
const equalbutton = document.querySelector("#equal-button");
const operators = document.querySelectorAll(".operator");
const clearbutton = document.querySelector("#clear-button");
let number1 =0;
let number2 =0;
let operation = "";
let operation2 = "";

let add = ((n1,n2) => n1+n2);

let substract = ((n1,n2) => n1-n2);

let multiply = ((n1,n2) => n1*n2);

let divide = ((n1,n2) => {
    if (n2 == 0){
        return "really?";
    }else{
        return n1/n2;
    }
    
});

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
        if (number2==0){
            display.textContent = display.textContent + button.textContent;
        }else {
            display.textContent =  button.textContent;
        }
       
        number1 = display.textContent;
    });
});

equalbutton.addEventListener("click", () => {
    console.log(number1);
    display.textContent = operate(operation2, parseInt(number2), parseInt(number1));
    number2 = display.textContent;
    number1 = 0;
});


operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        operation = operator.textContent;
        display.textContent = "";
        if (number2 != 0 & number1 !=0){
            console.log("Entróoo")
            operation2=operation
            display.textContent = operate(operation2, parseInt(number1), parseInt(number2));
            number2 = display.textContent;
            number1=0;
            
        }else if (number2 != 0 & number1==0){
            console.log("Entró")
            operation2=operation
            //display.textContent = operate(operation2, parseInt(number1), parseInt(number2));
            //number2 = display.textContent;

        }else {
          
            number2 = number1;
            operation2 = operation;
        }
       
       
        
    });
});

clearbutton.addEventListener("click", () => {
    display.textContent = "";
    number2 = 0;
    number1 = 0;
});