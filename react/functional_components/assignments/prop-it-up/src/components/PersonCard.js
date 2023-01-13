import React, { useState } from 'react'

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);

    const ageClick = () => {
        setAge(age + 1);
    }

    return ( // returns JSX
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ ageClick }>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard;