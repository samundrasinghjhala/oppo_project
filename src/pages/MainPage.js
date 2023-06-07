import React from 'react'
import { Link } from "react-router-dom";


const MainPage = () => {
    return (
        <>
            <nav className=" bg-red-300 flex items-center justify-center md:ml-auto">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="hidden md:block">
                            <div className="flex items-baseline ml-10 space-x-4">
                                <Link to="/Signup" className="px-5 py-2 text-md font-medium text-gray-800 rounded-md hover:bg-gray-900 hover:text-white">Registration</Link>
                                <Link to="/login" className="px-5 py-2 text-md font-medium text-gray-800 rounded-md hover:bg-gray-900 hover:text-white">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="main">
            </div>
        </>
    )
}
export default MainPage;