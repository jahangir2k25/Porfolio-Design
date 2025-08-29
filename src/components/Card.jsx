import React from 'react';

const Card = ({ img, heading, description }) => {
    return (
        <>
            <div className='w-75 shadow-[#1d9bf0] shadow-lg rounded-lg transition-transform duration-300 hover:translate-y-2 hover:scale-98 cursor-pointer'>
                <img className='w-full h-62.5 rounded-t-lg' src={img} alt="" />
                <h2 className='text-xl uppercase font-bold text-center text-[#1d9bf0] py-5'>{heading}</h2>
                <p className='text-white text-sm pb-8 w-65 mx-auto'>{description}</p>
            </div>
        </>
    )
}

export default Card;
