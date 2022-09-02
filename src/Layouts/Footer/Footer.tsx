import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo Shape.png";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 mb-16">
      <div className="md:flex md:justify-between sm:w-[75%] w-[100%] mx-auto">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-[35.91px] h-[35.68px]" />
            <h1 className="text-[#0A2640] font-[700] text-[43.25px] font-mono ml-2 leading-[34px]">
              Boldo
            </h1>
          </div>
          <p className="sm:w-[350px] mt-10 text-[#777777] leading-[28px]">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 sm:p-0 p-4">
          <div className="sm:mx-5">
            <h2 className="mb-6 text-sm font-extrabold text-[#000000] uppercase dark:text-white">
              Landings
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-7">
                <Link to="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-7">
                <Link to="#" className="hover:underline">
                  Career
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:mx-5">
            <h2 className="mb-6 text-sm font-extrabold text-[#000000] uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-7">
                <Link to="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-7 sm:ml-0 -ml-[70px]">
                <Link to="#" className="hover:underline flex justify-center">
                  <span>Career</span>
                  <span className="bg-[#65E4A3] text-[#0A2640] px-2 py-1 text-[10px] ml-1.5 rounded-[120px]">
                    Hiring
                  </span>
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:ml-7">
            <h2 className="mb-6 text-sm font-extrabold text-[#000000] uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-7">
                <Link to="#" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="mb-7">
                <Link to="#" className="hover:underline">
                  Products
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sm:w-[75%] w-[90%] mx-auto">
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
