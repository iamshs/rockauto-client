import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import DeleteUserModal from './DeleteUserModal';
import User from './User';

const Users = () => {
  const [deleteUser , setDeleteUser] = useState(null)
    const {data : users , isLoading , isError,error,refetch} = useQuery({
        queryKey:['user'],
        queryFn: () =>
          fetch("http://localhost:5000/user")
          .then(res=>res.json())
        
      })

      if (isLoading){
        return <Loading />
      }

      if (isError){
        toast.error(`${error.message}`)
      }
    return (
        <div className="overflow-x-auto">
  <table className="table lg:w-full md:w-full table-compact">
  
    <thead>
      <tr>
        <th></th>
        <th className='text-[14px] '>EMAIL</th>
        <th>action</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
     {
        users.map((u,i)=><User key={u._id}
        u={u}
        i={i}
        refetch={refetch}
        setDeleteUser = {setDeleteUser}
        ></User>)
     }
     
     
    </tbody>
  </table>
  {
    deleteUser && <DeleteUserModal refetch={refetch}
    deleteUser = {deleteUser}
    setDeleteUser = {setDeleteUser}
    />
  }
</div>
    );
};

export default Users;