import React from 'react'

export default function UserDashboardComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold ">Welcome, user!</h1>
        <p className="text-gray-900 mt-2">example@gmail.com</p>
        <p className="text-gray-600 mt-4">
          This is your personal user dashboard. Here you can manage your account and settings.
        </p>
        <div className="mt-8">
          <button className="w-full bg-black  text-white py-2 px-4 rounded hover:bg-neutral-950  transition duration-300">
            Go to Settings
          </button>
        </div>
        <div className="mt-4">
          <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}
