"use client";

import React, { useContext } from 'react';
import CoofeeCards from './CoffeeCards'
import Link from 'next/link';
import Image from 'next/image';
import arrow from '../../public/assets/ArrowNarrowRight.png'
import { DataCoffeeContext } from '../context/DataCoffee';

const SectionCoffeeCards = ({ limit, style, renderTrue, gap, padd }) => {

    const { coffeeData, textTitleHome, dispatch } = useContext(DataCoffeeContext);

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
        <div className={`flex flex-col ${gap} justify-center items-center ${padd}`}>
            {renderTrue && <h2 className='text-GreenAll font-medium text-[24px] leading-7'>{textTitleHome}</h2>}
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
            {renderTrue && <Link href="/shop"
                className='flex gap-4 items-center justify-center'>
                <p className='text-[14px] font-semibold underline'>Ver todos</p>
                <Image src={arrow} alt='flecha' width={24} height={24} />
            </Link>}
        </div>
    )
}

export default SectionCoffeeCards