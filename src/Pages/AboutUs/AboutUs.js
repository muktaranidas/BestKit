import React from "react";
import "./AboutUs.css";
import aboutImg from "../../../src/assets/about/different-coworkers-having-meeting 2.png";
import bgImg from "../../../src/assets/about/Bg.png";

const AboutUs = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12  lg:flex-row lg:justify-between">
        <div className="flex items-center  justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <div className="relative">
            <img
              src={bgImg}
              alt=""
              className=" w-[525px] object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <img
            src={aboutImg}
            alt=""
            className="w-[533px] h-[565px] py left-10  about-img absolute    object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col  rounded-sm  text-left">
          <h1 className="learn-About-Us">Learn About Us</h1>
          <h1>
            Brainstorming Sessions Churning <br></br> Out New Ideas
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Suspendisse
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              Malesuada
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            velit amet at suscipit accumsan orci. Luctus dolor vestibulum id
            duis dolor luctus dui ac pretium. Sed donec posuere porta tortor
            posuere enim ut.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
