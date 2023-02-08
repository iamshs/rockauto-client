import { useQuery } from '@tanstack/react-query';
import React, {  useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderDeleteModal from './OrderDeleteModal';
import YourOrderRow from './YourOrderRow';

const YourOrder = () => {
    const [user] = useAuthState(auth)
    const [deleteOrder , setDeleteOrder] = useState(null)
    const email = user?.email
    const {data : order, isLoading , refetch } = useQuery({ queryKey: ['order'], queryFn: () => fetch(` https://rockauto-server.vercel.app/orders/${email}`)
    .then(res=>res.json())
})

if(isLoading){
    return <Loading />
}


 
    return (
      <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead  >
          <tr >
            <th></th> 
            <th className="text-xs">Image</th> 
            <th className="text-xs">Parts Name</th> 
            <th className="text-xs" >Quantity</th> 
            <th className="text-xs">Price</th>
            <th className="text-xs">Cancel</th>
            <th className="text-xs">Pay</th>
           
          </tr>
        </thead> 
        <tbody>
            {
            order.map((o,i)=><YourOrderRow key={o._id} o={o} i={i} refetch={refetch}
            setDeleteOrder = {setDeleteOrder}
            ></YourOrderRow>)
          }  

        </tbody> 
      </table>
      {
        deleteOrder && <OrderDeleteModal refetch={refetch} setDeleteOrder={setDeleteOrder} deleteOrder={deleteOrder} />
      }
    </div>
    );
};

export default YourOrder;