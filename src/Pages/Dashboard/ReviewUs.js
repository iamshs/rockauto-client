import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const ReviewUs = () => {
    const {register,handleSubmit , reset} = useForm();
    const [user] = useAuthState(auth)
    const onSubmit = async data =>{
   
     const review = {
        name : user.displayName ,
        rate: data.rate,
        comment: data.comment
     }
     fetch('http://localhost:5000/review' , {
        method :'POST' ,
        headers : {
            'content-type' : 'application/json' ,
            authorization : ` Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(review)
     })
     .then( res=>res.json())
     .then(result => {
        console.log(result)
        if(result.insertedId){
            toast('Thank You for your Review')
            reset()
        }
     })
    }
    return (
        <div className="flex items-center justify-center" >

            <form  onSubmit={handleSubmit(onSubmit)} className="form-control border-1 py-4 px-8 mt-4 shadow-xl ">
            <h2 className="text-xl font-bold my-6 text-center">
         REVIEW US__
            </h2>
            <label className='label'>
                <span className="label-text font-bold">Rate us between 1-5</span>
            </label>
            <input
           type="number" min={1} max={5} className="input input-bordered input-primary w-full max-w-xs my-3 "
          {...register("rate")} defaultValue={5} />
         <textarea className="textarea textarea-primary text-lg" rows="5" cols="30" maxlength={"500"} placeholder="Your Comment" 
         {...register("comment")}>

         </textarea>
         <input type="submit"  value={"SUBMIT"}  className="btn btn-neutral w-full max-w-xs my-2" />
            </form>
            
        </div>
    );
};

export default ReviewUs;