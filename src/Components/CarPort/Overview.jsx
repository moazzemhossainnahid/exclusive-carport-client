import React from 'react';
import CountUp from 'react-countup';

const Overview = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='w-full mx-auto'>
            <div className="bg-[url('https://i.ibb.co/r0Yv2JF/Rectangle-110.png')] bg-cover py-12">
                <div className="w-full md:w-5/6 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-7">
                    <div className="text-center">
                        <h3 className="text-3xl text-white font-bold"><CountUp end={25} />+</h3>
                        <p className="text-gray-400">Project Done</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl text-white font-bold"><CountUp end={50} />+</h3>
                        <p className="text-gray-400">Happy Clients</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl text-white font-bold"><CountUp end={25} />+</h3>
                        <p className="text-gray-400">Commercials</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl text-white font-bold"><CountUp end={50} />+</h3>
                        <p className="text-gray-400">Residential</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;