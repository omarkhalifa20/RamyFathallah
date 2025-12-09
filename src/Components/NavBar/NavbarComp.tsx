"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'About', 'fathallah', 'Events', 'Artc', 'Blog'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  const buttonClass = (id: string) => 
    `Lalezar cursor-pointer text-[#006763] ${activeSection === id ? 'bg-[#006763] text-white rounded-2xl px-3 py-1' : ''}`;

  return (
    <>
    <div className="navbar px-6 lg:px-0 fixed z-[9999] left-[50%] rounded-4xl top-4 translate-x-[-50%] mx-auto w-[85%] Nav-Sh bg-[#fefcfc]">
      <div className="navbar-start justify-between ps-6 lg:px-15">
        <div className='lg:flex hidden gap-6 w-full justify-around'>
          <button onClick={() => scrollTo('fathallah')} className={buttonClass('fathallah')}>مكتب فتح الله للمحاسبات</button>
          <button onClick={() => scrollTo('About')} className={buttonClass('About')}>نبذة عني</button>
          <button onClick={() => scrollTo('home')} className={buttonClass('home')}>الرئيسية</button>
        </div>
        <button onClick={() => scrollTo('home')} className='lg:hidden flex cursor-pointer'><img className='w-[30px]' src="/RFLogo.png" alt="" /></button>
      </div>

      <div className="navbar-center hidden lg:flex">
        <button onClick={() => scrollTo('home')} className='cursor-pointer'><img className='w-[40px]' src="/RFLogo.png" alt="" /></button>
      </div>

      <div className="navbar-end px-6">
        <div className='lg:flex hidden gap-6 w-full justify-around'>
          <button onClick={() => scrollTo('Events')} className={buttonClass('Events')}>الفاعليات</button>
          <button onClick={() => scrollTo('Artc')} className={buttonClass('Artc')}>مقالات</button>
          <button onClick={() => scrollTo('Blog')} className={buttonClass('Blog')}>مقاطع فيديو</button>
        </div>

        <Sheet>
          <SheetTrigger className='flex lg:hidden cursor-pointer rounded-sm p-1 border-b-2 border-t-2 border-[#006764]'><Menu /></SheetTrigger>
          <SheetContent className='z-[99999]'>
            <SheetHeader>
              <SheetTitle className='text-center mx-auto'>
                <button onClick={() => scrollTo('home')} className='lg:hidden flex cursor-pointer'><img className='w-[40px]' src="/RFLogo.png" alt="" /></button>
              </SheetTitle>
              <SheetDescription className='flex flex-col gap-10 mt-10'>
                {['home','About','fathallah','Events','Artc','Blog'].map(id => (
                  <button 
                    key={id} 
                    onClick={() => scrollTo(id)} 
                    className={`Lalezar duration-300 hover:text-white hover:bg-[#006763] rounded-2xl border border-[#006763] p-2 cursor-pointer text-[#006763] ${activeSection===id ? 'bg-[#006763] text-white' : ''}`}
                  >
                    {id === 'home' ? 'الرئيسية' :
                     id === 'About' ? 'نبذة عني' :
                     id === 'fathallah' ? 'مكتب فتح الله للمحاسبات' :
                     id === 'Events' ? 'الفاعليات' :
                     id === 'Artc' ? 'مقالات' :
                     'مقاطع فيديو'}
                  </button>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
    </>
  )
}
