'use client'
import React from 'react'
import ButtonVariants from './ButtonVariants'
import Image from 'next/image'
import Link from 'next/link'

// import ButtonVariants from './ButtonVariants'

const SectionHero = () => {


    return (
        <div className='bg-OffWhite py-12 px-10 w-[full] flex justify-center'>
            <div className='flex justify-center items-center gap-6 w-[1200px] h-[390px]'>
                <div className='flex flex-col w-[588px] gap-4 justify-center'>
                    <h3 className='text-[18px] text-GreenAll font-semibold leading-6'>De la planta a tu taza</h3>
                    <h1 className='text-[40px] font-semibold leading-[44px]'>El mejor café del mundo, ahora en tu casa.</h1>
                    <p className='text-[14px] text-BlackP leading-4'>Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.</p>
                    <div className='flex gap-4'>
                        <ButtonVariants click={() => console.log('hola')} intent="negro" size="normal" roundness="normal">Descubrir orígenes</ButtonVariants>
                        <Link href="/shop">
                            <ButtonVariants intent="verde" size="normal" roundness="normal">Comprar café</ButtonVariants>
                        </Link>
                    </div>
                </div>
                <Image src='/assets/cafehero.jpeg' width={588} height={390} alt='cafe' className=' mim-w-[588px] h-[390px] rounded-[20px]' />
            </div>
        </div>
    )
}

export default SectionHero