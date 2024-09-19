import React, { useEffect, useState } from 'react';
import { FaEuroSign } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import PayButton from '../../Components/Others/PayButton/PayButton';
import { toast } from 'react-toastify';
import UseCarport from '../../Hooks/useCarport';
import { Helmet } from 'react-helmet';

const CartCarport = () => {
    const { id } = useParams();
    const [carports] = UseCarport();
    const carport = carports && carports?.find(c => c?.id === id);
    const [quantity, setQuantity] = useState(1); // Initialize quantity to 1
    const [totalPrice, setTotalPrice] = useState(carport?.price); // Initialize quantity to 1
    const [downPayment, setDownPayment] = useState(0); // Initialize amount to 0
    const [downPaymentInput, setDownPaymentInput] = useState(''); // Controlled input

    useEffect(() => {
        const newPrice = parseInt(((carport?.price * quantity) + (carport?.price * quantity) * 10 / 100 + (carport?.price * quantity) * 0.8 / 100));
        const downPayent = parseInt(downPayment)
        if (downPayent > 0) {
            setTotalPrice(downPayment > 0 ? downPayment : (((carport?.price * quantity) + (carport?.price * quantity) * 10 / 100 + (carport?.price * quantity) * 0.8 / 100)));
        } else {
            setTotalPrice(newPrice);
        }
    }, [carport, downPayment])


    const item = [
        {
            id: carport?.id,
            name: carport?.title,
            description: carport?.mainDesc,
            category: carport?.category,
            image: carport?.images?.banner,
            quantity: quantity,
            price: carport?.price,
            total: carport?.price * quantity,
            downPay: downPayment,
            duePayment: downPayment > 0 ? (((carport?.price * quantity) + (carport?.price * quantity) * 10 / 100 + (carport?.price * quantity) * 0.8 / 100) - downPayment) : 0,
            payableAmount: totalPrice
        }
    ];

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    // console.log("item", item);

    const processDownPayment = () => {
        const downPayent = parseFloat(downPaymentInput); // Convert to number

        if (!isNaN(downPayent) && downPayent >= 500) {
            console.log("downPayment to be set:", downPayent);
            setDownPayment(downPayent)
            toast.success(`DownPayment processed: €${downPayent}`);
        } else {
            toast.error(`DownPayment must be over €500`);
        }
    };

    return (
        <div className='container z-30 w-full'>
            <Helmet>
                {/* Add Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-C4HJYE0Z26"></script>
                <script>
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C4HJYE0Z26');
          `}
                </script>
            </Helmet>
            <div>
                <div className="w-full h-full" id="chec-div">
                    <div className="w-full relative h-full transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                        <div className="w-full" id="cart">
                            <div className="w-full md:w-4/5 mx-auto p-5" id="scroll">

                                <div className="w-full pb-7">
                                    <h3 style={{ fontFamily: 'Helvetica' }} className="text-base text-2xl md:text-3xl font-semibold leading-none">Checkout</h3>
                                </div>

                                <div className="w-full flex flex-col md:flex-row gap-5 rounded border border-primary">
                                    <div className="w-full mx-auto">
                                        <div className="p-5">
                                            <img src={item[0]?.image} alt className="w-full h-full object-center object-cover" />
                                            <div className="w-full flex justify-between items-center gap-3 pt-5">
                                                <p style={{ fontFamily: 'Helvetica' }} className="text-base text-xl font-semibold leading-none">{item[0]?.name}</p>
                                                <div className="flex items-center">
                                                    <button
                                                        onClick={handleDecrement}
                                                        className="px-2 w-7 h-7 flex justify-center items-center font-semibold py-1 bg-gray-200 hover:bg-gray-300 rounded"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="mx-4 font-bold">{quantity}</span>
                                                    <button
                                                        onClick={handleIncrement}
                                                        className="px-2 w-7 h-7 flex justify-center items-center font-semibold py-1 bg-gray-200 hover:bg-gray-300 rounded"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mx-auto bg-primary/5">
                                        <div className="p-5 md:p-10">
                                            <h3 className="text-2xl font-semibold">Order Summery</h3>
                                            <div className="w-full space-y-3 lg:text-lg font-medium text-black border-b border-primary pb-3 pt-2 md:pt-3 mt-10">
                                                <p className='text-start'>Down Payments <span className="text-sm">(Optional)</span>:</p>{" "}
                                                <div className="w-full h-10 flex items-center gap-2">
                                                    <input
                                                        type="text"
                                                        value={downPaymentInput}
                                                        onChange={(e) => setDownPaymentInput(e.target.value)} // Control the input value
                                                        placeholder="Enter Amount"
                                                        className="outline-none rounded px-2 bg-white border text-sm font-semibold w-full h-full"
                                                    />
                                                    <button
                                                        onClick={processDownPayment}
                                                        className="px-3 rounded bg-primary text-white h-full"
                                                    >
                                                        Process
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                {
                                                    downPayment > 0 && <div className="flex items-center pb-3 justify-between lg:pt-5 pt-20">
                                                        <p className="text-xl leading-normal text-gray-800">Total Amount</p>
                                                        <p className="text-xl font-bold leading-normal text-right text-gray-800 flex gap-2 items-center"><FaEuroSign /> {(((carport?.price * quantity) + (carport?.price * quantity) * 10 / 100 + (carport?.price * quantity) * 0.8 / 100)?.toFixed(2))}</p>
                                                    </div>
                                                }
                                                {
                                                    downPayment > 0 &&
                                                    <div className="flex items-center pb-6 justify-between pt-3 border-primary border-b">
                                                        <p className="text-xl leading-normal text-gray-800">DownPayment</p>
                                                        <p className="text-xl font-bold leading-normal text-right text-gray-800 flex gap-2 items-center"><FaEuroSign /> {`${downPayment}.00`}</p>
                                                    </div>
                                                }
                                                {
                                                    !downPayment > 0 && <div className="flex items-center justify-between lg:pt-5 pt-10">
                                                        <p className="text-xl leading-normal text-gray-800">Total Amount</p>
                                                        {/* <p className="text-2xl font-bold leading-normal text-right text-gray-800 flex gap-2 items-center"><FaEuroSign /> {((chair?.price * quantity)?.toFixed(2))}</p> */}
                                                        <p className="text-xl leading-normal text-right text-gray-800 flex gap-2 items-center"><FaEuroSign /> {`${downPayment > 0 ? downPayment : (carport?.price * quantity)}.00`}</p>
                                                    </div>
                                                }
                                                {
                                                    !downPayment > 0 && <div className="flex items-center justify-between lg:pt-5 pt-10">
                                                        <p className="text-xl leading-normal text-gray-800">Shipping Cost</p>
                                                        {/* <p className="text-2xl font-bold leading-normal text-right text-gray-800 flex gap-2 items-center"><FaEuroSign /> {((chair?.price * quantity)?.toFixed(2))}</p> */}
                                                        <p className="text-xl leading-normal text-right text-gray-800 flex gap-2 items-center"><FaEuroSign /> {`${downPayment > 0 ? downPayment : ((carport?.price * quantity) * 10 / 100)}.00`}</p>
                                                    </div>
                                                }
                                                {
                                                    !downPayment > 0 && <div className="flex items-center justify-between lg:pt-5 pt-10">
                                                        <p className="text-xl leading-normal text-gray-800">Tax (0.8%)</p>
                                                        {/* <p className="text-2xl font-bold leading-normal text-right text-gray-800 flex gap-2 items-center"><FaEuroSign /> {((chair?.price * quantity)?.toFixed(2))}</p> */}
                                                        <p className="text-xl leading-normal text-right text-gray-800 flex gap-2 items-center"><FaEuroSign /> {`${downPayment > 0 ? downPayment : ((carport?.price * quantity) * 0.8 / 100)}.00`}</p>
                                                    </div>
                                                }

                                                <hr />
                                                {
                                                    !downPayment > 0 && <div className="flex items-center pb-3 justify-between lg:pt-5 pt-20">
                                                        <p className="text-xl leading-normal font-bold text-gray-800">Grand Total</p>
                                                        <p className="text-xl font-bold leading-normal text-right text-gray-800 flex gap-2 items-center"><FaEuroSign /> {(((carport?.price * quantity) + (carport?.price * quantity) * 10 / 100 + (carport?.price * quantity) * 0.8 / 100)?.toFixed(2))}</p>
                                                    </div>
                                                }
                                                {downPayment > 0 && <div className="flex items-center pb-6 justify-between lg:pt-5 pt-5">
                                                    <p className="text-xl leading-normal text-gray-800"> Due</p>
                                                    <p className="text-xl font-bold leading-normal text-right text-gray-800 flex gap-2 items-center"><FaEuroSign /> {((downPayment - ((carport?.price * quantity) + (carport?.price * quantity) * 10 / 100 + (carport?.price * quantity) * 0.8 / 100))?.toFixed(2))}</p>
                                                </div>}
                                                <div className="pt-5">
                                                    <PayButton checkoutItems={item} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full py-10">
                                    <div className="w-full flex flex-col md:flex-row justify center items-center gap-3">
                                        <div className="border flex items-center justify-start ap-3 rounded border-primary text-primary p-5">
                                            <div className="w-1/5">
                                                <img src="/box.svg" alt="" className="" />
                                            </div>
                                            
                                            <div className="w-4/5 border-l-2 border-primary/70 pl-2">
                                                <h3 className="text-xl font-semibold">Expected Delivery Date</h3>
                                                <p className="text-sm">This product is expected to ship in December, 2024</p>
                                            </div>
                                        </div>
                                        <div className="border rounded border-primary text-primary p-5">
                                            <h3 className="text-xl font-semibold">This is a PRE-ORDER product</h3>
                                            <p className="text-sm">When you confirm the order, We will freshly make a new one for your car.</p>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartCarport;