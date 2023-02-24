import React, { useState } from 'react';
import axios from 'axios';

const Main = () => {
    const [title, setTitle] = useState("");
    const [numPages, setNumPages] = useState(0);
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]); 

    const onSubmitHandler = e => {
        e.preventDefault();

        console.log(title);
        console.log(typeof(numPages));

        const pages = parseInt(numPages);
        console.log(typeof(pages));

        //Send a post request to our API to create a Book
        axios.post('http://localhost:8000/api/books', {
            title,
            pages
        })
            .then(res=>console.log(res)) // If successful, do something with the response. 
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Title</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} />
                    { errors.title ? 
                        <p>{errors.title.message}</p>
                        : null
                    }
                </p>
                <p>
                    <label>Pages</label>
                    <input type="text" onChange={e => setNumPages(e.target.value)} />
                    { errors.numberOfPages ? 
                        <p>{errors.numberOfPages.message}</p>
                        : null
                    }
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Main;

