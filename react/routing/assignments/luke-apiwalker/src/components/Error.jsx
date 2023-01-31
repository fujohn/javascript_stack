
import React, { useState, useEffect } from 'react';
import obiwan from './../obiwan.jpeg'

const People = (props) => { 
    return (
        <>
            <h1>Unable to Load Data</h1>
            <img src={obiwan} className="App-logo" alt="Obi-wan meme" />
        </>
    );
}

export default People;