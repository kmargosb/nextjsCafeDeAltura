import React from 'react'
import Link from 'next/link'
import { HiOutlinePhone } from "react-icons/hi";
import ButtonVariants from './ButtonVariants'

const SectionFooter = () => {
    return (
        <div className='flex flex-col items-center gap-[38px] w-full bg-Black text-white' >
            <div className='flex flex-col gap-4 pt-[29px] pb-[38px] w-[1200px]'>
                <Link href="/" className='flex gap-2 items-center'>
                    <h2 className='text-[23px] leading-[35px]'>cafedealtura.com</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 26" fill="none">
                        <g clipPath="url(#clip0_14771_150)">
                            <path d="M0.332031 10.9061V18.2096C0.332031 20.2221 1.02112 21.9344 2.39928 23.3464C3.77745 24.7584 5.44868 25.4644 7.41296 25.4644H9.45645C11.2306 25.4644 12.7751 24.872 14.0899 23.6872C15.4047 22.5024 16.1889 21.0174 16.4423 19.2321H16.5374C17.6463 19.2321 18.6046 18.8263 19.4125 18.0148C20.2204 17.2033 20.6244 16.2295 20.6244 15.0934C20.6244 13.9573 20.2204 12.9754 19.4125 12.1477C18.6046 11.32 17.6463 10.9061 16.5374 10.9061C16.5374 10.3543 16.3394 9.8755 15.9433 9.46975C15.5473 9.064 15.08 8.86113 14.5414 8.86113H2.37552C1.80524 8.86113 1.32209 9.064 0.926069 9.46975C0.530044 9.8755 0.332031 10.3543 0.332031 10.9061ZM16.5374 12.9998C17.1077 12.9998 17.5908 13.2026 17.9868 13.6084C18.3829 14.0141 18.5809 14.5092 18.5809 15.0934C18.5809 15.6453 18.3829 16.124 17.9868 16.5298C17.5908 16.9355 17.1077 17.1384 16.5374 17.1384V12.9998ZM14.5414 18.2096C14.5414 19.6378 14.0503 20.8551 13.0682 21.8613C12.0861 22.8676 10.8821 23.3707 9.45645 23.3707H7.41296C6.01895 23.3707 4.83088 22.8676 3.84873 21.8613C2.86659 20.8551 2.37552 19.6378 2.37552 18.2096V10.9061H14.5414V18.2096ZM7.22287 2.19062C7.53969 1.57388 7.44464 1.08698 6.93773 0.729922C6.39914 0.372862 5.95559 0.454012 5.60709 0.973371L5.08433 1.65503C4.51406 2.59637 4.28436 3.61074 4.39525 4.69815C4.50614 5.78555 4.94176 6.71878 5.70213 7.49781C5.89222 7.69257 6.12984 7.78995 6.41498 7.78995C6.70012 7.78995 6.93773 7.69257 7.12782 7.49781C7.53969 7.01091 7.53969 6.52402 7.12782 6.03712C6.71596 5.61514 6.47834 5.1039 6.41498 4.50339C6.35161 3.90288 6.49418 3.34294 6.84268 2.82359L7.22287 2.19062ZM10.7871 4.77118L11.1673 4.38166C11.6108 3.92722 11.6425 3.44032 11.2623 2.92097C11.1356 2.72621 10.9217 2.62071 10.6208 2.60448C10.3198 2.58825 10.0743 2.66129 9.88416 2.82359L9.45645 3.2131C8.75945 3.82984 8.45847 4.56019 8.55351 5.40415C8.64856 6.31303 9.15547 7.04337 10.0743 7.59519C10.1376 7.72503 10.2643 7.78995 10.4544 7.78995C10.8346 7.78995 11.1514 7.62765 11.4049 7.30305C11.7534 6.68632 11.6108 6.19942 10.9772 5.84236C10.6287 5.61514 10.4544 5.43661 10.4544 5.30677L10.7871 4.77118Z" fill="white" />
                        </g>
                    </svg>
                </Link>
                <div className='flex justify-between items-start w-[1132px] h-[152px]'>
                    <div className='flex flex-col items-start gap-4 w-[255px]'>
                        <h3 className='text-center font-semibold text-[18px] leading-6'>Te ayudamos en</h3>
                        <ButtonVariants intent='gris' size='normal' roundness='normal'>
                            <div className='flex justify-center items-center gap-2'><HiOutlinePhone className='size-6' />+34 919 49 05 18</div>
                        </ButtonVariants>

                        <ButtonVariants intent='gris' size='normal' roundness='normal'>
                            <div className='flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                hola@cafedealtura.com
                            </div>
                        </ButtonVariants>


                    </div>
                    <div className='flex flex-col gap-4 font-semibold leading-4 text-[14px] relative left-[55px]'>
                        <Link href="/shop">Tienda</Link>
                        <Link href="/suscription">Suscripción</Link>
                        <Link href="/para_empresas">Para empresas</Link>
                        <Link href="/about_us">Sobre nosotros</Link>
                        <Link href="/contact">Contacto</Link>
                    </div>
                    <div className='flex flex-col gap-4 font-semibold leading-4 text-[14px] w-[255px] relative top-[3px] right-[67px] bottom-[69px]'>
                        <Link href="/privacy_politics">Política de privacidad</Link>
                        <Link href="/cookies_politics">Politica de cookies</Link>
                        <Link href="/terms">Términos y condiciones</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFooter