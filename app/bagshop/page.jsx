import React from 'react'
// import Button from '../components/ButtonVariants'
import BagShopPage from './BagShopPage'
import TotalCarritoPage from './TotalCarritoPage'
import ProductsPage from './ProductsPage'
import FormPage from './FormPage'

const page = () => {
    return (
        <div className='flex flex-col items-center px-10 gap-6 w-full min-h-screen pt-[104px]'>
            <BagShopPage/>
            <div className='flex justify-center gap-6 w-[1200px]'>
                <div className='p-2 flex flex-col gap-6 w-[792px]'>
                    <ProductsPage/>
                    <FormPage/>
                </div>
                <TotalCarritoPage/>
            </div>
        </div>
    )
}

export default page