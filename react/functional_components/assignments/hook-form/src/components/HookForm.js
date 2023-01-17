import React, { useState } from  'react';
    
const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    // validations
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordMismatch, setPasswordMismatch] = useState("");
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);

        // inside of the createUser function: used to clear form after submission
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError('First Name must be at least 2 characters');
        } else {
            setFirstNameError(''); // empty string is falsy
    }
};

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError('Last Name must be at least 2 characters');
        } else {
            setLastNameError(''); // empty string is falsy
    };
};

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError('Email must be at least 5 characters');
        } else {
            setEmailError(''); // empty string is falsy
    };
};

const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 && e.target.value.length > 0) {
        setPasswordError('Password must be at least 8 characters');
    } else {
        setPasswordError(''); // empty string is falsy
    }
};
    
const matchPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password && e.target.value.length > 0) {
        setPasswordMismatch('Passwords must match');
    } else {
        setPasswordMismatch(''); // empty string is falsy
    }
};
    
    return(
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ handleFirstName } value={ firstName } />
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ handleLastName } value={ lastName } />
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label> 
                    <input type="text" onChange={ handleEmail } value={ email } />
                    {
                        emailError ?
                        <p>{ emailError }</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ handlePassword } value={ password } />
                    {
                        passwordError ?
                        <p>{ passwordError }</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ matchPassword } value={ confirmPassword } />
                    {
                        passwordMismatch ?
                        <p>{ passwordMismatch }</p>:
                        ''
                    }
                </div>
                {
                    firstNameError || lastNameError || emailError || passwordError || passwordMismatch ?
                    <input type="submit" value="Create User" disabled />:
                    <input type="submit" value="Create User" />
                }
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
