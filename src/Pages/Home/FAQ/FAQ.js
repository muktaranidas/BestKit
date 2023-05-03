import React from "react";
import Button from "../../Shared/Button/Button";
import "./FAQ.css";

const FAQ = () => {
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
          <div className="bg-white   p-[35px]">
            <div className="flex flex-row  justify-between">
              <p className=" outline-none cursor-pointer tab-title ">
                Professional & Experienced Team Member
              </p>
              <button>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 6V0H6V6H0V8H6V14H8V8H14V6H8Z"
                    fill="#222D39"
                  />
                </svg>
              </button>
            </div>
            {/* <div className="pt-[25px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                neque in fugiat magni, quas animi enim veritatis deleniti ex.
                Impedit.
              </p>
            </div> */}
          </div>
          <div className="bg-white   p-[35px]">
            <div className="flex flex-row  justify-between">
              <p className=" outline-none cursor-pointer tab-title ">
                Professional & Experienced Team Member
              </p>
              <button>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 6V0H6V6H0V8H6V14H8V8H14V6H8Z"
                    fill="#222D39"
                  />
                </svg>
              </button>
            </div>
            {/* <div className="pt-[25px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                neque in fugiat magni, quas animi enim veritatis deleniti ex.
                Impedit.
              </p>
            </div> */}
          </div>
          <div className="bg-white   p-[35px]">
            <div className="flex flex-row  justify-between">
              <p className=" outline-none cursor-pointer tab-title ">
                Professional & Experienced Team Member
              </p>
              <button>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 6V0H6V6H0V8H6V14H8V8H14V6H8Z"
                    fill="#222D39"
                  />
                </svg>
              </button>
            </div>
            {/* <div className="pt-[25px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                neque in fugiat magni, quas animi enim veritatis deleniti ex.
                Impedit.
              </p>
            </div> */}
          </div>
          <div className="bg-white   p-[35px]">
            <div className="flex flex-row  justify-between">
              <p className=" outline-none cursor-pointer tab-title ">
                Professional & Experienced Team Member
              </p>
              <button>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 6V0H6V6H0V8H6V14H8V8H14V6H8Z"
                    fill="#222D39"
                  />
                </svg>
              </button>
            </div>
            {/* <div className="pt-[25px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                neque in fugiat magni, quas animi enim veritatis deleniti ex.
                Impedit.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
