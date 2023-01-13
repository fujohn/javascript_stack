import React, { useState } from 'react';
    
const Counter = props => {
    const [state, setState] = useState({ // can pass dict for multiple, or primitive for singular, either way, destructors are setters and getters respectively
        clickCount: 0
    });

    const handleClick = () => {
        setState({                   // the setter will update the value held in state
            clickCount: state.clickCount + 1
        });
    }



    // // this can be turned into line 25
    // const [state1, setState1] = useState({ // seems like a lot of extra syntax just to instantiate
    //     name: ""                         // one piece of state that's holding an empty string, doesn't it?
    // });
    // const onClick = () => {
    //     setState1({name: "Scary Terry"}) // here we have to go inside our object, get to our appropriate key,
    // }                                   // THEN change the value
    // console.log(state1.name);

    // // the above can be simplified to this (where the State names are changed into the actual variables themselves)
    // const [name, setName] = useState(""); // we don't have to stick with only state and setState as variable names
    // const onClick = () => {
    //     setName("Scary Terry") // no layers to peel back to get to the value we want to change!
    // }
    // console.log(name); // now "state" represents only the string value

    // const [text, setText] = useState("");
    // setText("state state I am setting state!!!");
    // console.log(text); // The text is given in line 33

    // const [state2, setState2] = useState({
    //     items: [],
    //     totalPrice: 0.00
    // });
    // setState2({ items: state2.items, totalPrice: state2.totalPrice + 10.99 });
    // console.log(state2.items); // empty list forever

    // const [arr, setArr] = useState([]);
    // for(let i=1; i<=5; i++) {
    //     setArr([...arr, i]);
    // }
    // console.log(arr); // [1,2,3,4,5]

    // const [state3, setState3] = useState({
    //     greeting: "Knock knock, "
    // });
    // setState3({ greeting: state3.greeting + "Neo" });
    // console.log(state3.greeting); //Knock knock, Neo
    
    

    return (
        <div>
            { state.clickCount }    
            {/* displaying the current value held in our state object */}
            <button onClick={ handleClick }>Click Me</button>
        </div>
    );
}
    
export default Counter;

// also possible:

// import React, { useState } from 'react';
    
// const Counter = props => {
//     const [count, setCount] = useState(0);   // use descriptive names for your destructured variables

//     const handleClick = () => {
//         setCount(count + 1);
//     }
 
//     return (
//         <div>
//             { count }
//             <button onClick={ handleClick }>Click Me</button>
//         </div>
//     );
// }
    
// export default Counter;

