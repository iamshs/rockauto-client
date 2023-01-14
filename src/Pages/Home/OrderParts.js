import React from 'react';
import { useParams } from 'react-router-dom';

const OrderParts = () => {
    const {_id} = useParams()
    return (
        <div>
           <p> {_id} </p> 
        </div>
    );
};

export default OrderParts;