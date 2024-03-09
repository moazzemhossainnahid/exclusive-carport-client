import React from 'react';
import TopBanner from '../../Components/CarPort/TopBanner';
import ExclusivePackages from '../../Components/CarPort/ExclusivePackages';
import CarPortVideos from '../../Components/CarPort/CarPortVideos';
import ProtectVehicle from '../../Components/CarPort/ProtectVehicle';
import CarportBestMeterials from '../../Components/CarPort/CarportBestMeterials';
import CarportUses from '../../Components/CarPort/CarportUses';

const Carport = () => {
    return (
        <div className='container w-full max-w-full overflow-hidden'>
            <TopBanner/>
            <ProtectVehicle />
            {/* <PremiumService /> */}
            <CarportUses/>
            <CarportBestMeterials />
            {/* <Overview /> */}
            <ExclusivePackages />
            <CarPortVideos />
            {/* <SuccessStories /> */}
            {/* <TrustedPartners /> */}
        </div>
    );
};

export default Carport;