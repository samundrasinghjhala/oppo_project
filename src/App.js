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
import VenderPO from './components/Vender/VenderPO';
import DealerReq from './components/Dealer/DealerReq.js';
import AdminPage from './components/Admin/AdminPage';
import PublishReq from './components/Admin/PublishReq';
import VenderReqView from './components/Vender/VenderReqView';
import ViewPO from './components/Vender/ViewPO';
import DealerReqView from './components/Dealer/DealerReqView';
import AdminViewVenderReq from './components/Admin/AdminViewVenderReq';
import AdminViewPO from './components/Admin/AdminViewPO';
import Navbar from './pages/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Gallary" element={<Gallary />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProductForm" element={<ProductForm />} />
          <Route path="/VenderSignup" element={<VenderSignup />} />
          <Route path="/VenderLogin" element={<VenderLogin />} />
          <Route path="/VenderPO" element={<VenderPO />} />
          <Route path="/DealerReq" element={<DealerReq />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/PublishReq" element={<PublishReq />} />
          <Route path="/VenderReqView" element={<VenderReqView />} />
          <Route path="/ViewPO" element={<ViewPO />} />
          <Route path="/DealerReqView" element={<DealerReqView />} />
          <Route path="/AdminViewVenderReq" element={<AdminViewVenderReq />} />
          <Route path="/AdminViewPO" element={<AdminViewPO />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
