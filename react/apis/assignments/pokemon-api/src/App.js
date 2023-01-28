// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';



function App() {
  const[pokemon, setPokemon] = useState([]) //set as array

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
      // not the actual JSON response body but the entire HTTP response
          return response.json();
      }).then(response => {
      // we now run another promise to parse the HTTP response into usable JSON, available in console
          // console.log(typeof response);
          setPokemon(response.results); // only need array
          // console.log(typeof pokemon);
      }).catch(err=>{
          console.log(err);
      })
    }, []
  );

  return (
    <div className="App">
        <ol>
          {
            pokemon.map((pokemonObj, i) => {
              return (<li key={i}>{pokemonObj.name}</li>)
            })
          }
        </ol>
    </div>
  );
}

export default App;
