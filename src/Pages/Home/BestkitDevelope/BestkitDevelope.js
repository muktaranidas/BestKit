import React from "react";
import bgImg from "../../../assets/BestkitDevelope/Bg.jpg";
import Button from "../../Shared/Button/Button";

const BestkitDevelope = () => {
  return (
    <div
      className=""
      style={{ background: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <div className="text-black"></div>
      <div className="widthClass  mx-auto ">
        <div className=" py-20">
          <h1 className="mb-8 text-2xl font-bold">
            Bestkit Develope Creative Solutions <br />
            <span>for Companies of All Niches</span>
          </h1>
          <p className="mb-8 w-[665px]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button btnText="Get Started Now"></Button>
        </div>
      </div>
    </div>
  );
};

export default BestkitDevelope;
