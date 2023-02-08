import { Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Loading from '../Shared/Loading';

const AllReview = () => {
    const [review , isLoading] = useReview()

     if(isLoading){
        return <Loading />
     }
    return (
        <div>
           <div className='max-w-10xl my-16 '>
          <h1 className='lg:text-4xl md:text-3xl   md:px-10 px-5 mb-10   text-2xl  font-bold text-black'>They All Liked Our Service</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-4  gap-2'>
         {
            review.slice(0,8).map( r => <div key={r._id} className="card w-96  bg-base-100 text-neutral-content shadow-md">
            <div className="card-body w-[300px] ">
              <div className='flex items-center'>
              <div className="avatar mr-3">
                 <div className="w-8 rounded-full">
                   <img src={r.avatar} alt={r.name} />
                   </div>
                  </div>
              <h2 className="card-title text-black"> {r.name} </h2>
              </div>
              <p className='text-black'> {r.comment} </p>
              <Rating name="read-only" size='large' value={r.rate} readOnly />
            
            </div>
          </div>)
          }
          
         </div>
       
         <div className=' flex flex-col items-center justify-center  md:px-10 px-5 mt-10 '>
                <p className='font-bold text-2xl mb-2 text-secondary'>Don't forget to Review Us</p>
                 <Link to={"/dashboard/reviewUs"} className="btn btn-outline lg:w-[18%] w-[60%] md:w-[30%] " > Review Now </Link>
             </div>
         
        </div> 
        </div>
    );
};

export default AllReview;