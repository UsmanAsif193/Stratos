import React from "react";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import GuestList from "../components/guestList";
import dynamic from "next/dynamic";
import AboutStratos from "../components/aboutStratos";
import OurPartners from "../components/ourPartners";
import JoinStratos from "../components/joinStratos";


const Schedule = dynamic(() => import("../components/schedule"), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="h-screen bg-cloud-image-index bg-cover text-white">
        <Navbar />
        <JoinStratos />
      </div>
      <div className="min-h-screen">
      <div className="h-screen bg-cloud-image-index bg-cover text-white">
      <Hero />
      </div>
      <contactUs />
      <GuestList />
      <Schedule />
      <AboutStratos />
      <OurPartners />
    </div>
    <h1 style={{marginBottom: 300}} className="tracking-[.7rem] uppercase font-light text-2xl md:text-3xl text-center">
         Follow our progress
          </h1>
        </div>

  );
};

export default Home;
