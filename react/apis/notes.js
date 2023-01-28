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
    .catch( err => console.log(err) ); // rejected case '

///////////////////// Consuming APIs /////////////////////
fetch("http://www.example.com")
    .then(response =>{
        //do something
    }).catch(err => {
        console.log(err);
    })

// ES7
let response = await fetch("http://www.example.com");


///////////////////// Axios /////////////////////
import axios from 'axios';

axios.get('http://www.example.com').then(response=>{
    console.log(response);
})