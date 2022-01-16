import React from "react";
import { Fade } from "react-reveal";
import Navbar from "../components/navbar";
import GuestList from "../components/guestList";
import OurPartners from "../components/OurPartners";

const signUp = () => {
  return (
    <div   className="min-h-screen">
    <Fade top>
      <div  className="h-full bg-cloud-image-index bg-cover text-white">
        <Navbar  />
          <GuestList />
        </div>
      </Fade>
    </div>
  );
};

export default signUp;
