import React from "react";

const Stat = () => {
  return (
    <section className="bg-[#EBECEF] flex items-center justify-around lg:h-44 md:h-36 h-24 lg:mt-10 lg:mb-20 my-16 text-center ">
      <div>
        <h1 className="lg:text-5xl md:text-4xl md:font-medium lg:font-medium font-semibold lg:tracking-wide ">
          15,000 <span className="text-primary">+</span>{" "}
        </h1>
        <p className="lg:text-xl md:text-lg ">Service Providers</p>
      </div>

      <div style={{ width: "5px" }} className=" bg-white h-32 "></div>
      <div>
        <h1 className="lg:text-5xl md:text-4xl md:font-medium lg:font-medium font-semibold lg:tracking-wide">
          2,00,000 <span className="text-primary">+</span>
        </h1>
        <p className="lg:text-xl md:text-lg">Order Served</p>
      </div>

      <div style={{ width: "5px" }} className=" bg-white h-32 "></div>
      <div>
        <h1 className="lg:text-5xl md:text-4xl md:font-medium lg:font-medium font-semibold lg:tracking-wide">
          1,00,000 <span className="text-primary">+</span>
        </h1>
        <p className="lg:text-xl md:text-lg">5 Star Received</p>
      </div>
    </section>
  );
};

export default Stat;
