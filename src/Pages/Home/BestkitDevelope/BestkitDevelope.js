import React from "react";
import bg from "../../../assets/BestkitDevelope/bg.png";
import img from "../../../assets/BestkitDevelope/img.png";
import Button from "../../Shared/Button/Button";

const BestkitDevelope = () => {
  return (
    <div className=" bg-bgColor my-8">
      <div className=" widthClass hero-content  grid grid-cols-2 gap-2 mx-auto justify-between">
        <div className="">
          <h1 className="text-5xl font-bold">
            Bestkit Develope Creative Solutions for Companies of All Niches
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <Button btnText={"Get Started Now"}></Button>
        </div>{" "}
        <img src={img} alt="" className="ml-72" />
      </div>
    </div>
  );
};

export default BestkitDevelope;
