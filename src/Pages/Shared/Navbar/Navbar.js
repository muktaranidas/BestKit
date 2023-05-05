import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import logo from "../../../assets/Navbar/Logo.png";

const Navbar = ({ btnText }) => {
  return (
    // <div className="navbar-bg sticky top-0  z-[999]">
    <div className="navbar-bg ">
      <div className="widthClass  pr-12 lg:pr-0  navbar  mx-auto pt-[49px] ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content  shadow bg-base-100 rounded-box w-52"
            >
              <li className="nav-link">Home</li>
              <li className="nav-link">About</li>
              <li className="nav-link">Services</li>
              <li className="nav-link">Case Study</li>
              <li className="nav-link">Blog</li>
            </ul>
          </div>
          <a href="#" className="">
            <img src={logo} alt="" className="w-4/3 lg:w-full" />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal grid-">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link ">
              About
            </a>
            <a href="#" className="nav-link">
              Services
            </a>
            <a href="#" className="nav-link">
              Case Study
            </a>
            <a href="#" className="nav-link blog">
              Blog
            </a>
          </div>
        </div>

        <div className="navbar-end">
          <Button btnText={"Contact Us"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
