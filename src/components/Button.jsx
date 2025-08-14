import React from 'react';

const Button = ({children, className}) => {
    return (
        <>
            <div>
                <button className={`${className} text-[#1d9bf0] hover:text-[#010a20] border-1 border-[#1d9bf0] rounded-sm py-2 px-5 text-lg font-semibold uppercase hover:bg-[#1d9bf0] duration-300 cursor-pointer`}>{children}</button>
            </div>
        </>
    )
}

export default Button;
