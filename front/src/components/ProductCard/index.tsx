import React from 'react'
import Image from 'next/image'
import { IProductCardProps } from '@/interfaces/interfaces'

export default function ProductCard({product}:IProductCardProps) {
  return (
    <div>
        <Image  src={product.image} alt={product.name} width={150} height={150}/>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
    </div>
  )
}
