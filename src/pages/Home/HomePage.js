import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import GroupProduct from './GroupProduct';
import { useSelector } from "react-redux";
import ShoppingCart from './ShoppingCart';
import Footer from '../Footer';

const HomePage = ({ alert }) => {
    const [show, setShow] = useState(false);
    const data = useSelector((state) => state.ProductCart)
    const { cart } = useSelector(
        (state) => state.allCart
    )
    useEffect(() => {
        if (show && !cart.length) {
            alert("Your Cart is Empty", "error")
            setShow(false)
        }
    }, [show])
    return (
        <>
            <Navbar show={setShow} count={data} />
            {
                cart.length && <ShoppingCart show={show} />

            }
            <GroupProduct />
            <Footer />
        </>
    )
}
export default HomePage;