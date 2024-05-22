import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href={'/'}>
                <Image src="/logo.svg" alt="Car Hub" width={118} height={18} className='object-contain'  />
            </Link>
            <CustomButton
                title='Sign In'
                btnType='button'
                containerStyles='text-primary-blue transition-colors rounded-full bg-white min-w-[130px] hover:bg-[#3461eb] hover:text-white'
            />
        </nav>

    </header>
  )
}

export default Navbar
