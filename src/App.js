import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/login';
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
import Navbar from './pages/Home/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/Home/HomePage';
import ShoppingCart from './pages/Home/ShoppingCart';


function App() {

  const handleToast = (msg, type) => {
    if (type === "error") {
      notifyErrorAlert(msg);
    } else {
      notifySuccessAlert(msg);
    }
  }

  const toastOptions = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const notifyErrorAlert = (error) => {
    toast.error(`Error: ${error} `, toastOptions);
  };
  const notifySuccessAlert = (success) => {
    toast.success(`${success}`, toastOptions);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage alert={handleToast} />} />
          <Route path="/login" element={<Login alert={handleToast} />} />
          <Route path="/Signup" element={<Signup alert={handleToast} />} />
          <Route path="/Navbar" element={<Navbar alert={handleToast} />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Gallary" element={<Gallary />} />
          <Route path="/HomePage" element={<HomePage alert={handleToast} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProductForm" element={<ProductForm alert={handleToast} />} />
          <Route path="/VenderSignup" element={<VenderSignup alert={handleToast} />} />
          <Route path="/VenderLogin" element={<VenderLogin alert={handleToast} />} />
          <Route path="/VenderPO" element={<VenderPO alert={handleToast} />} />
          <Route path="/DealerReq" element={<DealerReq alert={handleToast} />} />
          <Route path="/AdminPage" element={<AdminPage alert={handleToast} />} />
          <Route path="/PublishReq" element={<PublishReq alert={handleToast} />} />
          <Route path="/VenderReqView" element={<VenderReqView />} />
          <Route path="/ViewPO" element={<ViewPO />} />
          <Route path="/DealerReqView" element={<DealerReqView />} />
          <Route path="/AdminViewVenderReq" element={<AdminViewVenderReq />} />
          <Route path="/AdminViewPO" element={<AdminViewPO />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />

        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
    </div>
  );
}
export default App;
