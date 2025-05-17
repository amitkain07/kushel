import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import Button from './Button'
const ReadyPartner = () => {
  return (
    <section className="bg-[#011C49] text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Ready to <span className="text-yellow-400 font-bold">Partner</span>{' '}
          with You for Success
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl text-center mx-auto">
          We're here to help turn your entrepreneurial dreams into reality,
          quickly and efficiently. Share your needs with us and let's get
          started!
        </p>
        <div className="flex justify-center">
          <Button name="LET'S GET STARTED" icon={<FaArrowRight/>}/>
        </div>
      </div>
    </section>
  )
}

export default ReadyPartner
