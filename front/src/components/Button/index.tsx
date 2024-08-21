import { IButtonPrompt } from '@/interfaces/interfaces'
import Link from 'next/link'
import React from 'react'

export default function Button({href, content}: IButtonPrompt) {
  return (
    <div className="bg-black w-28 text-center rounded p-2 hover:bg-neutral-950 "> 
          <Link href={href}>
            <button className="text-xs text-white">{content}</button>
          </Link>
        </div>
  )
}
