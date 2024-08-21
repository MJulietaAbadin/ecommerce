import React from 'react'
import { ITitleProp } from '@/interfaces/interfaces'
export default function Title({title}: ITitleProp) {
  return (
    <div className=' flex justify-center pt-24 pb-5 '>
      <h1 className='text-3xl font-bold'>{title}</h1>
    </div>
  )
}
