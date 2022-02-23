import React from "react";
import { Zoom } from "react-reveal";
import OurPartnersGridLayout from "./ourPartnersGridLayout";

const SinglePartner = ({ className, alt, Src }) => (
  <div
    className={`${className} single_partner_div flex-[1_0_16%] flex items-center justify-center min-w-[120px] min-h-[120px]  mx-4 p-2`}
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
            <SinglePartner
              Src={require("../../assets-partners/no-name1.svg").default}
              alt="Partner 8"
            />

            <SinglePartner
              Src={require("../../assets-partners/no-name2.svg").default}
              alt="Partner 9"
            />
            <SinglePartner
              Src={require("../../assets-partners/no-name3.svg").default}
              alt="Partner 10"
            />
          </div>
        </div>
        <div>
          <OurPartnersGridLayout />
        </div>
        <div className="flex justify-center items-center mr-7">
          <a href="https://www.instagram.com/trystratos/">
            <img className="w-[45px]" src="assets/insta.png" />
          </a>
          <a href="https://www.linkedin.com/company/trystratos/">
            <img className="w-[45px]" src="assets/linkedin.png" />
          </a>
          <a href="mailto:info@trystratos.com">
            <img className="w-[40px]" src="assets/mail.png" />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="tracking-[.7rem] uppercase ml-55 font-light text-1xl md:text-1xl text-center">
            Stratos Solutions{" "}
          </h1>
          <br></br>
        </div>
        <div className="flex items-center justify-center">
          <h3 className="tracking-[.7rem]  ml-30 uppercase font-light text-1xl md:text-1xl text-center">
            120 W Trinity Pl, Decatur, GA 30030{" "}
          </h3>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <h4 className="tracking-[.7rem] uppercase font-light text-1xl md:text-1xl text-center">
              404-530-9642{" "}
            </h4>
          </div>
        </div>
        <div></div>
      </section>
    </Zoom>
  );
};

export default OurPartners;
