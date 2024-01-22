import Image from 'next/image'
import React from 'react'

const Card = ({ textH3, textP, imagenSvg }) => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center w-full bg-white p-6 rounded-lg border border-OffWhite'>
            <div className='bg-GreenAll p-3 rounded-[20px]'>
                <Image src={imagenSvg} alt='icon' width={40} height={40}/>
            </div>
            <h3 className='text-[18px] text-DarkGrey font-semibold leading-6 text-center'>{textH3}</h3>
            <p className='text-[14px] text-BlackP leading-4 text-center'>{textP}</p>
        </div>
    )
}

export default Card