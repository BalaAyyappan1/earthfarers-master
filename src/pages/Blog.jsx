import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const links = [
  "k1Km1CDo-kc",
  "hkbc-lJPi-A",
  "9ObKUYPTPXA",
  "tocWHsWUuPY",
  "XS5XH8kH-eE",
  "D3-KOUYFQWc",
  "2aYw8x4So1s",
];

const Blog = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handlePlayVideo = (index) => {
    setPlayingVideo(index);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <div
        className="bg-black/10 transform h-[50vh] w-full flex items-center justify-center text-9xl font-bold text-center text-white pointer-events-none select-none bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/28185416/pexels-photo-28185416/free-photo-of-a-large-container-yard-with-many-containers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-8/12 text-6xl md:text-7xl text-center intern font-bold"
        >
          Blog
        </motion.h1>
      </div>

      <div className="w-full flex flex-col mt-[100px] mb-[100px] items-center justify-center">
        <div className="max-w-7xl w-full mt-10">
          <h1 className="text-3xl md:text-5xl font-bold intern text-center mb-3">
            Latest Blogs
          </h1>
          <p className="text-lg md:text-2xl intern text-center mb-14">
            Here are some of our latest blogs. Stay tuned for more!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 mt-4">
            {links.map((videoId, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[15px] w-full h-[315px]"
              >
                {playingVideo === index ? (
                  <iframe
                    width="100%"
                    height="100%"
                    className="scale-105"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div
                    className="absolute inset-0 cursor-pointer bg-black/50 flex items-center justify-center"
                    style={{
                      backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() => handlePlayVideo(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="48"
                      height="48"
                      fill="white"
                    >
                      <circle cx="12" cy="12" r="12" fill="rgba(0, 0, 0, 0.6)" />
                      <polygon points="10,8 16,12 10,16" fill="white" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
