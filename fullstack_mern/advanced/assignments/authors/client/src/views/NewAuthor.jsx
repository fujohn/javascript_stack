import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

function NewAuthor(props) {
    const navigate = useNavigate();
    
    const [errors, setErrors] = useState([]);

    

    const createAuthor = (authorParam) => {
        axios.post('http://localhost:8000/api/authors', authorParam)
            .then ((res) => {
                console.log('Success creation');
                console.log(res);
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log('Failed creation');
                const errorResponse = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr);
                console.log(errArr);
            })
    }

    return (
        <>
            <Link to="/">Home</Link>
            <h4>Add a new author:</h4>
            <AuthorForm initialName="" onSubmitProp = {createAuthor} errors ={errors} />
        </>
    );
}

export default NewAuthor;