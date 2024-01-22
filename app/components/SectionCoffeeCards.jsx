import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import arrow from '../../public/assets/ArrowNarrowRight.png'
import ArrayCoffee from './ArrayCoffee';

const SectionCoffeeCards = () => {

    return (
        <div className='flex flex-col gap-10 justify-center items-center p-10'>
            <h2 className='text-GreenAll font-medium text-[24px] leading-7'>Novedades</h2>
            <ArrayCoffee style='flex justify-center gap-6 w-[1200px]' limit={4} />
            <Link href="/shop"
                className='flex gap-4 items-center justify-center'>
                <p className='text-[14px] font-semibold underline'>Ver todos</p>
                <Image src={arrow} alt='flecha' width={24} height={24} />
            </Link>
        </div>
    )
}

export default SectionCoffeeCards