import React, { useState } from "react";
import { toast } from "react-toastify";
import useParts from "../../hooks/useParts";
import Loading from "../Shared/Loading";
import DeletePartsModal from "./DeletePartsModal";
import PartsRow from "./PartsRow";

const ManageParts = () => {
  const [parts, isLoading, isError, error , refetch] = useParts();
  const [deleteParts , setDeleteParts] = useState(null)

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    toast.error(`${error.message}`);
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th className="text-xs" ></th>
              <th className="text-xs" >Name</th>
              <th className="text-xs" >Image</th>
              <th className="text-xs" >Price</th>
              <th className="text-xs" >Quantity</th>
              <th className="text-xs" >Delete</th>
              <th className="text-xs" ></th>
            </tr>
          </thead>
          <tbody>
            {parts.map((p ,i) => (
              <PartsRow p={p} i={i} setDeleteParts = {setDeleteParts}  />
            ))}
          </tbody>
        </table>
      </div>
      {
        deleteParts && <DeletePartsModal setDeleteParts = {setDeleteParts}
        refetch = {refetch}
        deleteParts ={deleteParts}  />
      }
    </div>
  );
};

export default ManageParts;
