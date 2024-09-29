import React from 'react'
import Button from '../Button'
import LandingCategories from '../LandingCategories'

export default async function LandingPageComponent() {
  
  return (
    <>
    <div className='mt-28'>
        <div className='text-white w-screen flex flex-col items-center text-center'>
          <div className='w-2/6 text-center'>
            <h1 className='tracking-wider font-bold text-4xl'>Discover the Future of Technology</h1>
          </div>
        <p className='pb-4 leading-relaxed w-3/6 tracking-wide mt-4 font-light'>Upgrade your digital life with our extensive selection of cutting-edge smartphones, high-performance laptops, versatile tablets, and premium accessories. Discover the perfect devices to enhance your daily productivity, entertainment, and connectivity needs. Whether you're looking for the latest flagship models or powerful computing solutions, we have everything you need. </p>
    </div>
    <div className='w-screen flex justify-center'>
        <Button content='Start Shopping' redirectTo='/home'></Button>
    </div>
    <div className='me-10 ms-10 mt-10 mb-10'>
        <LandingCategories/>
    </div>
    </div>
    </>
  )
}
