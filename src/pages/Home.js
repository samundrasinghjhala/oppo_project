import Navbar from "./Navbar";
import Cart from './Cart';
import HomeCart from './HomeCart';
import { CartProvider } from 'react-use-cart';

const Home = () => {
    return (
        <>
            <Navbar />
            <CartProvider>
                <HomeCart />
                <Cart />
            </CartProvider>
        </>
    )
}
export default Home;

