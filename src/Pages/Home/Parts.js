import React from 'react';
import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts] = useParts()
    return (
        <section className='lg:pl-16 px-5 md:px-10 py-14'>
          <div className='flex items-center lg:justify-start md:justify-start mt-6  mb-1 '>
          <div
            style={{ height: "1px" }}
            className=" bg-[#33334D] w-8 lg:mt-2 md:mt-5 mt-4"
          ></div>
          <h3 className="mt-3 lg:mt-0">OUR PARTS</h3> 
          
          </div> 
          <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold text-black mb-8'>Best Price. Quality Service.</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-10 '>
            {
                parts.slice(0,6).map(p=><Part key={p.id} 
                p={p}
                ></Part>)
            }
            </div> 
        </section>
    );
};

export default Parts;