"use client"
import React from 'react'
import { motion } from "framer-motion";
import { MoveRight } from 'lucide-react';
import { MoveLeft } from 'lucide-react';
export default function HomeComp() {
  return (
    <>
      <div id='home' className=" flex items-center justify-center  h-screen bghome">
    <div className="container  mx-auto    w-[90%] ">
      <div className=" grid grid-cols-12 items-center justify-center">

        <div className=" hidden lg:flex  lg:col-span-2  justify-center">
          <motion.button
          
           initial={{
            textShadow: "0px 0px 10px #00fff7"
          }}
          animate={{
            textShadow: [
              "0px 0px 10px #00fff7",
              "0px 0px 31px #00fff7",
              "0px 0px 10px #00fff7"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={() => {
            document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' });
          }}
           className=" flex lg:whitespace-nowrap rotate-90 items-center text-Shad cursor-pointer text-[#fff] text-[18px] lg:text-[60px] Bebas gap-2 ">Get Started <MoveRight size={100} /></motion.button>
        </div>

       <div className="col-span-12 lg:col-span-8 flex justify-center ramy-fr  md:pt-50 lg:pt-50 relative">

         <div className="w-[100%] lg:w-[90%] relative flex  items-end rounded-4xl h-85 lg:h-100 box-Shad bg-[#ffffffbd] z-10">
          </div>
          
        <img src="/ramypic.png" className="lg:w-[85%] 2xl:w-[65%] xl:w-[75%] w-[100%] sm:w-[65%] md:w-[65%]  absolute bottom-0 z-30" alt=""/>
        <h1 className="ArefRuqaa text-[60px] lg:text-[110px] absolute text-Shad bottom-13 z-31 text-[#fff] ">رامي فتح الله</h1>
        
         <div className="bg-white w-[100%] lg:w-[90%] grid grid-cols-10 gap items-center z-31 absolute  rounded-2xl bottom-[-19] py-[2px] px-2">
         <img className=" mx-auto w-[80px] col-span-2 " src="/nexiaLogo.svg" />
         <img className=" mx-auto w-[80px] col-span-2 " src="/fathallahco.png" />
         <img className=" mx-auto w-[80px] col-span-2 " src="/united (1).png" />
         <img className=" mx-auto w-[50px] col-span-2" src="/smouha.webp" />
         <img className="mx-auto w-[45px] col-span-2" src="/united (3).png" />
        </div>
        
       </div>

       <div className='col-span-12 mt-15 justify-center flex lg:hidden z-[50]'>
        <motion.button
         initial={{
          boxShadow: "0px 0px 10px #00fff7"
        }}
        animate={{
          boxShadow: [
            "0px 0px 10px #00fff7",
            "0px 0px 31px #00fff7",
            "0px 0px 10px #00fff7"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => {
          document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' });
        }}
         className='z-[50] w-[75%] p-2 cursor-pointer  Bebas font-bold duration-300 hover:bg-[#b7fafa] rounded-3xl bg-[#e8ffff]'>Get Started</motion.button>
        </div>



       <div className="  lg:col-span-2 hidden lg:flex  justify-center">
       <motion.button
        initial={{
          textShadow: "0px 0px 10px #00fff7"
        }}
        animate={{
          textShadow: [
            "0px 0px 10px #00fff7",
            "0px 0px 31px #00fff7",
            "0px 0px 10px #00fff7"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => {
          document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className=" flex whitespace-nowrap rotate-270 cursor-pointer items-center text-Shad text-[#fff]  lg:text-[90px] Lalezar gap-2 "><MoveLeft  size={100} />ابـــــدأ</motion.button>
        </div>
      </div>

    
    </div>
    
  </div>
    </>
  )
}
