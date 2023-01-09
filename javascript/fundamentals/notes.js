
//////////////////////////// Debugging ////////////////////////////
console.log('Debugging');

let x = 1;
let y = 2;
// let z == 3; //this is the syntax error
console.log(x + x);
// console.log(y - z);
// console.log(z * x);

//////////////////////////// Scope ////////////////////////////
console.log('Scope');

// below have a total of 3 scope
// const are forever and must assign, let allows change and does not need to be assigned right away, try to avoid using var
const beatles = ['Paul', 'George', 'John', 'Ringo']; // Global Scope
function printNames(names) {
    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
            const name = names[index]; // local scope to the inner function
            // this is const because each iteration of the for loop creates its own environment
            console.log(name + ' was found at index ' + index);
        }
        // console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames(); // local scope of the first function
}
printNames(beatles);                     

//////////////////////////// Desctructuring ////////////////////////////
console.log('Desctructuring');

const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// BEFORE ES6
// var email = person.email;
// var firstAnimal = animals[0];
// AFTER ES6
// const { email } = person;
// const [firstAnimal] = animals;
// console.log(email);  // => bob@marley.com
// console.log(firstAnimal); // => horse

const { email, password } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;
console.log(email);  // => bob@marley.com
console.log(thirdAnimal); // => horse

const { password: hashedPassword } = person;
console.log(hashedPassword); // => horse

// Nested Destructuring
const person1 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const { addresses: [whiteHouse, sherlock] } = person1;
console.log(sherlock);
const { addresses: [ , { city: london }] } = person1; // leaving a position empty can skip the destructure
console.log(london);  // => London



