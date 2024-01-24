'use client'

import React, { useContext } from 'react'
import { DataCoffeeContext } from '../context/DataCoffee'
import Button from '../components/Button'

const TotalCarritoPage = () => {

    const { subtotal } = useContext(DataCoffeeContext)

    return (
        <div className='flex flex-col p-6 gap-4 w-[384px] max-h-[280px] bg-OffWhite'>
            <div className='flex flex-col gap-4 w-full'>
                <h2 className='text-[18px] leading-6 font-semibold pb-4 border-b border-Taupe'>Total del carrito</h2>
                <div className='border-b-Taupe border-b flex flex-col gap-4 pb-4'>
                    <div className='flex justify-between w-full'>
                        <h3 className='text-[14px] leading-4'>SUBTOTAL</h3>
                        <p className='text-[14px] leading-4 font-semibold'>{subtotal + ' €'}</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <h3 className='text-[14px] leading-4'>ENVÍO</h3>
                        <p className='text-[14px] leading-4 font-semibold'>GRATIS</p>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <h3 className='text-[14px] leading-4 font-semibold'>TOTAL</h3>
                    <div className='flex flex-col items-end gap-2'>
                        <p className='text[14px] leading-4 font-semibold'>18,00 €</p>
                        <p className='text-xs'>Incluye 3,78€ de IVA</p>
                    </div>
                </div>
            </div>
            <div>
                <Button />
                <Button />
            </div>
        </div>
    )
}

export default TotalCarritoPage