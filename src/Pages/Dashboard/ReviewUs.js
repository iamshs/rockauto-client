import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProfile from '../../hooks/useProfile';


const ReviewUs = () => {
    const {register,handleSubmit , reset} = useForm();
    const [user] = useAuthState(auth)
    const [value , setValue] = useState(null)
    const [profile] = useProfile(user)



    const onSubmit = async data =>{
   
     const review = {
        name : user.displayName ,
        rate: value,
        comment: data.comment,
        avatar : profile.photoURL
     }
     fetch(' https://rockauto-server.vercel.app/review' , {
        method :'POST' ,
        headers : {
            'content-type' : 'application/json' 
        },
        body: JSON.stringify(review)
     })
     .then( res=>res.json())
     .then(result => {
        console.log(result)
        if(result.insertedId){
            toast('Thank You for your Review')
            reset()
            setValue(null)
        }
     })
    }
    return (
        <div className="flex items-center justify-center  " >

            <form  onSubmit={handleSubmit(onSubmit)} className="form-control border-1 py-4 px-8 mt-4 shadow-xl w-[35%] ">
            <h2 className="text-xl font-bold my-6 text-center">
         REVIEW US__
            </h2>
            <label className='label'>
                <span className="label-text text-lg font-bold">Rate us between 1-5</span>
            </label>
           <Rating
        name="simple-controlled"
        size='large'
        className='mb-2'
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        {
            value &&  <textarea className="textarea textarea-primary text-lg" rows="5" cols="30"  placeholder="Your Comment" 
            {...register("comment")}>
   
            </textarea>
        }
         <input type="submit"  value={"SUBMIT"}  className="btn btn-neutral w-full max-w-xs my-2" />
            </form>
            
        </div>
    );
};

export default ReviewUs;