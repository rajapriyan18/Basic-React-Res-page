import React from 'react';

import './App.css';
import Nav from './comp/Nav';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Products from './Pages/Products/Products';
import SignUp from './Pages/Sign/SignUp';
import Footer from './comp/Footer/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
         
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
