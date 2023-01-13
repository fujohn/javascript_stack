import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
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
        const newUser = { username, email, password };

        // inside of the createUser function: used to clear form after submission
        setUsername("");
        setEmail("");
        setPassword("");

        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } value={ username }  />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }  />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password }  />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
