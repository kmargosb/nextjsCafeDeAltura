import React from 'react'

const FormPage = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h3 className='font-semibold text-[18px] leading-6'>Seleccionar envío</h3>
            <form >
                <div className='flex gap-4 border-b-Taupe border-b pb-6'>
                    <input type="radio" id="envioGratis" name="tipoDeEnvio" className='accent-GreenAll' />
                    <label for="envioGratis" className='flex gap-4 w-full justify-between items-center'>
                        <div className='w-[666px] flex flex-col gap-1'>
                            <b className="font-semibold text-[14px] leading-4">Envío 5-7 días</b>
                            <p className="text-[14px] leading-4">Opción estándar sin seguimiento</p>
                        </div>
                    <h3 className='flex whitespace-nowrap text-[18px] leading-6 font-semibold'>GRATIS</h3>
                    </label>
                </div>
                <div className='flex gap-4 pt-6'>
                    <input type="radio" id="envioUrgente" name="tipoDeEnvio" className='accent-GreenAll' />
                    <label for="envioUrgente" className='flex gap-4 w-full justify-between items-center'>
                        <div className='w-[666px] flex flex-col gap-1'>
                            <b className="font-semibold text-[14px] leading-4">Envío Urgente 24h</b>
                            <p className="text-[14px] leading-4">Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).
                            </p>
                        </div>
                        <h3 className='flex whitespace-nowrap text-[18px] leading-6 font-semibold'>9,00€</h3>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default FormPage