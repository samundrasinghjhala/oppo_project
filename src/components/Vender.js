import React, {useState} from 'react'


const Vender = () => {
    const [gstNo, setGstNo] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [phone ,setPhone] = useState("");
    const [address, setAddress]= useState("");
    

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log('form submitted :', {
            companyName,
            email,
            password,
            gstNo,
            address,
            phone
        })
        
    }
  return (
    <>
    <div className='max-w-md mx-auto'>
        <h2 className='mb-4 text-2xl font-bold text-center'>Vendor Form</h2>
        <form action='' onSubmit={handleSubmit}  className='border p-7'>
            <div className='mb-4'>
                <label className='block mb-1 font-bold' type='gstNo' >GST No.</label>
                <input type= 'text' id='gstNo' className='w-full p-2 border border-gray-300 rounded' 
                value={gstNo} onChange={(e) => setGstNo(e.target.value)}/>
            </div>
            
            <div className='mb-4'>
                    <label className='block mb-1 font-bold' type='compnayName'>Compnay Name</label>
                    <input type='text' id="companyName" className='w-full p-2 border border-gray-300 rounded'
                     value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>

            <div className='mb-4'>
                <label className='block mb-1 font-bold' type='email' >Email</label>
                <input type='text' id='email' className='w-full p-2 border border-gray-300 rounded'
                value={email} onChange={(e) => setEmail(e.target.value)}  />
            </div>

            <div className='mb-4'>
                <label className='block mb-1 font-bold' type='password' >Password</label>
                <input type='password' id='password' className='w-full p-2 border border-gray-300 rounded'
                value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className='mb-4'>
                <label className='block mb-1 font-bold' type='phone' >Phone No.</label>
                <input type='tel' id='phone' className='w-full p-2 border border-gray-300 rounded'
                value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>

            <div className='mb-4'>
                <label className='block mb-1 font-bold' type='text' >Address</label>
                <input type='text' id='address' className='w-full p-2 border border-gray-300 rounded'
                value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>

            <div className='flex justify-center'>
            <button type='submit' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>Submit</button>
            </div>
          

        </form>
    </div>
    </>
    
  )
}

export default Vender