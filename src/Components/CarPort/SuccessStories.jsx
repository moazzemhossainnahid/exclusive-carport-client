import React from 'react';
import SuccessStoriesCarousel from '../Others/SuccessStoriesCarousel';

const SuccessStories = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='w-full p-5 overflow-hidden'>
            <div className="text-center">
                <h3 className="text-2xl">Clients Success Stories</h3>
                <div className="flex justify-center items-center pt-3">
                    <p className="h-1 bg-[#00C2FF] w-32"></p>
                    <p className="border-b border-[#00C2FF] w-20"></p>
                </div>
            </div>

            <div className="w-full">
                <SuccessStoriesCarousel />
            </div>

        </div>
    );
};

export default SuccessStories;