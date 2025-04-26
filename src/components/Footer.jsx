import React from "react";
import blue from "../assets/blue.png";
import { Link } from "react-router-dom";
import { FaYoutube, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center py-12 px-6 ">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left section with logo and brand name */}
        <div className="flex items-center gap-4 mb-8 md:mb-0">
          <img src={blue} alt="blue" className="w-32 md:w-48" />
          <div className="text-4xl md:text-7xl bluet">
            <h1 className="uppercase font-bold">EARTH</h1>
            <h1 className="uppercase font-bold">FARERS</h1>
            {/* <h1 className="uppercase font-bold">EXIM</h1> */}
          </div>
        </div>

        {/* Right section with links */}
        <div className="flex flex-col md:px-0 px-4 lg:flex-row gap-6 text-gray-600">
          <div className="flex flex-col md:flex-col text-lg md:text-2xl uppercase font-semibold">
          <div className="flex justify-start md:justify-end items- gap-4 mb-6">   
              <a
                href="https://www.youtube.com/@chrme21456"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-3xl transition-all"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/earth-farers-exim/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl transition-all"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/earthfarers_exim?igsh=MWg4a204M2VsenZvMQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-3xl transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-3xl transition-all"
              >
                <FaFacebook />
              </a>
            </div>
            <Link
              to="/about"
              className=" md:w-full text-start md:text-end mb-2 hover:underline transition-all"
            >
              About Us
            </Link>
            <Link
              to="/products"
              className=" md:w-full mb-2 text-start md:text-end hover:underline  transition-all"
            >
              Products
            </Link>
            
            <Link
              to="/privacy"
              className=" md:w-full mb-2 hover:underline text-start md:text-end transition-all"
            >
              Privacy policy
            </Link>
           
          </div>
        </div>
      </div>

      <hr className="my-6 w-11/12 border-gray-300" />

      {/* Social Media Icons */}

      {/* Bottom section with rights reserved */}
      <div className="max-w-7xl text-center flex flex-col md:flex-row items-center justify-between w-full text-sm text-gray-600">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Earth Farers.
        </p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
