'use client'

import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import Button from './Button'
import ShoppingCart from './ShoopingCart'
import { DataCoffeeContext } from '../context/DataCoffee'

const NavBar = () => {

    const { handleButtonClick, isModalOpen, totalQuantity } = useContext(DataCoffeeContext);

    const [isQuantityOpen, setIsQuantityOpen] = useState(false)

    useEffect(() => {
        if (totalQuantity !== 0) {
            setIsQuantityOpen(true)
        } else { setIsQuantityOpen(false) }
    }, [totalQuantity]);

    return (
        <div className='z-50 fixed flex py-3 px-10 justify-between items-center text-white bg-DarkGrey w-full'>
            <Link href="/" className='flex gap-2 items-center'>
                <h2 className='text-[23px] leading-[35px]'>cafedealtura.com</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 26" fill="none">
                    <g clipPath="url(#clip0_14771_150)">
                        <path d="M0.332031 10.9061V18.2096C0.332031 20.2221 1.02112 21.9344 2.39928 23.3464C3.77745 24.7584 5.44868 25.4644 7.41296 25.4644H9.45645C11.2306 25.4644 12.7751 24.872 14.0899 23.6872C15.4047 22.5024 16.1889 21.0174 16.4423 19.2321H16.5374C17.6463 19.2321 18.6046 18.8263 19.4125 18.0148C20.2204 17.2033 20.6244 16.2295 20.6244 15.0934C20.6244 13.9573 20.2204 12.9754 19.4125 12.1477C18.6046 11.32 17.6463 10.9061 16.5374 10.9061C16.5374 10.3543 16.3394 9.8755 15.9433 9.46975C15.5473 9.064 15.08 8.86113 14.5414 8.86113H2.37552C1.80524 8.86113 1.32209 9.064 0.926069 9.46975C0.530044 9.8755 0.332031 10.3543 0.332031 10.9061ZM16.5374 12.9998C17.1077 12.9998 17.5908 13.2026 17.9868 13.6084C18.3829 14.0141 18.5809 14.5092 18.5809 15.0934C18.5809 15.6453 18.3829 16.124 17.9868 16.5298C17.5908 16.9355 17.1077 17.1384 16.5374 17.1384V12.9998ZM14.5414 18.2096C14.5414 19.6378 14.0503 20.8551 13.0682 21.8613C12.0861 22.8676 10.8821 23.3707 9.45645 23.3707H7.41296C6.01895 23.3707 4.83088 22.8676 3.84873 21.8613C2.86659 20.8551 2.37552 19.6378 2.37552 18.2096V10.9061H14.5414V18.2096ZM7.22287 2.19062C7.53969 1.57388 7.44464 1.08698 6.93773 0.729922C6.39914 0.372862 5.95559 0.454012 5.60709 0.973371L5.08433 1.65503C4.51406 2.59637 4.28436 3.61074 4.39525 4.69815C4.50614 5.78555 4.94176 6.71878 5.70213 7.49781C5.89222 7.69257 6.12984 7.78995 6.41498 7.78995C6.70012 7.78995 6.93773 7.69257 7.12782 7.49781C7.53969 7.01091 7.53969 6.52402 7.12782 6.03712C6.71596 5.61514 6.47834 5.1039 6.41498 4.50339C6.35161 3.90288 6.49418 3.34294 6.84268 2.82359L7.22287 2.19062ZM10.7871 4.77118L11.1673 4.38166C11.6108 3.92722 11.6425 3.44032 11.2623 2.92097C11.1356 2.72621 10.9217 2.62071 10.6208 2.60448C10.3198 2.58825 10.0743 2.66129 9.88416 2.82359L9.45645 3.2131C8.75945 3.82984 8.45847 4.56019 8.55351 5.40415C8.64856 6.31303 9.15547 7.04337 10.0743 7.59519C10.1376 7.72503 10.2643 7.78995 10.4544 7.78995C10.8346 7.78995 11.1514 7.62765 11.4049 7.30305C11.7534 6.68632 11.6108 6.19942 10.9772 5.84236C10.6287 5.61514 10.4544 5.43661 10.4544 5.30677L10.7871 4.77118Z" fill="white" />
                    </g>
                </svg>
            </Link>
            <div className=' flex gap-4 text-[14px] leading-[16px] font-semibold'>
                <Link href="/shop" className='p-2 rounded-[10px] hover:bg-hover-nav' >Tienda</Link>
                <Link href="/suscription" className='p-2 rounded-[10px] hover:bg-hover-nav'>Suscripción</Link>
                <Link href="/para_empresas" className='p-2 rounded-[10px] hover:bg-hover-nav'>Para empresas</Link>
                <Link href="/about_us" className='p-2 rounded-[10px] hover:bg-hover-nav'>Sobre nosotros</Link>
                <Link href="/contact" className='p-2 rounded-[10px] hover:bg-hover-nav'>Contacto</Link>
            </div>
            <div className='flex justify-center items-center gap-6'>
                <div className='flex items-center gap-2 text-[14px] leading-[16px] font-semibold'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M3.95312 5C3.95312 3.89543 4.84856 3 5.95312 3H9.23237C9.6628 3 10.0449 3.27543 10.181 3.68377L11.6789 8.17721C11.8362 8.64932 11.6225 9.16531 11.1774 9.38787L8.92013 10.5165C10.0224 12.9612 11.9919 14.9308 14.4366 16.033L15.5653 13.7757C15.7878 13.3306 16.3038 13.1169 16.7759 13.2743L21.2694 14.7721C21.6777 14.9082 21.9531 15.2903 21.9531 15.7208V19C21.9531 20.1046 21.0577 21 19.9531 21H18.9531C10.6689 21 3.95312 14.2843 3.95312 6V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h2>+34 919 49 05 18</h2>
                </div>
                <Button styles='bg-Grey py-3 px-6 rounded text-[14px] leading-[16px] font-semibold' text="Iniciar sesión" />
            </div>
            <button className='flex gap-2' onClick={handleButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 22" fill="none">
                    <path d="M1.97738 8.84C2.0176 8.33881 2.24513 7.87115 2.61465 7.53017C2.98417 7.18918 3.46857 6.9999 3.97138 7H16.0294C16.5322 6.9999 17.0166 7.18918 17.3861 7.53017C17.7556 7.87115 17.9832 8.33881 18.0234 8.84L18.8264 18.84C18.8485 19.1152 18.8133 19.392 18.7232 19.6529C18.6331 19.9139 18.4899 20.1533 18.3027 20.3562C18.1155 20.5592 17.8883 20.7211 17.6354 20.8319C17.3825 20.9427 17.1095 20.9999 16.8334 21H3.16738C2.8913 20.9999 2.61823 20.9427 2.36536 20.8319C2.11249 20.7211 1.88529 20.5592 1.69808 20.3562C1.51086 20.1533 1.36768 19.9139 1.27755 19.6529C1.18742 19.392 1.15229 19.1152 1.17438 18.84L1.97738 8.84V8.84Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 10V5C14 3.93913 13.5786 2.92172 12.8284 2.17157C12.0783 1.42143 11.0609 1 10 1C8.93913 1 7.92172 1.42143 7.17157 2.17157C6.42143 2.92172 6 3.93913 6 5V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {isQuantityOpen && <div className='p-2 w-6 h-6 rounded-full flex justify-center items-center bg-hover-nav text-xs'>
                    {totalQuantity}
                </div>}
            </button>
            {isModalOpen && <ShoppingCart />}
        </div>
    )
}

export default NavBar