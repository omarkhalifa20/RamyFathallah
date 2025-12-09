import { BadgeQuestionMark, Eye, Lightbulb } from 'lucide-react'
import React from 'react'

export default function FathallahComp() {
  return (
    <>
    <div id='fathallah' className='bg-events'>
      <div className='container  mx-auto w-[95%] lg:w-[90%] pb-5 pt-15'>
        
       <div className='fath-box  rounded-4xl gap-10 pb-40 pt-9 p-7 text-center flex flex-col justify-center items-center mx-auto w-[100%]  lg:w-[90%]'>
        <h6 className='px-4  py-1 w-25 text-[#006763]  Lalezar rounded-4xl  bg-[#ffffff]'>نبذة عن ؟</h6>
          <h3 className='ArefRuqaa text-[40px]  lg:text-[70px] text-white'>مكتب فتح الله للمحاسبات</h3>
          <h6 className='Lalezar text-[12px] lg:text-[16px] text-white'>افضل مكتب محاسبات في الشرق الاوسط رائج في عالم المحاسبات</h6>
         
       </div>
       
       <div className='w-[87%] relative top-[-100]  mx-auto grid grid-cols-12 lg:gap-y-0 gap-y-5 gap-x-6'>
         <div className=' col-span-12 lg:col-span-4 order-3  lg:order-1 p-5 shadow-[#8d8d8d] shadow-md rounded-4xl bg-white '>
         <div className='flex  items-center justify-between mb-5 '>
           <Eye color='#006763' size={30} />
            <h6 className='Lalezar text-[#006763] text-[18px]'>الرؤية</h6> 
         </div>

           <p className='text-end Lalezar text-[14px]'>أن نصبح واحدة من ضمن أفضل وأشهر شركات المحاسبة والاستشارات القانونية في مصر والمنطقة العربية من خلال تقديم خدمات متميزة ودعم عملي للأفراد أصحاب الشركات من جميع أنحاء العالم. </p>

         </div>
         <div className='col-span-12 lg:col-span-4 p-5 order-2 top-[-5] lg:order-2 shadow-[#8d8d8d] shadow-md rounded-4xl bg-white'>
         <div className='flex  items-center justify-between mb-5 '>
         <Lightbulb color='#006763' size={30} />
         <h6 className='Lalezar text-[#006763]  text-[18px]'>هدف الشركة </h6> 
         </div>

         <p className='text-end Lalezar text-[14px]'>هدفنا هو تقديم خدمات مميزة ومؤثرة وغير مكلفة في مجال المحاسبة والمراجعة والاستشارات قانونية والضرائب من أجل تلبية احتياجات عملائنا ومساعدتهم علي تطوير أعمالهم. لهذا تعتمد شركة فتح الله وشركاه علي مجموعة محترفة من أفضل المحاسبين والمحاميين الملتزمين بتقديم خدمات عالية الجودة لعملائنا لتحقيق نجاح عملي مشترك. </p>

         </div>

         <div className='col-span-12 lg:col-span-4 order-1 lg:order-3   p-5 shadow-[#8d8d8d] shadow-md rounded-4xl bg-white'>
         <div className='flex  items-center justify-between mb-5 '>
           <BadgeQuestionMark color='#006763' size={30} />
           <h6 className='Lalezar  text-[#006763] text-[18px]'>عن الشركة</h6> 
           </div>

           <p className='text-end Lalezar text-[14px]'>تأسست شركة فتح الله وشركاه في عام 1977. وهي شركة مصرية تهدف إلي تقديم خدمات مميزة في المحاسبة وتدقيق الحسابات والمراجعة وإدارة الشئون المالية والحسابات والضرائب والاستشارات القانونية وفض النزاعات للأفراد والشركات والمنظمات حتي يتسني لهم التركيز علي تطوير اعمالهم وزيادة نسبة ارباحهم. يتمتع أستاذ فتح الله مؤسس الشركة بفهم عميق في مجالي المحاسبة والمراجعة ولديه مسيرة عملية كبيرة علي مدار 40 عام والتي اكسبته شهرة واسعة في اوساط الشركات المصرية. فريق العمل هم أغلي وأهم قيمة للشركة، فهم مجموعة متميزة من امهر المحاسبين والاستشاريين الذين يتمتعون بحس عال من الأمانة المهنية والكفاءة وتعتمد الشركة عليهم في تقوية اسمها بين الشركات المصرية الأخري. اليوم تعتبر شركة فتح الله وشركاه واحدة من الشركات المصرية الرائدة في مجالي المحاسبة والمراجعة ولديها علاقة طيبة مع الكثير من العملاء.</p>

         </div>

       </div>
       
    </div>
    </div>
    
    </>
  )
}
