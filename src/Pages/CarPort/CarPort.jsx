import React from 'react';
import TopBanner from '../../Components/CarPort/TopBanner';
import PremiumService from '../../Components/CarPort/PremiumService';
import ValuableSpeech from '../../Components/CarPort/ValuableSpeech';
import Overview from '../../Components/CarPort/Overview';
import TrustedPartners from '../../Components/Others/TrustedPartners';
import ExclusivePackages from '../../Components/CarPort/ExclusivePackages';
import SuccessStories from '../../Components/CarPort/SuccessStories';
import CarPortVideos from '../../Components/CarPort/CarPortVideos';
import TopBannerCarousel from '../../Components/CarPort/TopBannerCarousel';
import ProtectVehicle from '../../Components/CarPort/ProtectVehicle';
import CarportBestMeterials from '../../Components/CarPort/CarportBestMeterials';
import CarportUses from '../../Components/CarPort/CarportUses';

const Carport = () => {
    return (
        <div className='container w-full max-w-full overflow-hidden'>
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