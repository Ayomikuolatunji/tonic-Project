import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

import logo from "../../../assets/Logo Shape.png";
import { navItems } from "../../../helpers/utils";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className="w-[85%] mx-auto py-12">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-[35.91px] h-[35.68px]" />
          <h1 className="text-[#FFFFFF] font-[700] text-[33.25px] font-mono ml-2">
            Boldo
          </h1>
        </div>
        <div className="hamburger sm:hidden block">
          <GiHamburgerMenu className="text-white text-3xl z-[999]" onClick={() => setNavOpen(!navOpen)} />
        </div>
        {/* desktop and mobile */}
        <ul className={`flex items-center  ${navOpen ? "fixed top-0 left-0 right-0 bottom-0 flex-col bg-[#0A2640] w-full h-[100%] justify-center duration-200" : "hidden"}`}>
          <div className="hamburger sm:hidden block absolute top-0 right-0 m-10">
            <AiOutlineClose className="text-white text-5xl z-[999]" onClick={() => setNavOpen(!navOpen)} />
          </div>
          {navItems.map((item) => (
            <li className="sm:mx-5 my-5 text-[#FFFFFF] font-[600] sm:text-[16px] text-[25px]">
              <Link to={item.path}>{item.item}</Link>
            </li>
          ))}
          <li className="bg-[#FFFFFF] text-[#0A2640] sm:rounded-[24px] py-3 px-8 cursor-pointer sm:my-0 my-5">
            Log In
          </li>
        </ul>
      </nav>
    </header>
  );
}
