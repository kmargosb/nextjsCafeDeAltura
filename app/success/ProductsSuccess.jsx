'use client'

import React, { useContext } from 'react'
import Image from 'next/image';
import { DataCoffeeContext } from '../context/DataCoffee';

const ProductsSuccess = () => {

    const { cart } = useContext(DataCoffeeContext);

    return (
        <div className='felx flex-col border-b-Taupe border-b'>
            <h3 className='font-semibold text-[18px] leading-6'>
                Tu pedido
            </h3>
            {cart.map((item, i) => (
                <div key={i} className='flex gap-6 py-6 '>
                    <div className="flex gap-6 w-full justify-between">
                        <Image src={item.img} alt={item.name} width={56} height={56} className="nrounded-md select-none" />
                        <div className='flex flex-col gap w-[506px]'>
                            <h3 className="font-semibold text-[14px] leading-4">{item.name}</h3>
                            <p className="text-[14px] leading-4">Paquete de café, 250 gr</p>
                        </div>
                        <p className='flex whitespace-nowrap text-[18px] leading-6 font-semibold'>{item.price.toFixed(2).replace('.', ',') + ' €'}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsSuccess