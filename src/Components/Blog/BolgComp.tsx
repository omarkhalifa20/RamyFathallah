import { Sparkles } from 'lucide-react'
import React from 'react'

export default function BolgComp() {
  return (
    <>
    <div id='Blog' className='bg-events'>
        <div className='container w-[90%] mx-auto py-15'>
        <h3 className=' flex w-[80%] lg:w-[25%] p-1 lg:p-0 mb-15 rounded-4xl mx-auto bg-[#000000d3] Lalezar justify-center items-center gap-5 text-[#fff] text-[20px] lg:text-[40px]'> <Sparkles />مقاطع الفيديو<Sparkles /></h3>
        <div className='grid gap-y-10 lg:gap-3 lg:h-[600px] grid-cols-12'>
         <div className=" col-span-12 lg:col-span-3   lg:row-span-6">
         <iframe className='rounded-2xl  h-100 lg:h-[100%] ' width="100%"  src="https://www.youtube.com/embed/dTGmUtwsftQ?si=0xvJ2m3DwVkG1W1I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         </div>
         
         <div className="col-span-12 lg:col-span-6  lg:row-span-12">
         <iframe className='rounded-2xl h-100 lg:h-[100%]' width="100%"  src="https://www.youtube.com/embed/hcD-T56P5Jk?si=yL5b9v7EhcqWxoF2" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         </div>

         <div className="col-span-12 lg:col-span-3  lg:row-span-6">
         <iframe className='rounded-2xl h-100 lg:h-[100%]' width="100%"  src="https://www.youtube.com/embed/wnqCXTfVxrQ?si=npfY3MDa29f3sIns" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         </div>

         <div className="col-span-12 lg:col-span-3 lg:row-span-6">
         <iframe className='rounded-2xl h-100 lg:h-[100%]' width="100%"  src="https://www.youtube.com/embed/DygUFM912TU?si=vA-xgwkysh4JnmYj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         </div>

         <div className=" col-span-12 lg:col-span-3  lg:row-span-6">
         <iframe className='rounded-2xl h-100 lg:h-[100%]' width="100%"  src="https://www.youtube.com/embed/0vGRLVyDPj8?si=me3EfYGf29497zDK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         </div>
        </div>
        </div>
    </div>
    </>
  )
}
