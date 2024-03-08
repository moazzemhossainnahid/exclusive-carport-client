import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FaAngleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const OurGallery = () => {
  const [toggler, setToggler] = useState(false);
  const { t } = useTranslation();

  const data2 = [
    "https://i.ibb.co/2dR0Dx2/Whats-App-Image-2023-05-ff14-at-19-06-13.jpg",
    "https://i.ibb.co/sWJCpRw/Whats-App-Image-2023-05-14-fat-19-06-13.jpg",
    "https://i.ibb.co/gW382r3/Whats-App-Image-2023-05-14-at-19-06-1ff2.jpg",
    "https://i.ibb.co/r5Yssd7/Rectangle-114-1.png",
    "https://i.ibb.co/86bfH9k/Rectangle-114-2.png",
    "https://i.ibb.co/XpsNBjd/Rectangle-14.png",
  ];

  const images = [
    "https://i.ibb.co/2dR0Dx2/Whats-App-Image-2023-05-ff14-at-19-06-13.jpg",
    "https://i.ibb.co/sWJCpRw/Whats-App-Image-2023-05-14-fat-19-06-13.jpg",
    "https://i.ibb.co/gW382r3/Whats-App-Image-2023-05-14-at-19-06-1ff2.jpg",
    "https://i.ibb.co/r5Yssd7/Rectangle-114-1.png",
    "https://i.ibb.co/86bfH9k/Rectangle-114-2.png",
    "https://i.ibb.co/XpsNBjd/Rectangle-14.png",
    "https://i.ibb.co/k3Wc87Y/Rectangle-114.png",
    "https://i.ibb.co/LhsKTLh/Rectangle-37.png",
    "https://i.ibb.co/9nJmz6Z/Rectangle-111.png",
    "https://i.ibb.co/7Cy5Gxt/Rectangle-38.png",
    "https://i.ibb.co/qdbwmF3/Rectangle-168.png",
    "https://i.ibb.co/SmFRkTd/Rectangle-197.png",
    "https://i.ibb.co/9NsVh0c/Whats-App-Image-2023-05-14-afft-19-06-12.jpg",
    "https://i.ibb.co/TrnSTM8/Whats-App-Image-2023-0f5-14-at-19-06-13.jpg",
  ];

  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-[#0f667b] to-[#01404d] w-full">
        <div className="flex flex-col md:flex-row gap-5 relative justify-around items-center py-20 px-5 md:px-20">
          <div className="absolute top-0 left-0 w-40 h-52 bg-[#339bb5]"></div>
          <div className="w-full md:w-3/5 relative">
            <div className="w-5/6 mx-auto md:m-0 bg-gradient-to-r from-[#0f667b] p-7 rounded-2xl relative">
              <img
                src="https://i.ibb.co/86bfH9k/Rectangle-114-2.png"
                alt=""
                className="w-full mx-auto h-96"
              />
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <h3
              style={{ fontFamily: "Helvetica" }}
              className="text-white text-3xl md:text-5xl font-semibold text-right pb-10 pr-7"
            >
              {t("ourGallery.title")}
            </h3>
            <h3 className="text-white font-semibold pb-5">
              {t("ourGallery.sTitle")}
            </h3>
            <div className="w-full grid grid-cols-3 gap-5 mx-auto pb-7">
              {data2?.map((img) => (
                <div className="w-full mx-auto">
                  <img src={img} alt="image" className="w-32 mx-auto" />
                </div>
              ))}
            </div>
            <div
              onClick={() => setToggler(!toggler)}
              className="w-full flex justify-end absolute right-0 bottom-10 pt-10"
            >
              <div className="bg-white pl-1 py-1 cursor-pointer rounded-l-3xl">
                <button className="flex w-32 py-2 group items-center justify-start pl-5 text-white bg-gray-600 rounded-l-3xl">
                  {t("ourGallery.btn")}{" "}
                  <FaAngleRight className="text-2xl text-white group-hover:translate-x-3 duration-200 ease-in-out" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FsLightbox toggler={toggler} sources={images} />
    </div>
  );
};

export default OurGallery;
