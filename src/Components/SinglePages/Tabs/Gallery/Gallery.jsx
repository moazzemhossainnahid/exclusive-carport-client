import React from 'react';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

const Gallery = () => {

    const images = [
        "https://i.ibb.co/Fz1K8xd/Group-1.jpg",
        "https://i.ibb.co/tcJ8RN4/Group-2.jpg",
        "https://i.ibb.co/Kxv1Dzt/Group-3.jpg",
        "https://i.ibb.co/5G4pyNS/Group-4.jpg",
        "https://i.ibb.co/KqQzvX3/Group-5.jpg",
        "https://i.ibb.co/WcKyS8s/Group-6.jpg",
        "https://i.ibb.co/m0qrfqv/Group-7.jpg",
        "https://i.ibb.co/2yPQXzM/Group-8.jpg",
        "https://i.ibb.co/BP9X2S3/Group-9.jpg",
        "https://i.ibb.co/MR31Jyx/Group-10.jpg",
        "https://i.ibb.co/XCZfCbg/Group-11.jpg",
        "https://i.ibb.co/mBfNh0n/Group-12.jpg",
        "https://i.ibb.co/3sjJVFq/Group-14.jpg",
        "https://i.ibb.co/8YZCT9g/Group-19.jpg",
        "https://i.ibb.co/0CHCN7b/Group-21.jpg",
        "https://i.ibb.co/3cTLbhM/Group-25.jpg",
        "https://i.ibb.co/HnG47RN/Group-26.jpg",
        "https://i.ibb.co/yy5V0Ww/Group-27.jpg",
        "https://i.ibb.co/yYYXvyK/Group-28.jpg",
        "https://i.ibb.co/Ld7T3H3/Group-29.jpg",
        "https://i.ibb.co/CmfhG6k/Group-30.jpg",
        "https://i.ibb.co/KsDyNbX/Group-31.jpg",
        "https://i.ibb.co/xhZKWvY/Group-32.jpg",
        "https://i.ibb.co/SBbrqK6/Group-33.jpg",
        "https://i.ibb.co/QPJZ1b0/Group-34.jpg",
    ];

    return (
        <div className='w-full md:w-4/5 mx-auto py-10'>
            <h3 className="text-3xl font-bold text-gray-700 py-5 text-center">Our Gallery</h3>
            <SlideshowLightbox className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto">
                {
                    images?.map(img => (
                        <img src={img} alt="images" className="w-full rounded p-1 border border-primary overflow-hidden" />
                    ))
                }
            </SlideshowLightbox>
        </div>
    );
};

export default Gallery;