import React from 'react';
import { useTranslation } from 'react-i18next';

const CarportUses = () => {
    const { t } = useTranslation();

    return (
        <div className='bg-[#ffffff] py-7 h-full'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full mx-auto">
                <div data-aos="fade-down" data-aos-duration="1000" className="w-full md:w-2/6 mx-auto relative">
                    <img src="https://i.ibb.co/z582wCb/Screenshot-10.png" alt="Carport" className="w-5/6 h-full my-10 relative border border-primary  flex justify-center items-center mx-auto" loading="lazy" />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="w-full md:w-4/6 mx-auto p-5">
                    <h3 className="text-2xl font-bold text-dark md:w-2/3">{t('carportUses.keyFeatures')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-7">
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-2 rounded-full">
                                <img src="https://i.ibb.co/H2zMCLt/1518185.png" alt="Effortless Assembly" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">{t('carportUses.feature1')}</h3>
                            <p className="text-gray-500 text-sm md:pr-10">{t('carportUses.feature1Description')}</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-1 rounded-full">
                                <img src="https://i.ibb.co/2ZqfbC8/25694.png" alt="Stylish and Modern Aesthetics" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">{t('carportUses.feature2')}</h3>
                            <p className="text-gray-500 text-sm md:pr-10">{t('carportUses.feature2Description')}</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-1 rounded-full">
                                <img src="https://i.ibb.co/9GKcC2Q/8615929-1.png" alt="Versatile Coverage for Any Vehicle" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">{t('carportUses.feature3')}</h3>
                            <p className="text-gray-500 text-sm md:pr-10">{t('carportUses.feature3Description')}</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-12 h-12 bg-[#22363C] p-1 rounded-full">
                                <img src="https://i.ibb.co/3yRD2k5/4327360.png" alt="Weather-Resistant Durability" className="w-full h-full flex justify-center items-center" />
                            </div>
                            <h3 className="text-xl text-dark font-bold">{t('carportUses.feature4')}</h3>
                            <p className="text-gray-500 text-sm md:pr-10">{t('carportUses.feature4Description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarportUses;
