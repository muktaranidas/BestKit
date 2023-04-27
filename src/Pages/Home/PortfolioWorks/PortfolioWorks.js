import React from "react";
import img1 from "../../../assets/Portfolio/img1.png";
import img2 from "../../../assets/Portfolio/img2.png";
import img3 from "../../../assets/Portfolio/img3.png";
import img4 from "../../../assets/Portfolio/img4.png";
import Button from "../../Shared/Button/Button";

const PortfolioWorks = () => {
  return (
    <div>
      <section className=" dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-4 mx-auto space-y-8 sm:p-10">
          <div className="space-y-4 text-center">
            <p className=" text-blue">Portfolio Works</p>
            <h3 className="text-2xl font-bold leading-none sm:text-5xl">
              Some of My Latest Projects
            </h3>
          </div>

          <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
              <div className="flex">
                <ul className="items-stretch hidden space-x-3 lg:flex">
                  <li className="flex font-bold">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center px-4 -mb-1  dark:border-transparent"
                    >
                      Filter by:
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center px-4 -mb-1  dark:border-transparent dark:text-violet-400 dark:border-violet-400"
                    >
                      All
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center px-4 -mb-1  dark:border-transparent"
                    >
                      Development
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center px-4 -mb-1  dark:border-transparent"
                    >
                      Design
                    </a>
                  </li>
                  <li className="flex">
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
                <Button btnText={"See More Work"}>Log in</Button>
              </div>
              <button className="p-4 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </header>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col ">
              <img
                alt=""
                className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                src={img1}
              />
              <div className="flex flex-col">
                <p className="text-sm py-2 dark:text-gray-400">Web developer</p>
                <h4 className="text-xl font-semibold">
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
                <p className="text-sm py-2 dark:text-gray-400">Web developer</p>
                <h4 className="text-xl font-semibold">
                  Quillow Learning Platform Dashboard
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
                <p className="text-sm py-2 dark:text-gray-400">Web developer</p>
                <h4 className="text-xl font-semibold">
                  Quillow Learning Platform Dashboard
                </h4>
              </div>
            </div>
            <div className="flex flex-col ">
              <img
                alt=""
                className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                src={img4}
              />
              <div className="flex flex-col">
                <p className="text-sm py-2 dark:text-gray-400">Web developer</p>
                <h4 className="text-xl font-semibold">
                  Quillow Learning Platform Dashboard
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioWorks;
