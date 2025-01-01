
function addNumbers(num1, num2) {
    return num1 + num2;
}


const number1 = 5;
const number2 = 10;
const result = addNumbers(number1, number2);

console.log(`The sum of ${number1} and ${number2} is ${result}.`);

function calculator(num1, num2, operation) {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        default:
            return "Invalid operation";
    }
}

console.log(calculator(10, 5, "add"));         
console.log(calculator(10, 5, "subtract"));   
console.log(calculator(10, 5, "multiply"));    
console.log(calculator(10, 5, "divide"));      

