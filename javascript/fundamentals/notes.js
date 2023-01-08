
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

