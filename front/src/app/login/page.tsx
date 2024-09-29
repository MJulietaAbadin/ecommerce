import LoginComponent from '@/components/LoginComponent'
import React from 'react'
import background from '../../../public/bg-singin.jpg'

export default function Login() {
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
        <LoginComponent/>
      </main>
    </div>
  )
}
