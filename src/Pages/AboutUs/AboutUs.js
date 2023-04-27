import React from "react";
import "./AboutUs.css";
import aboutImg from "../../../src/assets/about/different-coworkers-having-meeting 2.png";
import bgImg from "../../../src/assets/about/Bg.png";
import Button from "../Shared/Button/Button";

const AboutUs = () => {
  return (
    <section className="mt-12 mb-24">
      <div className=" widthClass  flex flex-col justify-center py-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center py-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <div className="relative">
            <img src={bgImg} alt="" className="" />
            <img src={aboutImg} alt="" className=" absolute top-12 left-12" />
            <div className=" absolute right-2 bottom-24 text-white flex flex-row space-x-2 bg-[#36CD77] w-36 py-2 px-2">
              <h1 className="my-2 font-bold text-xl ">25+</h1>
              <p className="text-sm">
                Years Of <br />
                Experience
              </p>
            </div>
          </div>
        </div>
        <div className="flex  flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="uppercase text-blue  pb-[10px] font-semibold">
            Learn About Us
          </p>
          <h1 className="text-6xl font-semibold lg:text-3xl">
            Brainstorming Sessions Churning <br />
            <span className="">Out New Ideas</span>
          </h1>
          <p className="mt-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim
            <br />
            in eros elementum tristique.
          </p>
          <div className="relative mt-[40px] mb-[30px]">
            <button className="p-4  bg-[#EBF6FF] border-none w-1/2 font-bold  text-black text-right">
              Our Vision
            </button>
            <button className="p-2 m-2 absolute  left-1 bg-blue border-none w-32 font-bold  text-black text-right">
              Our Mission
            </button>
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
