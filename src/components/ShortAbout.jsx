import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/blue.png";
import { MdArrowOutward } from "react-icons/md";


const ShortAbout = () => {
  return (
    <section className="mt-[100px] mb-[100px] py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex text-center">
        <div className="">
          <h2 className="text-5xl font-bold intern text-start text-gray-800 mb-4">
            About Earth Farers
          </h2>
          <p className="text-gray-600 w-10/12 mont text-start text-lg md:text-xl leading-relaxed">
            At Earth Farers, we specialize in providing high-quality
            products from trusted manufacturers worldwide. With a commitment to
            excellence and transparent practices, we meet international
            standards in every trade. Our team’s expertise and dedication allow
            us to adapt to market needs, ensuring timely and reliable solutions
            for our global clients.
          </p>
          <div className="flex items-start mt-5 justify-start">
            <Link
              to="/about"
              className="bg-white bluex py-3 px-6 uppercase rounded-2xl text-white font-semibold  w-fit flex items-center gap-1 hover:shadow-xl transition-shadow lg:mx-0"
            >
              Read more <MdArrowOutward className="inline-block text-2xl" />
            </Link>
          </div>
        </div>

        {/* <img src={logo} alt="logo" className="w-36 h-36 mx-auto mt-10" /> */}
      </div>
    </section>
  );
};

export default ShortAbout;
