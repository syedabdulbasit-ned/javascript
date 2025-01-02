const numbers = [10, 20, 30, 40, 50];

// Standard for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}: ${numbers[i]}`);
}


// for of
for (let num of numbers) {
    console.log(`Value: ${num}`);
}

// for each
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

const person = { name: "Alice", age: 25, city: "New York" };

// for in
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
