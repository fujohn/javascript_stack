// Here we create the Header Component that will receive props and we know we want to have a user
//     first and last name
import React from 'react';
    
const Header = (props) => {
    // We can assume props looks like an object literal with 2 keys and values because of what was passed in
    // {
    //    "firstName":"Bill",
    //    "lastName":"Justice"
    // }
    const { firstName, lastName } = props; // you can destructure props
    return (
        <div>
            <h1>
                My name is {props.firstName} {props.lastName}
            </h1>
        </div>
    );
}
export default Header;

