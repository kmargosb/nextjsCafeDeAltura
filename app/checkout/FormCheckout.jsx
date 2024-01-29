import React from 'react'
import Image from 'next/image';
import bizzum from '../../public/assets/bizzum.png'

const FormCheckout = () => {

    return (
        <form action="">
            <div className='p-2 flex flex-col gap-6 w-[792px]'>
                <h2 className='text-[18px] leading-6 font-semibold'>Seleccionar método de pago</h2>
                <div className='border-b-Taupe border-b pb-6'>
                    <div className='flex gap-4 pb-6 items-center'>
                        <input
                            type="radio"
                            id="envioGratis"
                            className='accent-GreenAll w-4 h-4'
                            name='tipoEnvio'
                        />
                        <label htmlFor="envioGratis" className='flex gap-4 w-full justify-between items-center'>
                            <div className='w-full flex flex-col gap-1'>
                                <b className="font-semibold text-[14px] leading-4">Tarjeta de débito</b>
                                <p className="text-[14px] leading-4">Opción estándar sin seguimiento</p>
                            </div>
                        </label>
                    </div>
                    <div className='w-[279px] flex flex-col gap-2 text-xs'>
                        <div className='flex flex-col w-full gap-[3px]'>
                            <label htmlFor="titular">Titular</label>
                            <input
                                type="text"
                                id='titular'
                                name='titular'
                                placeholder='Nombre del titular'
                                className='flex w-full h-[36px] py-[10px] px-2 rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                            />
                        </div>
                        <div className='flex flex-col w-full gap-[3px]'>
                            <label htmlFor="numeroTarjeta">Número de la tarjeta</label>
                            <input
                                type="text"
                                id='numeroTarjeta'
                                name='numeroTarjeta'
                                placeholder='1234 1234 1234 1234'
                                className='flex w-full h-[36px] py-[10px] px-2 rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                            />
                        </div>
                        <div className='flex w-full gap-6'>
                            <div className='flex flex-col w-2/4 gap-[3px]'>
                                <label htmlFor="fecha">Fecha de caducidad</label>
                                <input
                                    type="dateCard"
                                    id='dateCard'
                                    name='dateCard'
                                    placeholder='MM / YY'
                                    className='flex w-full h-[36px] py-[10px] px-2 rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                                />
                            </div>
                            <div className='flex flex-col w-2/4 gap-[3px]'>
                                <label htmlFor="cvc" >CVC</label>
                                <input type="text"
                                    id='CVC'
                                    name='CVC'
                                    placeholder='123'
                                    className='flex w-full h-[36px] py-[10px] px-2 rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-b-Taupe border-b'>
                    <div className='flex gap-4 pb-6 items-center'>
                        <input
                            type="radio"
                            id="envioGratis"
                            className='accent-GreenAll w-4 h-4'
                            name='tipoEnvio'
                        />
                        <label htmlFor="envioGratis" className='flex gap-4 w-full justify-between items-center'>
                            <div className='w-full flex flex-col gap-1'>
                                <p className="font-semibold text-[14px] leading-4">Transferencia bancaria a la cuenta ES12 1234 1234 123457890</p>
                                <p className="text-[14px] leading-4">Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
                            </div>
                        </label>
                    </div>
                </div>
                <div>
                    <div className='flex gap-4 items-center'>
                        <input
                            type="radio"
                            id="envioGratis"
                            className='accent-GreenAll w-4 h-4'
                            name='tipoEnvio'
                        />
                        <label htmlFor="envioGratis" className='flex gap-4 w-full items-center'>
                            <p className="font-semibold text-[14px] leading-4">Bizum</p>
                            <Image src={bizzum} alt='simbolo_bizum' width={69} height={30} />
                        </label>
                    </div>
                    <h2 className='text-[18px] leading-7 font-semibold py-6'>Dirección de envío</h2>
                    <div className='w-[521px] flex flex-col gap-2 text-xs'>
                        <div className='flex flex-col w-full gap-[3px]'>
                            <label htmlFor="nombreBizum">Nombre</label>
                            <input
                                type="text"
                                id='nombreBizum'
                                name='nombreBizum'
                                className='flex w-full h-[36px] py-[10px] px-2 rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                            />
                        </div>
                        <div className='flex flex-col w-full gap-[3px]'>
                            <label htmlFor="apellidos">Apellidos</label>
                            <input
                                type="text"
                                id='apellidos'
                                name='apellidos'
                                className='flex w-full h-[36px] py-[10px] px-2 rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                            />
                        </div>
                        <div className='flex flex-col w-full gap-[3px]'>
                            <label htmlFor="teléfono">Teléfono</label>
                            <input
                                type="text"
                                id='teléfono'
                                name='teléfono'
                                placeholder='+34 600 6000 600'
                                className='flex w-full h-[36px] py-[10px] px-2 rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                            />
                        </div>
                        <div className='flex flex-col w-full gap-[3px]'>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id='email'
                                name='email'
                                className='flex w-full h-[36px] py-[10px] px-2 rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                            />
                        </div>
                        <div className="relative flex flex-col w-full gap-[3px]">
                            <label htmlFor="pais">Pais</label>
                            <select name='pais' className="w-full appearance-none h-[36px] py-[10px] px-2 p-2 pr-10 text-Grey rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp">
                                <option value="" >Seleccionar</option>
                                <option value="espana">España</option>
                                <option value="francia">Francia</option>
                                <option value="francia">Portugal</option>
                                <option value="francia">Belgica</option>
                            </select>
                            <div className="pointer-events-none absolute top-[25px] right-0 flex items-center px-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
                                    <path d="M19 9.26758L12 16.2676L5 9.26758" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <div className='flex flex-col w-full gap-[3px]'>
                                <label htmlFor="poblacion">Población</label>
                                <input
                                    type="text"
                                    id='poblacion'
                                    name='poblacion'
                                    className='flex w-full h-[36px] py-[10px] px-2 rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                                />
                            </div>
                            <div className='flex flex-col w-full gap-[3px]'>
                                <label htmlFor="cp">CP</label>
                                <input
                                    type="text"
                                    id='cp'
                                    name='cp'
                                    placeholder='123'
                                    className='flex w-full h-[36px] py-[10px] px-2 rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                                />
                            </div>
                        </div>
                        <div className='flex w-full gap-6'>
                            <div className='flex flex-col w-full gap-[3px]'>
                                <label htmlFor="calle">Calle</label>
                                <input
                                    type="text"
                                    id='calle'
                                    name='calle'
                                    className='flex w-full h-[36px] py-[10px] px-2 rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                                />
                            </div>
                            <div className='flex flex-col w-full gap-[3px]'>
                                <label htmlFor="numeroCalle">Nº</label>
                                <input
                                    type="text"
                                    id='numeroCalle'
                                    name='numeroCalle'
                                    className='flex w-full h-[36px] py-[10px] px-2 rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                                />
                            </div>
                            <div className='flex flex-col w-full gap-[3px]'>
                                <label htmlFor="poblacion">Población</label>
                                <input
                                    type="text"
                                    id='poblacion'
                                    name='poblacion'
                                    className='flex w-full h-[36px] py-[10px] px-2 rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                                />
                            </div>
                            <div className='flex flex-col w-full gap-[3px]'>
                                <label htmlFor="poblacion">Población</label>
                                <input
                                    type="text"
                                    id='poblacion'
                                    name='poblacion'
                                    className='flex w-full h-[36px] py-[10px] px-2 rounded-md border border-gray-300 hover:border-hover-inp focus:border-2 focus:outline-none focus:border-focus-inp'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormCheckout