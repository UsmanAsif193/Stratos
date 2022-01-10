import React from "react";
import Zoom from "react-reveal/Zoom";
import SuccessCard from '../SuccessCard/SuccessCard';


const InputQuest = ({ placeholder, type, className }) => {
  return (
    <input
      className={`${
        className && className
      } appearance-none placeholder-black block w-full bg-white text-black border border-gray-300 rounded-xl border-0 shadow-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100`}
      type={type ? type : "text"}
      placeholder={placeholder}
    />
  );
};

const QuestList = () => {
  return (
    <Zoom left>
      <section className="grid grid-cols-1 gap-2 p-2 lg:grid-cols-2 md:p-20 min-h-full bg-[#FAFBFB] overflow-hidden">
        <div>
          <div className="flex flex-col md:flex-row md:items-end">
            <div className="flex items-center justify-center flex-col">
              <img
                className="w-[90px] ml-48 md:ml-22 md:mb-4"
                src="assets/planet1.png"
              />
              <img
                className="w-[200px] mb-7 md:mb-0"
                src="assets/planet2.png"
              />
            </div>
            <div>
              <h2 className="pl-2 md:pl-[40px] text-3xl md:text-4xl font-bold ">
                A unique networking experience that is{" "}
                <span className="text-[#1DADBB]">
                  <br />
                  out of this world.{" "}
                </span>
              </h2>
            </div>
          </div>
          <div className="px-0 py-14 md:px-20">
            <p className="text-lg font-light">
              Social Club is a professional event in a relaxed atmosphere,
              curated for Black & Latinx professionals, and providing them with
              an experience that drives community, career development and
              professional advancement.
            </p>
          </div>
          <div className="flex px-0 md:px-12">
            <div>
              <img
                className="w-14 rotate-[50deg]"
                src="assets/lollipop.png"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold">When & Where</h3>
              <p className="text-lg font-light">
                7pm Saturday January 29th in Atlanta, Georgia
              </p>
              <p>Address will be sent to email inbox</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="tracking-[9px] text-black font-semibold py-10 text-lg">
            JOIN THE GUESTLIST
          </h2>
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <InputQuest placeholder="Name" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <InputQuest placeholder="Email" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <InputQuest placeholder="Age" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <InputQuest placeholder="Phone Number" type="number" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <InputQuest placeholder="Job Title" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <InputQuest placeholder="Industry" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <textarea
                  className="appearance-none placeholder-black block w-full bg-white text-black border border-gray-300 rounded-xl border-0 shadow-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100"
                  id="grid-description"
                  rows="8"
                  type="password"
                  placeholder="Briefly Describe Your Career Goals"
                />
              </div>
            </div>
          </form>
          <button onClick={SuccessCard} className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-16 rounded-xl border-0 shadow-md-full">
            Register
          </button>
        </div>
      </section>
    </Zoom>
  );
};

export default QuestList;
