import React from 'react'
import Button from '../components/ButtonVariants'
import BagShopPage from './BagShopPage'
import TotalCarritoPage from './TotalCarritoPage'
import ProductsPage from './ProductsPage'

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center p-10 gap-6 w-full pt-[104px]'>
            <BagShopPage/>
            <div className='flex justify-center gap-6 w-[1200px]'>
                <div className='p-2 flex flex-col gap-6'>
                    <ProductsPage/>
                    <h3 className='font-semibold text-[18px] leading-6'>Seleccionar envío</h3>
                    <form >
                        <div>
                            <input type="radio" id="envioGratis" name="tipoDeEnvio" />
                            <label for="envioGratis" class="envioGratis">
                                <div class="tipoDeEnvio">
                                    <b>Envío 5-7 días</b>
                                    <p>Opción estándar sin seguimiento</p>
                                </div>
                                <h3><b>GRATIS</b></h3>
                            </label>
                        </div>
                        <div class="divisor"></div>
                        <div class="envio">
                            <input type="radio" id="envioUrgente" name="tipoDeEnvio" checked />
                            <label for="envioUrgente" class="envioUrgente">
                                <div class="tipoDeEnvio">
                                    <b>Envío Urgente 24h</b>
                                    <p>Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).
                                    </p>
                                </div>
                                <h3>9,00€</h3>
                            </label>
                        </div>
                    </form>
                </div>
                <TotalCarritoPage/>
            </div>
        </div>
    )
}

export default page