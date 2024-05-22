import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col border-t-2 border-gray-300 text-black-100 mt-5 mx-2">
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.svg" alt="Car Hub" width={118} height={18} className='object-contain' />
          <p className='text-base text-gray-500'>
            CarHub <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => {
            return (
              <div key={link.title} className='footer__link'>
                <h3 className='font-bold'>{link.title}</h3>
                {link.links.map(item => {
                  return (
                    <Link href={item.url} key={item.title} className='text-gray-500'>
                      {item.title}
                    </Link>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-300 px-6 py-10
        sm:px-16'>
        <p>@2024 CarHub. All Rights Reserved.</p>
        <div className="footer__copyrights-link">
          <Link href={'/'} className='text-gray-500'>
            Privacy Policy
          </Link>
          <Link href={'/'} className='text-gray-500'>
            Terms of Use
          </Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer
