import React from 'react';
import '../app.css';
import HeroSection from '../assets/HeroSection.png';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="background  flex justify-center items-center mt-16">
      <div className="flex flex-col items-center text-center gap-6 ">
        {/* Rating Section */}
        <div className="flex items-center gap-2">
          <Star className="text-amber-300" />
          <Star className="text-amber-300" />
          <Star className="text-amber-300" />
          <Star className="text-amber-300" />
          <p className="text-blue-700 ml-2">4.8 (80 reviews)</p>
        </div>

        {/* Heading */}
        <div>
          <p className="font-bold text-3xl text-blue-600">Crafting exceptional</p>
          <p className="font-bold text-3xl text-blue-600">
            ecommerce <span className="bg-amber-400 text-white px-2 rounded">experience</span>
          </p>
        </div>

        {/* Subheading */}
        <p className="text-blue-600">
          Partner with our real people agency for Shopify and BigCommerce solutions
        </p>

        {/* Hero Image */}
        <img className="w-[70%] max-w-md" src={HeroSection} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
