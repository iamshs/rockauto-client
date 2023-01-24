import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const YourOrderRow = ({ i, o,  setDeleteOrder }) => {
  const { partsName, quantity, partsImg,_id ,price , paid , transactionId } = o;

  

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
      <td className="text-xs lg:text-lg md:text-lg"> ${price} </td>
      <td>
        <label htmlFor="order-modal" onClick={() => setDeleteOrder(o) } className="btn btn-error btn-xs text-[8px] px-1 lg:px-3 md:px-3 md:text-[12px] lg:text-[12px]">Delete</label>

      </td>
      <td>
       { ( price && !paid) &&  <Link to={`/dashboard/payment/${_id}`} className="btn btn-xs btn-accent text-[8px] md:text-[12px] lg:text-[12px] ">
          Pay
        </Link> }
        {
          (price && paid ) && <div>
            <span  className="text-primary font-bold lg:text-lg" > Paid </span>
            <p> transactionId: <span className="text-secondary  font-bold" >{transactionId}</span>  </p>
          </div>
        }
      </td>
      <td></td>
    </tr>
  );
};

export default YourOrderRow;
