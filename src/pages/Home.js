import Navbar from "./Navbar";
// import Cart from './Cart';
// import HomeCart from './HomeCart';
// import { CartProvider } from 'react-use-cart';
// import { useState } from "react";
import Footer from "./Footer";
import Product from '../image/product1.png'


const Home = (props) => {
    // const [show, setShow] = useState(false);
    // console.warn("Home", props.data)
    // console.warn("remove", props)
    return (
        <>
            {/* <CartProvider>
                <Navbar show={setShow} />
                <HomeCart />
                {
                    show && <Cart />
                }

            </CartProvider> */}
            <Navbar data={props.data} />
            <div>

                <article className="py-24 px-12 h-22 w-96 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                        <img src={Product} alt="Oppo Mobile" />
                    </div>
                    <div className="p-2 mt-1">
                        <h2 className="text-slate-700 font-semibold">OPPO Mobile</h2>
                        <p className="mt-1 text-sm text-slate-400">Description : ok</p>

                        <div className="flex items-end justify-between mt-3">
                            <p className="text-lg font-bold text-green-500">Rs.19999</p>
                            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <button className="text-sm" onClick={() => props.addToCartHandler({ price: 19999, name: "OPPO mobile" })}>Add to cart</button>
                            </div>
                            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <button className="text-sm" onClick={() => props.removeToCartHandler()}>Remove</button>
                            </div>
                        </div>
                    </div>

                </article>
            </div>
            <Footer />
        </>
    )
}
export default Home;

