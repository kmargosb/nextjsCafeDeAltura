import React from 'react'
import SectionCoffeeCards from '../components/SectionCoffeeCards'
import SectionCards from '../components/SectionCards'
import SectionFooter from '../components/SectionFooter'

const Shop = () => {
  return (

    <div className='font-outfit'>
      <SectionCoffeeCards
        style={`flex flex-wrap gap-6 w-[1200px]`}
        textTittle='Últimos orígenes'
        cooffeToShow={8}
      />
      <SectionCards />
      <SectionFooter/>
    </div>

  )
}

export default Shop