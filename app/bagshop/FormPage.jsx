'use client'

import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const FormPage = () => {
    const { control, handleSubmit, watch } = useForm();

    const onSubmit = (data) => {
        // data son los valores del form
        console.log(data);
    };

    //se usa watch para ver los cambios en tiempo real
    const selectedEnvio = watch('tipoDeEnvio');

    return (
        <div className='flex flex-col gap-6'>
            <h3 className='font-semibold text-[18px] leading-6'>Seleccionar envío</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-4 border-b-Taupe border-b pb-6'>
                    <Controller
                        control={control}
                        name="tipoDeEnvio"
                        render={({ field }) => (
                            <>
                                <input
                                    type="radio"
                                    id="envioGratis"
                                    className='accent-GreenAll'
                                    value="asfsf"
                                    {...field}
                                />
                                <label htmlFor="envioGratis" className='flex gap-4 w-full justify-between items-center'>
                                    <div className='w-[666px] flex flex-col gap-1'>
                                        <b className="font-semibold text-[14px] leading-4">Envío 5-7 días</b>
                                        <p className="text-[14px] leading-4">Opción estándar sin seguimiento</p>
                                    </div>
                                    <h3 className='flex whitespace-nowrap text-[18px] leading-6 font-semibold'>GRATIS</h3>
                                </label>
                            </>
                        )}
                    />
                </div>
                <div className='flex gap-4 pt-6'>
                    <Controller
                        control={control}
                        name="tipoDeEnvio"
                        render={({ field }) => (
                            <>
                                <input
                                    type="radio"
                                    id="envioUrgente"
                                    className='accent-GreenAll'
                                    value="envioUrgente"
                                    {...field}
                                />
                                <label htmlFor="envioUrgente" className='flex gap-4 w-full justify-between items-center'>
                                    <div className='w-[666px] flex flex-col gap-1'>
                                        <b className="font-semibold text-[14px] leading-4">Envío Urgente 24h</b>
                                        <p className="text-[14px] leading-4">Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).</p>
                                    </div>
                                    <h3 className='flex whitespace-nowrap text-[18px] leading-6 font-semibold'>9,00€</h3>
                                </label>
                            </>
                        )}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            <div>
                {/* Muestra el valor seleccionado en tiempo real */}
                <p>Selected Envio: {selectedEnvio}</p>
            </div>
        </div>
    );
};

export default FormPage;
