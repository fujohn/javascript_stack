import React, { useState, useEffect } from 'react';
import axios from 'axios';
    
const AxiosPokemon = (props) => {
    const[pokemon, setPokemon] = useState([]); //set as array

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                console.log(response.data.results);
                setPokemon(response.data.results);
            })
            .catch(err => console.log(err));
        }, []
    );
    return (
        <ol>
            {
                pokemon.map((pokemonObj, i) => {
                    return (<li key={i}>{pokemonObj.name}</li>)
                })
            }
        </ol>
    );
};
    
export default AxiosPokemon;