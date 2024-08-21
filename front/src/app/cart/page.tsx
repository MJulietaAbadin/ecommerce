import Button from '@/components/Button'
import CartGrid from '@/components/CartGrid'
import Title from '@/components/Title'
import React from 'react'

export default function Cart() {
  return (
    <div className='pb-10 '>
        <Title title='Shopping Cart' />
        <CartGrid/>
        <div className='flex justify-center'>
            <Button href='/home' content='CHECKOUT'/>
        </div>
    </div>
  )
}
