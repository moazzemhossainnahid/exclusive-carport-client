
import { toast } from 'react-toastify';

const ConfirmOrderModal = ({ confirmOrder, setNumber, number }) => {

    const { createdAt, customerId, delivery_status, paymentIntentId, payment_status, products, shipping, userId, total, _id } = confirmOrder;

    // console.log(confirmOrder);

    const handleConfirmOrder = (id) => {
        const url = `http://localhost:5000/api/v1/orders/${id}`;
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success(` Order id (${_id}) has been Confirmed.`);
                    setNumber(number + 1);
                }
            })
    };

    return (
        <div>
            <input type="checkbox" id="confirm-order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-5xl relative ">
                    <div className="hidden md:block absolute top-0 h-full w-full left-0 mix-blend-darken opacity-5">
                        <img src="https://res-console.cloudinary.com/dsigyjfjq/thumbnails/v1/image/upload/v1690616136/TG92ZXBpa19jb20tODMyMzU2ODk1LVRlY2hub2xvZ3lfc2hhZGluZ19ibHVlLXZpb2xldF9ncmFkaWVudF9saW5lX2VsZW1lbnRfZGVzaWduX2I3cWx5cQ==/preview" alt="" className="h-full w-full mix-blend-darken" />
                    </div>
                    {
                        delivery_status !== "confirmed" &&
                        <div className="hidden md:block absolute bottom-3 left-3">
                            <img src={products && products[0]?.image} alt="" className="w-32 h-32 rounded-full" />
                        </div>
                    }
                    <label htmlFor="confirm-order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="w-full flex gap-5 items-center">
                        <h1 className='mb-4 badge badge-sm badge-warning text-sm font-bold relative text-white p-4'>Order History</h1>
                        <h1 className='mb-4 text-3xl font-bold text-gray-700 p-4 relative'>{products && products[0]?.name}</h1>
                        {/* <div className="w-full md:w-2/5 justify-end -mt-5 hidden md:block">
                            <img src={products && products[0]?.image} alt="cover" className="w-20 h-20 rounded-full mx-auto" />
                        </div> */}
                    </div>
                    <div className="w-full relative flex flex-col md:flex-row justify-between items-start gap-3">
                        <div className="">
                            <div className="w-full md:w-4/5 order-2 md:order-1">
                                <h3 className="text-2xl font-bold pb-3">Product Info-</h3>
                                <p className='my-4'>Product ID: {customerId}</p>
                                <p className={` my-4`}>Colour:  Black</p>
                                <p className='my-4'>Quantity: 5</p>
                                <p className='my-4'>Total Payment: {total}</p>
                                <p className='my-4'>Payment Status: {payment_status}</p>
                                <p className='my-4'>Payment Intent ID: {paymentIntentId}</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-full md:w-4/5 order-2 md:order-1">
                                <h3 className="text-2xl font-bold pb-3">Customer Info-</h3>
                                <p className='my-4'>Customer ID: {customerId}</p>
                                <p className='my-4'>Name: {shipping?.name}</p>
                                <p className='my-4'>Email: {shipping?.email}</p>
                                <p className='my-4'>Phone: {shipping?.phone}</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-full md:w-4/5 order-2 md:order-1">
                                <h3 className="text-2xl font-bold pb-3">Shipping Info-</h3>
                                <p className='my-4'>Uuid: {userId}</p>
                                <p className={` my-4`}>Delivery Status:  <span className={`${delivery_status === "confirmed" ? "text-white badge" : "text-gray-900 badge badge-warning"}`}>{delivery_status}</span></p>
                                <p className='my-4 font-bold'>Address</p>
                                <p className='my-4'>Country: {shipping?.address?.country}</p>
                                <p className='my-4'>City: {shipping?.address?.city}</p>
                                <p className='my-4'>State: {shipping?.address?.state}</p>
                                {
                                    shipping?.address?.line2 === null ?
                                        <p className='my-4'>Road: {`${shipping?.address?.line1}`}</p> :
                                        <p className='my-4'>Road: {`${shipping?.address?.line1}, ${shipping?.address?.line2}`}</p>
                                }
                                <p className='my-4'>Postal Code: {shipping?.address?.postal_code}</p>
                            </div>
                        </div>
                    </div>
                    {
                        delivery_status !== "confirmed" &&
                        <div className="modal-action relative">
                            <label htmlFor="confirm-order-modal" onClick={() => handleConfirmOrder(_id)} className="btn">Confirm</label>
                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default ConfirmOrderModal;