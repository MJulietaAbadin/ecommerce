import { accesoriesIcon, iPhoneIcon, laptopIcon, tabletIcon } from '@/helpers/icons'
import Link from 'next/link'
import React from 'react'

export default function LandingCategories() {
  return (
    <div className='flex gap-10 ms-10 me-10 '>
        <Link href='/products/1' className='flex-1 flex bg-black bg-opacity-50 rounded-full items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-opacity-90'> 
            {iPhoneIcon}
            <div className='flex items-center'>
            <p className='ps-4 text-pageColor text-lg font-medium'>iPhones</p>
            </div>
        </Link>
        <Link href='/products/2' className='flex-1 flex bg-black bg-opacity-50 rounded-full items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-opacity-90'> 
            {laptopIcon}
            <div className='flex items-center'>
            <p className='ps-4 text-pageColor text-lg font-medium'>Laptops</p>
            </div>
        </Link>
        <Link href='/products/3' className='flex-1 flex bg-black bg-opacity-50 rounded-full items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-opacity-90'> 
            {tabletIcon}
            <div className='flex items-center'>
            <p className='ps-4 text-pageColor text-lg font-medium'>Tablets</p>
            </div>
        </Link>
        <Link href='/products/4' className='flex-1 flex bg-black bg-opacity-50 rounded-full items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-opacity-90'> 
            {accesoriesIcon}
            <div className='flex items-center'>
            <p className='ps-4 text-pageColor text-lg font-medium'>Accesories</p>
            </div>
        </Link>
    </div>
  )
}
