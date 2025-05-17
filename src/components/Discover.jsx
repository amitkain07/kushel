import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { GiGraduateCap } from 'react-icons/gi'
import { FaTrophy, FaArrowTrendUp } from 'react-icons/fa6'
import { IoIosMan } from 'react-icons/io'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'

const Discover = () => {
  const Elements = [
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Web Design',
      description:
        'All of our sites are built with a mobile-first approach. We make sure your site is accessible on all devices.',
    },
    {
      icon: <IoIosMan />,
      title: 'Consultive Approach',
      description:
        'We collaborate with clients to understand their business and goals, crafting tailored solutions for success.',
    },
    {
      icon: <GiGraduateCap />,
      title: 'Expert Advice',
      description:
        'With over 20 years of experience, we bring proven expertise in web development and e-commerce consulting.',
    },
    {
      icon: <RiMoneyDollarCircleFill />,
      title: 'Built for Conversion',
      description:
        'We design your site to convert visitors into leads and customers by optimizing user journeys and CTAs.',
    },
    {
      icon: <FaArrowTrendUp />,
      title: 'Marketing Strategies',
      description:
        'We help you define winning strategies and equip you with the tools needed to attract more clients.',
    },
    {
      icon: <FaTrophy />,
      title: 'Competitive Analysis',
      description:
        'We analyze top competitors to ensure your business stays ahead in the market with actionable insights.',
    },
  ]

  return (
    <section className="w-full mx-auto bg-white min-h-full py-12 px-6">
      <h1 className="text-3xl md:text-4xl  text-center text-black mb-6 max-w-4xl mx-auto">
        Discover why{' '}
        <span className="text-[#0b56e4]">Kushel Digi Solutions</span> Stands Out
      </h1>
      <p className="text-center text-gray-800 mb-10 max-w-7xl mx-auto text-lg md:text-2xl">
        Discover why <strong>kushel Digi Solutions</strong> stands out with
        innovative strategies and personalized service
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {Elements.map((item, index) => (
          <div
            key={index}
            className="flex flex-col h-full p-6 rounded-lg bg-white  "
          >
            <div className="flex items-center justify-center w-16 h-16 mb-6 text-5xl text-[#0b56e4]">
              {item.icon}
            </div>
            <h2 className="text-3xl  mb-3 text-black">{item.title}</h2>
            <p className="text-gray-800 text-lg ">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Discover
