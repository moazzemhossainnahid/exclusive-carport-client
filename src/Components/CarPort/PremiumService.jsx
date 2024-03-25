import React from 'react';

const PremiumService = () => {
    return (
        <div className='w-full h-full lg:h-[80vh] bg-[#222222] py-7'>
            <div className="flex flex-col md:flex-row justify-between items-start gap-3 w-full mx-auto pt-10">
                <div data-aos="fade-down" data-aos-duration="1000" className="w-full md:w-2/6 mx-auto relative">
                    <img src="https://i.ibb.co/z582wCb/Screenshot-10.png" alt="Carport" className="w-full 2xl:w-4/5 mx-auto flex justify-center p-7" loading="lazy" />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="w-full md:w-4/6 mx-auto p-5">
                    <h3 className="text-2xl font-bold text-white md:w-2/3">We ensure to provide you with a premium carport service</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-7">
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-3 rounded-full">
                                <img src="https://i.ibb.co/ss8GzgH/Vector.png" alt="Residential" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-white font-bold">Residential</h3>
                            <p className="text-gray-300 text-sm md:pr-32">We provide carport solutions for residential properties, ensuring convenience and protection for your vehicles.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-3 rounded-full">
                                <img src="https://i.ibb.co/kKSXVCt/Vector-1.png" alt="Commercial" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-white font-bold">Commercial</h3>
                            <p className="text-gray-300 text-sm md:pr-32">We offer carport solutions for commercial establishments, ensuring protection for your customers' vehicles.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-3 rounded-full">
                                <img src="https://i.ibb.co/92fkF9g/Vector-2.png" alt="Emergency" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-white font-bold">Emergency</h3>
                            <p className="text-gray-300 text-sm md:pr-32">Our emergency carport services provide immediate protection for your vehicles during unforeseen circumstances.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-3 rounded-full">
                                <img src="https://i.ibb.co/fqS9XLf/Vector-3.png" alt="Personalized" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-white font-bold">Personalized</h3>
                            <p className="text-gray-300 text-sm md:pr-32">We provide personalized carport solutions tailored to your specific needs and preferences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumService;
