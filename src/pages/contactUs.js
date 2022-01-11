import React from "react";
import { Fade } from "react-reveal";
import Navbar from "../components/navbar";
import GuestList from "../components/guestList";
import OurPartners from "../components/ourPartners";

const contactUs = () => {
  return (
    <div   className="min-h-screen">
      <Fade top>
        <div  className="h-full bg-cloud-image-index-2 bg-cover  ">
        <Navbar whiteColor />
          <GuestList />
        </div>
      </Fade>
      <OurPartners />
    </div>
  );
};

export default contactUs;
