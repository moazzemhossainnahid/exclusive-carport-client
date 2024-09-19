import React from 'react';
import './strpStyle.css';
const ProductDisplay = () => {
    const handlePay = () => {

        const product = {
            name: "Carport",
            price: "3700"
        }

        fetch(`http://localhost:5000/create-checkout-session`, {
            method: 'POST',
            mode: "no-cors",
        })
            .then(data => {
                console.log(data);
            })
    }
    return (
        <section>
            <div className="product">
                <img
                    src="https://i.imgur.com/EHyR2nP.png"
                    alt="The cover of Stubborn Attachments"
                />
                <div className="description">
                    <h3>Stubborn Attachments</h3>
                    <h5>$20.00</h5>
                </div>
            </div>

            <button onClick={handlePay} type="submit">
                Checkout
            </button>

        </section>
    );
};

export default ProductDisplay;