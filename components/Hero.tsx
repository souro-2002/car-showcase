"use client";

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () =>{

  }

  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
            Find, book or rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
            Streamline your car rental experience with our effortless booking service.
        </p>
        <CustomButton
          title = {"Explore Cars"}
          containerStyles = {`bg-primary-blue transition-colors text-white rounded-full mt-10 p-2 hover:bg-purple-800 `}
          handleClick = {handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={'/hero.png'} alt='Car' fill className='object-contain'/>
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  )
}

export default Hero
