import React from 'react';

import { pricing } from '../data';
import PlanList from '../components/PlanList'
;
const Pricing = () => {
  const {icon,plans,title} = pricing
  return <section className='-mt-40 section'>
  
    {/* section title  */}
    <div
    data-aos='fade-right'
    data-aos-offset='200'
          data-aos-delay='200'
     className=' section-title-group max-w-[540px] mx-auto
     px-4 lg:px-0'>
      <img src={icon} alt="" />
      <h1 className='h2'>{title}
        <span className=' text-primary-200'>.</span>
      </h1>
    </div>
    {/* plan list  */}
    <PlanList plans={plans}/>
  </section>;
};

export default Pricing;
