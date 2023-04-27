import React from "react";
import "./Footer.css";
import Bestkit from "../BestKit/Bestkit";

const Footer = () => {
  return (
    <footer className="px-4  bg-[#222D39] text-white">
      <div className="widthClass  flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div className="flex flex-col space-y-4">
            <Bestkit></Bestkit>
            <p className=" text-[#ADB7C2] ">
              Bring a best development experience <br /> to designers and
              developers by offer <br /> the tools needed for having a quicks{" "}
              <br />
              and most web projects.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
          <div className="space-y-3">
            <h3 className="tracking-wide  dark:text-gray-50">About Company</h3>
            <div className="flex flex-row space-x-12 ">
              <ul className="space-y-1  text-[#ADB7C2] ">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Service
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Careers
                  </a>
                </li>
              </ul>
              <ul className="space-y-1  text-[#ADB7C2] ">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Works
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Resources
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    New
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-3 ">
            <h3 className="tracking-wide  dark:text-gray-50">Account</h3>
            <ul className="space-y-1 text-[#ADB7C2] ">
              <li>
                <a rel="noopener noreferrer" href="#">
                  profile
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Setting
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Billing
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Notifications
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className=" dark:text-gray-50">Get In Touch</h3>
            <ul className="space-y-1 text-[#ADB7C2] text-sm">
              <li className="flex flex-row space-x-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_6835)">
                    <path
                      d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                      stroke="#ADB7C2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 4.5V9L12 10.5"
                      stroke="#ADB7C2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_6835">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <a rel="noopener noreferrer" href="#">
                  Sun-Fri: 9:00-5:00
                </a>
              </li>
              <li className="flex flex-row space-x-2">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_6840)">
                    <path
                      d="M3.74493 3H15.7513C16.5767 3 17.2521 3.675 17.2521 4.5V13.5C17.2521 14.325 16.5767 15 15.7513 15H3.74493C2.9195 15 2.24414 14.325 2.24414 13.5V4.5C2.24414 3.675 2.9195 3 3.74493 3Z"
                      stroke="#ADB7C2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.2521 4.5L9.74811 9.75L2.24414 4.5"
                      stroke="#ADB7C2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_6840">
                      <rect
                        width="18.0095"
                        height="18"
                        fill="white"
                        transform="translate(0.744141)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <a rel="noopener noreferrer" href="#">
                  info@example.com
                </a>
              </li>
              <li className="flex flex-row space-x-2">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_6850)">
                    <path
                      d="M14.001 1.75L17.0026 4.75L14.001 7.75"
                      stroke="#ADB7C2"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 4.75H17.0032"
                      stroke="#ADB7C2"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.2521 12.6901V14.9401C17.253 15.1489 17.2101 15.3557 17.1264 15.5471C17.0427 15.7385 16.9199 15.9103 16.7659 16.0515C16.6119 16.1927 16.4301 16.3002 16.2321 16.3671C16.0342 16.434 15.8244 16.4589 15.6162 16.4401C13.3071 16.1893 11.0891 15.4007 9.14031 14.1376C7.32723 12.9861 5.79005 11.4497 4.63793 9.63757C3.36975 7.68098 2.58053 5.45332 2.33422 3.13507C2.31546 2.92767 2.34013 2.71864 2.40663 2.52129C2.47313 2.32394 2.58002 2.14259 2.72049 1.98879C2.86097 1.83499 3.03194 1.7121 3.22253 1.62796C3.41312 1.54382 3.61915 1.50027 3.82751 1.50007H6.0787C6.44287 1.49649 6.79592 1.62538 7.07204 1.86272C7.34817 2.10006 7.52852 2.42966 7.57949 2.79007C7.67451 3.51012 7.85072 4.21712 8.10477 4.89757C8.20573 5.16602 8.22758 5.45776 8.16773 5.73823C8.10788 6.01871 7.96884 6.27616 7.76709 6.48007L6.81408 7.43257C7.88232 9.31023 9.43781 10.8649 11.3165 11.9326L12.2695 10.9801C12.4735 10.7784 12.7311 10.6395 13.0117 10.5796C13.2923 10.5198 13.5842 10.5417 13.8528 10.6426C14.5336 10.8965 15.241 11.0726 15.9614 11.1676C16.3259 11.219 16.6588 11.4025 16.8968 11.6832C17.1348 11.9639 17.2612 12.3223 17.2521 12.6901Z"
                      stroke="#ADB7C2"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_6850">
                      <rect
                        width="18.0095"
                        height="18"
                        fill="white"
                        transform="translate(0.744141)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <a rel="noopener noreferrer" href="#">
                  0834 3849 9200
                </a>
              </li>
              <li className="flex flex-row space-x-2">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.7525 7.54545C16.7525 12.6364 9.74882 17 9.74882 17C9.74882 17 2.74512 12.6364 2.74512 7.54545C2.74512 5.80949 3.48301 4.14463 4.79645 2.91712C6.1099 1.68961 7.89132 1 9.74882 1C11.6063 1 13.3877 1.68961 14.7012 2.91712C16.0146 4.14463 16.7525 5.80949 16.7525 7.54545Z"
                    stroke="#ADB7C2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.74924 9.75C10.9925 9.75 12.0004 8.74264 12.0004 7.5C12.0004 6.25736 10.9925 5.25 9.74924 5.25C8.50594 5.25 7.49805 6.25736 7.49805 7.5C7.49805 8.74264 8.50594 9.75 9.74924 9.75Z"
                    stroke="#ADB7C2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <a rel="noopener noreferrer" href="#">
                  16/A New York, USA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="widthClass mx-auto" />
      <div className="widthClass mx-auto flex flex-row justify-between py-2">
        <div className="flex flex-row space-x-4 ">
          <span>
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.71875 9L9.15625 6.125H6.375V4.25C6.375 3.4375 6.75 2.6875 8 2.6875H9.28125V0.21875C9.28125 0.21875 8.125 0 7.03125 0C4.75 0 3.25 1.40625 3.25 3.90625V6.125H0.6875V9H3.25V16H6.375V9H8.71875Z"
                fill="#ADB7C2"
              />
            </svg>
          </span>
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0.25C3.71875 0.25 0.25 3.75 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.25 15.75 15.75 12.2812 15.75 8C15.75 3.75 12.25 0.25 8 0.25ZM13.0938 3.84375C14.0312 4.96875 14.5938 6.40625 14.5938 7.96875C14.375 7.90625 12.1875 7.46875 10 7.75C9.8125 7.3125 9.65625 6.9375 9.40625 6.4375C11.875 5.4375 12.9688 4.03125 13.0938 3.84375ZM12.375 3.0625C12.25 3.25 11.25 4.59375 8.90625 5.46875C7.8125 3.46875 6.625 1.84375 6.4375 1.59375C8.53125 1.09375 10.75 1.625 12.375 3.0625ZM5.15625 2.03125C5.34375 2.28125 6.53125 3.90625 7.625 5.875C4.53125 6.6875 1.8125 6.6875 1.5 6.65625C1.9375 4.625 3.3125 2.90625 5.15625 2.03125ZM1.375 8.03125C1.375 7.96875 1.375 7.90625 1.375 7.8125C1.65625 7.84375 4.875 7.875 8.15625 6.875C8.375 7.25 8.53125 7.625 8.71875 8C6.3125 8.6875 4.125 10.625 3.0625 12.4375C2 11.2812 1.375 9.71875 1.375 8.03125ZM3.90625 13.25C4.625 11.8438 6.5 10 9.15625 9.09375C10.0938 11.5 10.4688 13.5312 10.5625 14.125C8.4375 15.0312 5.875 14.7812 3.90625 13.25ZM11.6875 13.5C11.625 13.125 11.25 11.1875 10.4062 8.78125C12.4688 8.46875 14.2812 9 14.5312 9.0625C14.2188 10.9062 13.1562 12.5 11.6875 13.5Z"
                fill="#ADB7C2"
              />
            </svg>
          </span>
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.15625 12.4375C5.15625 12.375 5.09375 12.3125 5 12.3125C4.90625 12.3125 4.84375 12.375 4.84375 12.4375C4.84375 12.5 4.90625 12.5625 5 12.5312C5.09375 12.5312 5.15625 12.5 5.15625 12.4375ZM4.1875 12.2812C4.1875 12.3438 4.25 12.4375 4.34375 12.4375C4.40625 12.4688 4.5 12.4375 4.53125 12.375C4.53125 12.3125 4.5 12.25 4.40625 12.2188C4.3125 12.1875 4.21875 12.2188 4.1875 12.2812ZM5.59375 12.25C5.5 12.25 5.4375 12.3125 5.4375 12.4062C5.4375 12.4688 5.53125 12.5 5.625 12.4688C5.71875 12.4375 5.78125 12.4062 5.75 12.3438C5.75 12.2812 5.65625 12.2188 5.59375 12.25ZM7.625 0.25C3.3125 0.25 0 3.5625 0 7.875C0 11.3438 2.15625 14.3125 5.28125 15.375C5.6875 15.4375 5.8125 15.1875 5.8125 15C5.8125 14.7812 5.8125 13.7188 5.8125 13.0625C5.8125 13.0625 3.625 13.5312 3.15625 12.125C3.15625 12.125 2.8125 11.2188 2.3125 11C2.3125 11 1.59375 10.5 2.34375 10.5C2.34375 10.5 3.125 10.5625 3.5625 11.3125C4.25 12.5312 5.375 12.1875 5.84375 11.9688C5.90625 11.4688 6.09375 11.125 6.34375 10.9062C4.59375 10.7188 2.8125 10.4688 2.8125 7.46875C2.8125 6.59375 3.0625 6.1875 3.5625 5.625C3.46875 5.40625 3.21875 4.59375 3.65625 3.5C4.28125 3.3125 5.8125 4.34375 5.8125 4.34375C6.4375 4.15625 7.09375 4.09375 7.75 4.09375C8.4375 4.09375 9.09375 4.15625 9.71875 4.34375C9.71875 4.34375 11.2188 3.28125 11.875 3.5C12.3125 4.59375 12.0312 5.40625 11.9688 5.625C12.4688 6.1875 12.7812 6.59375 12.7812 7.46875C12.7812 10.4688 10.9375 10.7188 9.1875 10.9062C9.46875 11.1562 9.71875 11.625 9.71875 12.375C9.71875 13.4062 9.6875 14.7188 9.6875 14.9688C9.6875 15.1875 9.84375 15.4375 10.25 15.3438C13.375 14.3125 15.5 11.3438 15.5 7.875C15.5 3.5625 11.9688 0.25 7.625 0.25ZM3.03125 11.0312C2.96875 11.0625 3 11.1562 3.03125 11.2188C3.09375 11.25 3.15625 11.2812 3.21875 11.25C3.25 11.2188 3.25 11.125 3.1875 11.0625C3.125 11.0312 3.0625 11 3.03125 11.0312ZM2.6875 10.7812C2.65625 10.8438 2.6875 10.875 2.75 10.9062C2.8125 10.9375 2.875 10.9375 2.90625 10.875C2.90625 10.8438 2.875 10.8125 2.8125 10.7812C2.75 10.75 2.71875 10.75 2.6875 10.7812ZM3.6875 11.9062C3.65625 11.9375 3.65625 12.0312 3.75 12.0938C3.8125 12.1562 3.90625 12.1875 3.9375 12.125C3.96875 12.0938 3.96875 12 3.90625 11.9375C3.84375 11.875 3.75 11.8438 3.6875 11.9062ZM3.34375 11.4375C3.28125 11.4688 3.28125 11.5625 3.34375 11.625C3.40625 11.6875 3.46875 11.7188 3.53125 11.6875C3.5625 11.6562 3.5625 11.5625 3.53125 11.5C3.46875 11.4375 3.40625 11.4062 3.34375 11.4375Z"
                fill="#ADB7C2"
              />
            </svg>
          </span>
          <span>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3438 3.75C14.9688 3.28125 15.5312 2.71875 15.9688 2.0625C15.4062 2.3125 14.75 2.5 14.0938 2.5625C14.7812 2.15625 15.2812 1.53125 15.5312 0.75C14.9062 1.125 14.1875 1.40625 13.4688 1.5625C12.8438 0.90625 12 0.53125 11.0625 0.53125C9.25 0.53125 7.78125 2 7.78125 3.8125C7.78125 4.0625 7.8125 4.3125 7.875 4.5625C5.15625 4.40625 2.71875 3.09375 1.09375 1.125C0.8125 1.59375 0.65625 2.15625 0.65625 2.78125C0.65625 3.90625 1.21875 4.90625 2.125 5.5C1.59375 5.46875 1.0625 5.34375 0.625 5.09375V5.125C0.625 6.71875 1.75 8.03125 3.25 8.34375C3 8.40625 2.6875 8.46875 2.40625 8.46875C2.1875 8.46875 2 8.4375 1.78125 8.40625C2.1875 9.71875 3.40625 10.6562 4.84375 10.6875C3.71875 11.5625 2.3125 12.0938 0.78125 12.0938C0.5 12.0938 0.25 12.0625 0 12.0312C1.4375 12.9688 3.15625 13.5 5.03125 13.5C11.0625 13.5 14.3438 8.53125 14.3438 4.1875C14.3438 4.03125 14.3438 3.90625 14.3438 3.75Z"
                fill="#ADB7C2"
              />
            </svg>
          </span>
        </div>
        <p>© 2020 bestkit. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
