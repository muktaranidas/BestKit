import React, { useState } from "react";
import img1 from "../../../assets/Portfolio/img1.png";
import img2 from "../../../assets/Portfolio/img2.png";
import img3 from "../../../assets/Portfolio/img3.png";
import img4 from "../../../assets/Portfolio/img4.png";
import Button from "../../Shared/Button/Button";
import "./PortfolioWorks.css";
import PortfolioWorkCard from "./PortfolioWorkCard";
const PortfolioWorks = () => {
  const projects = [
    {
      id: 1,
      img: img1,
      position: "Web Development",
      role: "Development",
      title: "Quillow Learning Platform Dashboard",
    },
    {
      id: 2,
      img: img2,
      position: "Product Development",
      role: "Development",
      title: "Quillow Learning Platform Dashboard",
    },
    {
      id: 3,
      img: img3,
      position: "Web Development",
      role: "Design",
      title: "Quillow Learning Platform Dashboard",
    },
    {
      id: 4,
      img: img4,
      position: "Web Development",
      role: "Branding",
      title: "Quillow Learning Platform Dashboard",
    },
  ];

  const [position, setPosition] = useState("All");

  const handleFilter = (text) => {
    setPosition(text);
  };

  return (
    <div className=" widthClass my-[140px]">
      <div className=" text-center">
        <p className="paragraph-style-tag">Portfolio Works</p>
        <h3 className="title">Some of My Latest Projects</h3>
      </div>

      <header className="mb-[71px]">
        <div className="container flex justify-between mx-auto">
          <div className="flex">
            <ul className="items-stretch hidden space-x-[30px] lg:flex">
              <li className="flex font-bold">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center pr-4 -mb-1  dark:border-transparent"
                >
                  Filter by:
                </a>
              </li>
              <li
                className="flex  portfolio-heading cursor-pointer"
                onClick={() => handleFilter("All")}
              >
                <a
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 -mb-1 ${
                    position === "All" && "text-blue "
                  } `}
                >
                  All
                </a>
              </li>
              <li
                className="flex portfolio-heading cursor-pointer"
                onClick={() => handleFilter("Development")}
              >
                <a
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 -mb-1  dark:border-transparent ${
                    position === "Development" && "text-blue"
                  }`}
                >
                  Development
                </a>
              </li>
              <li
                className="flex portfolio-heading  cursor-pointer"
                onClick={() => handleFilter("Design")}
              >
                <a
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 -mb-1  dark:border-transparent ${
                    position === "Design" && "text-blue"
                  }`}
                >
                  Design
                </a>
              </li>
              <li
                className="flex portfolio-heading cursor-pointer"
                onClick={() => handleFilter("Branding")}
              >
                <a
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 -mb-1  dark:border-transparent ${
                    position === "Branding" && "text-blue"
                  }`}
                >
                  Branding
                </a>
              </li>
            </ul>
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <Button btnText={"See More Work"}></Button>
          </div>
        </div>
      </header>

      <div className="grid  w-full grid-cols-1 gap-[70px] md:grid-cols-2">
        {projects.map((project) => (
          <PortfolioWorkCard
            key={project.id}
            project={project}
            post={position}
          ></PortfolioWorkCard>
        ))}
      </div>
    </div>
  );
};

export default PortfolioWorks;
