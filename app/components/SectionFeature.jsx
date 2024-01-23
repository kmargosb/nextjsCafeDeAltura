import React from 'react'
import cafeteria from '../../public/assets/cafeteria.jpeg'
import Link from 'next/link'
import arrow from '../../public/assets/ArrowNarrowRight.png'
import Image from 'next/image'

const SectionHero = () => {
    return (
        <div className='bg-OffWhite pt-[44.6px] pb-[45.4px] px-10 w-full flex justify-center'>
            <div className='flex justify-between items-center gap-6 w-[1200px]'>
                <div className='flex flex-col gap-4 w-[457px] justify-center items-start'>
                    <h3 className='text-[24px] text-GreenAll font-medium leading-7'>Pruébalo en nuestro coffee shop</h3>
                    <p className='text-[14px] text-BlackP leading-4'>
                        Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.
                    </p>
                    <Link href="/shop" className='flex gap-4 items-center justify-center'>
                        <p className='text-[14px] font-semibold underline'>Cómo llegar</p>
                        <Image src={arrow} alt='flecha' width={24} height={24}/>
                    </Link>
                </div>
                <Image src={cafeteria} alt='flecha' width={588} height={390} className='rounded-[20px] w-[588px] h-[390px]'/>
            </div>
        </div>
    )
}

export default SectionHero