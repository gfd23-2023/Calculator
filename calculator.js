//The Odin Project

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

console.log(add(5, 3));
console.log(sub(4, 7));
console.log(mult(3, 15));
console.log(div(3, 2));
console.log(div(4, 0));