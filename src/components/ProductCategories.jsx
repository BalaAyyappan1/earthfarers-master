import React, { useState } from "react";
import {
  FaAppleAlt,
  FaLeaf,
  FaSeedling,
  FaCoffee,
  FaBoxOpen,
  FaTshirt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import plasticsheets from "../assets/plasticsheets.jpg";
import fruits from "../assets/products/fruits.jpeg";
import vegetables from "../assets/products/vegetables.webp";
import powders from "../assets/products/powders.jpeg";
import tea from "../assets/products/tea.jpg";
import cotton from "../assets/products/cotton.webp";

const ProductCategories = () => {
  const categories = [
    {
      icon: <FaAppleAlt className="text-green-600 text-4xl mb-4" />,
      imageUrl: fruits,
      title: "Fruits",
      description: "Banana, Pomegranates, Pineapple, Mango, Jackfruit",
      link: "/fruits",
    },
    {
      icon: <FaLeaf className="text-green-600 text-4xl mb-4" />,
      imageUrl: vegetables,
      title: "Vegetables",
      description: "Fresh Garlic, Onion",
      link: "/vegetables",
    },
    {
      icon: <FaSeedling className="text-green-600 text-4xl mb-4" />,
      imageUrl: powders,
      title: "Powder Form",
      description:
        "Garlic powder, Banana powder, Guar gum powder, Jackfruit powder",
      link: "/powder-form",
    },
    {
      icon: <FaCoffee className="text-green-600 text-4xl mb-4" />,
      imageUrl: tea,
      title: "Tea",
      description: "High-quality tea from trusted suppliers",
      link: "/tea",
    },
    {
      icon: <FaTshirt className="text-green-600 text-4xl mb-4" />,
      imageUrl: cotton,
      title: "Raw Cotton & Cotton Waste",
      description: "Top-grade cotton for various uses",
      link: "/cotton",
    },
    {
      icon: <FaBoxOpen className="text-green-600 text-4xl mb-4" />,
      imageUrl: plasticsheets,
      title: "Plastic Products",
      description: "Plastic films, raw materials, optical fibers",
      link: "/plastic-products",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="mt-[100px] mb-[80px] py-12 px-6 lg:px-20 w-full">
      <div className="max-w-6xl flex items-center flex-col w-full mx-auto text-center">
        <h2 className="text-5xl intern font-bold text-gray-800 mb-8">
          Our Product Categories
        </h2>
        <p className="w-full md:w-8/12 text-center mb-4">
          We offer a wide range of products to meet your needs. From fresh
          fruits and vegetables to raw cotton and plastic products, we have it
          all.
        </p>

        <div
          className={`hidden md:grid gap-8 mt-6 w-full ${
            showAll
              ? "grid-cols-3"
              : "grid-cols-3 lg:grid-cols-3 md:grid-cols-2"
          }`}
        >
          <AnimatePresence>
            {(showAll ? categories : categories.slice(0, 3)).map(
              (category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="flex w-full flex-col items-center justify-center"
                >
                  <div className="w-full flex flex-col items-center text-center rounded-lg transition-shadow duration-300">
                    <Link to="/products" className="relative">
                      <img
                        src={category.imageUrl}
                        alt={category.title}
                        className="w-full h-96 object-cover mb-4 transition-transform duration-500 cursor-pointer ease-in-out transform hover:scale-105 z-10"
                        style={{
                          clipPath: "ellipse(40% 50%)",
                          borderRadius: "8px",
                        }}
                      />
                    </Link>
                    <h3 className="text-xl mt-2 intern font-semibold text-gray-700">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mt-2 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        <div
          className={`grid md:hidden gap-8 mt-6 w-full ${
            showAll
              ? "grid-cols-1"
              : "grid-cols-1 lg:grid-cols-3 md:grid-cols-2"
          }`}
        >
          <AnimatePresence>
            {(showAll ? categories : categories.slice(0, 3)).map(
              (category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="flex w-full flex-col items-center justify-center"
                >
                  <div className="w-full flex flex-col items-center text-center rounded-lg transition-shadow duration-300">
                    <Link to="/products" className="relative">
                      <img
                        src={category.imageUrl}
                        alt={category.title}
                        className="w-full h-96 object-cover mb-4 transition-transform duration-500 cursor-pointer ease-in-out transform hover:scale-105 z-10"
                        style={{
                          clipPath: "ellipse(40% 50%)",
                          borderRadius: "8px",
                        }}
                      />
                    </Link>
                    <h3 className="text-xl mt-2 intern font-semibold text-gray-700">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mt-2 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={handleToggle}
          className={`mt-16 text-black intern rounded-full py-6 group font-semibold transition-all relative duration-300
          ${showAll ? "p-5" : "p-4 "}
            `}
        >
          <span className="relative z-10">
            {showAll ? "Less" : "More"}
          </span>
          <div className="absolute z-10 top-0 scale-110 hover:scale-100 left-0 right-0 rounded-full bottom-0 border-[#064185] border transition-all">
            <span className="absolute right-0 bottom-0 h-4 w-6 group-hover:bottom-3 transition-all z-10 bg-[#f1ede6]"></span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default ProductCategories;
