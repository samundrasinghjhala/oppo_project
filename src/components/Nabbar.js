import React,{useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

// import {AiOutlineClose} from 'react-icons/ai';
// import oppo from '../images/oppo.jpg';

const Navbar = () => {
  const [toggle, setToggle ] = useState(false);
  return (
    <nav className="bg-gray-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
           
           <div className="flex-shrink-0 text-white">
            {
              toggle ?
              <AiOutlineClose onClick={() => setToggle(!toggle)} className='fixed left-10 top-[18px]'/>
              :
              <AiOutlineMenu onClick={() => setToggle(!toggle)} className='fixed left-10 top-[18px]'/>
            }           
          
          </div> 
          <div className="hidden md:block ">
            <div className="flex items-baseline ml-10 space-x-4">
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-200 rounded-md hover:bg-gray-400 hover:text-white">Registration</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-200 rounded-md hover:bg-gray-400 hover:text-white">Login</a>
            </div>
          </div>

        {/* humbergure menu */}

        <ul className={`duration-1000 fixed w-[250px] h-screen text-white bg-gray-500 top-[64px] ${toggle ? 'left-[0]':'left-[-100%]'}`}>
          <li className='p-5'>Vender  </li>
          <li className='p-5'>Product </li>
          <li className='p-5'>Distributer & Dealer  </li>
          <li className='p-5'>Home  </li>
          <li className='p-5'>Home  </li>
          <li className='p-5'>Home  </li>
        </ul>
        

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
