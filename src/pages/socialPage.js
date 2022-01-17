
import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import { Fade } from 'react-reveal';
import dynamic from "next/dynamic";
import GuestList from '../components/GuestList/GuestList';


const Schedule = dynamic(() => import("../components/schedule"), {
    ssr: false,
  });
const socialPage = () => {
    return (
      <div className="min-h-screen">
      <div  className="h-screen bg-cloud-image-index bg-cover text-white">
            <Navbar  />
              <Hero />
            </div>
            < Schedule />

            <div>
              <GuestList />
            </div>

        </div>
        
      );
    };
    


export default socialPage;