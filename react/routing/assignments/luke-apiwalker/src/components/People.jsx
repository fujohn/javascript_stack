import { useParams, useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const People = (props) => { 
    const[apiData, setApiData] = useState([]);
    const { id } = useParams();
    const[homeWorld, setHomeWorld] = useState("");
    const[homeworldId, setHomeworldId] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response.data);
                setApiData(response.data);
                getHomeworldId(response.data.homeworld);
                axios.get(response.data.homeworld)
                    .then((homeworldResponse) => {
                        setHomeWorld(homeworldResponse.data.name);
                    })
                    .catch((err) => console.log(err));
            })
            .catch(err => navigate('/error'));
        }, []);

    const getHomeworldId = (homeworldURL) => {
        // check for 1 character ID
        if (homeworldURL.charAt(homeworldURL.length - 3) === "/") {
            const hwId = homeworldURL.charAt(homeworldURL.length - 2);
            setHomeworldId(hwId);
        } else {
            const firstCharId = homeworldURL.charAt(homeworldURL.length - 3);
            const secondCharId = homeworldURL.charAt(homeworldURL.length - 2);
            const idString = `${firstCharId}${secondCharId}`;
            setHomeworldId(idString);
        }
    }

    return (
        <>
            <h1>{ apiData.name }</h1>
            <p>Height: { apiData.height }</p>
            <p>Hair Color: { apiData.hair_color }</p>
            <p>Eye Color: { apiData.eye_color }</p>
            <p>Skin Color: { apiData.skin_color }</p>
            <p>Homeworld: <Link to={`/planets/${homeworldId}`}>{ homeWorld }</Link></p>
        </>
    );
}

export default People;