import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './components/Main'
import NewAuthor from './views/NewAuthor'
import UpdateAuthor from './views/UpdateAuthor'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route element={<Main/>} path="/" default /> {/* adding the default makes this the default path} */}
                <Route element={<NewAuthor/>} path="/new" />    {/* The :id part of our path is a variable that we must give value to. */}
                <Route element={<UpdateAuthor/>} path="/edit/:id"/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
