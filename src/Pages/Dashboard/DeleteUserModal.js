import React from 'react';
import { toast } from 'react-toastify';

const DeleteUserModal = ({refetch , deleteUser , setDeleteUser}) => {
 
    const {email} = deleteUser

const handleUserDelete = email =>{
     
    fetch(`http://localhost:5000/user/${email}` , {
        method: 'Delete' ,
        headers : {
            authorization : ` Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then( res => res.json())
    .then( data => {
        console.log(data)
        if(data.deletedCount){
            toast.error('An User has been Removed Successfully')
            setDeleteUser(null)
            refetch()
        }
    })
}

    return (
        <div>
<input type="checkbox" id="user-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-error text-lg"> Are you SURE you want to delete this user!</h3>
    <p className="py-4"> Once you delete he will no longer be an rockAuto User</p>
    <div className="modal-action">
    <button onClick={() => handleUserDelete(email)} className="btn btn-xs text-[8px] px-2  lg:text-[10px] btn-error border-none">Remove</button>
      <label htmlFor="user-modal" className="btn btn-xs text-[8px] px-2  lg:text-[10px] btn-accent border-none">Cancel</label>
    </div>
  </div>
</div>  
        </div>
    );
};

export default DeleteUserModal;