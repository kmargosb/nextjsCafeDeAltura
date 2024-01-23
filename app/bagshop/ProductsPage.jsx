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

    return (
        <div className='felx flex-col gap-6 select-none'>
            <h3 className='font-semibold text-[18px] leading-6'>
                Productos
            </h3>
            <div className="flex flex-col">
                {cart.map((item, i) => (
                    <div key={i} className=''>
                        <div className="flex gap-6 w-full justify-between items-center">
                            <div className='w-[88px] flex gap-2'>
                                <div className="cursor-pointer w-6 h-6" onClick={() => handleSubtract(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
                                        <path d="M18 12.8301H6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <p className='flex justify-center items-center bg-GreenB rounded-full w-6 h-6'>{item.quantity}</p>
                                <div className="cursor-pointer w-6 h-6" onClick={() => handleAdd(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
                                        <path d="M12 6.83008V12.8301M12 12.8301V18.8301M12 12.8301H18M12 12.8301H6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <Image src={item.img} alt={item.name} width={56} height={56} className="bg-white rounded-md" />
                            <div className='flex flex-col gap w-[506px]'>
                                <h3 className="font-semibold text-[14px] leading-4">{item.name}</h3>
                                <p className="text-[14px] leading-4">Paquete de café, 250 gr</p>
                            </div>
                            <p>{item.price.toFixed(2) + ' €'}</p>
                        </div>
                        <div className='h-[1px] bg-Taupe w-full'></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsPage