import React, { useState } from 'react';
import { GiBookCover } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

function Nav() {

  const [toggleOpen, setToggleOpen] = useState(false);
  const toggleNavBar = () => {
    setToggleOpen(!toggleOpen);
  }

  const NavLinks = () => {
    return (
      <>
      <NavLink to = "/"className = "font-bold mb-5 text-white hover:text-yellow-400 md:mb-0 lg:mb-0 lg:pt-2 ">Home</NavLink>
      <NavLink to ="/reading-list" className = "mb-5 font-bold text-white hover:text-yellow-400 lg:pt-2">Reading List</NavLink>
      <NavLink to ="/about" className = "font-bold text-white hover:text-yellow-400 lg:pt-2"></NavLink>
      </>
      );
    };


  return (
    <div className="bg-fuchsia-800 sticky top-0 flex-wrap z-[20] mx-auto w-full flex justify-between p-3">
        <div>
          <Link to = "/" className="flex items-center">
              <GiBookCover fontSize={36} className = "text-white blk-outline mr-2" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white display-font blk-outline">BookVault</span>
            </Link>
          </div>
          <nav className = "w-1/3 justify-end">
            <div className = "hidden justify-between md:flex">
              <NavLinks/>
            </div>
            <div className = "md:hidden lg:hidden sm:justify-end">
              <button onClick = {toggleNavBar}>
                {toggleOpen ? <AiOutlineClose fontSize={36} className = "ml-20 text-white border rounded p-1 cursor-pointer md:hidden lg:hidden"  /> : <GiHamburgerMenu fontSize={36} onClick = {setToggleOpen} className = "ml-20 text-white border rounded p-1 cursor-pointer md:hidden lg:hidden"/> }
              </button>
            </div>
          </nav>
          {toggleOpen && (
            <div className = "flex basis-full flex-col items-center mt-5 mb-5 md:hidden lg:hidden" >
              <NavLinks/>
            </div>
          )}
    </div>
  )
}

export default Nav