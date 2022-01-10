import React from "react";
import { Zoom } from "react-reveal";

const SinglePartner = ({ className, alt, Src }) => (
  <div
    className={`${className} single_partner_div flex-[1_0_21%] flex items-center justify-center min-w-[200px] min-h-[200px]  mx-4 p-2`}
  >
    <Src />
  </div>
);

const OurPartners = () => {
  return (
    <Zoom left>
      <section className="p-20 px-12 min-h-screen md:h-screen">
        <div className="flex justify-center items-center">
          <h1 className="tracking-[.7rem] uppercase font-light text-2xl md:text-3xl text-center">
            OUR PARTNERS
          </h1>
        </div>
        <div className="flex justify-center items-center h-5/6">
          <div className="flex flex-wrap items-center justify-center mt-24 lg:mt-0">
            <SinglePartner
              Src={require("../../assets-partners/acadia-hover.svg").default}
              alt="Partner 1"
            />
            <SinglePartner
              Src={require("../../assets-partners/bevy-hover.svg").default}
              alt="Partner 2"
            />
            <SinglePartner
              Src={require("../../assets-partners/guru-hover.svg").default}
              alt="Partner 3"
            />

            <SinglePartner
              Src={require("../../assets-partners/kyte-hover.svg").default}
              alt="Partner 4"
            />
            <SinglePartner
              Src={require("../../assets-partners/pendo-hover.svg").default}
              alt="Partner 5"
            />
            <SinglePartner
              Src={require("../../assets-partners/prefect-hover.svg").default}
              alt="Partner 6"
            />
            <SinglePartner
              Src={require("../../assets-partners/verkada-hover.svg").default}
              alt="Partner 7"
            />
          </div>
        </div>
        <div className="flex md:items-start justify-center flex-col">
          <div className="flex items-center justify-center my-4">

          </div>
          <div className="flex items-center justify-center">
          </div>
        </div>
      </section>
    </Zoom>
  );
};

export default OurPartners;
