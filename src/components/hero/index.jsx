import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [dateToGet, setDateToGet] = useState("");

  const calculateTimeLeft = () => {
    let difference = +new Date(dateToGet) - +new Date();

    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return timeLeft;
  };
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  //Enter the date of release in mm/dd/yyyy
  useEffect(() => {
    setDateToGet("02/26/2022");
  });
  return (
    <Fade top>
      <section className="text-lg flex flex-col justify-evenly items-center h-5/6 md:pt-12">
        <h1 className="tracking-[1.6rem] uppercase font-extralight text-xl text-center sm:text-2xl">
          Stratos Presents
        </h1>
        <img
          src="/assets/Cloud-1.png"
          alt="Social_Club"
          className="lg:h-[120px] 2xl:h-[135px] "
        />
        <h2 className="text-center font-light tracking-[.6rem] text-xl sm:text-2xl">
          FIRST LINK UP OF THE YEAR:{" "}
          <span className="font-normal">ATLANTA, GA</span>
        </h2>
        <div  style={{marginRight: 50}}  className="items-center justify-center text-lg md:text-3xl flex">
          <div className="flex flex-col items-center justify-center mx-2 md:mx-8">
            <span className="text-2xl md:text-7xl font-bold">
              {timeLeft.days}
            </span>
            Days
          </div>
          <div className="flex flex-col items-center justify-center mx-2 md:mx-8">
            <span className="text-2xl md:text-7xl font-bold">
              {timeLeft.hours}
            </span>
            Hours
          </div>
          <div className="flex flex-col items-center justify-center mx-2 md:mx-8">
            <span className="text-2xl md:text-7xl font-bold">
              {timeLeft.minutes}
            </span>
            Minutes
          </div>
          <div className="flex flex-col items-center justify-center mx-2 md:mx-8">
            <span className="text-2xl md:text-7xl font-bold">
              {timeLeft.seconds}
            </span>
            Seconds
          </div>
        </div>
        <div className="font-light tracking-[.6rem] text-xl sm:text-2xl">
          <div>

          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Hero;
