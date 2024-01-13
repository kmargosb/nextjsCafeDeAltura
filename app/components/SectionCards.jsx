import React from 'react'
import Card from './Card'
import check from '../../public/assets/Check.png'
import gift from '../../public/assets/Gift.png'
import truck from '../../public/assets/Truck.png'
// import fondo from '/assets/backgroundcafecards.jpeg'



const SectionCards = () => {
    const dataCards = [
        {
            textH3: "Recibe tu pedido sin preocuparte",
            textP: "Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.",
            imagenSvg: check
        },
        {
            textH3: "Envío en 24/48h",
            textP: "Pide tu café antes de las 12h y lo recibirás al día siguiente.",
            imagenSvg: gift
        },
        {
            textH3: "Descuentos y beneficios",
            textP: "Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.",
            imagenSvg: truck
        }
    ];

    const backgroundDiv = {
        backgroundImage: "url('/assets/backgroundcafecards.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div className="font-outfit flex flex-col gap-6 items-center w-full py-12 px-[147px]" style={backgroundDiv}>
            <h2 className='text-white font-medium text-[24px] leading-7'>Café con las mejores condiciones</h2>
            <div className='flex gap-6 w-[996px]'>

                {dataCards.map((data, i) => {
                    return (
                        <Card key={i} textH3={data.textH3} textP={data.textP} imagenSvg={data.imagenSvg} />
                    )
                })}
            </div>
        </div>
    )
}

export default SectionCards