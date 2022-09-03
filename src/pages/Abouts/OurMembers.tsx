import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const OurMembers: React.FC = () => {
  return (
    <div className="w-[100%] bg-[#0A2640] sm:p-20 px-5 py-16">
      <div className="sm:w-[90%] w-full mx-auto">
        <h1 className="text-[#F1F1F1] text-center text-[20px]">Our numbers</h1>
        <p className="text-[#FFFFFF] text-center sm:text-[48px] text-[30px] sm:leading-[72px] leading-[36px] sm:mt-0 mt-10">
          Handshake infographic mass market <br /> crowdfunding iteration.
        </p>
        <div className="count-gauge sm:w-[55%] w-full mx-auto mt-8">
          <div className="flex sm:justify-between flex-wrap justify-center  text-center">
            <div className="block">
              <h1 className="text-[#4FE9A4] text-[96px]">
                <CountUp end={120} redraw={false}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span>m</span>
              </h1>
              <p className="text-[#F1F1F1] text-[24px]">Cool feature title</p>
            </div>
            <div className="block">
              <h1 className="text-[rgb(79,233,164)] text-[96px]">
                <CountUp end={10} decimal={"."} decimals={3}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <p className="text-[#F1F1F1] text-[24px]">Cool feature title</p>
            </div>
            <div className="block">
              <h1 className="text-[#4FE9A4] text-[96px]">
                <CountUp end={240} redraw={false}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
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
