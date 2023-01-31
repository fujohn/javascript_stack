import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import Error from './components/Error'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Form />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/people/:id' element={ <People /> } />
          <Route path='/planets/:id' element={ <Planets /> } />
          <Route path='/error' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
