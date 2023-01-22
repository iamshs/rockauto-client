import React from "react";

const YourOrderRow = ({ i, o }) => {
  const { partsName, quantity, partsImg } = o;
  return (
    <tr>
      <th> {i+1} </th>
      <th>
       
        <div className="avatar">
          <div className="lg:w-16 w-8 rounded">
            <img
              src= {partsImg}
              alt= {partsName}
            />
          </div>
        </div>
      </th>
      <th className="lg:text-lg" > {partsName} </th>
      <td className="" > {quantity} </td>
      <td> <button className="btn btn-error btn-xs text-[8px] md:text-[12px] lg:text-[12px] "> Cancel </button> </td>
      <td> <button className="btn btn-xs btn-accent text-[8px] md:text-[12px] lg:text-[12px] "> Pay </button> </td>
      
    </tr>
  );
};

export default YourOrderRow;
