import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const MyProfile = () => {
    const {register,handleSubmit , reset} = useForm();
    const [loading , setLoading] = useState(false)
    const profileApiKey = 'c30f11deb5b901c537dc75372e68d181'
    const [user] = useAuthState(auth)
   
     if(loading){
        return <Loading />
     }

    const onSubmit = async data =>{
       const image = data.img[0]
       const formData = new FormData();
       formData.append("image", image);
       const url = `https://api.imgbb.com/1/upload?key=${profileApiKey}`

       fetch(url , {
        method:'POST',
        body : formData
       })
       .then(res => res.json())
       .then( result =>{
       setLoading(true)
        if( result.success === true){
            const image = result.data.url
            const profile = {
                displayName : user.displayName  ,
                photoURL : image ,
                email : user.email ,
                profession : data.profession ,
                homeTown : data.homeTown
            }

            fetch(' https://rockauto-server.vercel.app/profile' , {
                method : 'POST' ,
                headers : {
                    'content-type' : 'application/json' 
                },
                body: JSON.stringify(profile)
            })
            .then( res => res.json())
            .then( p =>{
               
                if (p.acknowledged === true){
                    setLoading(false)
                    toast.success('Completed Profile Successfully')
                    reset()
                    
                  }
                  else{
                    toast.error('Unsuccessful attempt ')
                  }
            })

            // fetch(` https://rockauto-server.vercel.app/profile/${user.email}`,{
            //   method:"PATCH",
            //   headers:{
            //     'content-type':'application/json'
            //   },
            //   body:JSON.stringify(profile)
            // })
            // .then(res=>res.json())
            // .then(result=>{
            //   console.log(result)
            //   if (result.modifiedCount > 0){
            //     toast.success('Your Profile has updated')
            //     setLoading(false)
            //     reset()
            //   }
             
            // })         


        }
       })
    }
    return (
 
           
           <div className="flex items-center justify-center   ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-control border-1 py-4 px-8 mt-4 shadow-xl  "
      >
        <h2 className="text-xl font-bold my-6 text-center">
          COMPLETE YOUR PROFILE__
        </h2>
        <label className='label'>
        <span className="label-text font-bold text-primary">Choose Your Avatar</span>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered file-input-neutral  max-w-xs mb-1 w-full "
          {...register("img")}
        />
        
        <input
          type="text"
          value={user.displayName}
          disabled
          className="input input-bordered input-primary w-full max-w-xs my-1 "
          {...register("name")}
        />
        <input
          type="email"
          value={user.email}
          disabled
          className="input input-bordered input-primary w-full max-w-xs mb-1 "
          {...register("email")}
        />
        
        <input
          type="text"
          placeholder="Profession"
          className="input input-bordered input-primary w-full max-w-xs my-1"
          {...register("profession")}
        />
        
        <input
          type="text"
          placeholder="Home Town "
          className="input input-bordered input-primary w-full max-w-xs my-1 "
          {...register("homeTown")}
        />
        
       
        <input
          type="submit"
          value={"save"}
          className="btn btn-neutral w-full max-w-xs my-2 "
        />
      </form>
    </div> 
    
    );
};

export default MyProfile;