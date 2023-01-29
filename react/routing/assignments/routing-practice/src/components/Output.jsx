import React from "react";
import {useParams} from "react-router-dom"

const Output = (props) => {
    const { output, text, background } = useParams();
    return (
    <>
    {
            isNaN(+output) ? // if output is not a number
            <h2 style={
                text ?
                {color: text, backgroundColor: background} :
                null
            }> The word is: {output} </h2>:
            <h2 style={
                text ?
                {color: text, backgroundColor: background} :
                null
            }> The number is: {output} </h2>
        }
    </>
    );
}

export default Output;