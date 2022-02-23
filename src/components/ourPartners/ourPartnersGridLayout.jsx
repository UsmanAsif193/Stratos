import React from "react";

const OurPartnersGridLayout = () => {
  const data = [
    {
      heading: "Visibility",
      para: "Our number one priority is to get you seen by companies and other professionals that will expand your professional community.",
    },
    {
      heading: "Support",
      para: "We support you through difficult times. Have a question? Reach out to our Stratos community team.",
    },
    {
      heading: "Connect",
      para: "Connect with companies that are committed to inclusive hiring practices",
    },
    {
      heading: "Curation",
      para: "Our content is relevant to your professional journey.",
    },
  ];
  return (
    <div
      id="main"
      className="m-0 md:m-32 grid grid-cols-1 lg:grid-cols-2 gap-2 justify-evenly"
    >
      {data.map(({ heading, para }) => (
        <div
          key={heading}
          className="bg-cloud-image-index-2 bg-cover lg:px-2 bg-blend-color text-white rounded-lg h-64 text-center flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 ">
            {heading}
          </h2>
          <p className="text-lg md:text-xl font-light w-full">{para}</p>
        </div>
      ))}
    </div>
  );
};

export default OurPartnersGridLayout;
