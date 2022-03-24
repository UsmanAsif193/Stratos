import React from "react";
import { Fade } from "react-reveal";
import Navbar from "../components/navbar";
import GuestList from "../components/GuestList";
import OurPartners from "../components/ourPartners";

const signUp = () => {
  return (
    <div className="h-half bg-cloud-image-index bg-cover text-white">
      <Fade top>
        <div className="min-h-screen">
          <Navbar />
          <GuestList />
        </div>
      </Fade>
    </div>
  );
};

export default signUp;
