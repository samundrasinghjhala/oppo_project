import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/login';
import Home from './pages/Home';
import MainPage from './pages/MainPage';
import { Product } from './pages/Product';
import { Gallary } from './pages/Gallary';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import VenderSignup from './components/Vender/VenderSignup';
import VenderLogin from './components/Vender/Venderlogin';
import ProductForm from './components/Product/ProductForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Gallary" element={<Gallary />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProductForm" element={<ProductForm />} />
          <Route path="/VenderSignup" element={<VenderSignup />} />
          <Route path="/VenderLogin" element={<VenderLogin />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
