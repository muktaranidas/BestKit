import React from "react";

const AboutBtnDescription = ({ description, btn }) => {
  const { text } = description;
  return (
    <div className={`${btn === description.role ? "block" : "hidden"}`}>
      <p className="paragraph-normal-tag w-[645px]">{text}</p>
    </div>
  );
};

export default AboutBtnDescription;
