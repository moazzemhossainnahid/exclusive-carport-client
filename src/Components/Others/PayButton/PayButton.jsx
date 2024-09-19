import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const PayButton = ({ checkoutItems }) => {
    const [user] = useAuthState(auth);
    console.log(checkoutItems);

    // const handleCheckout = () => {

    //     axios.post(`https://server.exclusivecarport.com/api/v1/stripe/create-checkout-session`, {
    //         checkoutItems,
    //         user,
    //     }, {
    //         method: 'POST',
    //         mode:"no-cors",
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     }).then(res => {
    //         if (res.data.url) {
    //             window.location.href = res.data.url
    //         }
    //     }).catch((err) => console.log(err.message))
    // }

    const handleCheckout = () => {
        // send to database
        fetch('https://server.exclusivecarport.com/api/v1/stripe/create-checkout-session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({
              checkoutItems,
              user,
            }),
          })
          .then(response => {
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
          })
          .then(data => {
              console.log('Response Data:', data);
              if (data.url) {
                  window.location.href = data.url;
              }
          })
          .catch(error => console.error('Error:', error));

    }

    return (
        <>
            <button onClick={() => handleCheckout()} className="text-white leading-none w-full py-3 font-semibold bg-primary border text-white">Pay Now</button>
        </>
    );
};

export default PayButton;