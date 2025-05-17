import React from 'react'
import aux from '../assets/at.png'
import maf from '../assets/Maf.png'
import slice from '../assets/slice.png'
import code from '../assets/Code.png'
import hind from '../assets/hind.png'
import delo from '../assets/Delo.png'
import usha from '../assets/usha.png'
import cro from '../assets/cronus.png'
import hevells from '../assets/havells.png'
import insta from '../assets/insta.png'

const FeaturedClients = () => {
  const clients = [
    {
      icon: aux,
    },
    {
      icon: maf,
    },
    {
      icon: slice,
    },
    {
      icon: code,
    },
    {
      icon: hind,
    },
    {
      icon: delo,
    },
    {
      icon: usha,
    },
    {
      icon: cro,
    },
    {
      icon: hevells,
    },
    {
      icon: insta,
    },
  ]

  return (
    <section className="py-10 bg-[#F5F3EF] mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Featured Clients
        </h1>
        <p className="text-gray-900 text-xl mb-10">
          We have worked with amazing businesses
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {clients.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center  shadow-2xl p-2 bg-white"
            >
              <img
                src={item.icon}
                alt={`Client ${index + 1}`}
                className="w-40 h-40 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedClients
