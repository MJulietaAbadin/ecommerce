'use client'
import React from 'react';
import { IButtonProps } from '@/interfaces/interfaces';
import { useRouter } from 'next/navigation';

const Button: React.FC<IButtonProps> = ({ content, onClick, redirectTo }) => {
    const router = useRouter()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (redirectTo) {
            router.push(redirectTo); 
        } else if (onClick) {
            onClick(event); 
        }
    };

    return (
        <button className='px-5 py-2 font-bold tracking-wide rounded-2xl bg-pageColor transition duration-300 ease-in-out hover:bg-pageColorHover text-sm text-white' onClick={handleClick}>
            {content}
        </button>
    );
};

export default Button;
