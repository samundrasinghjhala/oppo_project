import React from 'react'
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart();

    if (isEmpty) return <h1 className="text-lg font-bold text-red-500 text-center">Your Cart is empty</h1>
    return (
        <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4" x-data="app">
            <div className="flex flex-col justify-center h-full">
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header class="px-5 py-4 border-b border-gray-100">
                        <div class="font-semibold text-gray-800"> Total Items : ({totalItems})</div>
                    </header>
                    <div class="overflow-x-auto p-3">
                        <table className="table-auto w-full">
                            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th></th>
                                    <th class="p-2">
                                        <div class="font-semibold text-left">Product Name</div>
                                    </th>
                                    <th class="p-2">
                                        <div class="font-semibold text-left">Price</div>
                                    </th>
                                    <th class="p-2">
                                        <div class="font-semibold text-left">Quantity</div>
                                    </th>
                                    <th class="p-2">
                                        <div class="font-semibold text-center">Action</div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="text-sm divide-y divide-gray-100">
                                {items.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td class="p-2">
                                                <img src={item.img} style={{ height: '6rem' }} />
                                            </td>
                                            <td class="p-2">{item.title}</td>
                                            <td class="p-2">{item.price}</td>
                                            <td class="p-2">Quantity({item.quantity})</td>
                                            <td class="p-2">
                                                <div class="flex justify-center">
                                                    <button className="text-sm flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>

                                                </div>
                                            </td>
                                            <td>
                                                <button className="text-sm flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            </td>
                                            <td class="p-2">
                                                <div class="flex justify-center">
                                                    <button className="text-sm" onClick={() => removeItem(item.id)}>
                                                        <svg class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
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
                                    <div className='font-semibold'>
                                        <h1 className="text-lg font-bold text-black">Total Amount:</h1>
                                        <h1 className="text-lg font-bold text-blue-500">Rs.{cartTotal}</h1>
                                    </div>
                                    <div className='flex space-x-2'>
                                        <button className="rounded-lg bg-green-500 px-4 py-1.5 text-white duration-100 hover:bg-red-600" onClick={() => emptyCart()}> Clear Cart</button>
                                        <button className="flex items-center space-x-1.5 rounded-lg bg-green-500 px-4 py-1.5 text-white duration-100 hover:bg-red-600"> Pay Now</button>
                                    </div>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cart;
