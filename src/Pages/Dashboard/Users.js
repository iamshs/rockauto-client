import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import User from './User';

const Users = () => {
    const {data , isLoading , isError,error,refetch} = useQuery({
        queryKey:['parts'],
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
      </tr>
    </thead>
    <tbody>
     
     {
        data.map((u,i)=><User key={u._id}
        u={u}
        i={i}
        refetch={refetch}
        ></User>)
     }
     
     
    </tbody>
  </table>
</div>
    );
};

export default Users;