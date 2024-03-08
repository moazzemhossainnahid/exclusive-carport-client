import React from 'react';
import { useTranslation } from 'react-i18next';

const CarportUses = () => {
    const {t} = useTranslation();

    return (
        <div className='bg-[#ffffff] py-7 h-full'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full mx-auto pt-10">
                <div data-aos="fade-down" data-aos-duration="1000" className="w-full md:w-2/6 mx-auto relative">
                    <img src="https://i.ibb.co/z582wCb/Screenshot-10.png" alt="" className="w-5/6 h-full my-10 relative border border-primary  flex justify-center items-center mx-auto" />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="w-full md:w-4/6 mx-auto p-5">
                    <h3 className="text-2xl font-bold text-dark md:w-2/3">{`Key Features of our Carport ShadeSwift `}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-7">
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-2 rounded-full">
                                <img src="https://i.ibb.co/H2zMCLt/1518185.png" alt="" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">Effortless Assembly, Swift Setup</h3>
                            {/* <h3 className="text-xl text-dark font-bold">{t('mchair.uses.t1')}</h3> */}
                            <p className="text-gray-500 text-sm md:pr-10">Say goodbye to complicated installations. ShadeSwift offers quick and easy assembly, providing instant protection for your vehicle without compromising durability. Enjoy the convenience of swift shelter whenever you need it.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-1 rounded-full">
                                <img src="https://i.ibb.co/2ZqfbC8/25694.png" alt="" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">Stylish and Modern Aesthetics</h3>
                            {/* <h3 className="text-xl text-dark font-bold">{t('mchair.uses.t2')}</h3> */}
                            <p className="text-gray-500 text-sm md:pr-10">Elevate your property's visual appeal with ShadeSwift's sleek lines and modern design. This carport not only safeguards your vehicle but also enhances the overall look of your outdoor area.</p>

                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-1 rounded-full">
                                <img src="https://i.ibb.co/9GKcC2Q/8615929-1.png" alt="" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">Versatile Coverage for Any Vehicle</h3>
                            {/* <h3 className="text-xl text-dark font-bold">{t('mchair.uses.t3')}</h3> */}
                            <p className="text-gray-500 text-sm md:pr-10">Whether you own a compact car, SUV, or truck, ShadeSwift offers versatile coverage. Its thoughtfully designed dimensions ensure that vehicles of various sizes find a secure and stylish haven under its shade.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-1 rounded-full">
                                <img src="https://i.ibb.co/3yRD2k5/4327360.png" alt="" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">Weather-Resistant Durability</h3>
                            {/* <h3 className="text-xl text-dark font-bold">{t('mchair.uses.t4')}</h3> */}
                            <p className="text-gray-500 text-sm md:pr-10">Crafted with high-quality materials, ShadeSwift is built to withstand the elements. Rain or shine, your vehicle remains protected, making this carport a durable and reliable investment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarportUses;