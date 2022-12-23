import React from 'react';
import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts] = useParts()
    return (
        <section>
          <div className='flex items-center lg:justify-center md:justify-center ml-6 lg:ml-0 md:ml-0  py-20'>
          <div
            style={{ height: "2px" }}
            className=" bg-black lg:w-16 md:w-10 w-10 lg:mt-3 md:mt-5 mt-4"
          ></div>
          <h3 className="lg:text-4xl md:text-3xl text-2xl text-black font-bold mt-3 lg:mt-0">OUR PARTS</h3> 
          </div> 
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-10 lg:pl-16 px-5 md:px-10'>
            {
                parts.slice(0,3).map(p=><Part key={p.id} 
                p={p}
                ></Part>)
            }
            </div> 
        </section>
    );
};

export default Parts;