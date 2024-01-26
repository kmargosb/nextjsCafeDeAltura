import React from 'react'
import BagShopPage from '../bagshop/BagShopPage'
import TotalCarritoPage from '../bagshop/TotalCarritoPage'

const page = () => {
  return (
    <div className='flex flex-col items-center px-10 gap-6 w-full min-h-screen pt-[104px] pb-10'>
      <h2 className='text-[24px] leading-7 text-GreenAll'>Checkout</h2>
      <div className='flex justify-center gap-6 w-[1200px]'>
      <div className='p-2 flex flex-col gap-6 w-[792px]'>

        </div>
        <TotalCarritoPage showSingleButton="Pagar y realizar pedido"/>
      </div>
    </div>
  )
}

export default page