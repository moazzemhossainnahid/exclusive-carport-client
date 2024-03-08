import React, { useState } from 'react';
import CarouselSlider from '../Others/CarouselSlide/CarouselSlider';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ProductView = () => {
    const [Image, setImage] = React.useState("first");

    function ImageMagnifier({
        src,
        width,
        height,
        magnifierHeight = 300,
        magnifieWidth = 300,
        zoomLevel = 1.5
    }) {
        const [[x, y], setXY] = useState([0, 0]);
        const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
        const [showMagnifier, setShowMagnifier] = useState(false);
        return (
            <div
                style={{
                    position: "relative",
                    height: height,
                    width: width
                }}
            >
                <img
                    src={src}
                    style={{ height: height, width: width }}
                    onMouseEnter={(e) => {
                        // update image size and turn-on magnifier
                        const elem = e.currentTarget;
                        const { width, height } = elem.getBoundingClientRect();
                        setSize([width, height]);
                        setShowMagnifier(true);
                    }}
                    onMouseMove={(e) => {
                        // update cursor position
                        const elem = e.currentTarget;
                        const { top, left } = elem.getBoundingClientRect();

                        // calculate cursor position on the image
                        const x = e.pageX - left - window.pageXOffset;
                        const y = e.pageY - top - window.pageYOffset;
                        setXY([x, y]);
                    }}
                    onMouseLeave={() => {
                        // close magnifier
                        setShowMagnifier(false);
                    }}
                    alt={"img"}
                />

                <div
                    style={{
                        display: showMagnifier ? "" : "none",
                        position: "absolute",

                        // prevent maginier blocks the mousemove event of img
                        pointerEvents: "none",
                        // set size of magnifier
                        height: `${magnifierHeight}px`,
                        width: `${magnifieWidth}px`,
                        // move element center to cursor pos
                        top: `${y - magnifierHeight / 2}px`,
                        left: `${x - magnifieWidth / 2}px`,
                        opacity: "1", // reduce opacity so you can verify position
                        border: "1px solid lightgray",
                        backgroundColor: "white",
                        backgroundImage: `url('${src}')`,
                        backgroundRepeat: "no-repeat",

                        //calculate zoomed image size
                        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel
                            }px`,

                        //calculete position of zoomed image.
                        backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                    }}
                ></div>
            </div>
        );
    }

    const shoes1 = "https://i.ibb.co/DCf6RQn/DSC03614-1.png";
    const shoes2 = "https://www.pngkey.com/png/full/250-2507384_supply-best-massage-chair-treadmill-in-the-world.png";
    const shoes3 = "https://www.pngkey.com/png/full/870-8705361_fujimedic-kumo-massage-chair-recliner.png";
    const shoes4 = "https://bodymassagepal.com/wp-content/uploads/2021/09/1-removebg.png";

    const pdImage = [
        {
            id: 1,
            position: "first",
            img: shoes1
        },
        {
            id: 2,
            position: "second",
            img: shoes2
        },
        {
            id: 3,
            position: "third",
            img: shoes3
        },
        {
            id: 4,
            position: "fourth",
            img: shoes4
        },
    ]

    return (
        <div className='p-5'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-gray-100">
                    {
                        pdImage?.map(p => (
                            <div key={p?.id} className="w-full h-fit flex justify-center items-center mx-auto">
                                {Image === p?.position && <ImageMagnifier width={450} height={450} src={p?.img} className="py-2 pb-3 h-80 w-4/5 mx-auto rounded" />}
                            </div>
                        ))
                    }
                    {/* {Image === "first" && <ImageMagnifier src={shoes1} className="py-2 pb-3 h-96 w-width mx-auto rounded" />}
                    {Image === "second" && <img src={shoes2} className="py-2 pb-3 h-96 w-width mx-auto rounded" alt="" />}
                    {Image === "third" && <img src={shoes3} className="py-2 pb-3 h-96 w-width mx-auto rounded" alt="" />}
                    {Image === "forth" && <img src={shoes4} className="py-2 pb-3 h-96 w-width mx-auto rounded" alt="" />} */}

                    <CarouselSlider setImage={setImage}></CarouselSlider>
                </div>
                <div className="space-y-3">
                    <h2 className="text-3xl font-semibold mt-1">Exclusive Massage Chair</h2>
                    <div className="flex w-5/6 md:w-4/5 flex-col md:flex-row justify-between gap-2 items-center">
                        <div className="flex space-x-3">
                            <p className="text-2xl text-gray-500 font-bold -mt-1.5">$4500.00 </p>
                        </div>
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span>
                                <i className="fas fa-star"></i>
                            </span>
                            <span>
                                <i className="fas fa-star"></i>
                            </span>
                            <span>
                                <i className="fas fa-star"></i>
                            </span>
                            <span>
                                <i className="fas fa-star"></i>
                            </span>
                            <span>
                                <i className="fas fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <div className="space-y-5 mb-5">
                        <div className=''>
                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Deserunt aliquid est molestias exercitationem laboriosam, totam
                                excepturi sunt eaque dolorum, repudiandae distinctio vitae nam
                                quisquam quasi.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="h-8 w-12 border border-gray-400 flex justify-center items-center hover:bg-gray-200  rounded"><FaFacebook /></span>
                            <span className="h-8 w-12 border border-gray-400 flex justify-center items-center hover:bg-gray-200  rounded"><FaTwitter /></span>
                            <span className="h-8 w-12 border border-gray-400 flex justify-center items-center hover:bg-gray-200 rounded"><FaInstagram /></span>
                            <span className="h-8 w-12 border border-gray-400 flex justify-center items-center hover:bg-gray-200 rounded"><FaWhatsapp /></span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex flex-col space-y-3">
                                <p className="font-bold">Available Color </p>
                                <div className="flex gap-3">
                                    <button className="pl-5 w-7 h-7 rounded-full bg-black border-2 border-primary focus:border-black font-medium"></button>
                                    <button className="pl-5 w-7 h-7 rounded-full bg-white border-2 border-primary focus:border-black font-medium"></button>
                                    <button className="pl-5 w-7 h-7 rounded-full bg-[#EE8539] border-2 border-primary focus:border-black font-medium"></button>
                                </div>
                            </div>

                            <div className="pt-2">
                                <h3 className="text-xl font-medium uppercase text-gray-800 ">Size</h3>
                                <div className="flex items-center gap-2 pt-3">
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-xs" />
                                        <label htmlFor="size-xs" className="text-xs border rounded-full border-primary h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-s" />
                                        <label htmlFor="size-s" className="text-xs border h-6 w-6 rounded-full border-primary text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">S</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-m" />
                                        <label htmlFor="size-m" className="text-xs border h-6 w-6 rounded-full border-primary text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">M</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-L" />
                                        <label htmlFor="size-L" className="text-xs border h-6 w-6 rounded-full border-primary text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">L</label>
                                    </div>
                                    <div className="size-selector">
                                        <input type="radio" className="hidden" name="size" id="size-xl" />
                                        <label htmlFor="size-xl" className="text-xs border  h-6 w-6 rounded-full border-primary text-gray-700 shadow-sm flex justify-center items-center cursor-pointer">XL</label>
                                    </div>

                                </div>
                            </div>
                            <div className="pt-2">
                                <span className="font-medium">Quantity</span>

                            </div>
                            <div className="flex gap-3">
                                <div className="">
                                    <div class="flex gap-2 p-2 border w-32 justify-center items-center">
                                        <span className=" cursor-pointer rounded-full w-7 h-7 border px-2 flex justify-center items-center">
                                            <i class="fa-solid fa-minus"></i>
                                        </span>
                                        <input
                                            class="px-2 font-bold bg-transparent text-center w-8 max-h-8"
                                            type="text"
                                            value="1"
                                        />
                                        <span className="cursor-pointer rounded-full w-7 h-7 border px-2 flex justify-center items-center">
                                            <i class="fa-solid fa-plus"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button className="border flex items-center border-gray-500 px-8 py-2 bg-gray-800 hover:bg-transparent text-white hover:text-black font-medium mr-4"> <span className="mr-3">ADD TO CART</span><AiOutlineShoppingCart /></button>
                                    <button className="border flex items-center border-gray-500 px-8 py-2 bg-transparent text-black hover:bg-black hover:text-white font-medium mr-4"> <span className="ml-3">SHOP NOW</span></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;