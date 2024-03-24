import React from 'react';
import TopBanner from '../../Components/CarPort/TopBanner';
import ExclusivePackages from '../../Components/CarPort/ExclusivePackages';
import CarPortVideos from '../../Components/CarPort/CarPortVideos';
import ProtectVehicle from '../../Components/CarPort/ProtectVehicle';
import CarportBestMeterials from '../../Components/CarPort/CarportBestMeterials';
import CarportUses from '../../Components/CarPort/CarportUses';
import { Helmet } from 'react-helmet';

const Carport = () => {
    return (
        <div className='container w-full max-w-full overflow-hidden'>
            <Helmet>
                {/* Add Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-C4HJYE0Z26"></script>
                <script>
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C4HJYE0Z26');
          `}
                </script>
            </Helmet>
            <TopBanner />
            <ProtectVehicle />
            {/* <PremiumService /> */}
            <CarportUses />
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