import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Slide } from 'react-reveal';

const ProtectVehicle = () => {
    return (
        <div className="container bg-white h-[80vh] px-7 mx-auto w-full text-black">
            <div className='flex h-full flex-col md:flex-row justify-between gap-3 py-10 items-center'>
                <div className='w-full md:w-3/6 p-0 sm:p-5'>
                    <h2 style={{ fontFamily: 'Helvetica' }} className='text-center text-2xl sm:text-5xl sm:text-left'>Where Style Meets Shelter for Your Vehicle!</h2>
                    {/* <h2 style={{ fontFamily: 'Helvetica' }} className='text-center text-xl pt-5 sm:text-left'>Lorem ipsum dolor sit amet consectetur. </h2> */}
                    <p className='text-center text-sm sm:text-left pt-5 pb-7'>Discover the perfect blend of sleek design and reliable protection with our ShadeSwift carport. Designed for the modern car owner, ShadeSwift ensures your vehicle stays shielded from the elements while adding a touch of contemporary flair to your outdoor space.</p>
                    {/* <Slide bottom duration={2500}>
                        <button className='bg-[#00C2FF] justify-center btn btn-warning px-7 py-2 text-black border-0 rounded'>
                            <p className=" flex gap-2">Request An Appointment <FaAngleRight /></p>
                        </button>
                    </Slide> */}
                </div>
                <div className='w-full md:w-3/6 mx-auto'>
                    <img className='w-full object-cover border border-primary' src="https://i.ibb.co/TrnSTM8/Whats-App-Image-2023-0f5-14-at-19-06-13.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProtectVehicle;