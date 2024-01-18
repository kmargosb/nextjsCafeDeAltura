"use client";

import React, { useContext, useEffect, useState } from 'react';
import CoofeeCards from './CoffeeCards'
import Link from 'next/link';
import Image from 'next/image';
import arrow from '../../public/assets/ArrowNarrowRight.png'
import { DataCoffeeContext } from '../context/DataCoffee';

const SectionCoffeeCards = () => {

    const { coffeeData, textTitleHome, styleHome, dispatch, limit } = useContext(DataCoffeeContext);

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
        <div className='font-outfit flex flex-col gap-10 justify-center items-center p-10'>
            <h2 className='text-GreenAll font-medium text-[24px] leading-7'>{textTitleHome}</h2>
            <div className={styleHome}>
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
            <Link href="/shop"
                className='flex gap-4 items-center justify-center'>
                <p className='text-[14px] font-semibold underline'>Ver todos</p>
                <Image src={arrow} alt='flecha' width={24} height={24} />
            </Link>
        </div>
    )
}

export default SectionCoffeeCards