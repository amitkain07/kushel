import React from "react";
import "react-phone-input-2/lib/style.css";
import PhoneField from "./PhoneInput";

const Form = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-6 my-8 rounded-xl overflow-hidden shadow-lg">
      {/* Left Column - Info Section */}
      <div className="bg-[#094AC6] text-white text-center py-10 px-6 lg:px-10 flex-1">
        <div className="text-left">
          <div className="max-w-xl mx-auto mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Build Next-Level Custom Digital Solutions?
            </h1>
            <p className="text-sm lg:text-base text-gray-100">
              Please fill in the form and let’s chat to understand how we can
              help you better.
            </p>
          </div>

          <div className="flex  flex-col items-center gap-6">
            <div className="bg-[#738FFF] text-left text-white rounded-lg p-6 shadow-md w-full max-w-sm hover:scale-105 transition-transform">
              <p className="text-lg font-semibold mb-2">Call us</p>
              <p className="text-xl font-bold">+91 9015457012</p>
              <p className="text-sm mt-1 text-gray-200">India</p>
            </div>

            <div className="bg-[#738FFF] text-left text-white rounded-lg p-6 shadow-md w-full max-w-sm hover:scale-105 transition-transform">
              <p className="text-lg font-semibold mb-2">Call us</p>
              <p className="text-xl font-bold">+1-585-566-2070</p>
              <p className="text-sm mt-1 text-gray-200">USA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Form Section */}
      <div className="bg-[#0B56E4] text-white flex-2 py-10 px-4 sm:px-6 lg:px-12 flex justify-center">
        <div className="w-full max-w-2xl">
          <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">
            Get Answers to your Questions
          </h1>
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#738FFF] text-white py-2 px-4 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#738FFF] text-white py-2 px-4 rounded-md w-full"
              />
            </div>

            {/* Phone Fields */}
            <div className="flex flex-col sm:flex-row gap-4">
              <PhoneField />
              <input
                type="tel"
                placeholder="Enter phone number"
                className="bg-[#738FFF] text-white py-2 px-4 rounded-md w-full"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Business email*"
              className="bg-[#738FFF] text-white py-2 px-4 rounded-md w-full"
            />

            {/* Service Selection */}
            <select
              name="services"
              className="bg-[#738FFF] text-white py-2 px-4 rounded-md w-full"
            >
              <option value="web development">Web Development</option>
              <option value="android">Android</option>
              <option value="ios">iOS</option>
              <option value="native">Native</option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              className="bg-[#738FFF] text-white py-2 px-4 rounded-md w-full min-h-[120px]"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="py-2 w-full mt-2 bg-white rounded-3xl text-blue-600 cursor-pointer 
          transition-all duration-300 ease-in-out 
          hover:bg-blue-600 hover:text-white 
          hover:shadow-lg transform hover:scale-105"
            >
              let&apos;s connect &gt;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
