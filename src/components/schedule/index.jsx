import React, { useEffect } from "react";
import { Zoom } from "react-reveal";

const ServicesCard = ({ title, time }) => (
  <div className="flex flex-col justify-start items-start p-2 mt-2 md:p-3 md:m-2">
    <p className="font-normal text-xl">{time}</p>
    <h2 className="font-bold text-2xl">{title}</h2>
  </div>
);

const SocialClub = () => {
  return (
    <Zoom right>
      <section style={{marginBottom: 90}}
        id="social-club"
        className="flex min-h-screen w-full flex-col md:flex-row justify-center bg-cloud-image-index-2 bg-cover bg-blend-soft-light bg-blend-normal text-white items-center"
      >
        <div className="grid grid-cols-1 mf:grid-cols-2 items-center justify-between md:mt-0 md:p-20 md:py-12 md:px-4">
          <div className="flex flex-col justify-evenly items-center h-full md:pl-20 px-4 mt-24 md:mt-0">
            <h1  className="tracking-[.7rem] uppercase font-extralight text-xl">
              Stratos
            </h1>
            <img
              src="/assets/Cloud-1.png"
              alt="Social_Club"
              className="lg:h-[80px] "
            />
            <div className="3xl:w-2/3">
              <p className="text-xl mt-12 md:mt-0">
              We are excited to host our first in-person networking event of the year on February 26th. 
Black & Latinx professionals (ages 21 and over)  pull up on us for networking, drinks, and an inspiring 
fireside chat from the founder of The Gathering Spot, Ryan Wilson.   

              </p>
              <br/>
              
              <p className="text-xl mt-12 md:mt-0">
              Join us to recognize the strength of the Black and Latinx professional journey, celebrate your successes and connect with others ready to take their careers to the next level. 

              </p>
            </div>
            <div className="my-12 md:my-0">
              <h3 className="text-xl font-bold">**COVID Safety Precautions:</h3>
              <p className="text-md">
                Event will take place in a large, well ventilated space.
                <br />
                Limited Capacity. Proof of Vaccination OR Negative COVID Test
                (PCR or Antigen) taken within 72 Hours.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start">
            <div className="rounded-[50px] m-2 md:rounded-[100px] bg-[#ffffff4f] shadow-2xl h-full mt-12 md:mt-0 md:w-2/3 flex flex-col justify-start items-start px-8 py-20 md:px-12 md:py-20">
              <div className="w-full text-center">
                <h1 className="tracking-[.7rem] uppercase font-light text-xl">
                  THE SCHEDULE
                </h1>
              </div>
              <div className="flex flex-col items-start mt-4">
                <ServicesCard time="7pm" title="Drinks & Chat" />
                <ServicesCard time="7:45pm" title="Opening Remarks" />
                <ServicesCard time="8pm" title="Networking Breakout" />
                <ServicesCard time="8:45pm" title="Speaker" />
                <ServicesCard time="9:15pm" title="The Toast" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Zoom>
  );
};

export default SocialClub;
