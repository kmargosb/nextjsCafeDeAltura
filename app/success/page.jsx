import React from 'react'
import check from '../../public/assets/Check.png'
import Image from 'next/image'
import TotalSuccess from './TotalSuccess'
import ButtonVariants from '../components/ButtonVariants'
import Link from 'next/link'


const page = () => {
    return (
        <div className='p-10 pt-[104px] min-h-screen flex flex-col items-center gap-6'>
            <div className='bg-GreenAll w-16 h-16 rounded-[20px] p-3 flex justify-center items-center'>
                <Image src={check} alt='check_icon' width={40} height={40}></Image>
            </div>
            <h2 className='text-[24px] leading-7 font-medium text-GreenAll'>El pedido ha sido realizado con éxito</h2>
            <div className='w-[346px] text-[14px] leading-4 text-center'>
                <p>El pedido #12387 se encuentra en preparación.</p>
                <p>Lo recibirás dentro de las fechas acordadas en tu envío.</p>
                <p>Hemos enviado un ticket a tu correo electrónico.</p>
            </div>
            <TotalSuccess/>
            <Link href='/shop'>
                <ButtonVariants intent='verde' size='normal' roundness='normal'>Volver a la tienda</ButtonVariants>
            </Link>
        </div>
    )
}

export default page