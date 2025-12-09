"use client"
import Link from 'next/link'
import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet"
import { Menu } from 'lucide-react'
export default function NavbarComp() {
  return (
    <>
    <div className="navbar px-6 lg:px-0  fixed z-[9999] left-[50%] rounded-4xl top-4 translate-x-[-50%] mx-auto w-[85%] Nav-Sh   bg-[#fefcfc] ">
  <div className="navbar-start  justify-between ps-6 lg:px-15">
  <div className='lg:flex hidden  gap-6 w-full justify-around '>
      <button  onClick={() => {document.getElementById('fathallah')?.scrollIntoView({ behavior: 'smooth' }); }} className='Lalezar cursor-pointer text-[#006763]' >مكتب فتح الله للمحاسبات</button>
  <button onClick={() => {document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' }); }} className='Lalezar cursor-pointer text-[#006763]'  >نبذة عني</button>
  <button onClick={() => {document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className='Lalezar cursor-pointer text-[#006763]'  >الرئيسية</button>
  </div>
  <button onClick={() => {document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className=' lg:hidden flex cursor-pointer' ><img className='w-[40px] ' src="/RFLogo.png" alt="" /></button>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <button onClick={() => {document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className=' cursor-pointer' ><img className='w-[40px] ' src="/RFLogo.png" alt="" /></button>
    
  </div>
  <div className="navbar-end  px-6 ">
    <div className='lg:flex hidden  gap-6 w-full justify-around '>
       <button onClick={() => {document.getElementById('Events')?.scrollIntoView({ behavior: 'smooth' }); }} className='Lalezar cursor-pointer text-[#006763]'  >الفاعليات</button>
       <button onClick={() => {document.getElementById('Artc')?.scrollIntoView({ behavior: 'smooth' }); }} className='Lalezar cursor-pointer text-[#006763]'  >مقالات</button>
       <button onClick={() => {document.getElementById('Blog')?.scrollIntoView({ behavior: 'smooth' }); }} className='Lalezar cursor-pointer text-[#006763]'  >مقاطع فيديو</button>
  
    </div>
    <div>
    <Sheet>
    <SheetTrigger className=' flex lg:hidden cursor-pointer rounded-sm p-1 border-b-2  border-t-2 border-[#006764] '><Menu  /></SheetTrigger>
      <SheetContent className='z-[99999]'>
      <SheetHeader>
      <SheetTitle className='text-center mx-auto'><button onClick={() => {document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className=' lg:hidden flex cursor-pointer' ><img className='w-[40px] ' src="/RFLogo.png" alt="" /></button></SheetTitle>
      <SheetDescription className='flex flex-col gap-10 mt-10'>
      <button onClick={() => {document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className='Lalezar duration-300 hover:text-white hover:bg-[#006763] rounded-2xl border border-[#006763] p-2 cursor-pointer text-[#006763]'  >الرئيسية</button>
      <button onClick={() => {document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' }); }} className='Lalezar duration-300 hover:text-white hover:bg-[#006763] rounded-2xl border border-[#006763] p-2  cursor-pointer text-[#006763]'  >نبذة عني</button>
      <button  onClick={() => {document.getElementById('fathallah')?.scrollIntoView({ behavior: 'smooth' }); }} className='Lalezar duration-300 hover:text-white hover:bg-[#006763] rounded-2xl border border-[#006763] p-2  cursor-pointer text-[#006763]' >مكتب فتح الله للمحاسبات</button>
      <button onClick={() => {document.getElementById('Events')?.scrollIntoView({ behavior: 'smooth' }); }} className='Lalezar duration-300 hover:text-white hover:bg-[#006763] rounded-2xl border border-[#006763] p-2  cursor-pointer text-[#006763]'  >الفاعليات</button>
       <button onClick={() => {document.getElementById('Artc')?.scrollIntoView({ behavior: 'smooth' }); }} className='Lalezar duration-300 hover:text-white hover:bg-[#006763] rounded-2xl border border-[#006763] p-2  cursor-pointer text-[#006763]'  >مقالات</button>
       <button onClick={() => {document.getElementById('Blog')?.scrollIntoView({ behavior: 'smooth' }); }} className='Lalezar duration-300 hover:text-white hover:bg-[#006763] rounded-2xl border border-[#006763] p-2  cursor-pointer text-[#006763]'  >مقاطع فيديو</button>
  
      </SheetDescription>
     </SheetHeader>
   </SheetContent>
    </Sheet>
    </div>
 
  </div>
</div>
    </>
  )
}
