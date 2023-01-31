import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Form = (props) => {
    const[dataType, setDataType] = useState("");
    const[id, setId] = useState("");
    const[inputError, setInputError] = useState("");
    const navigate = useNavigate();

    const sendForm = (e) => {
    e.preventDefault();
    navigate("/"+ dataType + "/" + id);
    setDataType("");
    setId("");
    }

    const handleDataType = (e) => {
        setDataType(e.target.value);
        if (e.target.value.length === 0) {
            setInputError('Please select valid search type!');
        } else {
            setInputError(''); // empty string is falsy
        }
    };

    const handleId = (e) => {
        setId(e.target.value);
        if (e.target.value.length === 0) {
            setInputError('Select ID');
        } else {
            setInputError(''); // empty string is falsy
        }
    };

    return (
        <form onSubmit={ sendForm }>
            <label>Search for:</label>
            <select value={dataType} onChange={ handleDataType }>
                <option value=''>(Select Data Type)</option>
                <option value='people'>People</option>
                <option value='planets'>Planets</option>
            </select>
            <label>ID:</label>
            <input type="text" value={id} onChange={ handleId } />
            {
                inputError ?
                <input type="submit" value="Search" disabled /> :
                <input type="submit" value="Search" />
            }
            
        </form>
    );
}

export default Form;