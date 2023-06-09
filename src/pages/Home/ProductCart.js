import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from "./CartSlice"

const ProductCart = (props) => {
    const dispatch = useDispatch();

    return (
        <>
            <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img src={props.img} alt="Oppo Mobile" />
                </div>
                <div className="p-2 mt-1">
                    <h2 className="text-slate-700 font-semibold">{props.title}</h2>
                    <p className="mt-1 text-sm text-slate-400">Description :-{props.desc}</p>
                    <div className="flex items-end justify-between mt-3">
                        <p className="text-lg font-bold text-green-500">₹ {props.price}</p>
                        <div className="flex items-center space-x-1.5 rounded-lg bg-yellow-300  px-4 py-1.5 font-bold text-gray-600 duration-100  hover:text-white hover:bg-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <button className="text-sm" onClick={() => dispatch(addToCart(props.item))}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
export default ProductCart;
