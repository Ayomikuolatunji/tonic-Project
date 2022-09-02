import React from "react";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";

const OurTeam: React.FC = () => {
  return (
    <div className="sm:w-[60%] w-full mx-auto mt-16 sm:p-0 px-5">
      <div className="title sm:w-[90%] w-full mx-auto">
        <h1 className="text-[#777777] text-[20px] leading-[32px]">Our team</h1>
        <p className="text-[#000000] sm:leading-[72px] leading-[56px] text-[48px]">
          The leadership team
        </p>
        <p className="text-[#777777] sm:mt-0 mt-6">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
      </div>
      <div className="team-cards mt-16 grid sm:grid-cols-3 grid-cols-1 gap-8 ">
        <div className="card sm:mt-0 mt-6">
          <img src={team1} alt="team1" className="w-full" />
          <h1 className="text-[28px] leading-[48px] text-[#000000]">
            Michael Scott
          </h1>
          <h3 className="text-[#777777] leading-[32px] text-[20px]">
            General Manager
          </h3>
        </div>
        <div className="card sm:mt-0 mt-6">
          <img src={team2} alt="team1" className="w-full" />
          <h1 className="text-[28px] leading-[48px] text-[#000000]">
            Michael Scott
          </h1>
          <h3 className="text-[#777777] leading-[32px] text-[20px]">
            General Manager
          </h3>
        </div>
        <div className="card sm:mt-0 mt-6">
          <img src={team3} alt="team1" className="w-full" />
          <h1 className="text-[28px] leading-[48px] text-[#000000]">
            Michael Scott
          </h1>
          <h3 className="text-[#777777] leading-[32px] text-[20px]">
            General Manager
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
