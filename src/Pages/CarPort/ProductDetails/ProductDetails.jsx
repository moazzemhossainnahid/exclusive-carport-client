import React from 'react';
import ProductViewer from '../../../Components/ProductDetails/Carport/ProductViewer';
import MoreDetails from '../../../Components/ProductDetails/Carport/MoreDetails';
import OurGallery from '../../../Components/ProductDetails/Carport/OurGallery';
import { useParams } from 'react-router-dom';
import UseCarport from '../../../Hooks/useCarport';

const ProductDetailsCarport = () => {
    const {id} = useParams();
    const [carports]=UseCarport();
    // console.log(id);

    const carport = carports && carports?.find(c => c?.id === id);


    return (
        <div className=''>
            <ProductViewer carport={carport} />
            <MoreDetails carport={carport} />
            <OurGallery carport={carport} />
        </div>
    );
};

export default ProductDetailsCarport;