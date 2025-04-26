import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { motion } from "framer-motion";
import { FaYoutube, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col w-full items-center">
        <Navbar />

        <div
          className=" bg-black/10 transform h-[50vh] w-full flex items-center justify-center text-9xl font-bold text-center text-white bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/28185416/pexels-photo-28185416/free-photo-of-a-large-container-yard-with-many-containers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        >
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-8/12 intern text-5xl md:text-7xl uppercase text-center font-semibold"
          >
            Contact Us
          </motion.h1>
        </div>

        <p className="text-start max-w-7xl w-9/12 md:w-full mt-[100px] mb-8">
          We are here to help you with all your queries. Feel free to reach out
          to us for any assistance.
        </p>
        <div className="max-w-7xl w-full justify-between p-4 md:p-0 flex flex-col md:flex-row items-center mb-[100px]">
          <div className="w-">
            <h2 className="text-3xl font-bold mb-4">Follow us</h2>
            <div className="flex flex-col justify-start gap-4 mb-6">
             
              <a
                href="https://www.youtube.com/@chrme21456"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center gap-2  transition-all"
              >
                <FaYoutube className="text-3xl" /> YOUTUBE
              </a>
              <a
                href="https://www.linkedin.com/company/earth-farers-exim/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-all"
              >
                <FaLinkedin className="text-3xl"/> LINKEDIN
              </a>
              <a
                href="https://www.instagram.com/earthfarers_exim?igsh=MWg4a204M2VsenZvMQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center gap-2 transition-all"
              >
                <FaInstagram className="text-3xl"/> INSTAGRAM
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center gap-2  transition-all"
              >
                <FaFacebook className="text-3xl" /> FACEBOOK
              </a>
            </div>
            <hr className="w-full mb-6 border border-zinc-300" />
            <h2 className="text-3xl  font-bold mb-4">Our Office</h2>
            <p className="text-start text-lg text-gray-600 mb-6">
            4 Hiraba Kesar Park Near Ramtalavadi NADIAD, Gujrat, India

            </p>
            <hr className="w-full mb-6 border border-zinc-300" />
            <h2 className="text-3xl  font-bold mb-4">Contact Details</h2>
            <p className="text-start text-lg text-gray-600 mb-6">
            Email: info@earthfarersexim.com 
            </p>

          </div>

          {/* <div className="w-1/2"> */}
          <Form width={"lg:w-6/12"}/>
          {/* </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;


