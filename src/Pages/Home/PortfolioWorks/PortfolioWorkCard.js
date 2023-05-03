import React from "react";

const PortfolioWorkCard = ({ project, post }) => {
  const { img, position, title, role } = project;
  return (
    <div
      className={`flex flex-col  ${
        post === "All" ? "block" : role === post ? "block" : "hidden"
      }`}
    >
      <img
        alt=""
        className="flex-1  flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
        src={img}
      />
      <div className="flex flex-col">
        <p className="paragraph-normal-tag">{position}</p>
        <h4 className="portfolio-h2">{title}</h4>
      </div>
    </div>
  );
};

export default PortfolioWorkCard;
