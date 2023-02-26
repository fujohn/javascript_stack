import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';

function UpdateAuthor(props) {

    const {id} = useParams();
    const navigate = useNavigate();
    const [authorName, setAuthorName] = useState("");
    const [loaded, setLoaded] = useState(false);
    
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then( res => {
                setAuthorName(res.data.authorName);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);

    const updateAuthor = (authorParam) => {
        axios.put('http://localhost:8000/api/authors/' + id, authorParam)
            .then ((res) => {
                console.log('Success creation');
                console.log(res);
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log('Failed creation');
                console.log(err.response.data.errors);
                const errorResponse = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr);
                console.log(errArr);
            })
    };



    return (
        <>
            <Link to="/">Home</Link>
            <h4>Edit this author:</h4>
            {
            loaded ? 
            <AuthorForm initialName={authorName} onSubmitProp = {updateAuthor} errors ={errors} /> :
            <p>Could not get data for this ID, if you would like to add a new author, please use this <Link to='/new'>link</Link></p>
            }
        </>
    );
}

export default UpdateAuthor;