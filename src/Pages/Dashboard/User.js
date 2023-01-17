import React from "react";

const User = ({ u , i }) => {
  const { email } = u;
  return (
    <tr>
    <th>{i+1} </th>
    <td className="font-bold">{email} </td>
    <td><button className="btn btn-xs">Remove</button></td>
    <td><button className="btn btn-xs">Tiny</button></td>
  </tr>
  );
};

export default User;
