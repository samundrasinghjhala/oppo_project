import Navbar from "./Navbar";
import Cart from './Cart';
import HomeCart from './HomeCart';
import { CartProvider } from 'react-use-cart';
import { useState } from "react";
import Footer from "./Footer";

const Home = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <CartProvider>
                <Navbar show={setShow} />
                <HomeCart />
                {
                    show && <Cart />
                }

            </CartProvider>
            <Footer />
        </>
    )
}
export default Home;

