//The Odin Project

//Object for the calculus
let operation = {
    num1: "",
    num2: "",
    operator: ""
};

//Creating the basic math operators
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0)
        return "error";

    return a / b;
}

//Takes two numbers and an operator
function operate(a, b, operator) {
    operation.num1 = a;
    operation.num2 = b;
    operation.operator = operator;


    if (operator === "+")
        return add(a, b);

    if (operator === "-")
        return sub(a, b);

    if (operator === "×" || operator === "*")
        return mult(a, b);

    if (operator === "÷")
        return div(a, b);
}

//Waits for an event
function calculate() 
{
    //The problem was that I wasn't calling the buttons, but the div
    //and the div has not a event listener
    const buttons = document.querySelectorAll(".numbers button, .operators button");

    //Gets the display
    const display = document.getElementById("display");

    for (let button of buttons)
    {
        button.addEventListener("click", function () {
            const id = this.id;

            if (!isNaN(id))
            {
                if (operation.operator === "")
                    operation.num1 = operation.num1 + id;
                else
                    operation.num2 = operation.num2 + id;
            }
            else
            {
                if (operation.operator === "" && id !== "equal" && id !== "del" && id !== "c" && id !== "." && id !== "nada")
                    operation.operator = id;
                    
                if (id === "." && operation.operator === "" && id !== "nada")
                    operation.num1 = operation.num1 + id;
                else if (id === "." && operation.operator !== "" && id !== "nada")
                    operation.num2 = operation.num2 + id;
            }

             console.log("Operador: " + operation.operator +
                         "\nNum1: " + operation.num1 +
                         "\nNum2: " + operation.num2
             )

            //Updates the display
            display.innerText = operation.num1 + operation.operator + operation.num2;
            
            if (id === "equal")
            {
                display.innerText = operate(Number(operation.num1), Number(operation.num2), operation.operator);
                operation.num1 = "";
                operation.num2 = "";
                operation.operator = "";
            }

            if (id === "c")
            {
                display.innerText = "0";
                operation.num1 = "";
                operation.num2 = "";
                operation.operator = "";
            }
                
            if (id === "del")
            {
                if (operation.num2 !== "")
                    operation.num2 = operation.num2.slice(0, -1);
                else if (operation.operator !== "")
                    operation.operator = "";
                else if (operation.num1 !== "")
                    operation.num1 = operation.num1.slice(0, -1);

                display.innerText = operation.num1 + operation.operator + operation.num2;
            }
            
            
        });
    }


}

calculate();
