import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const TopBanner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/b1xjqTb/Rectangle-111.png')] h-[80vh] relative bg-cover">
            <div className="w-full text-center absolute bottom-40">
                <h3 className="text-3xl md:text-5xl text-white">Protect Your Vehicle</h3>
                <p className="pb-5 text-gray-300 text-sm">We make Sure that, to give you a premium Carport service</p>
                {/* <button className='bg-[#00C2FF] justify-center btn btn-warning px-7 py-2 text-black rounded'>
                    <p className=" flex gap-2">Make An Appointment <FaArrowRight /></p>
                </button> */}
            </div>
        </div>
    );
};

export default TopBanner;