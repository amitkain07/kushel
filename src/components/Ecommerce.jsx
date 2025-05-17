import React, { useState } from "react";

import { images } from "../assets/assets";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "./Button";

const caseStudies = [
  {
    title: "2ndamendmentguns",
    tag: "Store Design & Development",
    stats: [
      { value: "80%", label: "Increase in Sales" },
      { value: "120%", label: "Conversion Rate" },
      { value: "140%", label: "Order Value" },
    ],
    image: images.ecom,
  },
];

const Ecommerece = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const currentCase = caseStudies[currentIndex];

  return (
    <section className="min-h-[80vh] py-16 px-4 bg-[#E9F5F6] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Building The Best Of E-Commerce
          </h1>
          <p className="text-black text-lg md:text-2xl">
            See what we've achieved for brands like yours
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* <button
            onClick={prevSlide}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:bg-blue-100 transition"
            aria-label="Previous Slide"
          >
            <FaChevronLeft className="text-blue-600" size={20} />
          </button> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 py-10 bg-[#f5f5f5] shadow-xl rounded-lg w-full max-w-7xl">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-black">
                {currentCase.title}
              </h2>
              <span className="inline-block bg-blue-100 text-gray-900 text-lg font-medium px-4 py-2 rounded-full">
                {currentCase.tag}
              </span>

              <div className="flex flex-wrap gap-8 text-gray-700 text-base lg:text-lg mt-4">
                {currentCase.stats.map(({ value, label }, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center ${
                      i < currentCase.stats.length - 1 ? "border-r-2 pr-6" : ""
                    }`}
                  >
                    <p className="text-blue-700 text-2xl font-bold mb-1">
                      {value}
                    </p>
                    <p className="text-center">{label}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-start items-start mt-12 w-full">
                <Button name="VIEW CASE STUDY" className="!p-3" />
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={currentCase.image}
                alt={`${currentCase.title} success`}
                className="w-full rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* <button
            onClick={nextSlide}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:bg-blue-100 transition"
            aria-label="Next Slide"
          >
            <FaChevronRight className="text-blue-600" size={20} />
          </button> */}
        </div>

        <div className="justify-center flex mt-10">
          <Button name={"VIEW ALL WORK"} />
        </div>
      </div>
    </section>
  );
};

export default Ecommerece;
