'use client'

import React, { useContext } from 'react'
import CoofeeCards from './CoffeeCards'
import { DataCoffeeContext } from '../context/DataCoffee';

const ArrayCoffee = () => {

    const { coffeeData, dispatch } = useContext(DataCoffeeContext);

    const handleAddToCart = (product) => {
        dispatch({
            action: 'ADD_ITEM',
            product: product
        });
    };

    if (!coffeeData) {
        return <div className='flex justify-center items-center h-[606.6px] text-black text-2xl'>Cargando...</div>;
    };

    return (
        <div className={style}>
            {coffeeData?.slice(0, limit).map((data, i) => {
                return (
                    <CoofeeCards key={i}
                        price={data.price}
                        name={data.brand}
                        available={data.available}
                        img={data.img_url}
                        id={data._id}
                        add={() => handleAddToCart(data)} />
                )
            })}
        </div>
    )
}

export default ArrayCoffee