import React, { useState } from 'react';
import Banner from '../Components/Banner/Banner';
import ImageCard from '../Components/ImageCard/ImageCard';
import Goal from '../Components/Goal/Goal';
import Chart from '../Components/Chart/Chart';
const image =  require("../public/assets/images/bank-savings.jpg");

const Savings = () => {
    return (
        <div className="flex flex-row gap-11 pt-[50px] pl-[72px] pr-[44px]">
            <div className="basis-4/6">
                <div className="flex flex-col gap-9">
                 <Goal />
                 <Chart />
                </div>
            </div>
            <div className="basis-2/6">
                <div className="flex flex-col gap-9">
                    <Banner text="Your one step closer to saving for the trip of your dream" />
                    <ImageCard image={image} />
                </div>
            </div>
        </div>
    )
}

export default Savings;