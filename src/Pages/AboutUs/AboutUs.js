import React from "react";
import "./AboutUs.css";
import aboutImg from "../../../src/assets/about/different-coworkers-having-meeting 2.png";
import bgImg from "../../../src/assets/about/Bg.png";

const AboutUs = () => {
  return (
    <section className="">
      <div className=" widthClass container   flex flex-col justify-center py-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center py-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <div className="relative">
            <img
              src={bgImg}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
            <img
              src={aboutImg}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 absolute top-2 left-8"
            />
          </div>
        </div>
        <div className="flex  flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-blue">Learn About Us</p>
          <h1>Brainstorming Sessions Churning Out New Ideas </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
