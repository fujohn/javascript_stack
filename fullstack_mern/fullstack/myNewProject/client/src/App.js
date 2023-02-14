import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';
const App = () => {
    
    return(
	<div>
      <BrowserRouter>
            <Routes>
	    <Route element={<Main/>} path="/people/" default /> {/* adding the default makes this the default path} */}
      <Route element={<Detail/>} path="/people/:id" />    {/* The :id part of our path is a variable that we must give value to. */}
            </Routes>
      </BrowserRouter>
        </div>
    ) 
}
export default App;