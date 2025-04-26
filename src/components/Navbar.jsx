import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/blue.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To track if the menu is open
  const location = useLocation(); // To get the current location
  const darkNavLocations = ["/privacy", "/terms", "/other-dark-page"]; // Define dark location routes

  // Check if the current location is in the darkNavLocations array
  const isDarkLocation = darkNavLocations.includes(location.pathname);

  const navItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 1.2, ease: "easeOut" },
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state of the menu
  };

  return (
    <>
      <div className="absolute overflow-hidden z-10 top-0 left-0 w-full flex items-center justify-between p-6 lg:p-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex items-center space-x-3"
        >
          <Link to="/" className="w-12 h-12">
            <img src={logo} alt="logo" className="w-full h-full" />
          </Link>
          {/* <div className=" text-sm md:text-lg bluet hidden md:block">
            <h1 className="uppercase font-bold">EARTH</h1>
            <h1 className="uppercase font-bold">FARERS</h1>
            {/* <h1 className="uppercase font-bold">EXIM</h1>
          </div> */}
        </motion.div>

        {/* Right Navbar Links */}
        <div
          className={`hidden items-center lg:flex space-x-8 text-lg font-medium ${
            isDarkLocation ? "text-black" : "text-white"
          }`}
        >
          <Link
            to="/"
            className={`hover:text-gray-200 transition-all ${
              isDarkLocation ? "hover:text-gray-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-gray-200 transition-all ${
              isDarkLocation ? "hover:text-gray-500" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/products"
            className={`hover:text-gray-200 transition-all ${
              isDarkLocation ? "hover:text-gray-500" : ""
            }`}
          >
            Products
          </Link>
          <Link
            to="/blog"
            className={`hover:text-gray-200 transition-all ${
              isDarkLocation ? "hover:text-gray-500" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`bluex py-1.5 text-md px-4 rounded-2xl transition lg:mx-0 ${
              isDarkLocation ? "text-white bg-black" : ""
            }`}
          >
            Contact us
          </Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          <div className="w-8 h-8 flex flex-col justify-around items-center space-y-1 cursor-pointer">
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
            <div className="w-full h-1 bg-white"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[600] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`bg-white text-black w-3/4 h-full p-6 transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <div onClick={toggleMenu} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col  space-y-6 text-2xl">
          <Link to="/" className="w-12 h-12">
            <img src={logo} alt="logo" className="w-full h-full" />
          </Link>
            <Link
              to="/"
              className="text-black font-semibold uppercase hover:text-gray-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black font-semibold uppercase hover:text-gray-600"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-black font-semibold uppercase hover:text-gray-600"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/blog"
              className="text-black font-semibold uppercase hover:text-gray-600"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-black font-semibold uppercase hover:text-gray-600"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
