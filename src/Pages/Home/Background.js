import React from "react";
import bg from "../../assets/homeBg.jpg";

const Background = () => {
  return (
    <section
      className="bg-cover lg:bg-fixed max-w-8xl  bg-center bg-no-repeat flex lg:items-center md:items-center flex-col lg:flex-row md:flex-row lg:justify-around md:justify-around  p-4 lg:p-0 "
      style={{
        backgroundImage: `url(${bg}`,
        backgroundColor: "#cccccc",
        
      }}
    >
      <div className="lg:w-96 md:w-80 md:py-8 lg:py-10 mt-4 mb-6 lg:mt-0 md:mt-8 lg:mb-0 w-64 ">
        <h3 className="lg:text-2xl md:text-2xl text-md text-black lg:mb-4 md:mb-3 mb-2">
          Top Quality____
        </h3>
        <h1 className="lg:text-5xl md:text-4xl text-2xl text-black font-bold">
          <span className="text-secondary"> THE WORLD</span> BEST auto parts
        </h1>
      </div>

      <div className="bg-gradient-to-r from-info to-primary lg:py-16 md:py-14 lg:px-12 md:px-6 text-white lg:mb-[-280px] mb-[-80px] md:mb-[-220px] rounded-lg w-56 md:w-64 md:mr-10 lg:w-80 px-4 py-8 ">
        <div className="flex items-center  lg:mb-8">
          <div
            style={{ height: "1.5px" }}
            className="bg-white lg:w-10 md:w-8 w-6 lg:mt-2 md:mt-5"
          ></div>
          <h3 className="text-sm mt-3 lg:mt-0">WHY ORDER FROM US?</h3>
        </div>
        <h1 className="font-bold lg:text-2xl md:text-2xl text-xl lg:py-4 pt-3 lg:pt-0">
          <span className="badge lg:badge-sm badge-xs bg-base-100"></span> Best Price.
        </h1>
        <h1 className="font-bold lg:text-2xl md:text-2xl text-xl">
          {" "}
          <span className="badge lg:badge-sm badge-xs bg-base-100"></span> Quality Service.
        </h1>
      </div>
    </section>
  );
};

export default Background;
