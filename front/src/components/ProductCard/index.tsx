import React from 'react'
import Image from 'next/image'
import { IProductCardProps } from '@/interfaces/interfaces'

export default function ProductCard({product}:IProductCardProps) {
  return (
    <div className='w-200 mt-5 bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-100 hover:opacity-90 transition-all duration-300'>
        <Image  
        src={product.image} 
        alt={product.name}  
        sizes="(max-width: 768px) 100vw, (max-width: 1200px)50vw, 33vw" 
        priority={true} width={200} height={200}/>
        <div className='p-2 text-sm'>
          <h2 className='font-bold '>{product.name}</h2>
          <p className='font-semibold'>${product.price}</p>
          <p className='text-xs'>Stock: {product.stock}u</p>
        </div>
    </div>
  )
}
