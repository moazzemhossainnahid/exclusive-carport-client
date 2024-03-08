import React from 'react';
import { useStepperContext } from '../../../Hooks/StepperContext';

const CKShippingDetails = () => {
    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    console.log(userData);

    return (
        <div style={{ fontFamily: 'Helvetica' }} className="border bg-white px-5 col-span-2 shadow-sm py-5">
            <h2 className="py-5 text-3xl text-black text-opacity-75">
                Shipping Information
            </h2>

            <div className="flex flex-col md:flex-row gap-5 justify-between items-center pt-7">
                <div className="w-full grid grid-cols-1 space-y-5 justify-items-stretch gap-5 ">
                    <div className="w-full flex flex-col md:flex-row gap-5">
                        <div className="w-full">
                            <label className="relative cursor-pointer">
                                <input
                                    type="text"
                                    onChange={handleChange} value={userData["firstname"] || ""}
                                    placeholder="Input"
                                    className="h-[50px] bg-[#f3f3f3] rounded w-full px-6 text-md border outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                    name="firstname"
                                />
                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-27px] transition duration-200 input-text">
                                    First Name
                                </span>
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="relative cursor-pointer">
                                <input
                                    type="text"
                                    onChange={handleChange} value={userData["lastname"] || ""}
                                    placeholder="Input"
                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                    name="lastname"
                                />
                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-27px] transition duration-200 input-text">
                                    Last name
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-5">

                        <div className="w-full">
                            <label className="relative cursor-pointer">
                                <input
                                    type="text"
                                    onChange={handleChange} value={userData["companyname"] || ""}
                                    placeholder="Input"
                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                    name="companyname"
                                />
                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-27px] transition duration-200 input-text">
                                    Company Name <sup>(Optional)</sup>
                                </span>
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="relative cursor-pointer">
                                <input
                                    type="text"
                                    required
                                    onChange={handleChange} value={userData["country"] || ""}
                                    placeholder="Input"
                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                    name="country"
                                />
                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-27px] transition duration-200 input-text">
                                    Country/Region*
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-5">
                        <div className="w-full">
                            <label className="relative cursor-pointer">
                                <input
                                    type="text"
                                    required
                                    onChange={handleChange} value={userData["streetaddress"] || ""}
                                    placeholder="Input"
                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                    name="streetaddress"
                                />
                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-27px] transition duration-200 input-text">
                                    Street Address*
                                </span>
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="relative cursor-pointer">
                                <input
                                    type="text"
                                    required
                                    onChange={handleChange} value={userData["towncity"] || ""}
                                    placeholder="Input"
                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                    name="towncity"
                                />
                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-27px] transition duration-200 input-text">
                                    Town/City*
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-5">
                        <div className="w-full">
                            <label className="relative cursor-pointer">
                                <input
                                    type="text"
                                    required
                                    onChange={handleChange} value={userData["statecounty"] || ""}
                                    placeholder="Input"
                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                    name="statecounty"
                                />
                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-27px] transition duration-200 input-text">
                                    State/County*
                                </span>
                            </label>
                        </div>
                        <div className="w-full">
                            <label className="relative cursor-pointer">
                                <input
                                    type="text"
                                    required
                                    onChange={handleChange} value={userData["postcode"] || ""}
                                    placeholder="Input"
                                    className="h-[50px]  bg-[#f3f3f3] w-full px-6 text-md border rounded outline-none focus:border-gray-700 focus:border-opacity-60 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                                    name="postcode"
                                />
                                <span className=" text-sm bg-transparent te text-opacity-80 absolute left-2 px-2 top-[-27px] transition duration-200 input-text">
                                    Postcode/Zip*
                                </span>
                            </label>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CKShippingDetails;