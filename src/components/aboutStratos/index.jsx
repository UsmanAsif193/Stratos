import React from "react";
import { Fade } from "react-reveal";

const AboutStratos = () => {
  return (
    <Fade bottom>
      <section className="overflow-hidden" id="about-stratos">
        <div className=" md:mt-0 md:p-20 md:pb-0 md:py-12 md:px-4 min-h-screen">
          <div className="p-20 pb-0 md:pl-20 px-4 mt-24 md:mt-0 h-full">
            <div className="flex w-full justify-center items-center">
              <h1 className="tracking-[.7rem] uppercase font-light text-2xl">
                Strat<span className="text-[#45A5AE]">o</span>s
              </h1>
            </div>
            <div className="grid grid-cols-1 mf:grid-cols-2 items-center justify-between h-full mt-12 md:mt-0">
              <div
                style={{ marginBottom: 230 }}
                className="w-10/12 ml-12 md:row-start-1"
              >
                <div className="my-6 sm:my-12">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Our Story
                  </h2>
                  <p className="text-lg md:text-xl font-light w-full">
                    Jonathan Cornelius founded Stratos intending to solve a big
                    problem. The problem was the lack of diverse talent in the
                    tech space.
                  </p>
                  <p className="text-lg md:text-xl font-light w-full my-2 sm:my-4">
                    Stratos started as a recruitment firm that sourced diverse
                    talent for its partners. What inspired us to expand our
                    vision was when Jonathan made a call to offer a young lady a
                    job. Jonathan told her, “you got the job,” and she began to
                    cry. Jonathan asked her why are you crying, and her response
                    was, “this opportunity changed me and my family's life.”
                    Stratos is on a mission to scale this story and replicate
                    this level of impact across the world.
                  </p>
                </div>
                <div className="my-6 sm:my-12">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Who we are
                  </h2>
                  <p className="text-lg md:text-xl font-light w-11/12">
                    Stratos is a professional networking platform that offers a
                    new way for Black & Latinx professionals to find and connect
                    with each other.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Why we exist
                  </h2>
                  <p className="text-lg md:text-xl font-light w-11/12">
                    Stratos exists to offer life-impacting access to career,
                    mentors, and community networking opportunities.
                  </p>
                </div>
              </div>
              <div className="flex w-full items-end justify-center">
                <img
                  src="/assets/watch.png"
                  className="h-[50px] left-[70px] md:h-[80px] relative left-[100px] top-[100px]"
                  alt=""
                />
                <img
                  src="/assets/butterfly-stratos3.png"
                  className="w-[300px] md:w-full"
                  alt=""
                />
                <img
                  src="/assets/business-jet.png"
                  className="h-[50px] right-[70px] md:h-[80px] relative md:right-[100px] rotate-[30deg]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default AboutStratos;
