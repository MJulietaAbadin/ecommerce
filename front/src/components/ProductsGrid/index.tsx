import { IProduct, IProductsContainerProps } from '@/interfaces/interfaces'
import React from 'react'
import ProductCard from '../ProductCard'

export default function ProductsContainer({products} : IProductsContainerProps) {
    return (
        <div className='grid gap-y-10 px-20 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 '>
          {products.map((product: IProduct) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      );
    }
    
