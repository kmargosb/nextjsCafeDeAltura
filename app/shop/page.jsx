import React from 'react'
import SectionCards from '../components/SectionCards'
import SectionFooter from '../components/SectionFooter'
import ArrayCoffee from '../components/ArrayCoffee'

const Shop = () => {

  return (

    <div className='pt-16'>
      <div className='flex flex-col justify-center items-center gap-6 p-10'>
        <h2 className='text-GreenAll font-medium text-[24px] leading-7'>Últimos orígenes</h2>
        <ArrayCoffee style='flex flex-wrap gap-6 w-[1200px]' gap='gap-6' limit={8} />
      </div>
      <SectionCards />
      <SectionFooter />
    </div>
  )
}

export default Shop