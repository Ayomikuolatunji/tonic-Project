import React from "react";
import img1 from ".././../assets/Rectangle 1270.png";
import img2 from "../../assets/Rectangle 1271.png";
import img3 from "../../assets/Rectangle 1272.png";
import img4 from "../../assets/Rectangle 1273.png";
import img5 from "../../assets/Rectangle 1274.png";

const ImageCards:React.FC=()=>{
  return (
    <div className="grid grid-cols-3 gap-4 sm:w-[70%] w-full mx-auto -mt-12">
      <div className="sm:row-span-2 col-span-full sm:col-span-1 flex flex-col mx-auto">
        <img src={img2} alt="img2" className="sm:p-0 px-4" />
      </div>
      <div className="sm:row-span-2  sm:col-span-1 col-span-full  flex justify-start flex-col">
        <img
          src={img3}
          alt="img4"
          className="sm:w-[300px] w-full sm:h-[285px] mx-auto  sm:p-0 px-4"
        />
        <img
          src={img5}
          alt="img3"
          className="w-[300px] h-[285px] mx-auto mt-10 sm:block hidden"
        />
      </div>
      <div className="sm:row-start-1 sm:row-end-4 sm:col-span-1 col-span-full flex justify-start flex-col sm:p-0 px-4">
        <img
          src={img1}
          alt="img1"
          className="sm:w-[300px] w-full sm:h-[285px] mx-auto"
        />
        <img
          src={img4}
          alt="img5"
          className="w-[300px] h-[285px] mx-auto mt-10 sm:block hidden"
        />
      </div>
    </div>
  );
}

export default ImageCards
