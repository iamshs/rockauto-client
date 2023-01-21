import React from 'react';

const OrderRows = ({o,i}) => {
  const { name , email , address , partsName , quantity } = o
    return (
        <tr>
        <th> {i+1} </th> 
        <td> {name} </td> 
        <td> {email} </td> 
        <td> {address} </td> 
        <td> {partsName} </td> 
        <td> {quantity} </td> 
        <td> <button className="btn btn-xs btn-error"> Cancel </button> </td>
      </tr>
    );
};

export default OrderRows;