import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Button from './Button'
const OurProcess = () => {
  const Process = [
    {
      icon: '🔎',
      title: 'Discovery Phase',
      description:
        'A discovery phase is necessary to align business goals with an engineering team, avoid costly mistakes, and plan a smooth start of actual product development.',
      description2:
        "Our experienced business analysts and software architects map user journeys, conduct technical analyses, and define requirements and project scope for precise cost estimation. After the discovery phase, you'll receive a team composition plan, vision and scope document, technical and cost proposal with estimates, UX/UI prototype, and project plan based on your business objectives.",
    },
    {
      icon: '📈',
      title: 'Strategy Phase',
      description:
        'We define the technical and business strategy based on research, analysis, and your business goals to ensure a competitive edge and long-term success.',
      description2:
        'We collaborate with stakeholders to set clear goals, assess technology needs, and craft a roadmap that aligns development with business growth and market needs.',
    },
    {
      icon: '🎨',
      title: 'Design Phase',
      description:
        'Our designers create intuitive and engaging user experiences with modern, accessible, and conversion-focused interfaces tailored to your audience.',
    },
    {
      icon: '💻',
      title: 'Development Phase',
      description:
        'Our developers build scalable, performant applications with clean code, best practices, and full-stack technology solutions.',
    },
    {
      icon: '🧪',
      title: 'Quality Assurance Phase',
      description:
        'We ensure reliability through rigorous testing, performance checks, and security validation before launch.',
    },
    {
      icon: '🚀',
      title: 'Launch & Post-Launch Support',
      description:
        'We support you beyond launch with maintenance, monitoring, updates, and continuous optimization for growth.',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className=" py-16 w-full mx-auto min-h-[80vh] bg-[#fafafa] ">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        Our Process
      </h2>

      <div className="flex flex-col md:flex-row rounded-xl overflow-hidden  px-16">
        <div className="md:w-1/3 p-4 space-y-2 bg-[#fafafa] ">
          {Process.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-4 w-full text-left  px-4 py-4  transition-all duration-200 cursor-pointer border-b-2 border-blue-200 ${
                activeIndex === index
                  ? ' text-blue-800 border-blue-700 '
                  : ' text-gray-600 hover:text-blue-800 '
              }`}
            >
              <span className=" font-medium text-2xl  ">{service.title}</span>
            </button>
          ))}
        </div>

        <div className="md:w-2/3 p-6 flex flex-col justify-center text-gray-800 bg-[#f7f8fc]">
          <div className="text-5xl mb-4">{Process[activeIndex].icon}</div>

          <h3 className="text-2xl font-semibold mb-4 ">
            {Process[activeIndex].title}
          </h3>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            {Process[activeIndex].description}
          </p>
          {Process[activeIndex].description2 && (
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              {Process[activeIndex].description2}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button name="Lets Connect " icon={<FaArrowRight/>} />
      </div>
    </section>
  )
}

export default OurProcess
