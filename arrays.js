const numbers = [1, 2, 3, 4, 5];


numbers.push(6);
numbers.unshift(0);
console.log("After adding:", numbers);

numbers.pop();
numbers.shift();
console.log("After removing:", numbers);


numbers.forEach((num) => console.log("Number:", num));

const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); 


const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); 
