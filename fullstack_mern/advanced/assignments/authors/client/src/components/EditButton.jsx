import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const EditButton = (props) => {

    const { authorId } = props;
    const navigate = useNavigate();

    const editPerson = () => {
        navigate(`/edit/${authorId}`);
    }

    return (
        <button onClick={editPerson}>
            Edit
        </button>
    )
}

export default EditButton;

