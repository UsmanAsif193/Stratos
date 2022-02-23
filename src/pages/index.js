import React from "react";

import Navbar from "../components/navbar";
import dynamic from "next/dynamic";
import OurPartners from "../components/ourPartners";
import JoinStratos from "../components/joinStratos";
import { Fade } from "react-reveal";


const Schedule = dynamic(() => import("../components/schedule"), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-cloud-image-index bg-cover text-white">
        <Navbar />
        <JoinStratos />
      </div>
      <div>
        <div></div>
        <OurPartners />
      </div>
    </div>
  );
};

export default Home;
