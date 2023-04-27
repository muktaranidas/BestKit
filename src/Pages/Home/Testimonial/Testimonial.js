import React from "react";
import Button from "../../Shared/Button/Button";
import img1 from "../../../assets/Testimonial/1.jpg";
import img2 from "../../../assets/Testimonial/2.jpg";
import img3 from "../../../assets/Testimonial/3.jpg";

const Testimonial = () => {
  return (
    <section className="bgWhite py-6 ">
      <div className=" widthClass container py-4 mx-auto space-y-16 sm:py-10">
        <div className=" flex flex-row justify-between">
          <div className="space-y-2 relative">
            <p className="text-blue uppercase">Testimonial</p>
            <h1 className="font-semibold text-5xl lg:text-3xl">
              See What Others Have <br />
              <p className="pt-1"> to Say About Us</p>
            </h1>
          </div>
          <div className="pt-16 ">
            <button className="bg-bgColor space-x-2 p-4">
              <svg
                width="17"
                height="13"
                viewBox="0 0 17 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 6.5H1"
                  stroke="#008AFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.43066 1L0.99963 6.5L6.43066 12"
                  stroke="#008AFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="bg-blue  p-4">
              <svg
                width="17"
                height="13"
                viewBox="0 0 17 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.5H16"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5693 1L16.0004 6.5L10.5693 12"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="container grid grid-cols-1 gap-8 lg:gap-20  md:pb-10 lg:grid-cols-3">
          <div className="  flex flex-col items-center mx-12 lg:mx-0">
            <div className="relative  hover:bg-blue py-[40px] px-[38px]  bg-bgColor">
              <p className="pb-[25px]">
                <svg
                  width="43"
                  height="30"
                  viewBox="0 0 43 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.0029 12H33.0029L39.003 1.90735e-06H30.003L24.0029 12V30H42.0029V12Z"
                    fill="#DEE7EE"
                  />
                  <path
                    d="M18 30V12H9L15 1.90735e-06H6.00004L-3.8147e-06 12V30H18Z"
                    fill="#DEE7EE"
                  />
                </svg>
              </p>

              <p className=" py-1 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
              </p>
            </div>

            <div className="flex flex-row  mt-4 space-x-4">
              <img
                src={img1}
                alt=""
                className="w-12 h-12 bg-center bg-cover rounded-full "
              />
              <div>
                <p className="text-lg font-semibold">Jhon Smith</p>
                <p className="text-sm ">Web Developer</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mx-12 lg:mx-0">
            <div className="relative  hover:bg-blue py-[40px] px-[38px]  bg-bgColor">
              <p className="pb-[25px]">
                <svg
                  width="43"
                  height="30"
                  viewBox="0 0 43 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.0029 12H33.0029L39.003 1.90735e-06H30.003L24.0029 12V30H42.0029V12Z"
                    fill="#DEE7EE"
                  />
                  <path
                    d="M18 30V12H9L15 1.90735e-06H6.00004L-3.8147e-06 12V30H18Z"
                    fill="#DEE7EE"
                  />
                </svg>
              </p>

              <p className=" py-1 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
              </p>
            </div>

            <div className="flex flex-row  mt-4 space-x-4">
              <img
                src={img2}
                alt=""
                className="w-12 h-12 bg-center bg-cover rounded-full "
              />
              <div>
                <p className="text-lg font-semibold">Jhon Smith</p>
                <p className="text-sm ">Web Developer</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mx-12 lg:mx-0">
            <div className="relative  hover:bg-blue py-[40px] px-[38px]  bg-bgColor">
              <p className="pb-[25px]">
                <svg
                  width="43"
                  height="30"
                  viewBox="0 0 43 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.0029 12H33.0029L39.003 1.90735e-06H30.003L24.0029 12V30H42.0029V12Z"
                    fill="#DEE7EE"
                  />
                  <path
                    d="M18 30V12H9L15 1.90735e-06H6.00004L-3.8147e-06 12V30H18Z"
                    fill="#DEE7EE"
                  />
                </svg>
              </p>

              <p className=" py-1 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
              </p>
            </div>

            <div className="flex flex-row  mt-4 space-x-4">
              <img
                src={img3}
                alt=""
                className="w-12 h-12 bg-center bg-cover rounded-full "
              />
              <div>
                <p className="text-lg font-semibold">Jhon Smith</p>
                <p className="text-sm ">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
