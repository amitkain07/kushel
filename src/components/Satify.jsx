import React from 'react'
import slice from '../assets/slice.png'
import ship from '../assets/ship.png'
import maf from '../assets/Maf.png'

const SatisfiedClients = () => {
  const clients = [
    {
      icon: slice,
      description:
        'Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse slide offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.',
      user: 'Anu Koteshwara',
      slide: 'Slide 365',
    },
    {
      icon: ship,
      description:
        'Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse slide offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.',
      user: 'Shikhar Mithal',
      slide: 'Mithal Industries',
    },
    {
      icon: maf,
      description:
        'Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse slide offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.',
      user: 'Matt Reeder',
      slide: 'Slide 365',
    },
  ]

  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 bg-[#041d51]">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white  mb-4">
          Hear From Our <span className="text-[#ffcb17]"> Satisfies </span>{' '}
          Clients
        </h1>
        <p className="text-center text-white text-lg max-w-3xl ">
          We’ve worked with amazing businesses. Here's what they have to say:
        </p>
      </div>

      <div className="grid gap-8 mt-20 w-full   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-[#ffffff] px-3 rounded-xl border border-gray-200 h-full flex flex-col  shadow-2xl"
          >
            <div className="flex justify-center mb-10">
              <img
                src={client.icon}
                alt="Client Logo"
                className="h-20 w-20 -mt-[60px] rounded-full border-[#0b56e4] border-1  p-1"
              />
            </div>

            <p className="text-gray-800 text-base mb-6 border-b-2 border-gray-200 leading-8">
              {client.description}
            </p>

            <div>
              <p className="font-semibold text-black text-xl">{client.user}</p>
              <p className="text-lg text-gray-600 mb-4">{client.slide}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SatisfiedClients
