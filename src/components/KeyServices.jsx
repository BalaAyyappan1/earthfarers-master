import React from "react";
import {
  FaHandshake,
  FaShieldAlt,
  FaChartLine,
  FaCertificate,
} from "react-icons/fa";

const KeyServices = () => {
  const services = [
    {
      icon: <FaHandshake className="bluet text-5xl mb-4" />,
      title: "Non-Circumvention & Non-Disclosure",
      description:
        "Our agreements ensure confidentiality and trust in all business partnerships.",
      borderClass: "md:border-b md:border-r border-b md:rounded-br-3xl ",
    },
    {
      icon: <FaShieldAlt className="bluet text-5xl mb-4" />,
      title: "Reliable & Trusted Services",
      description:
        "Transparency and integrity form the foundation of all our operations.",
      borderClass: "md:border-l md:border-b border-b md:rounded-bl-3xl",
    },
    {
      icon: <FaChartLine className="bluet text-5xl mb-4" />,
      title: "Market Analysis & Updates",
      description:
        "Our team provides regular, insightful market updates to keep you informed.",
      borderClass: "md:border-t md:border-r md:border-b-0 border-b md:rounded-tr-3xl",
    },
    {
      icon: <FaCertificate className="bluet text-5xl mb-4" />,
      title: "Certified & Compliant Services",
      description:
        "We are a legally certified export company, ensuring quality.",
      borderClass: "md:border-t md:border-l md:rounded-tl-3xl",
    },
  ];

  return (
    <section className="mb-[100px] py-12 px-6 xl:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl text-center md:text-start font-bold intern text-gray-800 mb-2">
          Our Key Services
        </h2>
        <p className="text-center md:text-start w-full md:w-9/12 mb-8">
          Our services are designed to provide you with a seamless and reliable
          experience, ensuring your business needs are met with the highest
          standards of quality and integrity.
        </p>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="lg:w-2/3 bg-transparent relative flex gap flex-wrap">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex bg-[#f1ede6] w-full md:w-1/2 lg:w-[48%] flex-col items-center text-center p-6 transition-shadow duration-300 border-[#064185] ${service.borderClass}`}
              >
                <div className="icon w-full mt-4 items-start">{service.icon}</div>
                <h3 className="text-start text-2xl fill-gray-700 uppercase font-semibold text-gray-700 mt-4">
                  {service.title}
                </h3>
                <p className="text-start text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
            <div className="hidden md:flex bluex w-96 h-96 absolute z-[-10] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="lg:w-1/3 mt-6 lg:mt-0">
            <img
              src={
                "https://images.pexels.com/photos/2881632/pexels-photo-2881632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt="services"
              className="rounded-3xl w-full h-96 lg:h-full object-cover duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
