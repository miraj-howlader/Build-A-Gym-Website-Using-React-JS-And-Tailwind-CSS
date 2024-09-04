import React, { useEffect, useState } from "react";

import { header } from "../data";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const [navMobile, setNavMobile] = useState(false);

  const { btnLoginText, btnSignupText, logo } = header;

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 80 ? setIsActive(true):setIsActive(false)
    })
  })

  return (
    <header
      className={`${
        isActive ? " bg-neutral-500 py-[16px]" : " bg-transparent py-[20px]"
      }
   fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex
    justify-between items-center px-[20px] lg:px-[80px] transition-all
     duration-300`}
    >
      {/* logo  */}
      <a href="">
        <img className=" h-[30px]" src={logo} alt="" />
      </a>
      {/* nav  */}
      <Nav />
      {/* btn  */}
      <div className=" hidden lg:flex space-x-4">
        <button className=" btn btn-sm text-white
         hover:text-primary-200 transition">{btnLoginText}</button>
        <button className=" btn btn-sm btn-primary">{btnSignupText}</button>
      </div>
      {/* menu  */}
      <div
    
        className=" lg:hidden absolute right-4 cursor-pointer"
        onClick={() => setNavMobile(!navMobile)}
      >
        {navMobile ? (
          <RiCloseFill
            className="text-primary-200
       text-3xl"
          />
        ) : (
          <RiMenu4Fill className=" text-primary-200 text-3xl" />
        )}
      </div>

      {/* NavMobile  */}

      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;
