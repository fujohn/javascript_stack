import './App.css';
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from './components/Home';
import Output from './components/Output';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/:output' element={<Output />} />
          <Route path='/:output/:text/:background' element={<Output />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
