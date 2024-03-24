import React from 'react';
import ProductViewer from '../../../Components/ProductDetails/Carport/ProductViewer';
import MoreDetails from '../../../Components/ProductDetails/Carport/MoreDetails';
import OurGallery from '../../../Components/ProductDetails/Carport/OurGallery';
import { useParams } from 'react-router-dom';
import UseCarport from '../../../Hooks/useCarport';
import { Helmet } from 'react-helmet';

const ProductDetailsCarport = () => {
    const { id } = useParams();
    const [carports] = UseCarport();
    // console.log(id);

    const carport = carports && carports?.find(c => c?.id === id);


    return (
        <div className=''>
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
            <ProductViewer carport={carport} />
            <MoreDetails carport={carport} />
            <OurGallery carport={carport} />
        </div>
    );
};

export default ProductDetailsCarport;