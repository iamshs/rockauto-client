import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddProduct = () => {
  const [loading , setLoading] = useState(false)
  const {register,handleSubmit , reset} = useForm();
  const imageStorageKey='49a5d838e4a2bd75ea6e6064937e635c';
  
 if (loading){
  return <Loading />
 }

  const onSubmit = async (data) => {

    const image = data.img[0]
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    fetch(url, {
      method: 'POST',
      body: formData
  }).then(res=>res.json())
  .then(result =>{
    setLoading(true)
    if (result.success){
      const img = result.data.url ;
      const parts = {
        name : data.name ,
        price : data.price ,
        quantity : data.quantity ,
        condition : data.condition ,
        details : data.details ,
        img : img
      }
      fetch('http://localhost:5000/parts' , {
        method:'POST' ,
        headers :{
          'content-type' : 'application/json' ,
          authorization : ` Bearer ${localStorage.getItem('accessToken')} `
        },
        body : JSON.stringify(parts)
      })
      .then(res => res.json())
      .then( product =>{
      
        setLoading(false)
        if (product.acknowledged === true){
          toast.success('Parts Added Successfully')
          reset()
          
        }
        else{
          toast.error('Unsuccessful attempt ')
        }
      } )
    }
  })};

  return (
    <div className="flex items-center justify-center   ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-control border-1 py-4 px-8 mt-4 shadow-xl  "
      >
        <h2 className="text-xl font-bold my-6 text-center">
          ADD A NEW PARTS__
        </h2>
        <input
          type="text"
          placeholder="Parts Name"
          className="input input-bordered input-primary w-full max-w-xs mb-1 "
          {...register("name")}
        />
        
        <input
          type="text"
          placeholder="Price"
          className="input input-bordered input-primary w-full max-w-xs my-1"
          {...register("price")}
        />
        
        <input
          type="text"
          placeholder="Quantity "
          className="input input-bordered input-primary w-full max-w-xs my-1 "
          {...register("quantity")}
        />
        
        <input
          type="text"
          placeholder="Condition"
          className="input input-bordered input-primary w-full max-w-xs my-1"
          {...register("condition")}
        />
        
        <textarea
          className="textarea textarea-primary"
          placeholder="Parts Details"
          {...register("details")}
        ></textarea>
       
        <input
          type="file"
          className="file-input file-input-bordered file-input-neutral w-full max-w-xs my-1 "
          {...register("img")}
        />
       
        <input
          type="submit"
          value={"add"}
          className="btn btn-neutral w-full max-w-xs my-2 "
        />
      </form>
    </div>
  );
};

export default AddProduct;
