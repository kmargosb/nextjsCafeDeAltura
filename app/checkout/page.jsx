import React from 'react'
import TotalCheckout from './TotalCheckout'
import FormCheckout from './FormCheckout'
import PruebaForm from './PruebaForm'
import NuevaFormCheckout from './NuevaFormCheckout'

const page = () => {
  return (
    <div className='flex flex-col items-center px-10 gap-6 w-full min-h-screen pt-[104px] pb-10'>
      <h2 className='text-[24px] leading-7 text-GreenAll'>Checkout</h2>
      <div className='flex justify-center gap-6 w-[1200px]'>
        <NuevaFormCheckout/>
        <TotalCheckout/>
      </div>
    </div>
  )
}

export default page