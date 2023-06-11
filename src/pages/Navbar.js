
import { Menu } from '@headlessui/react'
import logo from '../phone logo.png'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'heroicons-react';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        navigate("/");
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    // const handleClick = () => {
    //     navigate("/Cart");
    // };

    return (
        <>
            <div className="min-h-10 bg-gray-100 min-w-screen">
                <div className="w-full text-gray-700 bg-white shadow-md body-font" >
                    <div className="container flex flex-col p-4 mx-auto md:flex-row">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-25"
                                    src={logo}
                                    alt="Your Company"
                                />
                            </div>
                        </div>
                        <nav className=" flex items-center justify-center md:ml-auto">
                            <Link to="/Home" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">Home</Link>
                            <Link to="/Product" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">Product</Link>
                            <Link to="/Gallary" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">Gallary</Link>
                            <Link to="/About" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">About</Link>
                            <Link to="/Contact" className="mr-20 font-semibold text-gray-900 hover:text-orange-500">Contact</Link>
                        </nav>
                        <div className='flex-cart shopping-cart'>
                            <a className='flex'>
                                <ShoppingCart size={40} />
                            </a>
                        </div>

                        <div className=" flex items-end h-full pl-7 ml-10 border-l  border-gray-200 absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <img
                                            className="h-12 w-12 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </Menu.Button>
                                </div>

                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Your Profile
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                onClick={handleLogOut}
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Sign out
                                            </a>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>

                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;

