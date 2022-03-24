import React from "react";
import { Fade } from "react-reveal";
import Navbar from "../components/navbar";
import WaitListForm from "../components/waitListForm";
import WaitListSlider from "../components/waitListSlider";

const WaitList = () => {
  return (
    <div className="md:h-screen bg-cloud-image-index bg-cover text-white lg:overflow-hidden">
      <Fade top>
        <div className="md:h-full">
          <Navbar />
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:h-full">
            <div className="h-full flex items-start justify-start flex-col 2xl:justify-center 2xl:pt-0 2xl:pb-20 px-4 lg:px-28 pt-28  ">
              <div className="text-3xl lg:text-5xl font-bold ">
                Stratos is launching its mobile app on June 1st
              </div>
              <div className="text-xl lg:text-2xl pt-10">
                A social platform for Black & Latinx professionals It’s straight
                talk about legitimate issues that we face every day at work.
              </div>
              <div className="pt-10 m-auto md:m-0">
                <WaitListForm />
              </div>
            </div>
            <div className="py-20 2xl:py-40 h-full">
              <div className="h-1/2 w-2/3 md:h-72 md:w-[20rem] m-auto">
                <WaitListSlider />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default WaitList;
