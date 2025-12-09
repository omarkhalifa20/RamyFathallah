import { CornerLeftDown } from 'lucide-react'
import React from 'react'

export default function AboutCom() {
  return (
    <>
    <div id='About' className='bg-about'>
    <div className='container mx-auto w-[95%]  lg:w-[90%] py-15'>
       <div className='box-Shad2 bg-[#0000007c] grid grid-cols-12 items-center py-12 px-7 border-2 border-[#49e3de] rounded-4xl'>
         <div className='col-span-12 lg:col-span-5  '>
          <div className='relative'>
            <img src="/ramypic2.png" className="w-[90%] lg:w-[60%]   mx-auto  z-30" alt=""/>
         <h2 className="ArefRuqaa text-[35px] lg:text-[70px] absolute left-[50%] translate-x-[-50%]  bottom-0 text-Shad z-31 text-[#fff] ">رامي فتح الله</h2> 
          </div>
        
         </div>
         <div className='col-span-12 lg:col-span-7 p-2 lg:p-6 lg:mt-0 mt-4'>
          <h3 className='text-center Lalezar text-white lg:text-[#006763]  mb-7 text-[40px] lg:text-[50px]'>نبذة عني</h3>
           <p className='text-end Lalezar text-white mb-7 leading-8 flex text-[13px]  lg:text-[17px] '>أنا رامي فتح الله، محاسب قانوني وخبير مالي، ومدير وشريك بمكتب فتح الله وشركاه — محاسبون قانونيون ومستشارون. أمتلك خبرة تزيد عن ١٥ عامًا في مجالات التحليل المالي، وإعادة هيكلة الإدارات المالية بالشركات المتعثرة، ووضع الخطط الاستراتيجية لرفع كفاءة الأعمال وتحسين النتائج.

على مدار مسيرتي المهنية أشرفت على تأسيس العديد من الشركات بمختلف أنواعها، وقدّمت استشارات ضريبية للأنشطة التجارية والصناعية والخدمية، بالإضافة إلى إعداد دراسات الجدوى للمشروعات بمستوى احترافي يدعم اتخاذ القرار.

أعمل كمراقب حسابات للشركات المساهمة المصرية، وأنا عضو في عدد من الجهات المهنية مثل</p> 
            <div className='grid grid-cols-12 gap-y-7 gap-x-3'>
               <div className=' col-span-12 lg:col-span-4 gap-x-2 py-2 flex justify-end bg-gradiant3 rounded-xl items-center'>
               <p className='Lalezar outline-text text-[#fff] text-[13.5px]'>العالميه بإنجلترا Nexia عضو مجموعـــة </p>
               <img className=" w-[32px] " src="/nexiaLogo.png" />
               </div>
               <div className='col-span-12 lg:col-span-4 flex gap-x-5 justify-end bg-gradiant2 rounded-xl items-center'>
               <p className='Lalezar outline-text text-[#fff] text-[14px]'>عضو بمجلس اداره نادي سموحه</p>
               <img className=" w-[41px] " src="/smouha.webp" />
               </div>
               <div className='col-span-12 lg:col-span-4 flex justify-end bg-gradiant rounded-xl items-center'>
               <p className='Lalezar outline-text text-[#fff] py-2 text-[13.5px]'>مدير وشريك بمكتب فتح الله وشركـــــاه </p>
               <img className=" w-[41px] " src="/fathallahco2.png" />
               </div>
               <div className='col-span-12 lg:col-span-4 flex gap-2 justify-end bg-gradiant4 rounded-xl items-center'>
               <p className='Lalezar outline-text text-[#fff] text-[13px]'>عضو مراقبى الجهاز المركزي للمحاسبات </p>
               <img className=" w-[41px] " src="/الجهاز_المركزي_للمحاسبات_(مصر).png" />
               </div>
               <div className='col-span-12 lg:col-span-4 gap-2 py-2 flex justify-end bg-gradiant5 rounded-xl items-center'>
               <p className='Lalezar outline-text text-[#fff] text-white text-[14px]'>عضو جمعية المحاسبين القانونيين </p>
               <img className=" w-[41px] " src="/united (4).png" />
               </div>
               <div className='col-span-12 lg:col-span-4 flex justify-end gap-6 bg-gradiant6 rounded-xl items-center'>
               <p className='Lalezar outline-text text-[#fff] text-[14px]'>عضو جمعية الضرائب المصرية</p>
               <img className=" w-[41px] " src="/hq720.png" />
               </div>
            </div>
         </div>
        </div>
    </div>
    </div>
   
    </>
  )
}

