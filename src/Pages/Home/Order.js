import React from "react";

import parts from "../../assets/parts.jpg";

const Order = () => {
  return (
   <section className="lg:pl-16 px-5 md:px-10">
    <div className="flex items-center justify-start mb-1">
      <div style={{height:"1.5px"}} className='w-8 mt-2 bg-[#33334D] '></div>
      <p>HOW IT WORKS</p>
    </div>
    <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-black">Easiest way to Deal with us</h1>
     <div className="flex items-center lg:justify-around justify-center md:justify-around flex-col lg:flex-row md:flex-row ">
      <div>
        <img className="lg:max-w-lg max-w-sm" src={parts} alt="" />
      </div>
      {/* second-flex */}
      <div className="mt-12 lg:mt-0 md:mt-0">
        {/* first--point */}
        <div className="flex items-center">
          <div className="bg-gradient-to-bl from-primary to-accent flex items-center justify-center rounded-full h-14 w-14 text-2xl text-white">
            <span> 1</span>
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-semibold">Choose Tools</h1>
            <p>Tell us which tools do you need.</p>
          </div>
        </div>
        {/* end-1 */}
        {/* 2--point */}
        <div className="flex items-center my-14">
          <div className="bg-gradient-to-bl from-primary to-accent flex items-center justify-center rounded-full h-14 w-14 text-2xl text-white">
            <span>2</span>
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-semibold">
              Pick your Preferred Quantity
            </h1>
            <p>Choose Your Quantity from of the tools.</p>
          </div>
        </div>
        {/* end-2 */}
        {/* 3--point */}
        <div className="flex items-center">
          <div className="bg-gradient-to-bl from-primary to-accent flex items-center justify-center rounded-full h-14 w-14 text-2xl text-white">
            <span>3</span>
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-semibold">Book Order</h1>
            <p>Tell us when and where you want your order.</p>
          </div>
        </div>
        {/* end-3 */}
      </div>
    </div>
   </section>
  );
};

export default Order;
