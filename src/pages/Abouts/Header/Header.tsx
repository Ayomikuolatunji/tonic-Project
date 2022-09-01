import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo Shape.png";
import { navItems } from "../../../helpers/utils";

export default function Header() {
  return (
    <header className="w-[85%] mx-auto py-12">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-[35.91px] h-[35.68px]" />
          <h1 className="text-[#FFFFFF] font-[700] text-[33.25px] font-mono ml-2">
            Boldo
          </h1>
        </div>
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li className="mx-5 text-[#FFFFFF] font-[600] text-[16px]">
              <Link to={item.path}>{item.item}</Link>
            </li>
          ))}
          <li className="bg-[#FFFFFF] text-[#0A2640] rounded-[24px] py-3 px-8 cursor-pointer">
               Log In
          </li>
        </ul>
      </nav>
    </header>
  );
}
