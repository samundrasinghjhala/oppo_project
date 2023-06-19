import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    getCartTotal,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart

} from './CartSlice'


const ShoppingCart = ({ show }) => {
    const { cart, totalPrice } = useSelector(
        (state) => state.allCart
    )

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, []);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        show && <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4" x-data="app">
            <div className="flex flex-col justify-center h-full">
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100">
                        <div className="font-semibold text-gray-800"> Total Items : {cart.length}</div>
                    </header>
                    <div className="overflow-x-auto p-3">
                        <table className="table-auto w-full">
                            <thead className="text-xs  font-semibold uppercase text-gray-700 bg-gray-50">
                                <tr>

                                    <th className="p-2">
                                        <div className="font-semibold text-left">Product Name</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-left">Price</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="font-semibold text-left">Quantity</div>
                                    </th>
                                    <th></th><th></th>
                                    <th className="p-2 ">
                                        <div className="font-semibold text-center">Action</div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="text-sm divide-y divide-gray-100">
                                {cart?.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="p-2">
                                                <img src={data.img} style={{ height: '6rem' }} />
                                                {data.title}
                                            </td>
                                            {/* <td className="p-2">{data.title}</td> */}
                                            <td className="p-2">Rs. {data.price}</td>
                                            <td className="p-2">Qty: {data.quantity}</td>
                                            <td className="p-2">
                                                <div className="flex justify-center">
                                                    <button className="text-sm flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600" onClick={() => dispatch(decreaseItemQuantity(data.id))}>-</button>

                                                </div>
                                            </td>
                                            <td>
                                                <button className="text-sm flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600" onClick={() => dispatch(increaseItemQuantity(data.id))}>+</button>
                                            </td>
                                            <td className="p-2">
                                                <div className="flex justify-center">
                                                    <button className="text-sm" onClick={() => dispatch(removeItem(data.id))}>
                                                        <svg className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                                <tr>
                                    <td colSpan="5">
                                        <div className='font-semibold'>
                                            <h1 className="text-lg font-bold text-black">Total Amount:</h1>
                                            <h1 className="text-lg font-bold text-blue-500">Rs.{totalPrice}</h1>
                                        </div>
                                    </td>
                                    <td colSpan="2">
                                        <div className='flex space-x-2'>
                                            <button className="rounded-lg bg-green-500 font-bold px-4 py-1.5 text-white duration-100 hover:bg-red-600" onClick={handleClearCart} > Clear Cart</button>
                                            <button className="flex items-center space-x-1.5 font-bold rounded-lg bg-yellow-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"> Buy Now</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShoppingCart;
