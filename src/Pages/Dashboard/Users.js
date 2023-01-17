import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading';
import User from './User';

const Users = () => {
    const {data , isLoading , isError,error} = useQuery({
        queryKey:['parts'],
        queryFn: () =>
          fetch("http://localhost:5000/user")
          .then(res=>res.json())
        
      })
      if (isLoading){
        return <Loading />
      }
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>EMAIL</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
     {
        data.map((u,i)=><User key={u._id}
        u={u}
        i={i}
        ></User>)
     }
     
     
    </tbody>
  </table>
</div>
    );
};

export default Users;