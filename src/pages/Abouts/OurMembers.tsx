import React from "react";
import CountUp from "react-countup";

const OurMembers: React.FC = () => {
  return (
    <div className="w-[100%] bg-[#0A2640] p-20">
      <div className="w-[inherent] mx-auto">
        <h1 className="text-[#F1F1F1] text-center text-[20px]">Our numbers</h1>
        <p className="text-[#FFFFFF] text-center text-[48px] leading-[72px]">
          Handshake infographic mass market <br /> crowdfunding iteration.
        </p>
        <div className="count-gauge w-[50%] mx-auto mt-8">
          <div className="flex justify-between">
            <div className="block">
              <h1 className="text-[#4FE9A4] text-[96px]">
                <CountUp end={120} />
                <span>M</span>
              </h1>
              <p className="text-[#F1F1F1] text-[24px]">Cool feature title</p>
            </div>
            <div className="block">
              <h1 className="text-[#4FE9A4] text-[96px]">
                <CountUp end={10.0} decimal={"."} decimals={3} />
              </h1>
              <p className="text-[#F1F1F1] text-[24px]">Cool feature title</p>
            </div>
            <div className="block">
              <h1 className="text-[#4FE9A4] text-[96px]">
                <CountUp end={240} />
              </h1>
              <p className="text-[#F1F1F1] text-[24px]">Cool feature title</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMembers;
