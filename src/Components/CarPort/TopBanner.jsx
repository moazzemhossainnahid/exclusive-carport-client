import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Authentication from '../../Pages/Shared/Header/Authentication';

const TopBanner = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="relative">
            {/* Banner Background */}
            <div className="relative">
                {/* Video Background */}
                <video className="w-full h-[80vh] md:h-[100vh] object-cover" autoPlay muted loop playsInline>
                    <source src="/Protect-Your-Vehicle.mp4" type="video/mp4" />
                    {/* Empty track element to satisfy the requirement */}
                    <track kind="captions" src="" label="" />
                    Your browser does not support the video tag.
                </video>

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black to-[#00000080] opacity-75"></div>

                {/* Navbar */}
                <nav className="absolute top-0 left-0 right-0 flex items-center justify-between md:justify-between px-6 py-1 md:py-3 text-white">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/"><img src="/logo_carport.png" alt="Logo" className="h-10 md:h-16" /></Link>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-3 md:gap-7">
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:text-gray-300" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="..." /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:text-gray-300" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="..." /></svg>

                        {user ? <div className="md:pl-5"><Authentication /></div> : <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:text-gray-300" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="..." /></svg>}
                    </div>
                </nav>

                {/* Foreground Text */}
                <div className="w-full absolute top-1/3 left-1/2 md:left-20 mt-16 md:mt-28 transform -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 z-10">
                    <div className="text-center md:text-start w-full px-7 md:px-0">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl pb-3 md:pb-0 font-bold text-white md:mb-4">SHADESWIFT</h1>
                        <p className="text-sm md:text-md md:text-lg  font-[Poppins] capitalize text-[#ECECEC]">Where Style And Protection For Your Vehicle <br /> Come Together!</p>
                        <p className="text-sm md:text-md text-[#ABABAB] italic font-[Poppins]  pt-2 md:pt-3">Discover the perfect mix of sleep design and reliable <br /> protection with our shadeswift carport.</p>
                        <h2 className="text-sm md:text-xl text-white font-[Poppins] pt-7">Pre-order now and grab one shadeswift carport with <span className="text-[#00C2FF] font-sans font-bold text-2xl md:text-3xl italic">48%</span> <br /> discount.</h2>
                        <Link to="/productdetails/carport/ShadeSwift">
                            <button className="btn btn-sm md:btn-md text-xs md:text-md bg-[#00C2FF] dark:bg-[#00C2FF] capitalize text-black hover:text-white border-0 px-5 md:px-20  my-2 md:my-5 py-2 rounded">Pre-Order now on Kickstarter</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
