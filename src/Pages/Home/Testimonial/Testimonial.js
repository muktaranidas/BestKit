import React, { useState } from "react";
import Button from "../../Shared/Button/Button";
import img1 from "../../../assets/Testimonial/1.jpg";
import img2 from "../../../assets/Testimonial/2.jpg";
import img3 from "../../../assets/Testimonial/3.jpg";
import "./Testimonial.css";
import Slider from "./Slider";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  const [btn, setBtn] = useState("");
  console.log(btn);

  function myFunction(text) {
    setBtn(text);
  }
  return (
    <section className="bgWhite my-[140px]">
      <div className=" widthClass ">
        <div className=" flex flex-row justify-between">
          <div className="relative">
            <p className="paragraph-style-tag">Testimonial</p>
            <h1 className="title">
              See What Others Have <br />
              to Say About Us
            </h1>
          </div>
          <div className="pt-16 space-x-5">
            <button className="bg-bgColor  p-4 prev">
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
            <button className="bg-blue  p-4 next">
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
        {/* container grid pt-[64px] justify-center grid-cols-1 gap-[30px] lg:grid-cols-3 */}
        <div className="">
          <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={{ prevEl: ".prev", nextEl: ".next" }}
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="  flex flex-col  ">
                <div className="relative  h-[246.77px]  text-[#F7F9FC]  hover:text-blue ">
                  <div className="absolute  z-[-5]">
                    <svg
                      // width="400"
                      height="266"
                      viewBox="0 0 420 266"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 0C1.34315 0 0 1.34314 0 3V243.774C0 245.431 1.34314 246.774 2.99999 246.774H58.0969L70.9391 265.565C71.3331 266.141 72.1816 266.147 72.583 265.575L85.7893 246.774H417C418.657 246.774 420 245.431 420 243.774V3C420 1.34315 418.657 0 417 0H3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <p className="pb-[25px] pt-[40px] pl-[38px] absolute">
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
                  <p className="customer-say   h-[112px] px-[40px] pt-[95px] pb-[38px]">
                    Lorem Ipsum is a simply dummy text of an the printing and
                    type settings for has been the industry's standard dumy text
                    the ever since unknown printer.
                  </p>
                </div>
                <div className="flex flex-row px-[38px] mt-[39.23px] space-x-4">
                  <img
                    src={img1}
                    alt=""
                    className="w-12 h-12 bg-center bg-cover rounded-full "
                  />
                  <div className="pl-[20px]">
                    <p className="customer-name  pb-[5px]">Jhon Smith</p>
                    <p className="customer-position">Web Developer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="flex flex-col ">
                <div className="relative  h-[246.77px] z-[11] text-[#F7F9FC]  hover:text-blue ">
                  <div className="absolute  z-[-5]">
                    <svg
                      width="420"
                      height="266"
                      viewBox="0 0 420 266"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 0C1.34315 0 0 1.34314 0 3V243.774C0 245.431 1.34314 246.774 2.99999 246.774H58.0969L70.9391 265.565C71.3331 266.141 72.1816 266.147 72.583 265.575L85.7893 246.774H417C418.657 246.774 420 245.431 420 243.774V3C420 1.34315 418.657 0 417 0H3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <p className="pb-[25px] pt-[40px] pl-[38px] absolute">
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
                  <p className="customer-say px-[40px] pt-[95px] pb-[38px]">
                    Lorem Ipsum is a simply dummy text of an the printing and
                    type settings for has been the industry's standard dumy text
                    the ever since unknown printer.
                  </p>
                </div>

                <div className="flex px-[38px] mt-[39.23px] flex-row  mt-4 space-x-4">
                  <img
                    src={img2}
                    alt=""
                    className="w-12 h-12 bg-center bg-cover rounded-full "
                  />
                  <div className="pl-[20px]">
                    <p className="customer-name  pb-[5px]">Md Shamim Hossain</p>
                    <p className="customer-position">UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col  ">
                <div className="relative  h-[246.77px] z-[11] text-[#F7F9FC]  hover:text-blue ">
                  <div className="absolute  z-[-5]">
                    <svg
                      width="420"
                      height="266"
                      viewBox="0 0 420 266"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 0C1.34315 0 0 1.34314 0 3V243.774C0 245.431 1.34314 246.774 2.99999 246.774H58.0969L70.9391 265.565C71.3331 266.141 72.1816 266.147 72.583 265.575L85.7893 246.774H417C418.657 246.774 420 245.431 420 243.774V3C420 1.34315 418.657 0 417 0H3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <p className="pb-[25px] pt-[40px] pl-[38px] absolute">
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
                  <p className="customer-say px-[40px] pt-[95px] pb-[38px]">
                    Lorem Ipsum is a simply dummy text of an the printing and
                    type settings for has been the industry's standard dumy text
                    the ever since unknown printer.
                  </p>
                </div>

                <div className="flex px-[38px] mt-[39.23px] flex-row  mt-4 space-x-4">
                  <img
                    src={img3}
                    alt=""
                    className="w-12 h-12 bg-center bg-cover rounded-full "
                  />
                  <div className="pl-[20px]">
                    <p className="customer-name  pb-[5px] ">Jesica Lirona</p>
                    <p className="customer-position">Front End Developer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  flex flex-col  ">
                <div className="relative  h-[246.77px]  text-[#F7F9FC]  hover:text-blue ">
                  <div className="absolute  z-[-5]">
                    <svg
                      // width="400"
                      height="266"
                      viewBox="0 0 420 266"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 0C1.34315 0 0 1.34314 0 3V243.774C0 245.431 1.34314 246.774 2.99999 246.774H58.0969L70.9391 265.565C71.3331 266.141 72.1816 266.147 72.583 265.575L85.7893 246.774H417C418.657 246.774 420 245.431 420 243.774V3C420 1.34315 418.657 0 417 0H3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <p className="pb-[25px] pt-[40px] pl-[38px] absolute">
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
                  <p className="customer-say   h-[112px] px-[40px] pt-[95px] pb-[38px]">
                    Lorem Ipsum is a simply dummy text of an the printing and
                    type settings for has been the industry's standard dumy text
                    the ever since unknown printer.
                  </p>
                </div>
                <div className="flex flex-row px-[38px] mt-[39.23px] space-x-4">
                  <img
                    src={img1}
                    alt=""
                    className="w-12 h-12 bg-center bg-cover rounded-full "
                  />
                  <div className="pl-[20px]">
                    <p className="customer-name  pb-[5px]">Jhon Smith</p>
                    <p className="customer-position">Web Developer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="flex flex-col ">
                <div className="relative  h-[246.77px] z-[11] text-[#F7F9FC]  hover:text-blue ">
                  <div className="absolute  z-[-5]">
                    <svg
                      width="420"
                      height="266"
                      viewBox="0 0 420 266"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 0C1.34315 0 0 1.34314 0 3V243.774C0 245.431 1.34314 246.774 2.99999 246.774H58.0969L70.9391 265.565C71.3331 266.141 72.1816 266.147 72.583 265.575L85.7893 246.774H417C418.657 246.774 420 245.431 420 243.774V3C420 1.34315 418.657 0 417 0H3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <p className="pb-[25px] pt-[40px] pl-[38px] absolute">
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
                  <p className="customer-say px-[40px] pt-[95px] pb-[38px]">
                    Lorem Ipsum is a simply dummy text of an the printing and
                    type settings for has been the industry's standard dumy text
                    the ever since unknown printer.
                  </p>
                </div>

                <div className="flex px-[38px] mt-[39.23px] flex-row  mt-4 space-x-4">
                  <img
                    src={img2}
                    alt=""
                    className="w-12 h-12 bg-center bg-cover rounded-full "
                  />
                  <div className="pl-[20px]">
                    <p className="customer-name  pb-[5px]">Md Shamim Hossain</p>
                    <p className="customer-position">UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col  ">
                <div className="relative  h-[246.77px] z-[11] text-[#F7F9FC]  hover:text-blue ">
                  <div className="absolute  z-[-5]">
                    <svg
                      width="420"
                      height="266"
                      viewBox="0 0 420 266"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 0C1.34315 0 0 1.34314 0 3V243.774C0 245.431 1.34314 246.774 2.99999 246.774H58.0969L70.9391 265.565C71.3331 266.141 72.1816 266.147 72.583 265.575L85.7893 246.774H417C418.657 246.774 420 245.431 420 243.774V3C420 1.34315 418.657 0 417 0H3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <p className="pb-[25px] pt-[40px] pl-[38px] absolute">
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
                  <p className="customer-say px-[40px] pt-[95px] pb-[38px]">
                    Lorem Ipsum is a simply dummy text of an the printing and
                    type settings for has been the industry's standard dumy text
                    the ever since unknown printer.
                  </p>
                </div>

                <div className="flex px-[38px] mt-[39.23px] flex-row  mt-4 space-x-4">
                  <img
                    src={img3}
                    alt=""
                    className="w-12 h-12 bg-center bg-cover rounded-full "
                  />
                  <div className="pl-[20px]">
                    <p className="customer-name  pb-[5px] ">Jesica Lirona</p>
                    <p className="customer-position">Front End Developer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
