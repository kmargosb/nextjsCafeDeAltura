import React from 'react'
import Link from 'next/link'
import CardFaq from './CardFaq'

const SectionFaq = () => {
    const FaqArray = [{
        question: '¿Cómo hago el pedido?',
        answer: 'Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.'
    },
    {
        question: '¿Por qué los precios son tan bajos?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam vero,um dolor sit amet consectetur adipisicing elit. Ipsam vero, cumque magni cumque magnium dolor sit amet consectetur adipisicing elit. Ipsam vero, cumque magni iste quos nobis perspiciatis aliquam debitis commodi assumenda ad! Iure, cupiditate. Fugit aperiam tempora excepturi ipsum doloremque nisi!'
    },
    {
        question: '¿Es posible enviar café a mi oficina? ',
        answer: ''
    }]
    return (
        <div className='font-outfit bg-GreenAll w-full flex flex-col justify-center items-center gap-6 py-12 px-[386px]'>
            <h2 className='text-white font-medium text-[24px] leading-7'>Preguntas frecuentes</h2>
            <div className='flex flex-col items-center gap-4 mt-4'>
                <div className='flex flex-col gap-4'>
                    {FaqArray.map((data, i) => {
                        return (
                            <CardFaq key={i} question={data.question} answer={data.answer} />
                        )
                    })}
                </div>
            </div>
            <Link href='' className='flex gap-4 text-white'>
                <p className='text-[14px] font-semibold underline'>Resolvemos tus dudas</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
                    <path d="M17 8.39258L21 12.3926M21 12.3926L17 16.3926M21 12.3926L3 12.3926" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link>
        </div>
    )
}

export default SectionFaq