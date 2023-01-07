import React from 'react';

const Part = ({p}) => {
    const {_id,name,img,condition,price} = p
    return (
        <div className='bg-[#FFFFFF] lg:w-[20rem] md:w-[20rem] w-full rounded-lg  px-12 py-2 border border-secondary'>
           <img className='w-[13rem] h-[202px] ' src={img} alt='' /> 
           <h2 className='lg:text-xl md:text-xl text-md mt-4 font-bold  text-secondary'> {name} </h2>
           <h1 className='lg:text-2xl md:text-2xl text-xl mt-4 font-bold text-black'> Price:$ {price} </h1>
           <h3 className='text-md font-semibold'>Condition: <span className='text-sm font-normal'> {condition} </span></h3>
           <button className="btn btn-outline btn-secondary w-full mt-4">BUY NOW</button>
        </div>
    );
};

export default Part;