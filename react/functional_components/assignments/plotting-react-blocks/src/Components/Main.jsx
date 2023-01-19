// Here we create the Header Component that will receive props and we know we want to have a user
//     first and last name
import React from 'react';
    
const Main = (props) => {
    return (
        <div className='main'>
            {props.children}
        </div>
    );
}
export default Main;

