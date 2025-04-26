import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShortAbout from "../components/ShortAbout";
import KeyServices from "../components/KeyServices";
import ProductCategories from "../components/ProductCategories";
import GetQuote from "../components/GetQuote";

const Home = () => {
  return (
    <>
      <div className="w-full flex items-center flex-col">
        {/* <Navbar /> */}
        <HeroSection />
        <ShortAbout />
        <KeyServices />
        <ProductCategories />
        <GetQuote />
        <Footer />
      </div>
    </>
  );
};

export default Home;
