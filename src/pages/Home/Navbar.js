import { Menu } from '@headlessui/react'
import logo from '../../image/phone logo.png'
import { useNavigate, Link } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartTotal } from './CartSlice';

const Navbar = (props) => {
    const { cart, totalQuantity } = useSelector((state) => state.allCart);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart])

    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        props.alert("SignOut Successfully")
        navigate("/");
    }
    const handleClick = () => {
        props.show((prev) => !prev)
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <div className="flex flex-col p-2 nav-fixed mx-auto md:flex-row min-h-10 min-w-screen w-full text-gray-700 bg-white shadow-md body-font">
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
                    <Link to="/HomePage" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">Home</Link>
                    <Link to="/Product" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">Product</Link>
                    <Link to="/Gallary" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">Gallary</Link>
                    <Link to="/About" className="mr-10 font-semibold text-gray-900 hover:text-orange-500">About</Link>
                    <Link to="/Contact" className="mr-20 font-semibold text-gray-900 hover:text-orange-500">Contact</Link>
                </nav>
                <Space onClick={handleClick} className='px-8 space-x-5'>
                    <Badge count={totalQuantity}>
                        <ShoppingCartOutlined style={{ fontSize: 30 }} />
                    </Badge>
                </Space>
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
        </>
    )
}
export default Navbar;

