import { IProduct, IProductsContainerProps } from '@/interfaces/interfaces'
import React from 'react'
import ProductCard from '../ProductCard'

export default function ProductsContainer({products} : IProductsContainerProps) {
    return (
        <>
          {products.map((product: IProduct) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </>
      );
    }
    
