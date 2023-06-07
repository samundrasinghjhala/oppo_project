import React, {useState} from 'react'
// import Product from './Product';

const PublishRequirement = () => {
    const [product, setProduct] = useState("");
    const [quantity ,setQuantity] = useState("");
    const [description, setDescription]= useState("");
    const [closeon, setCloseon] = useState("");
    
    
    

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log('form submitted :', {
           product,
           quantity,
           description,
           closeon
              
        })
        
    }
  return (
    <>
    <div className='max-w-md mx-auto'>
        <h2 className='mb-4 text-2xl font-bold text-center'>Publish Requirement Form</h2>
        <form action='' onSubmit={handleSubmit}  className='border p-7'>
            <div className='mb-4'>
                <label className='block mb-1 font-bold' type='text' >Product</label>
                <input type= 'text' id='product' className='w-full p-2 border border-gray-300 rounded' 
                value={product} onChange={(e) => setProduct(e.target.value)}/>
            </div>
            
            <div className='mb-4'>
                    <label className='block mb-1 font-bold' type='text'>Quantity</label>
                    <input type='text' id="quantity" className='w-full p-2 border border-gray-300 rounded'
                     value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>

            <div className='mb-4'>
                <label className='block mb-1 font-bold' type='text' >Description</label>
                <input type='textarea' id='description' className='w-full p-2 border border-gray-300 rounded'
                value={description} onChange={(e) => setDescription(e.target.value)}  />
            </div>

            <div className='mb-4'>
                <label className='block mb-1 font-bold' type='date' >Close On</label>
                <input type='date' id='closeon' className='w-full p-2 border border-gray-300 rounded'
                value={closeon} onChange={(e) => setCloseon(e.target.value)}/>
            </div>

            <div className='mb-4'>
                <label className='block mb-1 font-bold' type='text' >Status</label>
                <label class="flex items-center space-x-2">
                    <input type="radio" class="form-radio text-blue-500"/>
                    <span class="text-gray-700">Option 1</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="radio" class="form-radio text-blue-500"/>
                    <span class="text-gray-700">Option 2</span>
                </label>
                <label class="flex items-center space-x-2">
                    <input type="radio" class="form-radio text-blue-500"/>
                    <span class="text-gray-700">Option 3</span>
                </label>
            </div>

           

            <div className='flex justify-center'>
            <button type='submit' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>Submit</button>
            </div>
          

        </form>
    </div>
    </>
    
  )
}

export default PublishRequirement