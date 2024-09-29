import { ITitle } from '@/interfaces/interfaces'
import React from 'react'

export default function Title( {title}: ITitle) {
  return (
    <div className=''>
        <h1 className='text-3xl text-white font-semibold'>{title}</h1>
    </div>
  )
}
