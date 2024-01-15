import React from 'react'
import Button from './Button'
import Image from 'next/image'

const SectionHero = () => {
    return (
        <div className='font-outfit bg-OffWhite py-12 px-10 w-full flex justify-center'>
            <div className='flex justify-center items-center gap-6 w-full'>
                <div className='flex flex-col gap-4 flex-1 justify-center'>
                    <h3 className='text-[18px] text-GreenAll font-semibold leading-6'>De la planta a tu taza</h3>
                    <h1 className='text-[40px] font-semibold leading-[44px]'>El mejor café del mundo, ahora en tu casa.</h1>
                    <p className='text-[14px] text-BlackP leading-4'>Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.</p>
                    <div className='flex gap-4'>
                        <Button text='Descubrir orígenes' styles='py-3 px-6 bg-Black text-white rounded' linkTo="/" />
                        <Button text='Comprar café' styles='py-3 px-6 bg-GreenAll text-white rounded ' linkTo="/" />
                    </div>
                </div>
                <Image src='/assets/cafehero.jpeg' width={588} height={390} alt='cafe' className='rounded-[20px]'/>
            </div>
        </div>
    )
}

export default SectionHero