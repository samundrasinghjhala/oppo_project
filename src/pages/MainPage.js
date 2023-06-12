import React from 'react'
import { Link } from "react-router-dom";
import logo from '../phone logo.png'
import Footer from './Footer';


const MainPage = () => {
    return (
        <>
            <div className="min-h-10 nav-fixed min-w-screen">
                <div className="w-full text-gray-700 bg-violet-200 shadow-md body-font" >
                    <div className="container flex flex-col p-4 mx-auto md:flex-row">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-20"
                                    src={logo}
                                    alt="Your Company"
                                />
                            </div>
                        </div>
                        <nav className=" flex items-center justify-center md:ml-auto">
                            <Link to="/" className="mr-10 font-semibold text-gray-900 hover:text-blue-500">Home</Link>
                            <Link to="/Product" className="mr-10 font-semibold text-gray-900 hover:text-blue-500">Product</Link>
                            <Link to="/Gallary" className="mr-10 font-semibold text-gray-900 hover:text-blue-500">Gallary</Link>
                            <Link to="/About" className="mr-10 font-semibold text-gray-900 hover:text-blue-500">About</Link>
                            <Link to="/Contact" className="mr-20 font-semibold text-gray-900 hover:text-blue-500">Contact</Link>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex w-full lg:w-1/2 main justify-around items-center">
                <div className=" bg-black opacity-20 inset-0 z-0">
                </div>
                <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                    <h1 className="text-white font-bold text-4xl font-sans">PHONE STORE</h1>
                    <p className="text-white mt-1">Supply Chain Management</p>
                    <div className="flex justify-center lg:justify-start mt-6">
                        <Link to="/login" className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default MainPage;