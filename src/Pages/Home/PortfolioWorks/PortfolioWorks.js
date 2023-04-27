import React from "react";
import img1 from "../../../assets/Portfolio/img1.png";
import img2 from "../../../assets/Portfolio/img2.png";
import img3 from "../../../assets/Portfolio/img3.png";
import img4 from "../../../assets/Portfolio/img4.png";

const PortfolioWorks = () => {
  return (
    <div>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-4 mx-auto space-y-16 sm:p-10">
          <div className="space-y-4 text-center">
            <p className=" text-blue">Portfolio Works</p>
            <h3 className="text-2xl font-bold leading-none sm:text-5xl">
              Some of My Latest Projects
            </h3>
          </div>
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
