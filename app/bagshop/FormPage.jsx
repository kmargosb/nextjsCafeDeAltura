import React from 'react'

const FormPage = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h3 className='font-semibold text-[18px] leading-6'>Seleccionar envío</h3>
            <form >
                <div className='flex gap-4'>
                    <input type="radio" id="envioGratis" name="tipoDeEnvio" />
                    <label for="envioGratis" >
                        <div className='w-[657px] flex flex-col'>
                            <b>Envío 5-7 días</b>
                            <p>Opción estándar sin seguimiento</p>
                        </div>
                    </label>
                    <h3><b>GRATIS</b></h3>
                </div>
                <div className='flex gap-4'>
                    <input type="radio" id="envioUrgente" name="tipoDeEnvio" />
                    <label for="envioUrgente">
                        <div className='w-[657px] flex flex-col'>
                            <b>Envío Urgente 24h</b>
                            <p>Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).
                            </p>
                        </div>
                    </label>
                    <h3>9,00€</h3>
                </div>
            </form>
        </div>
    )
}

export default FormPage