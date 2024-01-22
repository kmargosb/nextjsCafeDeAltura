import React from 'react'
import Button from '../components/ButtonVariants'

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center p-10 gap-6 w-full'>
            <h2 className='text-GreenAll text-[24px] font-medium leading-7'>
                Cesta(0)
            </h2>
            <div className='flex gap-6 w-[1200px]'>
                <div className='p-2 flex flex-col gap-6'>
                    <h3 className='font-semibold text-[18px] leading-6'>Productos</h3>
                    <div class="cart-products">
                        {/* RENDER */}
                    </div>
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
                <div className='flex flex-col gap-4 w-[384px]'>
                    <div className='flex flex-col gap-4 w-full'>
                        <h2>Total del carrito</h2>
                        <div className='h-[1px] bg-Taupe w-full'></div>
                        <div className='flex justify-between w-full'>
                            <h3>SUBTOTAL</h3>
                            <p>18,00 €</p>
                        </div>
                        <div className='h-[1px] bg-Taupe w-full'></div>
                        <div className='flex justify-between w-full'>
                            <h3>ENVÍO</h3>
                            <p>GRATIS</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <h3>TOTAL</h3>
                            <div>
                                <p>18,00 €</p>
                                <p>Incluye 3,78€ de IVA</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button />
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page