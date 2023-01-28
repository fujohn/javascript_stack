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
});

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// sample react component
const someComponent = props => {
    // Note the second argument is an empty array
    const [responseData, setResponseData] = useState(null);
    useEffect(()=>{
        axios.get('http://www.example.com')
            .then(response=>{setResponseData(response.data)})
    }, []);  // This empty array forces useEffect to render ONLY when the component first renders
    return(
        <div>
            {responseData}
        </div>
    )
}

///////////////////// useEffect /////////////////////
//  sample react component
const Example = (props) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, []); // second argument is to set when to change other than first render, if second arg not written, it will not stop updating

    return (
        <div>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
    );
}
export default Example;

// // TimeDisplay.js
// import React, { useEffect, useState } from 'react';

// export default () => {
//     const [time, setTime] = useState(new Date().toLocaleString());

//     useEffect(() => {
//         const int = setInterval(
//             () => setTime(new Date().toLocaleString()),
//             1000
//         );

//         return function clearInt() {
//             clearInterval(int);
//         }
//     }, []);

//     return (
//         <div>Current Time: {time}</div>
//     );
// }