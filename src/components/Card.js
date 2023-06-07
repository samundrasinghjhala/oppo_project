import React from 'react'
import product1 from '../images/product1.jpg';
import product2 from '../images/product2.jpg';


const Card = () => {
  return (
    <>

<div className="flex flex-wrap">
  <div className="w-full px-4 m-10 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
    <div className="max-w-xs overflow-hidden rounded shadow-lg">
      <img className="object-cover w-full h-35" src={product1} alt="Product 1" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">Product 1</div>
        <p className="text-base text-gray-700">Product 1 description goes here.</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-base text-gray-700">$19.99</p><br/>
        <button type='submit' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>View</button>

      </div>
    </div>
  </div>

   <div className="w-full px-4 m-10 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
    <div className="max-w-xs overflow-hidden rounded shadow-lg">
      <img className="object-cover w-full h-35" src={product2} alt="Product 1" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">Product 1</div>
        <p className="text-base text-gray-700">Product 1 description goes here.</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-base text-gray-700">$19.99</p><br/>
        <button type='submit' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>View</button>

      </div>
    </div>
  </div>


   <div className="w-full px-4 m-10 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
    <div className="max-w-xs overflow-hidden rounded shadow-lg">
      <img className="object-cover w-full h-35" src={product1} alt="Product 1" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">Product 1</div>
        <p className="text-base text-gray-700">Product 1 description goes here.</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-base text-gray-700">$19.99</p><br/>
        <button type='submit' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>View</button>

      </div>
    </div>
  </div>

  
</div>

        </>
  )
}

export default Card