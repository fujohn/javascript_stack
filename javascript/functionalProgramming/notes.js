
//////////////////////////// Callback Functions ////////////////////////////
console.log('//////////////////////////// Callback Functions ////////////////////////////');

setTimeout( function() { 
    console.log("start") 
}, 3000 ); // delays this function by 3000ms or 3s

console.log("end");
// We can declare a variable and set it equal to a function and then call that function using the variable name.
var exampleFunction = function(message){
    console.log( message );
};
exampleFunction( "Hello from exampleFunction" );

// As we saw in the example above, we can also pass a function as a parameter into a parent function. In this case let's call this parameter callback and pass it a message.
function parentFunction( callback ) {
    callback( "information from the parent function" );
}
// We can then call the parent function like this.
parentFunction( exampleFunction ); // the function runs to callback

// These sort of functions are often used with anonymous functions (functions without a name) and we could rewrite our example to be called like this.
parentFunction( function(message) {
    console.log( message );
});

//////////////////////////// The Big Freeze ////////////////////////////
console.log('//////////////////////////// The Big Freeze ////////////////////////////');

const arr = [1,2,3,4];
arr.push(300); // even though arr is declared with `const` we can still push new values into it 
console.log(arr);

const arr1 = Object.freeze([1,2,3,4]);
// arr1.push(300); // we're no longer allowed to change `arr1`, will run error
console.log(arr1);

const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);
console.log(groceryList);

const needThyme1 = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );
const needThyme2 = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];
console.log(needThyme1 == needThyme2);
console.log(needThyme1);
console.log(needThyme2);

const gotTheThyme = [ ...needThyme1.slice(0, 5), { ...needThyme1[5], "haveIngredient": true } ];
console.log(gotTheThyme);

const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
// items.sort(); // this will throw an error 
const sortedItems = [...items].sort();

const numbers = [10, 5, 3, 12, 22, 8];
numbers.sort();
// this will return [10, 12, 22, 3, 5, 8 ]
numbers.sort((a, b)=> a-b);
console.log(numbers);

const sortedGroceries = [...groceryList].sort( (a, b) => (a.item > b.item) ? 1 : -1 );
console.log(sortedGroceries);


//////////////////////////// Map and Filter ////////////////////////////
console.log('//////////////////////////// Map and Filter ////////////////////////////');

// map
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList1 = groceries.map( item => `<li>${item}</li>` );
// [ "<li>pearl onions</li>", "<li>cremini mushrooms</li>", "<li>thyme</li>" ]

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );

// filter
const evens = values.filter( val => val % 2 === 0 );
const odds = values.filter( val => val % 2 !== 0 );

const groceries2 = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries2.filter( item => item.includes("o") );
console.log(oFoods);

const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );



