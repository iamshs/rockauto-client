import React from "react";

import parts from "../../assets/parts.jpg";

const Order = () => {
  return (
    <section className="flex items-center lg:justify-around justify-center md:justify-around flex-col lg:flex-row md:flex-row p-3">
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
    </section>
  );
};

export default Order;
