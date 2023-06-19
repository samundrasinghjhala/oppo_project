import React from 'react'
import ProductCart from './ProductCart';
import { useSelector} from 'react-redux';


const GroupProduct = () => {
    const items = useSelector((state) => state.allCart.items);
   

    return (
        <>
            <section className="py-24 home-Page-image">
                <div className="grid max-w-6xl grid-cols-1 gap-10 p-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {items.default.map((item, index) => {
                        return (
                            <ProductCart
                                img={item.img}
                                title={item.title}
                                price={item.price}
                                desc={item.desc}
                                item={item}
                                key={index} />)
                    })}
                </div>
            </section>
        </>
    )
}
export default GroupProduct;