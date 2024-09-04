import React from 'react';

import { join } from '../data';
const Join = () => {
  const {btnText,image,subtitle,title,}=join;
  return <section className=' bg-neutral-500 min-h-[537px]'>
    <div className="container mx-auto">
      {/* image and text wrapper  */}
      <div className=' flex flex-col md:flex-row md:items-center
       md:-space-x-12 space-y-24 lg:-space-y-0'>
        {/* img  */}
        <div
        data-aos='fade-right'
        data-aos-offset='100'
        data-aos-delay='200'
         className=' -mt-[80px] max-w-[276px] md:max-w-[442px]
         lg:max-w-full'>
          <img src={image} alt="" />
        </div>
        {/* text  */}
        <div
         data-aos='fade-up'
         data-aos-offset='100'
         data-aos-delay='200'
         className=' max-w-[350px] lg:max-w-[492px]
         ml-[30px]'>
          <h2 className=' h1 md:text-[60px] md:leading-[62px]
           mb-4 lg:mb-6 text-white'>
            Wanna  join <span className=' text-primary-200'>&</span> have fun?
          </h2>
          <p className=' lg:max-w-[492px] md:max-w-[470px] max-w-[348px] mb-4 lg:mb-6 md:text-body-md text-body-sm text-white'>{subtitle}</p>
          <button className=' btn btn-secondary btn-lg'>{btnText}</button>
        </div>
      </div>
    </div>
  </section>;
};

export default Join;
