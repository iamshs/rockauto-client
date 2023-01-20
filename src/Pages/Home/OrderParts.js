import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading'

const OrderParts = () => {
    const {_id} = useParams()
    const [user] = useAuthState(auth)
    const [isDisabled , setIsDisabled] = useState(false)
    const {data : part , isLoading } = useQuery({
        queryKey:['part'],
        queryFn: () =>
          fetch( ` http://localhost:5000/parts/${_id} ` )
          .then(res=>res.json())
        
      })
const handleDisable = e =>{
    const validOrder = e.target.value
    const maxQuantity = part.quantity

    if(validOrder < 5) {
        setIsDisabled(true)
        toast.error('Your Minimum order have to be 5')
    }
    else if (validOrder > maxQuantity) {
        setIsDisabled(true)
        toast.error("You can't order more than available quantity")
    }
   else{
    setIsDisabled(false)
   }
} 

//sending order

const sendOrder = e => {
  e.preventDefault()
    const order = {
        name:user?.displayName ,
        email : user?.email ,
        mobile: e.target.mobile.value ,
        address : e.target.address.value ,
        quantity : e.target.quantity.value
    }

    console.log(order)

    fetch('http://localhost:5000/order' , {
        method : 'POST' ,
        headers : {
            'content-type' : 'application/json' ,
            authorization : ` Bearer ${localStorage.getItem('accessToken')}`
        } ,
        body : JSON.stringify(order) 
    })
    .then( res => res.json())
    .then( result => {
        console.log(result)
        if (result.insertedId){
            e.target.reset()
            toast.success('You have ordered successfully')
        }
        else{
            toast.error('Unsuccessful attempt')
        }
    })
}
    
if (isLoading){
    return <Loading />
}

    return (

      <div className='flex flex-col-reverse lg:flex-row  hero items-center justify-around  lg:min-h-screen'>
        <div className=' max-w-sm lg:max-w-md md:max-w-xl p-6 shadow-2xl rounded-lg '>
           <form onSubmit={sendOrder} >
          
           <input type="text" defaultValue={user?.displayName} disabled className="input input-bordered input-primary mb-2 w-full " />
           <input type="email" defaultValue={user?.email} disabled className="input input-bordered input-primary  w-full " />

           <label className='label'>
           <span className="label-text text-primary font-bold">Your Mobile Number</span>
           </label>
           <input type="text" placeholder="Mobile Number" name='mobile' className="input input-bordered input-primary w-full " />
           <label className='label'>
           <span className="label-text text-primary font-bold">Your Address</span>
           </label>
           <textarea className="textarea textarea-primary  mb-2" name='address' rows={4} cols={48} placeholder="Address"></textarea>
           <label className='label'>
           <span className="label-text text-primary font-bold">Quantity You Want</span>
           </label>
           <input type="number" name='quantity' onChange={handleDisable}  defaultValue={5}  className="input input-bordered input-primary w-full " />
           <input type={'submit'}  disabled={isDisabled} value='ORDER' className='btn w-full btn-primary my-4' />
           </form>
        </div>
       <div className='lg:max-w-sm max-w-xs md:max-w-md'>
                <img src={part.img} alt='' className='max-w-xs mb-4' />
                <h2 className='lg:text-5xl text-2xl md:text-4xl font-bold text-secondary mb-6'>{part.name}</h2>
                <h2 className='lg:text-4xl text-2xl md:text-4xl mb-6 lg:mb-12'> $<span className='font-bold text-black '>{part.price}</span> </h2>
                <h3 className='text-xl '> <span className='font-semibold'> Available Quality :</span> {part.quantity} </h3>
                <h5 className=' text-lg'> <span className='font-semibold' >Condition: </span> {part.condition} </h5>
                <p className='mb-5'> {part.details} </p>

        </div>
       </div>
       
    );
};

export default OrderParts;