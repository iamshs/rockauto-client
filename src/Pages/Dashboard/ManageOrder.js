import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
import OrderRows from './OrderRows';

const ManageOrder = () => {
    const {data : order , isLoading } = useQuery({ queryKey: ['orders'], queryFn: () => fetch('http://localhost:5000/orders')
     .then(res=>res.json())
})

console.log(order)

if(isLoading){
    return <Loading />
}
    return (
        <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Email</th> 
        <th>Address</th> 
        <th>Parts Name</th> 
        <th> Quantity </th> 
        <th> Delete Order</th>
      </tr>
    </thead> 
    <tbody>
      {
        order.map( (o,i) => <OrderRows key={o._id} o={o} i={i} ></OrderRows>)
      }
      
    </tbody> 
   
  </table>
</div>
    );
};

export default ManageOrder;