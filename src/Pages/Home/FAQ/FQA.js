import React, { useState } from "react";

const FQA = ({ descriptionitem }) => {
  const { id, title, description } = descriptionitem;

  const [click, setClick] = useState(-1);

  const handleDescription = (id) => {
    setClick((prevState) => (prevState === id ? -1 : id));
  };

  return (
    <div className="bg-white   p-[35px]">
      <div className="flex flex-row  justify-between">
        <p className=" outline-none cursor-pointer tab-title ">{title}</p>
        <button onClick={() => handleDescription(id)}>
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
      <div className={`pt-[25px] `}>{click === id && <p>{description}</p>}</div>
    </div>
  );
};

export default FQA;
