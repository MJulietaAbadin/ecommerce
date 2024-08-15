import ProductsContainer from '@/components/ProductsContainer'
import React from 'react'
import bodysuits from '@/helpers'

export default function Home() {
  return (
    <div>
        <ProductsContainer products={bodysuits}/>
    </div>
  )
}
