import Link from "next/link";
import React from "react";
import { Fade } from "react-reveal";
import Navbar from "../components/navbar";
import WaitListForm from "../components/waitListForm";
import WaitListSlider from "../components/waitListSlider";

const WaitList = () => {
  return (
    <div className="md:h-screen bg-cloud-image-index bg-cover text-white xl:overflow-hidden">
      <Fade top>
        <div className="md:h-full">
          <h1 className=" tracking-[.7rem] text-lg uppercase font-extralight pl-6 md:pl-24 pt-8">
            <Link href={"/"}>Stratos</Link>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:h-full">
            <div className="h-full flex items-start justify-start flex-col 2xl:justify-center 2xl:pt-0 2xl:pb-20 px-4 lg:px-28 pt-28  ">
              <div className="text-3xl lg:text-5xl font-bold  ">
                Stratos is Launching 06.01.2022
              </div>
              <div className="text-xl lg:text-2xl pt-10">
                A social platform for Black & Latinx professionals It’s straight
                talk about legitimate issues that we face every day at work.
              </div>
              <div className="pt-10 m-auto md:m-0">
                <WaitListForm />
              </div>
            </div>
            <div className="py-20 2xl:py-28 h-full">
              <div className="h-1/2 w-2/3  md:h-72 md:w-72 m-auto">
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
