import { ChevronLeft, Sparkles } from 'lucide-react'
import React from 'react'

export default function EventsComp() {
  return (
    <>
    <div id='Events' className='bg-events'>
       <div className='container mx-auto w-[90%] py-15'>
    
      <h3 className=' flex w-[70%] lg:w-[30%] mb-15 rounded-4xl mx-auto bg-[#006764] Lalezar justify-center lg:p-0 p-2 items-center gap-5 text-[#fff] text-[25px] lg:text-[50px]'> <Sparkles />الفاعليات<Sparkles /></h3>
      <div className='fath-box mb-12 border-2 border-[#414141]  grid grid-cols-12 rounded-4xl p-5'>
        <div className='col-span-12 lg:col-span-6 order-2 lg:order-1 flex flex-col   lg:px-7 py-9 text-center'>
         <h3 className=' mb-15 text-white ArefRuqaa text-[30px] text-center'>ملتقى المستثمرين  <br className='block lg:hidden' />بالمملكة العربية السعودية</h3>
         <p className='text-end mb-5 items-top text-white gap-2 flex Lalezar'>فعاليات اليوم الأول لملتقى المستثمرين بفندق كيمبنسكي الخٌبَر تحت رعاية أصحاب السمو والمعالي وبحضور دولي رفيع المستوى بهدف التعارف و طرح وتبادل الفرص الاستثمارية والعقارية  <ChevronLeft size={30} /></p> 
         <p className='text-end flex gap-2 items-top text-white Lalezar'>لقاء مع رموز و قامات الاقتصاد و الإستثمار السعوديين و المصريين لتعزيز التعاون الاقتصادي والاستثماري بين مصر و المملكة العربية السعودية حيث يمثل تبادل الاستثمارات بين البلدين خطوة هامة في تحقيق النمو والتنمية الاقتصادية وتوفير فرص العمل للشباب في كلا البلدين <ChevronLeft size={45} /></p>     
        </div>
      <div className=' col-span-12 flex justify-center items-center order-1 lg:order-2 lg:col-span-6'>
        <img className='  rounded-4xl' src="/المستثمرين العرب.jpg" alt="" />
      </div>
      </div>
      
      <div className='  border-2 border-[#006763]  grid grid-cols-12 rounded-4xl p-5'>
      <div className='col-span-12 lg:col-span-6'>
        <img className=' rounded-4xl' src="/افطار فتح الله.jpg" alt="" />
      </div>

        <div className='col-span-12 lg:col-span-6 flex flex-col text-[#006763]  lg:px-7 py-9 text-center'>
         <h3 className=' mb-15  ArefRuqaa text-[35px] lg:text-[40px] text-center'>إفطار شركة فتح الله وشركاه</h3>
         <p className='text-end mb-5 items-top  gap-2 flex Lalezar'>
حفل الإفطار السنوي مجموعة شركات فتح الله و شركاه -Nexia International

بحضور نخبة كبيرة من أعضاء مجلس النواب و أعضاء مجلس الشيوخ و رجال الأعمال و أعضاء مجالس إدارات الاندية الرياضية… شرفتونا و يارب دايما متجمعين <ChevronLeft size={40} /></p> 
          
        </div>
      

      
       
      
      </div>
     </div> 
    </div>
     
    </>
  )
}
