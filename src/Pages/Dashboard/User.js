import React from "react";
import { toast } from "react-toastify";

const User = ({ u , i , refetch }) => {
  const { email , role } = u;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method:'PUT',
      headers:{
        authorization:` Bearer ${localStorage.getItem('accessToken')} `
      }
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
    <td><button className="btn btn-xs text-[8px] p-1 lg:text-[12px]">delete</button></td>
    <td> {
      role !== 'admin' && <button className="btn btn-xs p-1 text-[8px] lg:text-[12px] " onClick={makeAdmin} >make admin</button>
      } </td>
  </tr>
  );
};

export default User;
