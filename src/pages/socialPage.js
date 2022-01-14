
import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import OurPartners from '../components/ourPartners';
import { Fade } from 'react-reveal';
import dynamic from "next/dynamic";


const Schedule = dynamic(() => import("../components/schedule"), {
    ssr: false,
  });
const socialPage = () => {
    return (
        <div   className="min-h-screen">
          <Fade top>
            <div  className="h-full bg-cloud-image-index bg-cover text-white">
            <Navbar  />
              <Hero />
              < Schedule />
            </div>
          </Fade>
          <OurPartners />
        </div>
      );
    };
    


export default socialPage;