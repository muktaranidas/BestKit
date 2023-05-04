import React, { useState } from "react";
import "./AboutUs.css";
import aboutImg from "../../../src/assets/about/different-coworkers-having-meeting 2.png";
import bgImg from "../../../src/assets/about/Bg.png";
import Button from "../Shared/Button/Button";
import AboutBtnDescription from "./AboutBtnDescription";

const AboutUs = () => {
  const [btn, setBtn] = useState("Our Mission");
  console.log(btn);

  function myFunction(text) {
    setBtn(text);
  }

  const descriptions = [
    {
      id: 1,
      role: "Our Mission",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet velit amet at suscipit accumsan orci. Luctus dolor vestibulum id duis dolor luctus dui ac pretium. Sed donec posuere porta tortor posuere enim ut.",
    },
    {
      id: 2,
      role: "Our Vision",
      text: "r luctus dui ac pretium. Sed donec posuere porta tortor posuere enim utipsum dolor sit amet, consectetur adipiscing elit. Imperdiet velit amet at suscipit accumsan orci. Luctus dolor vestibulum id duis dolo",
    },
  ];

  return (
    <section>
      <div className="widthClass  my-[140px] container flex flex-col  mx-auto  lg:flex-row ">
        <div className=" relative mr-[142px] flex  justify-center   ">
          <img
            src={aboutImg}
            alt=""
            className="absolute left-[50px]  top-[50px] object-contain w-[250px] h-72 sm:h-80 lg:h-[565px] lg:w-[533px] "
          />
          <img
            src={bgImg}
            alt=""
            className="w-[525px] lg:h-[665px]  object-contain h-72 sm:h-80"
          />
        </div>
        <div className="flex my-auto w-[645px]   flex-col  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="paragraph-style-tag">Learn About Us</p>
          <h1 className="title w-[645px]">
            Brainstorming Sessions Churning Out New Ideas
          </h1>
          <p className="paragraph-normal-tag w-[645px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          <div className="bg-[#EBF6FF] w-[284px]  p-[10px] mt-[40px] mb-[30px]">
            <button
              onClick={() => myFunction("Our Mission")}
              className={` py-2 px-4 ${btn === "Our Mission" && "bg-blue"} 
                 border-none w-[129px]  font-bold  text-black text-center`}
            >
              Our Mission
            </button>
            <button
              onClick={() => myFunction("Our Vision")}
              className={`py-2 px-4 ml-1  ${btn === "Our Vision" && "bg-blue"}  
               border-none w-[129px]  font-bold  text-black text-center`}
            >
              Our Vision
            </button>
          </div>

          <div>
            {descriptions.map((description) => (
              <AboutBtnDescription
                key={description.id}
                description={description}
                btn={btn}
              ></AboutBtnDescription>
            ))}
          </div>

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
