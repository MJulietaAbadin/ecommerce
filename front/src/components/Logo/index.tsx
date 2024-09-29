import Image from 'next/image';
import React from 'react';
import logoImage from '../../../public/logo-tech.png';
import { ILogoProps } from '@/interfaces/interfaces';

export default function Logo({ w, h }: ILogoProps) {
  return (
    <div 
      className='relative object-contain' 
      style={{ width: `${w}px`, height: `${h}px` }} 
    >
      <Image  
        src={logoImage} 
        alt='LOGO DIGITAL DEPOT'
        fill={true}
        sizes="(max-width: 768px) 100vh, (max-width: 1200px) 50vw, 33vw"
        priority={true}
      />
    </div>
  );
}
