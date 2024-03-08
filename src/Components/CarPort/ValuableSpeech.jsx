import React from 'react';

const ValuableSpeech = () => {
    return (
        <div className='bg-white py-10 pt-20'>
            <div data-aos="fade-up" data-aos-duration="1000" className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row p-5 justify-between items-center gap-5">
                <div className="w-full md:w-2/5 mx-auto">
                    <img src="https://i.ibb.co/Lpgw2R8/Rectangle-6.png" alt="" className="" />
                </div>
                <div className="w-full md:w-3/5 mx-auto md:pl-7">
                    <h3 className="text-2xl font-bold">Valuable Speech From Our <br /> CEO & Founder</h3>
                    <div className="flex items-center pt-3">
                        <p className="h-1 bg-[#00C2FF] w-32"></p>
                        <p className="border-b border-[#00C2FF] w-20"></p>
                    </div>

                    <div className="space-y-5 w-4/5 pt-3">
                        <p className="">Hey there folks, thanks for taking the time to come out and listen to me today. I just want to take a moment to talk about my little slice of heaven - my carport.</p>
                        <p className=""> You see, I've always been a bit of a car enthusiast. I love nothing more than tinkering around with engines and getting my hands dirty. But keeping my ride safe and secure has always been a bit of a challenge, especially with unpredictable weather and the occasional bird droppings.</p>
                        <p className="">That's where my carport comes in. It may not be the most glamorous thing in the world, but it does the job and it does it well. Rain, hail or shine, my car is protected from the elements and I can sleep easy at night knowing that it's safe and sound.</p>
                    </div>
                <div className="flex flex-row justify-between items-center gap-2 pt-5 w-5/6 md:w-2/3">
                    <h3 className="text-md text-gray-500 italic">Edwin Eijsink & Timon Eijsink</h3>
                    {/* <h3 className="text-md text-gray-500 italic"> & </h3>
                    <h3 className="text-md text-gray-500 italic">Timon Eijsink</h3> */}
                </div>
                </div>
            </div>
        </div>
    );
};

export default ValuableSpeech;