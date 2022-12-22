import React from "react";
import bg from '../../assets/homeBg.jpg'

const Background = () => {
  return (
   <div className="bg-cover lg:bg-fixed bg-center bg-no-repeat " style={{backgroundImage: `url(${bg}` , backgroundColor: '#cccccc', height:'auto'}}>
      <div className="pt-8 pb-16 md:pt-16 md:pb-40 lg:pt-24  lg:pb-56 lg:ml-24 md:ml-14 ml-7 ">
      <div className="flex items-center  lg:mb-6 md:mb-5 mb-3 lg:ml-1">
       <h2 className=" text-md md:text-xl lg:text-2xl font-semibold text-black">Top Quality</h2>
       <div style={{ height: "2px" }} className="bg-black w-12 mt-3"></div>
       </div>
      <div>
      <h1 className="lg:text-6xl md:text-4xl text-xl font-bold text-secondary ">
       THE WORLD <span className="text-black">BEST</span>
       </h1>
       <h2 className=" text-lg md:text-3xl lg:text-5xl font-semibold text-black ">auto parts</h2>
      </div>
      </div>
   </div>
  );
};

export default Background;
