////////// Problem 1 //////////
console.log('Problem 1')
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // Tesla
console.log(otherRandomCar) // Mercedes



////////// Problem 2 //////////
console.log('Problem 2')
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name); // Syntax Error, name variable is not defined
console.log(otherName); // Elon



////////// Problem 3 //////////
console.log('Problem 3')
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // 12345
console.log(hashedPassword); // undefined



////////// Problem 4 //////////
console.log('Problem 4')
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // index 1, 2
const [,,,second] = numbers; // index 3, 5
const [,,,,,,,,third] = numbers; // index 8, 2
//Predict the output
console.log(first == second); // false
console.log(first == third); // true



////////// Problem 5 //////////
console.log('Problem 5')
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // value
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // yes 5, it will take the const variable instead of from the object



