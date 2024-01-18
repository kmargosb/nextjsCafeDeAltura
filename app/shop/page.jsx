'use client'

import React, { useContext } from 'react'
import CoffeeCards from '../components/CoffeeCards'
import SectionCards from '../components/SectionCards'
import SectionFooter from '../components/SectionFooter'
import { DataCoffeeContext } from '../context/DataCoffee'

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
      <div className='flex flex-col gap-10 justify-center items-center p-10'>
        <h2 className='text-GreenAll font-medium text-[24px] leading-7'>{textTitleShop}</h2>
        <div className={styleShop}>
          {coffeeData.map((data, i) => {
            return (
              <CoffeeCards key={i} 
              price={data.price} 
              name={data.brand} 
              available={data.available} 
              img={data.img_url} 
              id={data._id} 
              add={() => handleAddToCart(data)}/>
            )
          })}
        </div>
      </div>
      <SectionCards />
      <SectionFooter />
    </div>





  )
}

export default Shop