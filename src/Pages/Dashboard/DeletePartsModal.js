import React from 'react';
import { toast } from 'react-toastify';

const DeletePartsModal = ({refetch , setDeleteParts , deleteParts}) => {
     const {_id , name} = deleteParts
    const handleDeleteParts = _id =>{
       
        fetch(` https://rockauto-server.vercel.app/parts/${_id}` ,{
            method : 'DELETE' ,
            
          })
          .then( res => res.json() )
          .then( data => {
            console.log(data)
            if(data.deletedCount){
              toast.error('Parts has been Deleted')
              setDeleteParts(null)
              refetch()
            }
          })

    }

    return (
        <div>
<input type="checkbox" id="delete-parts-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg "> <span className='text-error'> Are you Sure you permanently delete </span>
      {name} </h3>
    
    <div className="modal-action">
      <label htmlFor="delete-parts-modal" onClick={() => handleDeleteParts(_id) } className="btn btn-xs btn-error">Delete</label>
      <label htmlFor="delete-parts-modal"  className="btn btn-xs btn-accent">Cancel</label>
    </div>
  </div>
</div> 
        </div>
    );
};

export default DeletePartsModal;