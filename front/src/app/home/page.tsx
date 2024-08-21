import ProductsContainer from '@/components/ProductsGrid'
import React from 'react'
import bodysuits from '@/helpers'
import Title from '@/components/Title'
export default function Home() {
  return (
    <div className='pb-10'>
      <Title title="Products" />
      <ProductsContainer products={bodysuits}/>
    </div>
  )
}
