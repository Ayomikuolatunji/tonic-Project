import React from "react";
import img1 from ".././../assets/Rectangle 1270.png";
import img2 from "../../assets/Rectangle 1271.png";
import img3 from "../../assets/Rectangle 1272.png";
import img4 from "../../assets/Rectangle 1273.png";
import img5 from "../../assets/Rectangle 1274.png";

export default function ImageCards() {
  return (
    <div className="grid grid-cols-3 gap-4 w-[70%] mx-auto -mt-12">
      <div className="row-span-2 flex  flex-col mx-auto">
        <img src={img2} alt="img2" />
      </div>
      <div className="row-span-2 flex justify-start flex-col">
      <img src={img3} alt="img4" className="w-[300px] h-[285px] mx-auto" />
        <img
          src={img5}
          alt="img3"
          className="w-[300px] h-[285px] mx-auto mt-10"
        />
        
      </div>
      <div className="row-start-1 row-end-4 flex justify-start flex-col">
        <img src={img1} alt="img1" className="w-[300px] h-[285px] mx-auto" />
        <img
          src={img4}
          alt="img5"
          className="w-[300px] h-[285px] mx-auto mt-10"
        />
      </div>
    </div>
  );
}
