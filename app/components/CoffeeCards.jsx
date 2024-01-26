import React from 'react'
import ButtonVariants from './ButtonVariants'
import Image from 'next/image.js'

const CoffeeCards = ({ price, name, img, id, available, add }) => {
    if (available) {
        return (
            <div className='flex flex-col w-[282px] justify-center items-center p-6 gap-6 border rounded-lg group hover:bg-OffWhite transition duration-200'>
                <Image src={img} alt='cafe' width={220} height={220} />
                <div className='flex flex-col gap-3 justify-center items-center text-[14px] leading-[16px] '>
                    <p className='font-semibold'>{name}</p>
                    <p className='font-normal'>{price.toFixed(2)} €</p>
                </div>
                <ButtonVariants click={add} intent="verdeA" size="peque" roundness="normal">Añadir</ButtonVariants>
            </div>
        )
    }
    else {
        return (
            <div className='flex flex-col w-[282px] justify-center items-center p-6 gap-6 border rounded-lg opacity-45 -z-20'>
                <Image src={img} alt='cafe' width={220} height={220} />
                <div className='flex flex-col gap-3 justify-center items-center text-[14px] leading-[16px] '>
                    <p className='font-semibold'>{name}</p>
                    <p className='font-normal'>{price.toFixed(2)} €</p>
                </div>
                <ButtonVariants intent="agotado" size="peque" roundness="normal">Agotado</ButtonVariants>
            </div>
        )
    }
}

export default CoffeeCards