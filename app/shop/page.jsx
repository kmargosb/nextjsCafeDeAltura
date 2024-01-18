'use client'

import React, { useContext } from 'react'
import CoffeeCards from '../components/CoffeeCards'
import SectionCards from '../components/SectionCards'
import SectionFooter from '../components/SectionFooter'
import { DataCoffeeContext } from '../context/DataCoffee'
import SectionCoffeeCards from '../components/SectionCoffeeCards'

const Shop = () => {

  const { coffeeData, textTitleShop, styleShop, dispatch } = useContext(DataCoffeeContext);

  const handleAddToCart = (product) => {
    dispatch({
      action: 'ADD_ITEM',
      product: product
    });
  };

  if (!coffeeData) {
    return <div className='flex justify-center items-center h-[606.6px] text-black text-2xl'>Cargando...</div>;
  }

  return (

    <div className='font-outfit'>
      <div className='flex flex-col justify-center items-center gap-6 p-10'>
        <h2 className='text-GreenAll font-medium text-[24px] leading-7'>{textTitleShop}</h2>
        <SectionCoffeeCards style={styleShop} gap='gap-6'/>
      </div>
      <SectionCards />
      <SectionFooter />
    </div>





  )
}

export default Shop