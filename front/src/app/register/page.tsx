import RegisterComponent from '@/components/RegisterComponent'
import React from 'react'
import background from '../../../public/bg-register.jpg'

export default function Register() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <main className="flex-grow">
        <RegisterComponent/>
      </main>
    </div>
  )
}
