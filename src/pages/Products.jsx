import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetQuote from "../components/GetQuote";
import { motion } from "framer-motion";
import { MdOutlineFileDownload, MdArrowForwardIos } from "react-icons/md";
import categories from "./categories";
import { MdArrowOutward } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      {/* Hero Section */}
      <div
        className=" bg-black/10 transform h-[50vh] w-full flex items-center justify-center text-9xl font-bold text-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/28185416/pexels-photo-28185416/free-photo-of-a-large-container-yard-with-many-containers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-8/12 intern text-5xl md:text-7xl text-center font-bold"
        >
          Our Products
        </motion.h1>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mt-[100px] mb-[50px] flex flex-col md:flex-row items-center justify-between gap-14 px-6 py-12 text-center">
        <div className="w-full md:w-2/3 flex flex-col items-start gap-2">
          <h2 className="text-3xl intern font-bold mb-4">
            Explore Our Product Range
          </h2>
          <p className="text-start text-lg text-gray-600 mb-6">
            We provide a diverse selection of high-quality products to meet your
            needs. From fresh produce to raw materials, discover what makes us a
            trusted partner.
          </p>
        </div>
        <a href="#quote" className=" px-6 py-3 bluex text-white group shadow hover:shadow-xl transition-shadow rounded-xl flex items-center gap-2">
          {/* <MdOutlineFileDownload className="text-2xl" /> */}
          Get a Quote
        </a>
      </div>

      {/* Product Cards Section */}
      <div className="max-w-7xl px-6 w-full flex flex-wrap gap-10 mb-[100px]">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative w-full group md:w-[45%] lg:w-[48%] flex border border-black/10 rounded-3xl cursor-pointer hover:bg-zinc-400/10 transition-all overflow-hidden transform h"
            onClick={() => handleCategoryClick(category)}
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div className="absolute top-0 bg-gradient-to-t from-black/70 to-transparent w-full h-full left-0 p-8 flex justify-between items-end gap-3">
              <div className="flex flex-col items-start ga">
                <h3 className="text-4xl intern text-white font-semibold mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-200 ">{category.description}</p>
              </div>
              <div className="h-full flex items-end justify-end p-3">
                <MdArrowOutward className="text-5xl group-hover:bg-white group-hover:text-black transition-all ease-in duration-150 p-2 text-white bg-transparent border border-white rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying products */}
      {selectedCategory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center"
        >
          <div className="bg-[#f1ede6] pb-8 relative h-[90%] md:h-4/5 w-11/12 overflow-y-scroll max-w-4xl">
            <div className="flex sticky top-0 pt-8 px-8 pb-2 left-0 w-full bg-[#f1ede6] justify-between items-center mb-4">
              <h2 className="text-3xl intern font-semibold">
                {selectedCategory.title}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-2xl font-bold border p-2 rounded-full border-zinc-400 text-gray-500"
              >
                <AiOutlineClose />
              </button>
            </div>

            <div className="grid grid-cols-1 px-8 md:grid-cols-2 gap-6">
              {selectedCategory.products.map((product, index) => (
                <div
                  key={index}
                  className="border hover:bg-[#eae1d0] hover:shadow-lg hover:border-[#eae1d0] transition-all duration-150 ease-in cursor-pointer border-gray-300 p-4 rounded-2xl flex flex-col items-center gap-4"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-60 object-cover rounded-xl"
                  />
                  
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600 text-center">
                    {product.description}
                  </p>
                  <a
                    href={product.downloadUrl}
                    target="_blank"
                    download
                    className="bluex flex items-center gap-1 text-white py-2 px-6 rounded-xl mt-4"
                  >
                    <MdOutlineFileDownload className="text-2xl" />
                    Download PDF
                    {/* {product.downloadUrl} */}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <GetQuote />
      <Footer />
    </div>
  );
};

export default Products;
