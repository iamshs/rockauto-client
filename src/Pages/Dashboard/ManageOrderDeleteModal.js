import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderDeleteModal = ({setDeleteManageOrder , refetch , deleteManageOrder}) => {
    const { _id } = deleteManageOrder

    const handleManageDelete = id =>{
        fetch(` https://rockauto-server.vercel.app/orders/${id}` ,{
            method : 'DELETE' ,
          })
          .then( res => res.json() )
          .then( data => {
            console.log(data)
            if(data.deletedCount){
              toast.error('Order has been Canceled')
              setDeleteManageOrder(null)
              refetch()
            }
          })

    }
    return (
        <div>
<input type="checkbox" id="manage-order-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-error text-lg"> Are you sure you want to Cancel this Order!! </h3>
    <p className="py-4">Once You delete it will remove from order list</p>
    <div className="modal-action">
      <button onClick={() => handleManageDelete(_id)} className="btn btn-xs btn-error"> Delete </button> 
      <label htmlFor="manage-order-modal" className="btn btn-xs btn-accent">Cancel</label>
    </div>
  </div>
</div>  
        </div>
    );
};

export default ManageOrderDeleteModal;