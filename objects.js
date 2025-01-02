// Define an object
const car = {
    brand: "new",
    model: "Model S",
    year: 2023,
    start: function () {
        console.log(`${this.brand} ${this.model} is launching...`);
    },
};


console.log(car.brand); 
console.log(car["year"]); 
car.start(); 

car.color = "red";
console.log(car.color);

delete car.year;
console.log(car.year);
