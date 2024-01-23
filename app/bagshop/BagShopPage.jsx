'use client'

import React, { useContext } from 'react'
import { DataCoffeeContext } from '../context/DataCoffee'

const BagShopPage = () => {

    const { totalQuantity } = useContext(DataCoffeeContext)
    return (
        <h2 className='text-GreenAll text-[24px] font-medium leading-7'>
            Cesta({totalQuantity})
        </h2>
    )
}

export default BagShopPage