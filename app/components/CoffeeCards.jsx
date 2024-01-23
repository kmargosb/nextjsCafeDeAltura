import React from 'react'
import Button from './Button.jsx'
import Image from 'next/image.js'

const CoffeeCards = ({ price, name, img, id, available, add }) => {
    if (available) {
        return (
            <div className='flex flex-col w-[282px] justify-center items-center p-6 gap-6 border rounded-lg hover:bg-OffWhite transition duration-200'>
                <Image src={img} alt='cafe' width={220} height={220} />
                <div className='flex flex-col gap-3 justify-center items-center text-[14px] leading-[16px] '>
                    <p className='font-semibold'>{name}</p>
                    <p className='font-normal'>{price.toFixed(2)} €</p>
                </div>
                <Button
                    text="Añadir"
                    styles="flex p-2 bg-GreenA rounded text-white text-[14px] font-semibold leading-4 hover:bg-GreenAll transition duration-200"
                    onClick={add}
                />
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
                <Button
                    text="Agotado"
                    styles="flex p-2 bg-Taupe rounded text-white text-[14px] font-semibold leading-4 cursor-default"
                />
            </div>
        )
    }
}

export default CoffeeCards