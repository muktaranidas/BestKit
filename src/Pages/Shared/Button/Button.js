import React from "react";

const Button = ({ btnText }) => {
  return (
    <a
      href=""
      className="btn rounded-sm bg-[#008AFF] h-[20px]  lg:h-[55px] px-[15px] pt-[6px] pb-[6px] lg:px-[30px] lg:pt-[18px] lg:pb-[15px]   border-none"
    >
      {btnText}
      <span className="pl-3.5">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13L7 7L1 1"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </a>
  );
};

export default Button;
