import React from 'react';

const OrderRows = ({o,i , setDeleteManageOrder}) => {
  const { name , email , address , partsName , quantity } = o
    return (
        <tr>
        <th> {i+1} </th> 
        <td> {name} </td> 
        <td> {email} </td> 
        <td> {address} </td> 
        <td> {partsName} </td> 
        <td> {quantity} </td> 
        <td> 
        <label onClick={() => setDeleteManageOrder(o)} htmlFor="manage-order-modal" className="btn btn-xs btn-error">delete</label>
        </td>
      </tr>
    );
};

export default OrderRows;