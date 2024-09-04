import React from 'react';

import { faq } from '../data';
import Accordion from '../components/Accordion'

const Faq = () => {
  const {icon,title,accordions}=faq
  return <section className=' section pt-[480px]
   lg:pt-[280px] mb-[80px] lg:mb-0'>
    <div className=' max-w-[768px] mx-auto lg:bg-faq
     bg-no-repeat bg-custom bg-center lg:h-[1160px] lg:pt-6
      '>
      {/* section and title  */}
      <div
         data-aos='fade-right'
         data-aos-offset='200'
         data-aos-delay='300'
       className='section-title-group justify-start
       lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto
        px-4 lg:px-0'>
        <img className='lg:hidden' src={icon} alt="" />
        <h2 className=' h2 section-title lg:mt-[100px]'>
          {title}
          <span className=' text-primary-200'>.</span>
          </h2>
      </div>
      {/* accordian list  */}
      <div
         data-aos='fade-up'
         data-aos-offset='200'
         data-aos-delay='200'
       className=' flex flex-col gap-y-4 px-4'>
        {accordions.map((accordion,index)=>{
          return <Accordion accordion={accordion} key={index}/>
        })}
      </div>
    </div>
   </section>;
};

export default Faq;
