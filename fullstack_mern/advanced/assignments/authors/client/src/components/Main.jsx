import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

function Main(props) {

    const [authorList, setAuthorList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res);
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err)=>console.log(err));
    }, [])

    const removeFromDom = authorId => {
            setAuthorList(authorList.filter(author=> author._id !== authorId));
    }
    
    
    return (
        <>
        <Link to="/new">Add an author</Link>
        <h4>We have quotes by:</h4>
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
            </thead>
            <tbody>
                {
                    authorList.map((author, idx) => {
                        return (
                            <tr>
                                <td>{author.authorName}</td>
                                <td><EditButton authorId={author._id} /> <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} /></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>

    );
}

export default Main;


