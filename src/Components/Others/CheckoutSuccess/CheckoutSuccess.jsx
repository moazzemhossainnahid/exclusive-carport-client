import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
    return (
        <div className='w-full'>
            <div className="w-full flex py-10 items-center justify-center h-full bg-gray-100">
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 bg-white p-8 rounded shadow-md py-10">
                    <div className="w-full md:w-3/6 mx-auto">
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/payment-successful-6021234-4993177.png" // Replace with your success image URL
                            alt="Success"
                            className="w-2/3 mx-auto mb-4"
                        />
                    </div>
                    <div className="w-full md:w-3/6 mx-auto text-center">
                        <h1 className="text-2xl font-semibold text-green-600 mb-4">Payment Successful!</h1>
                        <p className="text-gray-700 text-center">
                            Thank you for your purchase. Your payment was successful.
                        </p>
                        <div className="pt-6">
                            <Link to={`/`}
                                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSuccess;