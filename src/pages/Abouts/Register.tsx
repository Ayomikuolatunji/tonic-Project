import React from "react";

const Register: React.FC = () => {
    return (
        <div className="bg-[#0A2640] mt-24 sm:w-[70%] w-full text-center sm:rounded-[12px] rounded-none mx-auto sm:p-16 py-8 mb-24">
            <h1 className="text-[#FFFFFF] sm:leading-[72px] sm:text-[48px] text-[30px] leading-[52px]">
                An enterprise template to ramp <br /> up your company website
            </h1>
            <form className="mt-8">
                <input type="text" placeholder="Your email address" className="rounded-[240px] text-[#000000] pr-16 pl-6 py-3" />
                <button className="bg-[#65E4A3] ml-6 py-[16px] font-[700] px-[56px] rounded-[56px] sm:mt-0 mt-3">Start now</button>
            </form>
        </div>
    );
};

export default Register;
