import React from "react";
import Circle from "../assets/circle.png";
import Cube from "../assets/side shape.png";
import Button from "./Button";
import { MoveUpRight } from 'lucide-react';

const AfHero = () => {
  return (
    <div className="flex flex-col gap-2 bg-[#E9F5F6] ">

    <div className="flex justify-between pt-4 mt-5 ">
      <div>
        <img src={Cube} alt="Cube" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2 items-center bg-gray-200 py-2 px-2 rounded-b-3xl">
          <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
          Plan It. Design It. Build It. Get Found. Make them but.
        </div>
        <div className="text-center">
          <p className="text-xl">
            Revolutionize Your E-Commerce with Expert Consulting and Redesigned{" "}
            <br /> Websites that will{" "}
            <span className="text-blue-600">Grow Your Business</span>
          </p>
        </div>
        <div className="text-center flex flex-col gap-5">
          <p>
            Is your website working hard for you? A good website or e-commerce
            site is only as good as its conversion rate. No <br /> matter what your
            business is, your website should be selling for you. Whether driving
            customers through a checkout <br /> process or getting them to fill out a
            lead form, it's all about converting browsers into buyers.
          </p>
          <p>
            The days of simple brochure sites are gone. It is time to increase
            conversion rates and generate more leads. Kushel <br /> Digi Solutions will
            work with you to ensure that your site is doing the work it should
            be doing. We provide website <br /> design and programming, search engine
            optimization and conversion optimization services to companies of
            any size <br /> and any type.
          </p>
        </div>
      </div>
      <div>
        <img src={Circle} alt="circle" />
      </div>
    </div>
    <div className="flex justify-center items-center gap-8 mb-5">
        <Button name={'CONTACT US '} icon={ <MoveUpRight />}/>
        <Button name={'OUR PORTFOLIO'} icon={ <MoveUpRight />}/>
    </div>
    </div>
  );
};

export default AfHero;
