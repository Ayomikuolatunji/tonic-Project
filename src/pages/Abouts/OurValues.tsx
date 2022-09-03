import React from "react";
import committedImg from "../../assets/Rectangle 1273.png";
import responsibleImg from "../../assets/Rectangle 1272.png";

const OurValues = () => {
  return (
    <div className="w-[100%] bg-[#0A2640] sm:p-16 px-4 py-10 mt-24">
      <div className="wrapper sm:w-[45%] w-full mx-auto">
        <h1 className="text-[#FFFFFF] text-[20px] leading-[32px]">
          Our values
        </h1>
        <p className="sm:text-[48px] text-[40px] sm:leading-[72px] leading-[60px] text-[#FFFFFF] font-[Manrope] mb-4">
          Things in we believe
        </p>
        <p className="text-[#F1F1F1] leading-[32px] text-[20px]">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
        <div className="horizontal-cards mt-16 w-full flex flex-col sm:gap-y-6 gap-12">
          <div className="flex sm:flex-row flex-col items-center">
            <img src={committedImg} alt="" className="sm:w-[150px] w-[250px] sm:h-[150px]" />
            <div className="sm:ml-8 sm:text-left text-center">
              <h1 className="text-[#FFFFFF] sm:leading-[48px] text-[28px] sm:mt-0 mt-3 font-bold">
                We are commited.
              </h1>
              <p className="text-[#F1F1F1] text-[20px]">
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center">
            <img src={responsibleImg} alt="" className="sm:w-[150px] w-[250px] sm:h-[150px]"/>
            <div className="sm:ml-8 sm:text-left text-center">
              <h1 className="text-[#FFFFFF] sm:leading-[48px] text-[28px] sm:mt-0 mt-3 font-bold">
                We are responsible.
              </h1>
              <p className="text-[#F1F1F1] text-[20px]">
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center">
            <img src={committedImg} alt="" className="sm:w-[150px] w-[250px] sm:h-[150px]" />
            <div className="sm:ml-8 sm:text-left text-center">
              <h1 className="text-[#FFFFFF] sm:leading-[48px] text-[28px] sm:mt-0 mt-3 font-bold">
                We aim for progress.
              </h1>
              <p className="text-[#F1F1F1] text-[20px]">
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
