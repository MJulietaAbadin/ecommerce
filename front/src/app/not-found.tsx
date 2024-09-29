import { notFoundIcon } from '@/helpers/icons'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className=" h-screen w-screen flex flex-col justify-center items-center text-white">
        {notFoundIcon}
        <h2 className="text-3xl">Page not found</h2>
        <Link href="/home" className='text-zinc-800 text-pageColor'>Click here to return to the home page</Link>
    </div>
  )
}
