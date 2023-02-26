import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const AuthorForm = (props) => {

    const { initialName, onSubmitProp, errors } = props;
    const [authorName, setAuthorName] = useState(initialName);
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ authorName });
    }

    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <label>Name:</label><br />
            <input type="text" name="authorName" value={authorName} onChange={(e) => setAuthorName(e.target.value)} /><br />
            <button onClick= {() => navigate('/') }>Cancel</button>
            <input type="submit" />
        </form>
    )
}
export default AuthorForm;
        
    
