import React from "react";
import img from "../../../assets/banner/elegant-businessman-office 1.png";
import "./Banner.css";
import Button from "../../Shared/Button/Button";

const Banner = () => {
  return (
    <section className="banner-bg ">
      <div className="container widthClass flex flex-col justify-center py-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <div className="flex flex-row ">
            <span className="mt-2 pr-4">
              <svg
                width="100"
                height="2"
                viewBox="0 0 100 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="1.25"
                  x2="100"
                  y2="1.25"
                  stroke="#008AFF"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <h1 className="banner-h1 ">One Of The Best Solutions</h1>
          </div>
          <h1 className="bannner-heading ">
            Creating Services For Your{" "}
            <span className="banner-startup">Startup</span> Business
          </h1>
          <p className="bannner-description my-8">
            We’re a Digital Marketing Agency in Bangladesh, made up of a group
            of passionate individuals.
          </p>
          <div className="relative flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <input
              type="email"
              placeholder="Enter your mail address"
              className="banner-input-w input   "
            />
            <div className=" absolute right-2  ">
              <Button btnText={"Get Started"}></Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={img}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
