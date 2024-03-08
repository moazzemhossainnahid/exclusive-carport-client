import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./SStoriesStyle.css";


const SuccessStoriesCarousel = () => {

    // Owlcarousel
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            center: true,
            navText: [
                "<i class='fa fa-arrow-left'></i>",
                "<i class='fa fa-arrow-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            }
        })
    });

    const ourFeedback = [
        {
            id: 1,
            name: "Jenifer Lopez",
            feedbackStarts: 3,
            feedbackComment: "Hey guys! I just wanted to drop a quick review for this amazing carport company. I recently had a carport installed on my property and I couldn't be happier with the results. The team was friendly and professional, and they really took the time to listen to my needs and wants.",
            img: "https://i.ibb.co/mFHqmfj/Ellipse-28.png"
        },
        {
            id: 2,
            name: "Jenifer Lopez",
            feedbackStarts: 2,
            feedbackComment: "Hey guys! I just wanted to drop a quick review for this amazing carport company. I recently had a carport installed on my property and I couldn't be happier with the results. The team was friendly and professional, and they really took the time to listen to my needs and wants.",
            img: "https://i.ibb.co/mFHqmfj/Ellipse-28.png"
        },
        {
            id: 3,
            name: "Jenifer Lopez",
            feedbackStarts: 1,
            feedbackComment: "Hey guys! I just wanted to drop a quick review for this amazing carport company. I recently had a carport installed on my property and I couldn't be happier with the results. The team was friendly and professional, and they really took the time to listen to my needs and wants.",
            img: "https://i.ibb.co/mFHqmfj/Ellipse-28.png"
        },
        {
            id: 4,
            name: "Jenifer Lopez",
            feedbackStarts: 5,
            feedbackComment: "Hey guys! I just wanted to drop a quick review for this amazing carport company. I recently had a carport installed on my property and I couldn't be happier with the results. The team was friendly and professional, and they really took the time to listen to my needs and wants.",
            img: "https://i.ibb.co/mFHqmfj/Ellipse-28.png"
        },
    ];


    return (
        <div className=" banner w-full max-w-full">
            <section id="slider" class="w-full flex mx-auto justify-center items-center pt-5">
                <div class="container">
                    <div class="slider">
                        <div class="owl-carousel">
                            {ourFeedback?.map((feedback) => (
                                <div
                                    className="slider-card bg-transparent"
                                    key={feedback?.id}
                                >
                                    <div className="text-center space-y-2 bg-transparent ">
                                        <h2 className="text-2xl.font-bold">{feedback?.name}</h2>
                                        <img src={feedback?.img} alt="" className="w-20 h-20 mx-auto rounded-full" />
                                        {

                                            feedback?.feedbackStarts === 1 &&
                                            <div className="rating">
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" checked />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                            </div>

                                        }
                                        {

                                            feedback?.feedbackStarts === 2 &&
                                            <div className="rating">
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" checked />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                            </div>

                                        }
                                        {

                                            feedback?.feedbackStarts === 3 &&
                                            <div className="rating">
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" checked />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                            </div>

                                        }
                                        {

                                            feedback?.feedbackStarts === 4 &&
                                            <div className="rating">
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" checked />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-gray-300" />
                                            </div>

                                        }
                                        {

                                            feedback?.feedbackStarts === 5 &&
                                            <div className="rating">
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" />
                                                <input name="rating-1" className="mask mask-star w-4 md:w-4  bg-orange-500" checked />
                                            </div>

                                        }
                                        <p className="text-xs break-words md:text-sm px-7">{feedback?.feedbackComment.length > 100 ? `${feedback?.feedbackComment.slice(0, 100)}...` : feedback?.feedbackComment}</p>
                                        <h3 className="text-gray-400 text-3xl text-center flex justify-center pt-5"><FaQuoteLeft /></h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SuccessStoriesCarousel;