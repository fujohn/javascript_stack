///////////////////// About Promises /////////////////////
// some example code you might write (synchronous/line by line)
// const myArray = doSomething();
// doSomethingToMyArray(myArray);
console.log("This message will wait until the above lines complete");

// promise example
const noMondays = new Promise( (resolve, reject) => {
    console.log(Date());
    if(new Date().getDay() === 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});
noMondays
    .then( res => console.log(res) ) // resolved case
    .catch( err => console.log(err) ); // rejected case 