import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TPartnersData } from '../../assets/Data/TPartnersData';

const TrustedPartners = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="flex justify-center items-center w-full mx-auto bg-white ">

      <div data-aos="fade-up" data-aos-duration="1000" className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 max-w-full mx-auto py-7">

        {/* <Slider className='' {...settings}> */}
          {
            TPartnersData?.map((item) => {
              return (
                <div key={item.alt} className="py-10 d-flex justify-content-center align-items-center gap-5">
                  <div style={{ position: 'relative', width: '150px', height: '50px', }} className="d-flex justify-content-center mx-auto">
                    <img
                      className='d-flex justify-content-center w-full align-items-center grayscale hover:grayscale-0'
                      src={item?.imageURL}
                      title={item?.alt}
                      alt={item?.alt}
                    />
                  </div>
                </div>

              )
            })
          }
        {/* </Slider> */}

      </div>
    </div>
  );
};

export default TrustedPartners;