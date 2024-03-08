import React from 'react';
import Message from './Message';
import ProductDisplay from './ProductDisplay';
import './strpStyle.css';
import { useState } from 'react';
import { useEffect } from 'react';
const Payment = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);
  
      if (query.get("success")) {
        setMessage("Order placed! You will receive an email confirmation.");
      }
  
      if (query.get("canceled")) {
        setMessage(
          "Order canceled -- continue to shop around and checkout when you're ready."
        );
      }
    }, []);
  
    return message ? (
      <Message message={message} />
    ) : (
      <ProductDisplay />
    );
};

export default Payment;