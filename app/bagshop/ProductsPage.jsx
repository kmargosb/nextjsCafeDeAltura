'use client'

import React, { useContext } from 'react'
import Image from 'next/image';
import { DataCoffeeContext } from '../context/DataCoffee';

const ProductsPage = () => {

    const { cart, dispatch } = useContext(DataCoffeeContext);

    const handleAdd = (itemId) => {
        dispatch({
            action: "ADDITION",
            product: { _id: itemId }
        })
    }
    const handleSubtract = (itemId) => {
        dispatch({
            action: "SUBTRACTION",
            product: { _id: itemId }
        })
    }

    if(cart.length === 0){
        return <div></div>;
    }

    return (
        <div className='felx flex-col '>
            <h3 className='font-semibold text-[18px] leading-6'>
                Productos
            </h3>
            {cart.map((item, i) => (
                <div key={i} className='flex gap-6 py-6 border-b-[1px] border-b-Taupe last:border-none last:pb-0'>
                    <div className="flex gap-6 w-full justify-between">
                        <div className='w-[88px] flex gap-2 select-none items-center'>
                            <div className="cursor-pointer w-6 h-6" onClick={() => handleSubtract(item.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
                                    <path d="M18 12.8301H6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className='flex justify-center items-center text-GreenAll bg-GreenB rounded-full w-6 h-6'>{item.quantity}</p>
                            <div className="cursor-pointer w-6 h-6" onClick={() => handleAdd(item.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
                                    <path d="M12 6.83008V12.8301M12 12.8301V18.8301M12 12.8301H18M12 12.8301H6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <Image src={item.img} alt={item.name} width={56} height={56} className="bg-white rounded-md select-none" />
                        <div className='flex flex-col gap w-[506px]'>
                            <h3 className="font-semibold text-[14px] leading-4">{item.name}</h3>
                            <p className="text-[14px] leading-4">Paquete de café, 250 gr</p>
                        </div>
                        <p className='flex whitespace-nowrap text-[18px] leading-6 font-semibold'>{item.price.toFixed(2) + ' €'}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsPage