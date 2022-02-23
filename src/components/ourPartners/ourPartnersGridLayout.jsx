import React from "react";

const OurPartnersGridLayout = () => {
  return (
    <div
      id="main"
      class="m-0 md:m-32 grid grid-cols-1 lg:grid-cols-2 gap-2 justify-evenly"
    >
      <div class="bg-cloud-image-index-2 bg-cover bg-blend-color text-white rounded-lg h-64 text-center flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 ">Learn</h2>
        <p className="text-lg md:text-xl font-light w-full">
          Our number one priority is to get you seen by companies and other
          professionals that will expand your professional community.
        </p>
      </div>
      <div class="bg-cloud-image-index-2 bg-cover bg-blend-color text-white rounded-lg h-64 text-center flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 ">Support</h2>
        <p className="text-lg md:text-xl font-light w-full">
          Our number one priority is to get you seen by companies and other
          professionals that will expand your professional community.
        </p>
      </div>
      <div class="bg-cloud-image-index-2 bg-cover bg-blend-color text-white rounded-lg h-64 text-center flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Connect</h2>
        <p className="text-lg md:text-xl font-light w-full">
          Connect with companies that are committed to inclusive hiring
          practices
        </p>
      </div>
      <div class="bg-cloud-image-index-2 bg-cover bg-blend-color text-white rounded-lg h-64 text-center flex flex-col justify-center">
        <p className="text-lg md:text-xl font-light w-full">
          Our content is relevant to your professional journey.
        </p>
      </div>
    </div>
  );
};

export default OurPartnersGridLayout;
