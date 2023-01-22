import React from "react";
import { toast } from "react-toastify";

const YourOrderRow = ({ i, o,  setDeleteOrder }) => {
  const { partsName, quantity, partsImg, } = o;

  

  return (
    <tr>
      <th> {i + 1} </th>
      <th>
        <div className="avatar">
          <div className="lg:w-16 md:w-12 w-8 rounded">
            <img src={partsImg} alt={partsName} />
          </div>
        </div>
      </th>
      <th className="text-xs lg:text-lg md:text-lg"> {partsName} </th>
      <td className="text-xs lg:text-lg md:text-lg"> {quantity} </td>
      <td>
        <label htmlFor="order-modal" onClick={() => setDeleteOrder(o) } className="btn btn-error btn-xs text-[8px] md:text-[12px] lg:text-[12px]">Delete</label>

      </td>
      <td>
        <button className="btn btn-xs btn-accent text-[8px] md:text-[12px] lg:text-[12px] ">
          Pay
        </button>
      </td>
      <td></td>
    </tr>
  );
};

export default YourOrderRow;
