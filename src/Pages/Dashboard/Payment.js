import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {
  const { orderId } = useParams();
  const stripePromise = loadStripe(
    "pk_test_51L0jrBAox4HLroFQeTQ1sQ9llIIQqZGr8BMBMttanYSgj5QU0CHLATxc4GWndRXh0yixa0qqMWMiQ1rZNki435aE00N1HdeAwx"
  );
  const {
    data: o,
    isLoading,
  } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () =>
      fetch(` https://rockauto-server.vercel.app/order/${orderId}`, {
        method: "GET"
      
      }).then((res) => res.json()),
  });

  

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" flex justify-center py-10 items-center flex-col ">
      <div className=" mb-12 lg:w-[50%] md:w-[60%] w-[80%] ">
        <h2 className="card-title text-black text-3xl ">
          Hello, Mr/Mrs {o.name}
        </h2>
        <p className="text-xl my-2 font-semibold">
          PLEASE PAY  <span className="font-bold text-primary text-3xl ">
            ${o.quantity * o.price} </span> FOR YOUR ORDER OF <span className="font-bold text-3xl text-secondary">
            {o.partsName}
          </span>
        </p>
      </div>

      <div className="card lg:w-[50%] md:w-[60%] w-[80%] bg-base-100 shadow-xl">
        <div className="card-body">
        <Elements stripe={stripePromise}>
        <CheckOutForm o={o} />
        </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
