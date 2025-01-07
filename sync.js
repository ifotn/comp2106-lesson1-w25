// use node's filesystem lib to read text files
const fs = require('fs');

// read the food list then display it
const food = fs.readFileSync('food.txt', 'utf8');
console.log(food);
console.log('We ate this');

const drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);
console.log('We drank this');