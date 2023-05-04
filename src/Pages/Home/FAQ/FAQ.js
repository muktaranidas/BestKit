import React from "react";
import Button from "../../Shared/Button/Button";
import "./FAQ.css";
import FQA from "./FQA";

const FAQ = () => {
  const descriptions = [
    {
      id: 1,
      title: "Professional & Experienced Team Member",
      description:
        "It is a long establshed fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters opposed to using",
    },
    {
      id: 2,
      title: "Professional & Experienced Team Member",
      description:
        "It is a long esblished fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters opposed to using",
    },
    {
      id: 3,
      title: "Professional & Experienced Team Member",
      description:
        "Its a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters opposed to using",
    },
    {
      id: 4,
      title: "Professional & Experienced Team Member",
      description:
        "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters opposed to using",
    },
  ];

  return (
    <section className="bg-bgColor">
      <div className="widthClass py-[140px] container mx-auto grid grid-cols-1 lg:grid-cols-3  ">
        <div className="col-spam-1">
          <p className="paragraph-style-tag">Answer To</p>
          <h2 className="title">
            Frequently Asked <br /> <span>Questions</span>
          </h2>
          <p className="paragraph-normal-tag pb-[40px]">
            There are many variation of passage of lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
          <Button btnText={"Contact Us"}></Button>
        </div>
        <div className="col-span-2  flex flex-col space-y-[30px]  pl-[143px]">
          {descriptions.map((descriptionitem) => (
            <FQA
              key={descriptionitem.id}
              descriptionitem={descriptionitem}
            ></FQA>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
