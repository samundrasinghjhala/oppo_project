
import { Menu } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import logo from '../../phone logo.png'

const NavbarAdmin = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        navigate("/");
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <>

            <div className="w-full text-gray-700 bg-white justify-center nav-fixed body-font" >
                <div className=" flex flex-col justify-center shadow-md sticky p-4 mx-auto md:flex-row">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-12 w-22"
                                src={logo}
                                alt="Your Company"
                            />
                        </div>
                    </div>
                    <div className=" flex items-center justify-center  md:ml-auto">
                        <h1 className='font-extrabold text-3xl justify-center '>Admin Panel</h1>
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
        </>
    )
}
export default NavbarAdmin;
