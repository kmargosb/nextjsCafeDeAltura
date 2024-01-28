'use client'

import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { DataCoffeeContext } from '../context/DataCoffee';

const FormPage = () => {
    const { register } = useForm();
    const { setDelivery, cart } = useContext(DataCoffeeContext);

    const handleRadioClick = (event) => {
        if(event.target.value == "9"){
            const selectedValue = Number(event.target.value)
            setDelivery(selectedValue);
            localStorage.setItem('delivery', JSON.stringify(selectedValue))
        }else{
            setDelivery(event.target.value)
            localStorage.setItem('delivery', JSON.stringify(event.target.value))
        } 
    };
    if(cart.length === 0){
        return <div></div>;
    }
    return (
        <div className='flex flex-col gap-6'>
            <h3 className='font-semibold text-[18px] leading-6'>Seleccionar envío</h3>
            <form>
                <div className='flex gap-4 border-b-Taupe border-b pb-6 items-center'>
                    <input
                        type="radio"
                        id="envioGratis"
                        className='accent-GreenAll w-4 h-4'
                        name='tipoEnvio'
                        value="GRATIS"
                        {...register("tipoEnvio", {
                            required: {
                                value: "GRATIS",
                                message: "Debes seleccionar un tipo de envío"
                            }
                        })}
                        onClick={handleRadioClick}
                    />
                    <label htmlFor="envioGratis" className='flex gap-4 w-full justify-between items-center'>
                        <div className='w-[666px] flex flex-col gap-1'>
                            <b className="font-semibold text-[14px] leading-4">Envío 5-7 días</b>
                            <p className="text-[14px] leading-4">Opción estándar sin seguimiento</p>
                        </div>
                        <h3 className='flex whitespace-nowrap text-[18px] leading-6 font-semibold'>GRATIS</h3>
                    </label>
                </div>
                <div className='flex gap-4 pt-6 items-center'>
                    <input
                        type="radio"
                        id="envioUrgente"
                        className='accent-GreenAll w-4 h-4'
                        name="tipoEnvio"
                        value="9"
                        {...register("tipoEnvio", {
                            required: {
                                value: "9",
                                message: "Debes seleccionar un tipo de envío"
                            }
                        })}
                        onClick={handleRadioClick}
                    />
                    <label htmlFor="envioUrgente" className='flex gap-4 w-full justify-between items-center'>
                        <div className='w-[666px] flex flex-col gap-1'>
                            <b className="font-semibold text-[14px] leading-4">Envío Urgente 24h</b>
                            <p className="text-[14px] leading-4">Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).</p>
                        </div>
                        <h3 className='flex whitespace-nowrap text-[18px] leading-6 font-semibold'>9.00€</h3>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default FormPage;
