import React from 'react';

const ProtectVehicle = () => {
    return (
        <div className="container bg-white h-full px-7 pt-7 mx-auto w-full text-black">
            <div className='flex h-full flex-col md:flex-row justify-between gap-3 py-10 items-center'>
                <div className='w-full md:w-3/6 p-0 sm:p-5'>
                    <h2 style={{ fontFamily: 'Helvetica' }} className='text-center text-2xl sm:text-5xl sm:text-left'>Where Style Meets Shelter for Your Vehicle!</h2>
                    <p className='text-center text-sm sm:text-left pt-5 pb-7'>Discover the perfect blend of sleek design and reliable protection with our ShadeSwift carport. Designed for the modern car owner, ShadeSwift ensures your vehicle stays shielded from the elements while adding a touch of contemporary flair to your outdoor space.</p>
                </div>
                <div className='w-full md:w-3/6 mx-auto'>
                    <img className='w-full object-cover border border-primary' src="https://i.ibb.co/TrnSTM8/Whats-App-Image-2023-0f5-14-at-19-06-13.jpg" loading="lazy" alt="Carport" />
                </div>
            </div>
        </div>
    );
};

export default ProtectVehicle;
