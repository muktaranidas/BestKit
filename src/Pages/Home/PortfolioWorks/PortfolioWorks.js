import React from "react";
import img1 from "../../../assets/Portfolio/img1.png";
import img2 from "../../../assets/Portfolio/img2.png";
import img3 from "../../../assets/Portfolio/img3.png";
import img4 from "../../../assets/Portfolio/img4.png";
import Button from "../../Shared/Button/Button";
import "./PortfolioWorks.css";
const PortfolioWorks = () => {
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
              <li className="flex  portfolio-heading">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 "
                >
                  All
                </a>
              </li>
              <li className="flex portfolio-heading">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1  dark:border-transparent"
                >
                  Development
                </a>
              </li>
              <li className="flex portfolio-heading">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1  dark:border-transparent"
                >
                  Design
                </a>
              </li>
              <li className="flex portfolio-heading">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1  dark:border-transparent"
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
        <div className="flex flex-col ">
          <img
            alt=""
            className="flex-1  flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
            src={img1}
          />
          <div className="flex flex-col">
            <p className="paragraph-normal-tag">Web developer</p>
            <h4 className="portfolio-h2">
              Quillow Learning Platform Dashboard
            </h4>
          </div>
        </div>
        <div className="flex flex-col ">
          <img
            alt=""
            className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
            src={img2}
          />
          <div className="flex flex-col">
            <p className="paragraph-normal-tag">Product Development</p>
            <h4 className="portfolio-h2">
              Database Product Platform Dashboard
            </h4>
          </div>
        </div>
        <div className="flex flex-col ">
          <img
            alt=""
            className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
            src={img3}
          />
          <div className="flex flex-col">
            <p className="paragraph-normal-tag">Web developer</p>
            <h4 className="portfolio-h2">Beskit Website Development</h4>
          </div>
        </div>
        <div className="flex flex-col ">
          <img
            alt=""
            className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
            src={img4}
          />
          <div className="flex flex-col">
            <p className="paragraph-normal-tag">Web developer</p>
            <h4 className="portfolio-h2">Bestkit Software Solutions</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioWorks;
