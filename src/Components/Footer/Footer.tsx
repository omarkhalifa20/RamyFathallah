import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='bg-black  p-3'>
     <div className='container mx-auto text-center text-white lg:w-[90%]'>
      <p className='Bebas text-[13px] lg:text-[20px]'> RamiFathallah.com © — All rights reserved. Developed by <Link href="https://wa.link/4evd6k" className='text-[#0062ff]'>Omar Khalifa ©</Link> .</p>
     </div>
    </div>
    
    </>
  )
}
