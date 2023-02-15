// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import ProductDetail from './components/ProductDetail'
import ProductUpdate from './components/ProductUpdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" default />
          <Route element={<ProductDetail/>} path="/products/:id" />
          <Route element={<ProductUpdate />} path="products/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

