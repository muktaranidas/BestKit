import React from "react";
import img from "../../../assets/Skill/charming-blonde-employee-having-fun-with-colleagues-posing-photo-light-room-team-it-specialists-ended-big-hard-business-project-shaking-hands 1.jpg";
import "./OurSkill.css";

const OurSkill = () => {
  return (
    <section className="">
      <div className=" flex flex-col my-[140px]  lg:flex-row">
        <div className="flex ">
          <img
            src={img}
            alt=""
            className="object-contain h-72  sm:h-80 lg:h-[751px] xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center mx-[100px] rounded-sm  lg:text-left">
          <p className="paragraph-style-tag">Our Skill</p>
          <h1 className="title">
            We Aim to Share Knowledge, <br />
            <span className="">Attract Talent & Startups</span>
          </h1>
          <p className="paragraph-normal-tag mb-[50px]">
            We design & build brand, campaigns & digital projects for business{" "}
            <br />
            large & small with customer experiences.
          </p>
          <div className="flex flex-row skills-ul  sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <ul className="w-full">
              <li className="business-consulting li-style mb-8">
                Business Consulting
              </li>
              <li className="business-startup li-style my-8 ">
                Business Startup
              </li>
              <li className="marketing-analysis li-style mt-8 ">
                Marketing Analysis
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSkill;
