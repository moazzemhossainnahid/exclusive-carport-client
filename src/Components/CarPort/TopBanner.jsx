import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaBars, FaCartPlus, FaSearch } from 'react-icons/fa';
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
                <video className="w-full h-full object-cover" autoPlay muted loop>
                    <source src="/Protect-Your-Vehicle.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>

                {/* Navbar */}
                <nav className="absolute top-0 left-0 right-0 flex items-center justify-between md:justify-between px-6 py-3 md:py-7 text-white">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/"><img src="/logo_carport.png" alt="Logo" className="h-10 md:h-16" /></Link>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-3 md:gap-7">
                        <FaSearch className='cursor-pointer hover:text-gray-300' />
                        <FaCartPlus className='cursor-pointer hover:text-gray-300' />

                        {
                            user ? <div className="md:pl-5"><Authentication /></div>
                                : <FaBars className='cursor-pointer hover:text-gray-300' />
                        }
                    </div>
                </nav>

                {/* Foreground Text */}
                <div className="w-full absolute top-1/2 left-1/2 md:left-32 transform -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 z-10">
                    <div className="text-center md:text-start w-full">
                        <h1 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4">SHADESWIFT</h1>
                        <p className="md:text-lg text-white">where style and protection for your vehicle come together!</p>
                        <p className="text-sm text-gray-300 pt-3">Discover the perfect mix of sleep design and reliable protection <br /> with our shadeswift carport.</p>
                        <h3 className="md:text-xl text-white md:pt-7">Pre-order now and grab one shadeswift carport with <span className="text-orange-600 font-bold text-xl md:text-2xl italic">48%</span> <br /> discount.</h3>
                        <Link to="/productdetails/carport/ShadeSwift">
                            <button className="btn btn-sm text-xs md:text-md bg-orange-400 capitalize text-black hover:text-white border-0 px-7 my-2 md:my-5 py-2 rounded">Pre order on indiegogo</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
