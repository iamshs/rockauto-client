import React from "react";
import { toast } from "react-toastify";

const User = ({ u , i , refetch ,setDeleteUser }) => {

  const { email , role } = u;


  const makeAdmin = () => {
    fetch(` https://rockauto-server.vercel.app/user/admin/${email}`, {
      method:'PUT'
    })
    .then( res => {
      if (res.status === 403){
          toast.error('Unable to make an admin')
      }
      else{
        return res.json()
      }
    })
    .then( data => {
     if(data.modifiedCount > 0){
      console.log(data)
      toast.success('Successfully made an admin')
      refetch()
     }
    })
  }
  return (
    <tr>
    <th>{i+1} </th>
    <td className="text-[13px] lg:text-[18px] md:text-[16px]">{email} </td>
    <td>
    <label htmlFor="user-modal"
    onClick={() => setDeleteUser(u)}
    className="btn btn-xs text-[8px] px-2  lg:text-[10px] bg-error border-none">Remove</label>
      
      </td>
    <td> {
      role !== 'admin' && <button className="btn btn-xs px-2  text-[8px] lg:text-[10px] " onClick={makeAdmin} >make admin</button>
      } </td>
      <td></td>
  </tr>
  );
};

export default User;
