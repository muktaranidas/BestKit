import React from "react";
import bgLarge from "../../../assets/banner/Ellipse 8.jpg";
import bgSmall from "../../../assets/banner/Ellipse 7.jpg";
import "./Banner.css";
import Button from "../../Shared/Button/Button";
import BannerRight from "../BannerRight/BannerRight";

const Banner = () => {
  return (
    <section className="banner-bg pt-16 ">
      <div className="widthClass   flex flex-col justify-center items-center   lg:flex-row lg:justify-between">
        <div className="flex w-1/2 flex-col justify-center text-center rounded-sm  lg:text-left">
          <div className="flex flex-row ">
            <span className="mt-2 pr-[16px]">
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
            <h1 className="paragraph-style-tag">One Of The Best Solutions</h1>
          </div>
          <h1 className="banner-heading">
            Creating Services For Your{" "}
            <span className="text-blue">Startup</span> Business
          </h1>
          <p className="paragraph-normal-tag pb-[55px]">
            We’re a Digital Marketing Agency in Bangladesh, made up of a group
            of passionate individuals.
          </p>

          <label className="flex banner-label    rounded-lg items-center">
            <span className="pl-[30px] pt-[26px] pb-[25px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33366 3.33325H16.667C17.5837 3.33325 18.3337 4.08325 18.3337 4.99992V14.9999C18.3337 15.9166 17.5837 16.6666 16.667 16.6666H3.33366C2.41699 16.6666 1.66699 15.9166 1.66699 14.9999V4.99992C1.66699 4.08325 2.41699 3.33325 3.33366 3.33325Z"
                  stroke="#8492A7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3337 5L10.0003 10.8333L1.66699 5"
                  stroke="#8492A7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <form action="" className="grow ">
              <input
                type="email"
                placeholder="Enter your mail address"
                className="banner-input-w  focus:outline-none  input bg-transparent w-full"
              />
            </form>
            <div className="pr-2">
              <Button btnText={"Get Started"}></Button>
            </div>
          </label>
        </div>
        <div className="w-1/2">
          <BannerRight></BannerRight>
        </div>
      </div>
    </section>
  );
};

export default Banner;
