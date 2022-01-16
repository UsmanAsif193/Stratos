
import React from 'react';
import Navbar from '../components/navbar';
import AboutStratos from '../components/aboutStratos';
import OurPartners from '../components/ourPartners';
import { Fade } from 'react-reveal';


const aboutStratos = () => {
    return (
        <div   className="min-h-screen">
          <Fade top>
            <div  className="h-full bg-cloud-image-index bg-cover text-white">
            <Navbar  />
              <AboutStratos />
            </div>
          </Fade>
        </div>
      );
    };
    


export default aboutStratos;
