import React from 'react';

import { about } from '../data';
import { IoIosArrowDroprightCircle} from 'react-icons/io';
const About = () => {
  const {title,subtitle1,subtitle2,icon,link}=about;
  return <section className=' py-[80px] md:py-[110px]
   lg:pt-[120px] lg:pb-[180px]'>
    <div className="container mx-auto px-[20px] lg:px-[135px]">
      {/* section title  */}
      <div
      data-aos='fade-up'
      data-aos-delay='100'
       className=' section-title-group justify-start'>
        <img src={icon} alt="" />
        <h2 className=' h2 section-title'>{title}
          <span className=' text-primary-200'>.</span>
        </h2>
      </div>
      {/* subtitle1  */}
      <p
       data-aos='fade-up'
      data-aos-delay='200'
       className='md:text-body-md mb-12'>{subtitle1}</p>
      {/* subtitle2  */}
      <p
       data-aos='fade-right'
      data-aos-delay='300'
       className='md:text-body-md mb-8'>{subtitle2}</p>
      {/* link  */}
      <div
       data-aos='fade-left'
      data-aos-delay='100'
      >
        <a className=' link flex items-center gap-x-4
         hover:gap-x-6 transition-all' href="#">{link}
        <IoIosArrowDroprightCircle className=' text-2xl' />
        </a>
       
      </div>
    </div>
  </section>;
};

export default About;
