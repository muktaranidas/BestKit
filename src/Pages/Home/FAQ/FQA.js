import React, { useState } from "react";

const FQA = ({ descriptionitem }) => {
  const { id, title, description } = descriptionitem;

  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-white  px-[35px] pt-[25px] pb-[35px]">
      <div className="flex flex-row  justify-between">
        <p className=" outline-none cursor-pointer tab-title ">{title}</p>
        <button onClick={() => handleToggle(id)}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 6V0H6V6H0V8H6V14H8V8H14V6H8Z"
              fill="#222D39"
            />
          </svg>
        </button>
      </div>
      <div className={` description`}>
        {openIndex === id && <p>{description}</p>}
      </div>
    </div>
  );
};

export default FQA;
