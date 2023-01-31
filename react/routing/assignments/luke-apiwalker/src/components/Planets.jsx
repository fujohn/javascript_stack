import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Planets = (props) => { 
    const[apiData, setApiData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data);
                setApiData(response.data);
            })
            .catch(err => console.log(err));
        }, []
    );

    return (
        <>
            <h1>{ apiData.name }</h1>
            <p>Climate: { apiData.climate }</p>
            <p>Terrain: { apiData.terrain }</p>
            <p>Surface Water: { apiData.surface_water }</p>
            <p>Population: { apiData.population }</p>
        </>
    );
}

export default Planets;