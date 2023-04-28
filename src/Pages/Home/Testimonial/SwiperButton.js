import React from "react";
import { useSwiper } from "swiper/react";

const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <div className="pt-16 ">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-bgColor space-x-2 p-4"
      >
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
      <button onClick={() => swiper.slideNext()} className="bg-blue  p-4">
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
  );
};

export default SwiperButton;
