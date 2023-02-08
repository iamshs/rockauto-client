import React from 'react';
import { toast } from 'react-toastify';

const OrderDeleteModal = ({refetch , setDeleteOrder , deleteOrder}) => {
    
    const {_id} = deleteOrder

    const handleUserOrderDelete = (id) => {
        fetch(` https://rockauto-server.vercel.app/orders/${id}` ,{
          method : 'DELETE' 
        })
        .then( res => res.json() )
        .then( data => {
          console.log(data)
          if(data.deletedCount){
            toast.error('Order has been Deleted')
            setDeleteOrder(null)
            refetch()
          }
        })
      };

    return (
        <div>
        
<input type="checkbox" id="order-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-error text-lg"> Are You Sure you want to delete your Order!! </h3>
    <p className='py-4'> Once you delete you can't restore it again </p>
    <div className="modal-action">
    <button onClick={() => handleUserOrderDelete(_id)} className="btn btn-error btn-xs text-[8px] md:text-[12px] lg:text-[12px]" >
         Delete
        </button>
      <label htmlFor="order-modal" className="btn btn-accent btn-xs text-[8px] md:text-[12px] lg:text-[12px]">Cancel</label>
    </div>
  </div>
</div> 
        </div>
    );
};

export default OrderDeleteModal;