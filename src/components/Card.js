import React from 'react'
import product1 from '../images/product1.jpg';
import product2 from '../images/product2.jpg';


const Card = () => {
  return (
    <>

<div class="flex flex-wrap">
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 m-10">
    <div class="max-w-xs rounded overflow-hidden shadow-lg">
      <img class="w-full h-35 object-cover" src={product1} alt="Product 1" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Product 1</div>
        <p class="text-gray-700 text-base">Product 1 description goes here.</p>
      </div>
      <div class="px-6 py-4">
        <p class="text-gray-700 text-base">$19.99</p>
      </div>
    </div>
  </div>

   <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 m-10">
    <div class="max-w-xs rounded overflow-hidden shadow-lg">
      <img class="w-full h-35 object-cover" src={product2} alt="Product 1" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Product 1</div>
        <p class="text-gray-700 text-base">Product 1 description goes here.</p>
      </div>
      <div class="px-6 py-4">
        <p class="text-gray-700 text-base">$19.99</p>
      </div>
    </div>
  </div>


   <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 m-10">
    <div class="max-w-xs rounded overflow-hidden shadow-lg">
      <img class="w-full h-35 object-cover" src={product1} alt="Product 1" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Product 1</div>
        <p class="text-gray-700 text-base">Product 1 description goes here.</p>
      </div>
      <div class="px-6 py-4">
        <p class="text-gray-700 text-base">$19.99</p>
      </div>
    </div>
  </div>

  
</div>

        </>
  )
}

export default Card