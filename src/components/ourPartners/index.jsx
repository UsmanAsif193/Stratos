import React from "react";
import { Zoom } from "react-reveal";
import OurPartnersGridLayout from "./ourPartnersGridLayout";

const SinglePartner = ({ className, alt, Src }) => (
  <div
    className={`${className} single_partner_div flex-[1_0_10%] flex items-center justify-center min-w-[120px] min-h-[120px]  mx-4 p-2`}
  >
    <Src />
  </div>
);

const OurPartners = () => {
  return (
    <Zoom left>
      <section className="p-20 px-4 min-h-screen md:h-screen">
        <div className=" flex justify-center items-center">
          <div>
            <h1 className="tracking-[.7rem] uppercase ml-18 mb-16 md:px-10 font-light text-lg md:text-2xl text-center">
              Stratos partners with companies committed to diversifying their
              workforce.
            </h1>
          </div>
        </div>
        <div className="  mb-24 flex justify-center items-center h-6/6">
          <div className="flex flex-wrap items-center justify-center mt-0">
            <SinglePartner
              Src={require("../../assets-partners/acadia.svg").default}
              alt="Partner 1"
            />
            <SinglePartner
              // className="h-8 w-8"
              Src={require("../../assets-partners/bevy.svg").default}
              alt="Partner 2"
            />
            <SinglePartner
              Src={require("../../assets-partners/guru.svg").default}
              alt="Partner 3"
            />

            <SinglePartner
              Src={require("../../assets-partners/kyte.svg").default}
              alt="Partner 4"
            />
            <SinglePartner
              Src={require("../../assets-partners/pendo.svg").default}
              alt="Partner 5"
            />
            <SinglePartner
              Src={require("../../assets-partners/prefect.svg").default}
              alt="Partner 6"
            />
            <SinglePartner
              Src={require("../../assets-partners/verkada.svg").default}
              alt="Partner 7"
            />
          </div>
        </div>
        <div className="pb-4">
          <OurPartnersGridLayout />
        </div>
      </section>
    </Zoom>
  );
};

export default OurPartners;
