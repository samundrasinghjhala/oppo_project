import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import product1 from '../image/product1.jpg';
import product2 from '../image/product2.png';
import product3 from '../image/product3.jpg';
import product4 from '../image/product4.png';
import product5 from '../image/product5.png';
import product6 from '../image/product6.png';
import product7 from '../image/product7.png';
import product8 from '../image/product8.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setCount(count + 1);

    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate("/Home");
        }
    }, [])
    console.log(count, "count")
    return (
        <>
            <Navbar />
            <div>
                <section className="py-10 bg-gray-100">
                    <div className="grid max-w-6xl grid-cols-1 gap-6 p-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' ><img src={product1} alt="Oppo Mobile" /> </Link>
                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO A78 5G</h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">18999.00</p>

                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>


                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' ><img src={product2} alt="Oppo Mobile" /></Link>
                                    <div className="absolute inline-flex items-center p-2 bg-white rounded-lg shadow-md bottom-3 left-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="ml-1 text-sm text-slate-400">4.9</span>
                                    </div>
                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO F23 5G</h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">23999.00</p>


                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                            {/* <button className="text-sm" onClick={() => setCount( count + 1)}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>

                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' ><img src={product3} alt="Oppo Mobile" /> </Link>
                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO A17</h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">17000.00</p>
                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                            {/* <button className="text-sm" onClick={() => setCount( count + 1)}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>

                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' > <img src={product4} alt="Oppo Mobile" /> </Link>
                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO A78 5G</h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">30000.00</p>
                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                            {/* <button className="text-sm" onClick={() => setCount( count + 1)}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>

                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' ><img src={product5} alt="Oppo Mobile" /> </Link>

                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO A17K </h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">9499.00</p>
                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                            {/* <button className="text-sm" onClick={() => setCount(count + 1 )}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>

                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' ><img src={product6} alt="Oppo Mobile" /></Link>

                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO A77s</h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">16499.00</p>

                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                            {/* <button className="text-sm" onClick={() => setCount(count + 1)}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' ><img src={product7} alt="Oppo Mobile" /></Link>

                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO A77</h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">15499.00</p>

                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                            {/* <button className="text-sm" onClick={() => setCount(count + 1)}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' ><img src={product8} alt="Oppo Mobile" /></Link>

                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO A78</h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">16000.00</p>

                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                            {/* <button className="text-sm" onClick={() => setCount(count + 1)}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>


                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' ><img src={product1} alt="Oppo Mobile" /> </Link>
                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO A78 5G</h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">18999.00</p>

                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>


                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' ><img src={product2} alt="Oppo Mobile" /></Link>
                                    <div className="absolute inline-flex items-center p-2 bg-white rounded-lg shadow-md bottom-3 left-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="ml-1 text-sm text-slate-400">4.9</span>
                                    </div>
                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO F23 5G</h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">23999.00</p>


                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                            {/* <button className="text-sm" onClick={() => setCount( count + 1)}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>

                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' ><img src={product3} alt="Oppo Mobile" /> </Link>
                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO A17</h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">17000.00</p>
                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                            {/* <button className="text-sm" onClick={() => setCount( count + 1)}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>

                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' > <img src={product4} alt="Oppo Mobile" /> </Link>
                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO A78 5G</h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">30000.00</p>
                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                            {/* <button className="text-sm" onClick={() => setCount( count + 1)}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>

                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' ><img src={product5} alt="Oppo Mobile" /> </Link>

                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO A17K </h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">9499.00</p>
                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                            {/* <button className="text-sm" onClick={() => setCount(count + 1 )}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>

                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' ><img src={product6} alt="Oppo Mobile" /></Link>

                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO A77s</h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">16499.00</p>

                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                            {/* <button className="text-sm" onClick={() => setCount(count + 1)}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' ><img src={product7} alt="Oppo Mobile" /></Link>

                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO A77</h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">15499.00</p>

                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                            {/* <button className="text-sm" onClick={() => setCount(count + 1)}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <Link to='/ProductDetails' ><img src={product8} alt="Oppo Mobile" /></Link>

                                </div>

                                <div className="p-2 mt-1">
                                    <h2 className="text-slate-700">OPPO A78</h2>
                                    <p className="mt-1 text-sm text-slate-400">Bank Offer 10% OFF丨Exchange Bonus upto ₹1500</p>

                                    <div className="flex items-end justify-between mt-3">
                                        <p className="text-lg font-bold text-blue-500">16000.00</p>

                                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                            <button className="text-sm" onClick={handleButtonClick}>Add to cart</button>
                                            {/* <button className="text-sm" onClick={() => setCount(count + 1)}>Add to cart</button> */}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </div>
                </section>

            </div>
        </>
    )
}
export default Home;

