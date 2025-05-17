import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import trans from "../assets/trans.png";
import Dev from "../assets/Dev.png";
import Migra from "../assets/Migra.png";
import Stack from "../assets/Stack.png";
import Inte from "../assets/Inte.png";
import App from "../assets/App.png";

const Services = () => {
  const services = [
    {
      icon: trans,
      title: "Digital Transformation",
      item1: "Ecommerce Audit & Strategy",
      item2: "Scalability Roadmap",
      item3: "Ecommerce Platform Selection",
      item4: "Streamlined Tech Stack",
    },
    {
      icon: Dev,
      title: "Store Design & Development",
      item1: "Ecommerce Store UI/UX",
      item2: "Theme-Based Development",
      item3: "Custom Shopify Development",
      item4: "Custom BigCommerce Development",
    },
    {
      icon: Migra,
      title: "Platform Migration",
      item1: "Magento to Shopify",
      item2: "Shopify to BigCommerce",
      item3: "BigCommerce to Shopify",
      item4: "Shopify to Magento",
    },
    {
      icon: Stack,
      title: "Custom Tech Stack Development",
      item1: "Checkout Customisation",
      item2: "Custom Tech Stack",
      item3: "Operations Automation",
      item4: "Cloud Migration",
    },
    {
      icon: Inte,
      title: "Third Party Integration",
      item1: "Payment Gateways",
      item2: "Shipping Solutions",
      item3: "Customer Support Tools",
    },
    {
      icon: App,
      title: "App Development",
      item1: "iOS App Development",
      item2: "Android App Development",
      item3: "Cross Platform App Development",
    },
  ];
  return (
    <section className="py-14 px-4 sm:px-6 flex flex-col gap-8  bg-[#E7E7E7]">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl underline decoration-blue-600 text-gray-800 mb-4">
          Our <span className="text-blue-black font-bold">Services</span>
        </h1>
        <p className=" max-w-4xl mx-auto text-xl ">
          We build exceptional <strong>ecommerce</strong> stores for ambitious
          mid-market brands and <br /> enterprises that
          <strong>accelerate conversions</strong>. We are widely regarded as the
          best commerce transformation company.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#55507F] to-[#515766] text-white rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6 text-4xl ">
              <div>
                <img width={60} src={service.icon} alt="" />
              </div>
              <span className="text-base font-semibold p-2 ">{index + 1}</span>
            </div>

            <h2 className="text-2xl font-semibold mb-5 text-white ">
              {service.title}
            </h2>

            <ul className="space-y-4 text-white list-none text-sm md:text-lg">
              {[service.item1, service.item2, service.item3, service.item4]
                .filter(Boolean)
                .map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <BiSolidRightArrow className="mt-1 " />
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Button name={"START YOUR PROJECT"} icon={<ArrowRight />} />
      </div>
    </section>
  );
};

export default Services;
