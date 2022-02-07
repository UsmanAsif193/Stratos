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
    <Zoom  left>
      <section className="p-20 px-12 min-h-screen md:h-screen">
        <div className="flex justify-center items-center">
          <div  >
          <h1 className="tracking-[.7rem] uppercase ml-18 font-light text-2xl md:text-2xl text-center">
         OUR PARTNERS          
         </h1>
          </div>
        </div>
        <div  className="flex justify-center items-center h-5/6">
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
        <div className="flex justify-center items-center mr-7">
          <a href="https://www.instagram.com/trystratos/">
              <img 
              className="w-[45px]"
              src="assets/insta.png"
              />
          </a>
          <a href="https://www.linkedin.com/company/trystratos/">
          <img
            className="w-[45px]"
            src="assets/linkedin.png"                 
            />
          </a>
          <a href="mailto:info@trystratos.com">
          <img
            className="w-[40px]"
            src="assets/mail.png"                 
            />
          </a>
          </div>
          <div className="flex justify-center items-center">
          <h1 className="tracking-[.7rem] uppercase ml-55 font-light text-1xl md:text-1xl text-center">
          Stratos Solutions </h1>
          <br>
          </br>
          </div>
          <div className="flex items-center justify-center">
          <h3  className="tracking-[.7rem]  ml-30 uppercase font-light text-1xl md:text-1xl text-center">
          120 W Trinity Pl, Decatur, GA 30030 </h3>
          </div>
          <div>
          <div className="flex items-center justify-center">
           <h4  className="tracking-[.7rem] uppercase font-light text-1xl md:text-1xl text-center">
          404-530-9642 </h4>
          </div>
          </div>
         <div>
        </div>
      </section>
    </Zoom>
  );
};

export default OurPartners;
