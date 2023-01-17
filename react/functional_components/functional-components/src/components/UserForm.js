
import React, { useState } from 'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(""); // to validate pw (see line 42)
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // create a javascript object to hold all of the values
        // const newUser0 = { 
        //     username: username, 
        //     email: email, 
        //     password: password 
        // };
        // alternative to the above for ES6
        // shorthand ES6 syntax for building an object
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
    
        // updating state will change the message to be displayed in the form
        setHasBeenSubmitted( true );
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
        return "Thank you for submitting the form!";
	} else {
        return "Welcome, please submit the form";
	}
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError('Password must be at least 8 characters long!');
        } else {
            setPasswordError(''); // empty string is falsy
        }
    };
    
    return (
        <form onSubmit={ createUser }>
            {/* <h3>{ formMessage() }</h3> // this does the same thing as the Ternary operator below */}
            {
                hasBeenSubmitted ? 
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3> 
            }
            <div>
                <label>Username: </label> 
                <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ handlePassword } />
                {
                    passwordError ?
                    <p>{ passwordError }</p>:
                    ''
                }
            </div>
            {
                passwordError ?
                <input type="submit" value="Create User" disabled />:
                <input type="submit" value="Create User" />
            }
        </form>
    );
};
    
export default UserForm;
