import React from 'react'
import data from "./Data";
import ItemCard from "./ItemCard";

const HomeCart = () => {
    return (
        <>
            <section className="py-24 home-Page-image">
                <div className="grid max-w-6xl grid-cols-1 gap-10 p-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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