'use client'

import React, { useContext } from 'react'
import { DataCoffeeContext } from '../context/DataCoffee'
import ButtonVariants from '../components/ButtonVariants'
import Link from 'next/link'

const TotalCarritoPage = () => {
    
    const { subtotal, totalTotal, ivaCart } = useContext(DataCoffeeContext)

    const delivery = typeof window !== 'undefined' ? localStorage.getItem('delivery') : ''
    
    const formatDelivery = () => delivery === "9" ? Number(delivery).toFixed(2) + ' €' : "GRATIS";

    return (
        <div className={`flex flex-col p-6 gap-4 w-[384px] max-h-[280px] bg-OffWhite`}>
            <div className='flex flex-col gap-4 w-full'>
                <h2 className='text-[18px] leading-6 font-semibold pb-4 border-b border-Taupe'>Total del carrito</h2>
                <div className='border-b-Taupe border-b flex flex-col gap-4 pb-4'>
                    <div className='flex justify-between w-full'>
                        <h3 className='text-[14px] leading-4'>SUBTOTAL</h3>
                        <p className='text-[14px] leading-4 font-semibold'>{subtotal.toFixed(2).replace('.', ',') + ' €'}</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <h3 className='text-[14px] leading-4'>ENVÍO</h3>
                        <p className='text-[14px] leading-4 font-semibold'>{formatDelivery().replace('.', ',')}</p>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <h3 className='text-[14px] leading-4 font-semibold'>TOTAL</h3>
                    <div className='flex flex-col items-end gap-2'>
                        <p className='text[14px] leading-4 font-semibold'>{totalTotal.toFixed(2).replace('.', ',') + ' €'}</p>
                        <p className='text-xs'>Incluye {ivaCart.toFixed(2).replace('.', ',')}€ de IVA</p>
                    </div>
                </div>
            </div>
                <div className='flex gap-4'>
                            <Link href="/checkout">
                                <ButtonVariants intent="verde" size="normal" roundness="normal">
                                    Ir a Checkout
                                </ButtonVariants>
                            </Link>
                            <Link href="/shop" className='px-6 py-3 font-semibold text-[14px] leading-4 text-GreenAll'>
                                Seguir comprando
                            </Link>
                </div>
        </div>
    )
}

export default TotalCarritoPage