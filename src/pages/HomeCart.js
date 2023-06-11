import React from 'react'
import data from "./Data";
import ItemCard from "./ItemCard";

const HomeCart = () => {
    return (
        <>
            <section className="py-10 bg-gray-100">
                <div className="grid max-w-6xl grid-cols-1 gap-6 p-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.productData.map((item, index) => {
                        return (
                            <ItemCard
                                img={item.img}
                                title={item.title}
                                price={item.price}
                                desc={item.desc}
                                item={item}
                                key={index}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    )
}
export default HomeCart;