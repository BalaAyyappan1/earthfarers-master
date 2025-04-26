import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetQuote from "../components/GetQuote";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";
import person7 from "../assets/person7.jpg";
import person6 from "../assets/person6.jpeg";
import blue from "../assets/blue.png";
import { IoDiamondOutline } from "react-icons/io5";
import { TbEye } from "react-icons/tb";
import { TbTargetArrow } from "react-icons/tb";
import { RiDoubleQuotesL } from "react-icons/ri";

const people = [
  {
    name: "Christian Meena Edmand",
    role: "Chief Executive Officer",
    image: person3,
    desc: "Visionary leader steering strategic growth and global excellence.",
  },
  {
    name: "Christian Joy",
    role: "Chief Operating Officer",
    image: person7,
    desc: "Oversees operations, driving innovation and seamless workflows.",
  },
  {
    name: "Arumai Selvam",
    role: "Contract Manager",
    image: person5,
    desc: "Manages contracts with precision, ensuring compliance and accuracy.",
  },
  {
    name: "Darpan",
    role: "Product Manager",
    image: person6,
    desc: "Ensures product quality and timely delivery for customer satisfaction.",
  },
  {
    name: "Vrajesh",
    role: "Performance Analyst",
    image: person4,
    desc: "Analyzes data to guide strategic decisions and maintain market edge.",
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center">
      <Navbar />

      {/* Hero Section */}
      <div
        className="bg-black/70 h-[50vh] w-full flex items-center justify-center text-white bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/28185416/pexels-photo-28185416/free-photo-of-a-large-container-yard-with-many-containers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-10/12 text-5xl intern md:text-7xl font-bold text-center"
        >
          {/* Delivering Excellence Across the Globe */}
          About Us
        </motion.h1>
      </div>

      {/* About Section */}
      <section className="w-full pt-16 mt-[100px] px-6 xl:px-20 text-gray-800">
        <div className="max-w-6xl flex flex-col-reverse md:flex-row mx-auto items-start text-center">
          <div className="w-full md:w-1/2 lg:w-2/3">
            <h2 className="text-4xl text-start intern md:text-5xl font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-lg md:text-xl text-start text-gray-600 leading-relaxed">
              We are a global import-export company, committed to bridging the
              gap between continents with integrity, efficiency, and innovation.
              With years of experience and a team of passionate professionals,
              we deliver top-notch services to our clients across industries.
            </p>
          </div>
          <div className="w-1/3 flex items-center gap-4 mb-8 lg:mb-0">
            <img src={blue} alt="blue" className="w-32 md:w-36" />
            <div className="text-4xl items-start flex flex-col md:text-5xl bluet">
              <h1 className="uppercase font-bold">EARTH</h1>
              <h1 className="uppercase font-bold">FARERS</h1>
              <h1 className="uppercase font-bold">EXIM</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-16 px-6 xl:px-20 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">
              <TbTargetArrow className="text-4xl mr-4 inline-block" />
              Our Mission
            </h3>
            <p className="text-gray-600 mx-4 pl-8 border-l border-black/30 leading-relaxed">
              To facilitate seamless trade by fostering trust and delivering
              excellence, helping businesses thrive in a connected world.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">
              <TbEye className="text-4xl mr-4 inline-block" />
              Our Vision
            </h3>
            <p className="text-gray-600 mx-4 pl-8 border-l border-black/30 leading-relaxed">
              To be a global leader in import-export services, setting the
              standard for quality, transparency, and customer satisfaction.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">
              <IoDiamondOutline className="text-4xl mr-4 inline-block" />
              Our Values
            </h3>
            <p className="text-gray-600 mx-4 pl-8 border-l border-black/30 leading-relaxed">
              Integrity, Innovation, Efficiency, and Customer Focus, are the
              core values that drive us to deliver excellence in everything we
              do.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="w-full py-16 px-6 xl:px-20 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-2 intern">Meet Our Team</h2>
          <p className="text-center mb-8 text-md">
            Meet the brilliant minds behind our success, driving innovation and
            excellence every step of the way.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {people.map((person, index) => (
              <div
                key={index}
                className="flex flex-col items-center border-2 border-[#dadada] hover:border-[#f1ede6] cursor-pointer rounded-3xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-40 w-40 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl intern font-semibold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm bluet font-medium">{person.role}</p>
                <p className="text-gray-600 mt-3 text-center">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full quote">
        <section className="w-full py-16 px-6 xl:px-20  text-black">
          <div className="max-w-6xl mx-auto text-center relative">
            <RiDoubleQuotesL className="absolute text-4xl -top-4 -left-4 md:-left-1" />
            <RiDoubleQuotesL className="absolute text-4xl bottom-0 md:bottom-4 scale-[-1] -right-4 md:right-[24%]" />
            <h2 className="text-2xl md:text-4xl int text-gray-500 leading-normal  font- mb-4">
              Time is essential in the export business, which is why at{" "}
              <span className="bluet font-semibold">Earth Farers EXIM</span>, we
              are dedicated to completing every job on schedule, without
              exception.
            </h2>
          </div>
        </section>
      </div>

      <GetQuote />
      <Footer />
    </div>
  );
};

export default About;


{/* <p>Hello {{to_name}},</p>
<p>You got a new message from {{email}}:</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">Message: {{message}}</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">Company: {{compnay}}</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">Product: {{product}}</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">Quantity: {{quantity}}</p>
<p>Best wishes,<br>Earth Farers Exim</p> */}