import React from "react";
import JoinStratosForm from "../JoinStratosForm";

const JoinStratos = () => {
  return (
    <section className="flex items-center justify-center flex-wrap min-h-screen pt-20 px-6 lg:pt-0 lg:px-40 overflow-hidden">
      <div className="w-full flex-1 xl:pr-12">
        <div>
          <h2 className="text-xl md:text-3xl">
            A new way for Latinx & Black professionals to find relevant
            community networking and career opportunities
          </h2>
        </div>
        <div className="text-xl md:text-2xl font-bold py-6">
          <h2>
            At Stratos, your voices are heard, and your questions are answered.
          </h2>
          <h3>
            Find your next community networking & career opportunity with us.
          </h3>
        </div>
        <div>
          <h4 className="pb-4 md:pb-4">
            Sign up to be the first to have access to Stratos community
            networking & career opportunities.
          </h4>
        </div>
        <div>
          <JoinStratosForm />
        </div>
      </div>
      <div>
        <img
          className="mt-20 sm:mt-0 mb-20 h-[400px] md:h-[650px]"
          src="assets/Header-graphic.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default JoinStratos;
