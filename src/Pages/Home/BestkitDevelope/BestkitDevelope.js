import React from "react";
import bgImg from "../../../assets/BestkitDevelope/Bg.jpg";
import Button from "../../Shared/Button/Button";

const BestkitDevelope = () => {
  return (
    <div
      className="my-[140px] "
      style={{ background: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <div className="widthClass   py-[140px]">
        <h1 className="title">
          Bestkit Develope Creative Solutions <br />
          for Companies of All Niches
        </h1>
        <p className="w-[665px] paragraph-normal-tag pb-[50px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <Button btnText="Get Started Now"></Button>
      </div>
    </div>
  );
};

export default BestkitDevelope;
