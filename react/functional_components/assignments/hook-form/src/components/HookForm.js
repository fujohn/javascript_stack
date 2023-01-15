import React, { useState } from  'react';
    
const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    
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
        const newUser = { firstName, lastName, email, password, confirmPassword };

        // inside of the createUser function: used to clear form after submission
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        console.log("Welcome", newUser);
    };
    
    
    return(
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={ firstName }  />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } value={ lastName }  />
                </div>
                <div>
                    <label>Email: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }  />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password }  />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } value={ confirmPassword }  />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h3>Your Form Data</h3>
            <table>
                <tr>
                    <td>First Name:</td>
                    <td>{ firstName }</td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td>{ lastName }</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{ email }</td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td>{ password }</td>
                </tr>
                <tr>
                    <td>Confirm Password:</td>
                    <td>{ confirmPassword }</td>
                </tr>
            </table>
        </>
        

    );
};
    
export default HookForm;
