import React from 'react';

import { nav } from '../data';
const Nav = () => {
  return <nav className=' hidden lg:flex'>
    <ul className=' flex gap-x-8 text-white'>
      {nav.map((item,index)=>{
        return <li key={index}>
          <a className=' hover:text-primary-200 transition duration-300' href={item.href}>{item.name}</a>
        </li>
      })}
    </ul>
  </nav>;
};

export default Nav;
