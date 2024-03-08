import { t } from 'i18next';
import React from 'react';

const CarportBestMeterials = () => {
    return (
        <div className='w-full py-20'>
            <div className="w-full md:w-4/5 mx-auto flex flex-col md:flex-row gap-5 items-center justify-between">
                <div className="w-full md:w-3/5 mx-auto p-3">
                    <h3 className="text-2xl md:text-3xl font-semibold capitalize">Elevate Your Space with ShadeSwift</h3>
                    <div className="flex flex-col md:flex-row gap-3 justify-between pt-5 items-start">
                        <div className="w-full">
                            <h3 className="text-xl font-semibold">Professional Installation</h3>
                            <p className="text-sm">Our team of skilled professionals is dedicated to ensuring your ShadeSwift carport is installed with precision. Experience hassle-free setup, allowing you to enjoy the benefits of your new car shelter without any concerns.</p>
                        </div>
                        <div className="w-full">
                            <h3 className="text-xl font-semibold">Tailored Solutions for Residences</h3>
                            <p className="text-sm">Transform your home's exterior with the addition of ShadeSwift. Whether you have a cozy suburban dwelling or a spacious estate, our carport installation service caters to the unique dimensions of your residential space, providing optimal coverage with a touch of elegance.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 justify-between pt-5 items-start">
                        <div className="w-full">
                            <h3 className="text-xl font-semibold">Commercial Grade Solutions</h3>
                            <p className="text-sm">Businesses, too, can benefit from the ShadeSwift advantage. Enhance your commercial property with a sleek and functional carport that not only protects your fleet but also adds a touch of professionalism to your establishment. Our installations are tailored to suit the specific needs of your business.</p>
                        </div>
                        <div className="w-full">
                            <h3 className="text-xl font-semibold">Efficiency and Timeliness</h3>
                            <p className="text-sm">We understand the value of your time. Our installation process is designed for efficiency, ensuring that you can start enjoying the benefits of ShadeSwift at the earliest possible time. Trust us for prompt and professional service.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/5 flex justify-center mx-auto">
                    <img src="https://i.ibb.co/W0C2WY8/Screenshot-11.png" alt="" className="rounded md:h-96 border border-primary" />
                </div>
            </div>
        </div>
    );
};

export default CarportBestMeterials;