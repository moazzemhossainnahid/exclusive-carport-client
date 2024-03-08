import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FaAngleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const OurGallery = () => {
  const [toggler, setToggler] = useState(false);
  const { t } = useTranslation();

  const data = [
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
    "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  ];

  const data2 = [
    "https://i.ibb.co/8bNZXXX/DSC03635.jpg",
    "https://i.ibb.co/pQMr1zC/DSC03640.jpg",
    "https://i.ibb.co/jhw1Cpv/DSC03642.jpg",
    "https://i.ibb.co/HxWSzsg/DSC06313.png",
    "https://i.ibb.co/tbgHPJT/DSC06321.png",
    "https://i.ibb.co/q1V3HVy/DSC06322.png",
  ];

  const images = [
    "https://i.ibb.co/ncYhR4W/DSC03594.jpg",
    "https://i.ibb.co/8N8PbgN/DSC03595.jpg",
    "https://i.ibb.co/BfWSW2s/DSC03596.jpg",
    "https://i.ibb.co/YfgKp2w/DSC03597.jpg",
    "https://i.ibb.co/X2209TY/DSC03598.jpg",
    "https://i.ibb.co/8zQGn3B/DSC03599.jpg",
    "https://i.ibb.co/GpCCHx8/DSC03600.jpg",
    "https://i.ibb.co/GQKggSC/DSC03604.jpg",
    "https://i.ibb.co/C6PV832/DSC03607.jpg",
    "https://i.ibb.co/bdBxdcf/DSC03608.jpg",
    "https://i.ibb.co/XYf5z83/DSC03611.jpg",
    "https://i.ibb.co/HT5Kby0/DSC03612.jpg",
    "https://i.ibb.co/nkRXDC1/DSC03614.jpg",
    "https://i.ibb.co/k1N4WMk/DSC03618.jpg",
    "https://i.ibb.co/44DGtnT/DSC03624.jpg",
    "https://i.ibb.co/h8BNBSB/DSC03625.jpg",
    "https://i.ibb.co/5RMbv9w/DSC03632.jpg",
    "https://i.ibb.co/jfWBtDK/DSC03633.jpg",
    "https://i.ibb.co/TWPJsxV/DSC03634.jpg",
    "https://i.ibb.co/q7VF0N9/DSC03635.jpg",
    "https://i.ibb.co/Kypdjyc/DSC03640.jpg",
    "https://i.ibb.co/1Mqcxr0/DSC03641.jpg",
    "https://i.ibb.co/sR58GT3/DSC03642.jpg",
    "https://i.ibb.co/LS9jpWN/DSC03643.jpg",
    "https://i.ibb.co/k3z5nKk/DSC03646.jpg",
    "https://i.ibb.co/QvYSgpd/DSC04096.jpg",
    "https://i.ibb.co/qCbk1pz/DSC06297.png",
    "https://i.ibb.co/d7NDDWq/DSC06299.png",
    "https://i.ibb.co/g3Rcs6V/DSC06300.png",
    "https://i.ibb.co/zH4pj4z/DSC06301.png",
    "https://i.ibb.co/frTrnHt/DSC06302.png",
    "https://i.ibb.co/Q9vJPMs/DSC06303.png",
    "https://i.ibb.co/f4kpTFR/DSC06304.png",
    "https://i.ibb.co/BnrfqXL/DSC06306.png",
    "https://i.ibb.co/fDMBjvB/DSC06307.png",
    "https://i.ibb.co/rmBrzyR/DSC06308.png",
    "https://i.ibb.co/Lh80s79/DSC06310.png",
    "https://i.ibb.co/0VDhTmt/DSC06312.png",
    "https://i.ibb.co/MpgLmKX/DSC06313.png",
    "https://i.ibb.co/qj23Wjv/DSC06314.png",
    "https://i.ibb.co/MnBDTxS/DSC06315.png",
    "https://i.ibb.co/cr89v5B/DSC06319.png",
    "https://i.ibb.co/yhhQt5z/DSC06321.png",
    "https://i.ibb.co/t3DbKfX/DSC06322.png",
    "https://i.ibb.co/DVLT7gb/DSC06324.png",
    "https://i.ibb.co/2sLfBmX/DSC06326.png",
    "https://i.ibb.co/hm9fp36/DSC06328.png",
    "https://i.ibb.co/PZCh6rr/DSC06329.png",
    "https://i.ibb.co/7vFr2Yg/DSC06331.png",
    "https://i.ibb.co/Tb76Q8b/IMG-8285.jpg",
    "https://i.ibb.co/p0NMYqW/MS-131-Plus-Black-Details.jpg",
    "https://i.ibb.co/vs3vFr2/MS-131-Plus-White-Details.jpg"
  ];

  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-[#0f667b] to-[#01404d] w-full">
        <div className="flex flex-col md:flex-row gap-5 relative justify-around items-center py-20 px-5 md:px-20">
          <div className="absolute top-0 left-0 w-40 h-52 bg-[#339bb5]"></div>
          <div className="w-full md:w-3/5 relative">
            <div className="w-5/6 mx-auto md:m-0 bg-gradient-to-r from-[#0f667b] p-7 rounded-2xl relative">
              <img
                src="https://i.ibb.co/F0YGsqv/DSC03614.jpg"
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
