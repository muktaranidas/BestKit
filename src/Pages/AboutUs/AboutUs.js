import React from "react";
import "./AboutUs.css";
import aboutImg from "../../../src/assets/about/different-coworkers-having-meeting 2.png";
import bgImg from "../../../src/assets/about/Bg.png";
import Button from "../Shared/Button/Button";

const AboutUs = () => {
  return (
    <section className="">
      <div className="  widthClass container flex flex-col  py-6 mx-auto sm:py-12 lg:py-24 lg:flex-row ">
        <div className=" relative mr-[142px] flex  items-center justify-center py-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={aboutImg}
            alt=""
            className="absolute left-[50px]  object-contain w-[250px] h-72 sm:h-80 lg:h-[565px] lg:w-[533px] "
          />
          <img
            src={bgImg}
            alt=""
            className="w-[525px] lg:h-[665px]  object-contain h-72 sm:h-80"
          />
        </div>
        <div className="flex  flex-col text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="paragraph-style-tag">Learn About Us</p>
          <h1 className="title">
            <span className="">
              Brainstorming Sessions Churning <br /> Out New Ideas
            </span>
          </h1>
          <p className="paragraph-normal-tag">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          {/* <div className="relative mt-[40px] mb-[30px]">
            <button className="p-4  bg-[#EBF6FF] border-none w-1/2 font-bold  text-black text-right">
              Our Vision
            </button>

            <button className="p-2 m-2 absolute  left-1 bg-blue border-none w-32 font-bold  text-black text-right">
              Our Mission
            </button>
          </div> */}
          <p className="paragraph-normal-tag">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            velit amet at suscipit accumsan orci. Luctus dolor vestibulum id
            duis dolor luctus dui ac pretium. Sed donec posuere porta tortor
            posuere enim ut.
          </p>

          <div className="flex flex-col">
            <div className="flex flex-row about-bottom-div">
              <span className="pr-[15px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    stroke="#008AFF"
                    stroke-width="2"
                  />
                  <path
                    d="M15.5 10L10.3437 15L8 12.7273"
                    stroke="#008AFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p>Pixel perfect & expertly crafted to meet standards</p>
            </div>
            <div className="flex flex-row about-bottom-div">
              <span className="pr-[15px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    stroke="#008AFF"
                    stroke-width="2"
                  />
                  <path
                    d="M15.5 10L10.3437 15L8 12.7273"
                    stroke="#008AFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <p className="">We love what we do & who we do it for</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
