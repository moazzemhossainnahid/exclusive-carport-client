import React from 'react';
import Reviews from './Tabs/Reviews/Reviews';
import Gallery from './Tabs/Gallery/Gallery';
import Overview from './Tabs/Overview/Overview';

const ProductTabsView = () => {
    const [tab, setTab] = React.useState("info");

    return (
        <div className='container w-full p-5'>
            <div className="py-10 px-5 md:px-10">
                <p className="border-b border-[#00C2FF] w-full"></p>
            </div>

            <div className="w-full">
                <div className="space-y-5">
                    <div className="flex gap-3 items-center justify-center w-full mx-auto mt-7">
                        <button onClick={() => setTab("info")} className="font-medium border focus:bg-primary border-gray-400 cursor-pointer hover:text-primary hover:border-primary focus:text-black rounded-3xl py-2 px-7">Overview</button>
                        <button onClick={() => setTab("answer")} className="font-medium border focus:bg-primary ml-2 rounded-3xl cursor-pointer border-gray-400 hover:text-primary focus:text-black hover:border-primary py-2 px-7">Gallery</button>
                        <button onClick={() => setTab("review")} className="font-medium border focus:bg-primary ml-2 rounded-3xl cursor-pointer hover:text-primary hover:border-primary focus:text-black border-gray-400 py-2 px-7">Reviews</button>
                    </div>
                    {tab === "info" && <Overview />}
                    {tab === "answer" && <Gallery />}
                    {tab === "review" && <Reviews />}
                </div>

            </div>
        </div>
    );
};

export default ProductTabsView;