import React from 'react';

const Stat = () => {
    return (
        <section className='bg-neutral flex items-center justify-around h-44 lg:my-24 text-center '>
            <div>
                <h1 className='lg:text-5xl font-medium tracking-wide '>15,000 +</h1>
                <p className='lg:text-xl'>Service Providers</p>
            </div>
         
           <div
            style={{ width: "5px" }}
            className=" bg-white h-32 "
          ></div>
            <div>
                <h1 className='lg:text-5xl font-medium tracking-wide'>2,00,000 +</h1>
                <p className='lg:text-xl'>Order Served</p>
            </div>
         
           <div
            style={{ width: "5px" }}
            className=" bg-white h-32 "
          ></div>
            <div>
                <h1 className='lg:text-5xl font-medium tracking-wide'>1,00,000 +</h1>
                <p className='lg:text-xl'>5 Star Received</p>
            </div>
         
          
            
        </section>
    );
};

export default Stat;