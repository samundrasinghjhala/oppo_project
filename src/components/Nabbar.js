import React from 'react';
// import oppo from '../images/oppo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
           {/* <div className="flex-shrink-0">
           <img src={} alt="Logo" className='h-20 rounded-full w-18 ' /> 
          </div>  */}
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200 hover:text-white">Registration</a>
              <a href="#" className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200 hover:text-white">Login</a>
            </div>
          </div>




        </div>
      </div>
    </nav>
  );
}

export default Navbar;
