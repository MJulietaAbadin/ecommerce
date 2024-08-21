import React from 'react'
import Image from 'next/image'
import { deleteIcon } from '@/helpers/icons'
export default function CartGrid() {
    const image = "https://cdn.shopify.com/s/files/1/0259/5448/4284/products/SKIMS-BODYSUIT-BS-TSH-0752-CL-ONX_FR.jpg?v=1624308627&width=832"
  return (
    <div className='sm:px-20 md:px:40 lg:px-52 xl:px-60'>
        <div className='flex  items-center p-5 border-b'>
        <div className='pe-4 ps-5'>
            {deleteIcon}
        </div>
        <div className='pe-4'>
            <div className=' relative object-contain w-20 h-20 '>
                <Image  
                src={image} 
                alt='product' 
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px)50vw, 33vw" 
                priority={true}
                className='rounded-xl'
                />
            </div>
        </div>
        <div className='w-full'>
            <p className='font-bold text-xs'>PRODUCT NAME HOLA COMO ESTAS</p>
        </div>
        <div className='w-full text-end pe-5'>
            <p className='font-semibold '>$100</p>
        </div>
    </div>
    <div className='flex justify-end pe-10 py-3'>
        <p className='pe-5 font-bold'>TOTAL</p>
        <p className='font-bold'>$ 0.00</p>
        
    </div>
    </div>
    
  )
}
