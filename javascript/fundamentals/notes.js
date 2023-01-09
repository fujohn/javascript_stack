
//////////////////////////// Debugging ////////////////////////////
console.log('//////////////////////////// Debugging ////////////////////////////');

let x = 1;
let y = 2;
// let z == 3; //this is the syntax error
console.log(x + x);
// console.log(y - z);
// console.log(z * x);

//////////////////////////// Scope ////////////////////////////
console.log('//////////////////////////// Scope ////////////////////////////');

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
console.log('//////////////////////////// Desctructuring ////////////////////////////');

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


//////////////////////////// Rest/Spread ////////////////////////////
console.log('//////////////////////////// Rest/Spread ////////////////////////////');

const [firstAni, secondAni, ...otherAnimals] = animals;
console.log(firstAni);
console.log(secondAni);
console.log(otherAnimals); // => ['fish', 'cat', 'bird']

const { firstName, lastName, ...attributes } = person1;
console.log(attributes);

const personCopy = { ...person1 };
console.log(personCopy);
console.log(personCopy === person1); // => false
console.log(personCopy.addresses === person1.addresses); // => true

//////////////////////////// Arrow Functions ////////////////////////////
console.log('//////////////////////////// Arrow Functions ////////////////////////////');

// var sayHello = function(name) {
//     console.log('Hello ' + name);
// }; 

// same as above
// name does not necessarily need () if it is the only parameter
// {} also not necessary if function is simple
const sayHello = (name) => {
    console.log(`Hello ${name}`);
};

// var square = function(n) {
//     return n * n;
// };
// same as above
const square = n => n * n;

// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
    return { 
        firstName: 'John',
        lastName: 'Wick'
    }
}
/**
  * The example below wouldn't work because the 
  * brackets are interpreted as opening the body of the 
  * function rather than brackets to create an object literal 
  */
// const returnObj = () => { firstName: 'John', lastName: 'Wick' }

// surrounding the implicit return with parentheses solves the problem
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });


class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        // for (const suit of suits) {
        //     for (const face of faces) {
        //         deck.push(this.createCard(suit, face));
        //     }
        // }
        suits.forEach(suit => {
            faces.forEach(face => {
                deck.push(this.createCard(suit, face));
            });
        });
        this.deck = deck;
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }
}
