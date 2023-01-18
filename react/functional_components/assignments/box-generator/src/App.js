
import Form from './Components/Form';
import Display from './Components/Display';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [ boxArray, setBoxArray ] = useState([]);

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Form boxArray={ boxArray } setBoxArray={ setBoxArray } />
      <Display boxArray={ boxArray } />
    </div>
  );
}

export default App;
