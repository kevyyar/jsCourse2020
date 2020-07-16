let shoppingList = ["cereal", "cheese", "ice"];
console.log(shoppingList);
// Array Methods

//Pop & Push
let cars = ["honda", "toyota", "ford", "tesla", "bmw"];
console.log(cars.push("Volkswagen"));
console.log(cars.pop());

// Shift & Unshift
console.log(cars.unshift("mercedez benz"));
console.log(cars.shift());
console.log(cars.shift());
console.log(cars);

//Includes & IndexOf
let foods = ["shrimp", "chicken", "pozole", "tacos"];
console.log(foods.includes("chicken"));
console.log(foods.indexOf("pozole"));
console.log(foods.indexOf("birria"));

// Concat
let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];
let newNums = num1.concat(num2);
console.log(newNums);

//Reverse & Join
let letters = ["T", "C", "E", "P", "S", "E", "R"];
console.log(letters.reverse());
console.log(letters.join("."));

// Slice
let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

let swimmers = animals.slice(0, 3);
console.log(swimmers);

let mammals = animals.slice(2, 4);
console.log(mammals);

let fourLeggedAnimals = animals.slice(-3);
console.log(fourLeggedAnimals);

//make copy of array
let copy = animals.slice();
console.log(copy);
console.log(animals);
