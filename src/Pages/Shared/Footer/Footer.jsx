import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaMapMarkerAlt, FaPhoneAlt, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className='container w-full max-w-full z-10'>
            <div className='w-full mx-auto bg-[#353535]'>
                <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 py-10 ">
                    <div className="w-full md:w-2/5 mx-auto space-y-2 text-center md:text-left">
                        <h3 className="text-2xl text-white">{t('footer.title')}</h3>
                        <p className="text-gray-100 text-sm">{t('footer.desc')} </p>
                    </div>
                    <div className="w-full md:w-2/5 mx-auto">
                        <div className="form-control w-full flex justify-center">
                            <div className="input-group w-full flex justify-center">
                                <input type="text" placeholder="Enter Email Address" className="input z-0 input-bordered" />
                                <button className="btn btn-square w-28 text-white bg-[#00C2FF]">
                                    {t('footer.sub')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#212121] py-7">
                    <div className="w-full md:w-5/6 mx-auto flex flex-col gap-3 py-7 ">
                        <footer className="footer p-10 pb-0 bg-transparent text-base-200">
                            <div>
                                <span className="text-xl font-bold text-gray-300">{t('footer.aep')}</span>
                                <a className="link link-hover">{t('footer.aep_1')}</a>
                                <a className="link link-hover">{t('footer.aep_2')}</a>
                                <a className="link link-hover">{t('footer.aep_3')}</a>
                                <a className="link link-hover">{t('footer.aep_4')}</a>
                            </div>
                            <div>
                                <span className="text-xl font-bold text-gray-300">{t('footer.cs')}</span>
                                <a className="link link-hover">{t('footer.cs_1')}</a>
                                <a className="link link-hover">{t('footer.cs_2')}</a>
                                <a className="link link-hover">{t('footer.cs_3')} </a>
                            </div>
                            <div>
                                <span className="text-xl font-bold text-gray-300">{t('footer.cus')}</span>
                                <a className="link link-hover flex gap-2"> <FaMapMarkerAlt /> {t('footer.cus_1')}</a>
                                <a className="link link-hover flex gap-2"> <FaClock /> {t('footer.cus_2')}</a>
                                <a className="link link-hover flex gap-2"> <FaPhoneAlt /> {t('footer.cus_3')}</a>
                                <a className="link link-hover flex gap-2"> <FaEnvelope /> {t('footer.cus_4')}</a>
                            </div>
                        </footer>
                        <div className="px-10 py-4 bg-transparent text-base-200">
                            <hr />
                            <div className="flex justify-between items-center flex-col md:flex-row">
                                <div className="text-center pt-5">
                                    <p>{t('footer.footer_down')}</p>
                                </div>
                                <div className="flex gap-3 pt-5 justify-center items-center">
                                    <FaFacebook className='text-2xl text-gray-500 hover:text-white duration-200 cursor-pointer' />
                                    <FaInstagram className='text-2xl text-gray-500 hover:text-white duration-200 cursor-pointer' />
                                    <FaSkype className='text-2xl text-gray-500 hover:text-white duration-200 cursor-pointer' />
                                    <FaTwitter className='text-2xl text-gray-500 hover:text-white duration-200 cursor-pointer' />
                                    <FaPinterest className='text-2xl text-gray-500 hover:text-white duration-200 cursor-pointer' />
                                    <FaLinkedin className='text-2xl text-gray-500 hover:text-white duration-200 cursor-pointer' />
                                </div>
                            </div>
                            {/* <div className="w-full flex justify-center gap-3 items-center pt-3">
                                <img src="https://i.ibb.co/StPWWYS/aexpress.png" alt="" className="w-12" />
                                <img src="https://i.ibb.co/hDfbhXw/pngimg-com-visa-PNG18.png" alt="" className="w-12" />
                                <img src="https://i.ibb.co/3FHRYSJ/mcard.png" alt="" className="w-12" />
                                <img src="https://i.ibb.co/1T5H2r5/gpay.png" alt="" className="w-12 bg-gray-200 px-2 h-8 rounded" />
                                <img src="https://i.ibb.co/1fGV3N5/Paypal.png" alt="" className="w-12" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;