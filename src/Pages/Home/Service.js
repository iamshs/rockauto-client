import React from "react";

const Service = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:mt-36 mt-36 pl-3 lg:pt-14  lg:pl-16 md:pl-12">
      <div className="flex items-start justify-center max-w-xs   ">
        <div >
          <img
            className="w-14 "
            src="https://cdn-marketplacedev.s3.ap-south-1.amazonaws.com/usp-1.svg"
            alt=""
          />
        
        </div>
        <div className="ml-3">
        <h2 className='text-xl font-bold '>Schedule Booking</h2>
          <p className="text-xl mt-2 ">
            Pick your travel date in advance, as per your schedule.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-center max-w-xs   ">
        <div >
          <img
            className="w-14 "
            src="https://cdn-marketplacedev.s3.ap-south-1.amazonaws.com/usp-2.svg"
            alt=""
          />
        
        </div>
        <div className="ml-3">
        <h2 className='text-xl font-bold '>24/7 Customer Support</h2>
          <p className="text-xl mt-2 ">
          For any queries, comments and support.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-center max-w-xs   ">
        <div >
          <img
            className="w-14 "
            src="https://cdn-marketplacedev.s3.ap-south-1.amazonaws.com/usp-3.svg"
            alt=""
          />
        
        </div>
        <div className="ml-3">
        <h2 className='text-xl font-bold '>Online Payment With EMI</h2>
          <p className="text-xl mt-2 ">
          Choose your preferred payment method. EMI if needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
