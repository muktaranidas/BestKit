import React from "react";
import img from "../../../assets/Skill/charming-blonde-employee-having-fun-with-colleagues-posing-photo-light-room-team-it-specialists-ended-big-hard-business-project-shaking-hands 1.jpg";
import "./OurSkill.css";

const OurSkill = () => {
  return (
    <section className="">
      <div className=" flex flex-col py-6 space-x-24  sm:py-12 lg:py-24 lg:flex-row">
        <div className="flex items-c justify-center  py-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={img}
            alt=""
            className="object-contain h-72  sm:h-80 lg:h-[751px] xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col my-44 py-6 text-center rounded-sm  lg:text-left">
          <p className="uppercase text-blue  pb-[10px] font-semibold">
            Our Skill
          </p>
          <h1 className="text-6xl font-semibold lg:text-3xl">
            We Aim to Share Knowledge, <br />
            <span className="">Attract Talent & Startups</span>
          </h1>
          <p className="mt-6   text-lg sm:mb-12">
            We design & build brand, campaigns & digital projects for business{" "}
            <br />
            large & small with customer experiences.
          </p>
          <div className="flex flex-row skills-ul  sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <ul className="w-full">
              <li className="business-consulting mb-8">Business Consulting</li>
              <li className="business-startup my-8 ">Business Startup</li>
              <li className="marketing-analysis mt-8 ">Marketing Analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSkill;
