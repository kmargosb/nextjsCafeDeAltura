"use client";

import React, { useEffect, useState } from 'react';
import CoofeeCards from './CoffeeCards'
import Link from 'next/link';
import Image from 'next/image';
import arrow from '../../public/assets/ArrowNarrowRight.png'

const SectionCoffeeCards = ({cooffeToShow, textTittle, seeAll, style}) => {

    const [cafeData, setCafeData] = useState(null);
    const linkApi = "https://cafe-de-altura.vercel.app/api/products";
    
    useEffect(() => {
        const getData = async (url) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                data.products.sort((a,b) => a.available && !b.available ? -1 : !a.available && b.available ? 1 : a.price - b.price)
                const newData = data.products.splice(0,cooffeToShow)
                setCafeData(newData)
                console.log(newData)
            } catch (error) {
                console.log(error);
            }
        };
        getData(linkApi);
    }, [cooffeToShow, linkApi]);

    if (!cafeData) {
        return <div className='flex justify-center items-center h-[606.6px] text-black text-2xl'>Cargando...</div>;
    }

    return (
        <div className='font-outfit flex flex-col gap-10 justify-center items-center p-10'>
            <h2 className='text-GreenAll font-medium text-[24px] leading-7'>{textTittle}</h2>
            <div className={style}>
                {cafeData.map((data,i) => {                    
                    return(
                        <CoofeeCards key={i} price={data.price} name={data.brand} available={data.available} img={data.img_url} id={data._id} />
                    )
                })}
            </div>
            {seeAll && <Link href="/shop"
            className='flex gap-4 items-center justify-center'>
            <p className='text-[14px] font-semibold underline'>Ver todos</p>
            <Image src={arrow} alt='flecha' width={24} height={24}/>
          </Link>}
        </div>
    )
}

export default SectionCoffeeCards