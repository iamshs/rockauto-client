import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import YourOrderRow from './YourOrderRow';

const YourOrder = () => {
    const [user] = useAuthState(auth)
    const email = user?.email
    const {data : order, isLoading } = useQuery({ queryKey: ['order'], queryFn: () => fetch(`http://localhost:5000/orders/${email}`)
    .then(res=>res.json())
})

if(isLoading){
    return <Loading />
}

console.log(order)
    // useEffect( ()=>{
    //     fetch(`http://localhost:5000/orders/${email}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //     })
    // } ,[email])

  
    return (
      <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead  >
          <tr >
            <th></th> 
            <th>Image</th> 
            <th>Parts</th> 
            <th  >Quantity</th> 
            <th>Cancel</th>
            <th>Pay</th>
          </tr>
        </thead> 
        <tbody>
            {
            order.map((o,i)=><YourOrderRow key={o._id} o={o} i={i} ></YourOrderRow>)
          }  

        </tbody> 
      </table>
    </div>
    );
};

export default YourOrder;