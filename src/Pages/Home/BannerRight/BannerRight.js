import React from "react";
import img from "../../../assets/banner/elegant-businessman-office 1.png";

const BannerRight = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="relative ">
        <span className="absolute w-11/12 top-20  left-1/2 -translate-x-1/2  ">
          <svg
            width="856"
            height="724"
            viewBox="0 0 856 724"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="428"
              cy="428"
              r="428"
              fill="url(#paint0_linear_1_6469)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_6469"
                x1="428"
                y1="0"
                x2="428"
                y2="740"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BDE1FF" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute w-9/12  top-40 left-28">
          <svg
            width="696"
            height="644"
            viewBox="0 0 696 644"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="348"
              cy="348"
              r="348"
              fill="url(#paint0_linear_1_6470)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_6470"
                x1="348"
                y1="0"
                x2="348"
                y2="696"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B0DAFD" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <img src={img} alt="" className="relative left-12  bottom-0  " />
      </div>
    </div>
  );
};

export default BannerRight;
