import React from "react";

const PartsRow = ({ p, i , setDeleteParts }) => {
  const { name, img, price, quantity } = p;
  return (
    <tr>
      <th>{i + 1} </th>
      <td> {name} </td>
      <td>
        <div className="avatar">
          <div className="lg:w-16 w-6 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td> {price} </td>
      <td> {quantity} </td>
      <td>
        <label
        onClick={() => setDeleteParts(p) }
          htmlFor="delete-parts-modal"
          className="btn btn-xs btn-error px-1 lg:px-3 text-[8px] lg:text-[12px] md:text-[12px] "
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default PartsRow;
