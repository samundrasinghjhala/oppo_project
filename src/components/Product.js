import React, {useState} from 'react'


const Product = () => {
    const [sku_product_id, setSku_Product_Id] = useState("");
    const [ModelName, setModelName] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState('');
    const [quantity ,setQuantity] = useState("");
    const [description, setDescription]= useState("");
    const [uploadimage, setUploadImage] = useState("");
    
    

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log('form submitted :', {
           sku_product_id,
           ModelName,
           color,
           price,
           quantity,
           description,
           uploadimage
              
        })
        
    }
  return (
    <>
    <div className='max-w-md mx-auto'>
        <h2 className='mb-4 text-2xl font-bold text-center'>Product Form</h2>
        <form action='' onSubmit={handleSubmit}  className='border p-7'>
            <div className='mb-4'>
                <label className='block mb-1 font-bold' type='text' >Sku Product ID</label>
                <input type= 'text' id='sku_product_id' className='w-full p-2 border border-gray-300 rounded' 
                value={sku_product_id} onChange={(e) => setSku_Product_Id(e.target.value)}/>
            </div>
            
            <div className='mb-4'>
                    <label className='block mb-1 font-bold' type='text'>Model Name</label>
                    <input type='text' id="ModelName" className='w-full p-2 border border-gray-300 rounded'
                     value={ModelName} onChange={(e) => setModelName(e.target.value)} />
            </div>

            <div className='mb-4'>
                <label className='block mb-1 font-bold' type='text' >Color</label>
                <input type='color' id='color' className='w-full p-2 border border-gray-300 rounded'
                value={color} onChange={(e) => setColor(e.target.value)}  />
            </div>

            <div className='mb-4'>
                <label className='block mb-1 font-bold' type='type' >Price</label>
                <input type='type' id='price' className='w-full p-2 border border-gray-300 rounded'
                value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>

            <div className='mb-4'>
                <label className='block mb-1 font-bold' type='text' >Quantity</label>
                <input type='text' id='quantity' className='w-full p-2 border border-gray-300 rounded'
                value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            </div>

            <div className='mb-4'>
                <label className='block mb-1 font-bold' >Description</label>
                <input type='textarea' id='description' className='w-full p-2 border border-gray-300 rounded'
                value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div class="mb-4">
                 <label for="image" className="mb-1 font-bold">Upload Image</label>
                 <input type="file" id="updoadimage" name="uploadimage" className= "w-full p-2 border-gray-300 rounded"
                 value={uploadimage} onChange={(e) => setUploadImage(e.target.value)} />
            </div>


            <div className='flex justify-center'>
            <button type='submit' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>Submit</button>
            </div>
          

        </form>
    </div>
    </>
    
  )
}

export default Product