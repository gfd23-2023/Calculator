//The Odin Project

//Object for the calculus
let operation = {
    num1: null,
    num2: null,
    operator: null
};

//Creating the basic math operators
function add(a, b)
{
    return a + b;
}

function sub(a, b)
{
    return a - b;
}

function mult(a, b)
{
    return a * b;
}

function div(a, b)
{
    if (b === 0)
        return "error";

    return a / b;
}

//Takes two numbers and an operator
function operate(a, b, operator)
{
    operation.num1 = a;
    operation.num2 = b;
    operation.operator = operator;


    if (operator === "+")
        return add(a, b);

    if (operator === "-")
        return sub(a, b);

    if (operator === "x" || operator === "*")
        return mult(a, b);

    if (operator === "/")
        return div(a, b);
}

// console.log(operate(5, 7, "-"));
// console.log(operate(3, 5, "+"));
// console.log(operate(5, 3, "/"));
// console.log(operate(5, 0, "/"));
// console.log(operate(3, 12, "*"));