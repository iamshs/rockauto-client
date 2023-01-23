import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutForm = ({o}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError , setCardError] = useState('')
  const [success , setSuccess] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState('');
  const {price , quantity , name , email} = o
  const totalPrice = price * quantity

  
  useEffect( () =>{
    fetch('http://localhost:5000/create-payment-intent',{
        method: "POST",
        headers: {
         'content-type' : 'application/json'
          
        },
        body: JSON.stringify({totalPrice})
    })
    .then(res => res.json())
    .then(data =>{
     if(data?.clientSecret){
        setClientSecret(data.clientSecret)
     }
    })
  } , [totalPrice])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const {error, } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      setCardError(error?.message || '')
      setSuccess('');

   const {paymentIntent, intentError} = await stripe.confirmCardPayment(
    clientSecret,
    {
      payment_method: {
        card: card,
        billing_details: {
          name: name,
          email : email
        },
      },
    },
  );
  if (intentError){
    setCardError(intentError.message)
    setSuccess('')
  }
  else{
    setSuccess('Congrats!You paid successfully')
    setCardError('')
    setTransactionId(paymentIntent.id)
   
  }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm my-5 btn-accent" type="submit" disabled={!stripe || !clientSecret }>
        Pay
      </button>
    </form>
     { cardError &&  <p className="text-bold text-lg text-error" > {cardError} </p> }
     { success &&  <div>
        <p className="text-bold text-lg text-success" > {success} </p>
        <p className="text-lg font-bold"> Your transaction Id : {transactionId}  </p>
     </div> }
    </div>
  );
};

export default CheckOutForm;
