import React from 'react';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import UseCarport from '../../Hooks/useCarport';
import { t } from 'i18next';

const ExclusivePackages = () => {
    const navigate = useNavigate();
    const [carports]=UseCarport();
    return (
        <div className='w-full md:w-5/6 mx-auto bg-white py-10 p-5'>
            <div className="w-full">
                <h3 className="text-2xl font-semibold">Take A Look On Our exclusive <br /> Projects.</h3>
                <div className="flex items-center pt-3">
                    <p className="h-1 bg-[#00C2FF] w-32"></p>
                    <p className="border-b border-[#00C2FF] w-20"></p>
                </div>
            </div>

            <section className="w-full pt-10">
                {/* <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col md:flex-row justify-between py-7 items-center w-full gap-5">
                    <div className="w-full md:w-3/6 mx-auto relative">
                        <img src="https://i.ibb.co/XpsNBjd/Rectangle-14.png" alt="" className="relative shadow-lg w-full h-64 md:h-80 lg:h-96 rounded-2xl object-cover z-10" />
                        <img src="https://i.ibb.co/n1JZQLF/dotted-circle-02-2.png" alt="" className="absolute z-0 p-5 -left-20 -bottom-20" />
                    </div>
                    <div className="w-full md:w-3/6 mx-auto p-5 space-y-3">
                        <h5 className="text-md text-gray-400">Project 01</h5>
                        <h3 className="text-xl font-semibold text-gray-700 pt-1">Free School Street Carport</h3>
                        <div className="pt-5 space-y-3">
                            <p className="">Hey there folks, thanks for taking the time to come out and listen to me today. I just want to take a moment to talk about my little slice of heaven. I just want to take a moment to talk my slice of heaven - my carport.</p>
                        </div>
                        <div className="pt-2">
                            <button onClick={() => navigate(`/productdetails/carport/1`)} className="px-7 py-2 rounded font-semibold flex items-center border-2 hover:bg-primary group">Project Details <FaArrowRight className='pl-3 text-2xl group-hover:translate-x-3 duration-300' /></button>
                        </div>
                    </div>
                </div> */}

                {
                    carports && carports?.map(c => (
                        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col md:flex-row justify-between py-7 items-center w-full gap-5">
                            <div className="w-full md:w-3/6 mx-auto relative">
                                <img src={c?.images?.banner} alt="" className="relative shadow-lg w-full h-64 md:h-80 lg:h-96 border border-primary rounded-2xl object-fill z-10" />
                                <img src="https://i.ibb.co/n1JZQLF/dotted-circle-02-2.png" alt="" className="absolute z-0 p-5 -left-20 -bottom-20" />
                            </div>
                            <div className="w-full md:w-3/6 mx-auto p-5 space-y-3">
                                <h5 className="text-md text-gray-400">{c?.project}</h5>
                                <h3 className="text-xl font-semibold text-gray-700 pt-1">{c?.mainTtl}</h3>
                                <div className="pt-5 space-y-3">
                                    <p className="">{c?.mainDesc}</p>
                                </div>
                                <div className="pt-2">
                                    <button onClick={() => navigate(`/productdetails/carport/${c?.id}`)} className="px-7 py-2 rounded font-semibold flex items-center border-2 hover:bg-primary group">Project Details <FaArrowRight className='pl-3 text-2xl group-hover:translate-x-3 duration-300' /></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
{/* 
                <div data-aos="fade-up" data-aos-duration="1000" className="pt-20 pb-7 hidden md:block">
                    <p className="border-b border-[#00C2FF] w-full"></p>
                </div>

                <div data-aos="fade-left" data-aos-duration="1000" className="flex flex-col md:flex-row-reverse justify-between py-10 items-center w-full gap-5">
                    <div className="w-full md:w-3/6 mx-auto relative">
                        <img src="https://i.ibb.co/PZp84FJ/Screenshot-10.png" alt="" className="relative shadow-xl w-full h-64 md:h-80 lg:h-96 rounded-2xl object-cover z-10" />
                        <img src="https://i.ibb.co/n1JZQLF/dotted-circle-02-2.png" alt="" className="absolute z-0 p-5 -right-20 -bottom-20" />
                    </div>
                    <div className="w-full md:w-3/6 mx-auto p-5 space-y-3">
                        <h5 className="text-md text-gray-400">Project 02</h5>
                        <h3 className="text-xl font-semibold text-gray-700 pt-1">Free School Street Carport</h3>
                        <div className="pt-5 space-y-3">
                            <p className="">Hey there folks, thanks for taking the time to come out and listen to me today. I just want to take a moment to talk about my little slice of heaven. I just want to take a moment to talk my slice of heaven - my carport.</p>
                        </div>
                        <div className="pt-2">
                            <button onClick={() => navigate(`/productdetails/carport/2`)} className="px-7 py-2 rounded font-semibold flex items-center border-2 hover:bg-primary group">Project Details <FaArrowRight className='pl-3 text-2xl group-hover:translate-x-3 duration-300' /></button>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="pt-20 pb-7 hidden md:block">
                    <p className="border-b border-[#00C2FF] w-full"></p>
                </div>

                <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col md:flex-row justify-between py-10 items-center w-full gap-5">
                    <div className="w-full md:w-3/6 mx-auto relative">
                        <img src="https://i.ibb.co/r5Yssd7/Rectangle-114-1.png" alt="" className="relative shadow-lg w-full h-64 md:h-80 lg:h-96 rounded-2xl object-cover z-10" />
                        <img src="https://i.ibb.co/n1JZQLF/dotted-circle-02-2.png" alt="" className="absolute z-0 p-5 -left-20 -bottom-20" />
                    </div>
                    <div className="w-full md:w-3/6 mx-auto p-5 space-y-3">
                        <h5 className="text-md text-gray-400">Project 03</h5>
                        <h3 className="text-xl font-semibold text-gray-700 pt-1">Free School Street Carport</h3>
                        <div className="pt-5 space-y-3">
                            <p className="">Hey there folks, thanks for taking the time to come out and listen to me today. I just want to take a moment to talk about my little slice of heaven. I just want to take a moment to talk my slice of heaven - my carport.</p>
                        </div>
                        <div className="pt-2">
                            <button onClick={() => navigate(`/productdetails/carport/3`)} className="px-7 py-2 rounded font-semibold flex items-center border-2 hover:bg-primary group">Project Details <FaArrowRight className='pl-3 text-2xl group-hover:translate-x-3 duration-300' /></button>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="pt-20 pb-7 hidden md:block">
                    <p className="border-b border-[#00C2FF] w-full"></p>
                </div>

                <div data-aos="fade-down" data-aos-duration="1000" className="flex flex-col md:flex-row-reverse justify-between py-10 items-center w-full gap-5">
                    <div className="w-full md:w-3/6 mx-auto relative">
                        <img src="https://i.ibb.co/86bfH9k/Rectangle-114-2.png" alt="" className="relative shadow-lg w-full h-64 md:h-80 lg:h-96 rounded-2xl object-cover z-10" />
                        <img src="https://i.ibb.co/n1JZQLF/dotted-circle-02-2.png" alt="" className="absolute z-0 p-5 -right-20 -bottom-20" />
                    </div>
                    <div className="w-full md:w-3/6 mx-auto p-5 space-y-3">
                        <h5 className="text-md text-gray-400">Project 04</h5>
                        <h3 className="text-xl font-semibold text-gray-700 pt-1">Free School Street Carport</h3>
                        <div className="pt-5 space-y-3">
                            <p className="">Hey there folks, thanks for taking the time to come out and listen to me today. I just want to take a moment to talk about my little slice of heaven. I just want to take a moment to talk my slice of heaven - my carport.</p>
                        </div>
                        <div className="pt-2">
                            <button onClick={() => navigate(`/productdetails/carport/4`)} className="px-7 py-2 rounded font-semibold flex items-center border-2 hover:bg-primary group">Project Details <FaArrowRight className='pl-3 text-2xl group-hover:translate-x-3 duration-300' /></button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="p-5">
                    <button className='bg-black text-white hover:bg-transparent hover:text-black btn border rounded-none px-5 py-2'>View More Work</button>
                </div> */}
            </section>

        </div>
    );
};

export default ExclusivePackages;