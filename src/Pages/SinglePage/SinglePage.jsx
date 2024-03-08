import React from 'react';
import ProductView from '../../Components/SinglePages/ProductView';
import ProductTabsView from '../../Components/SinglePages/ProductTabsView';

const SinglePage = () => {
    return (
        <div className='container w-full'>
            <ProductView/>
            <ProductTabsView/>
        </div>
    );
};

export default SinglePage;