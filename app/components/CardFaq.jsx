import React from 'react';

const CardFaq = ({ question, answer, isVisible, onToggle }) => {
    return (
        <div className='w-[668px] p-6 flex flex-col gap-4 rounded-[10px] cursor-pointer bg-OffWhite' onClick={onToggle}>
            <div className='flex justify-between items-center'>
                <h3 className='text-[18px] text-DarkGrey font-semibold leading-6'>{question}</h3>
                <svg className={`text-gray-900 transition-transform transform ${isVisible ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 21" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.7071 13.0997C14.3166 13.4902 13.6834 13.4902 13.2929 13.0997L10 9.80679L6.70711 13.0997C6.31658 13.4902 5.68342 13.4902 5.29289 13.0997C4.90237 12.7092 4.90237 12.076 5.29289 11.6855L9.29289 7.68547C9.68342 7.29495 10.3166 7.29495 10.7071 7.68547L14.7071 11.6855C15.0976 12.076 15.0976 12.7092 14.7071 13.0997Z" fill="#111827" />
                </svg>
            </div>
            <div className={`bg-Taupe h-[1px] w-full  ${isVisible ? 'block' : 'hidden'}`}></div>
            {isVisible && <p className='text-xs text-DarkGrey'>{answer}</p>}
        </div>
    );
};

export default CardFaq;
