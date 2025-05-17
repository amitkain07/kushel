import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from 'react-icons/fa'

import { images } from '../assets/assets'
import Button from './Button'

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { title: 'Home', link: '/' },
      { title: 'About', link: '/about' },
      { title: 'Service', link: '/services' },
      { title: 'Portfolio', link: '/portfolio' },
      { title: 'Contact Us', link: '/contact' },
    ],
  },
  {
    title: 'Our Services',
    links: [
      { title: 'Digital Transformation', link: '/services' },
      { title: 'Store Design & Development', link: '/services' },
      { title: 'Platform Migration', link: '/services' },
      { title: 'Custom Tech Stack Development', link: '/services' },
      { title: 'Third Party Integration', link: '/services' },
      { title: 'App Development', link: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'Terms & Conditions', link: '/terms' },
      { title: 'Privacy Policy', link: '/privacy' },
      { title: 'Refund Policy', link: '/refund' },
      { title: 'NDA Policy', link: '/nda' },
    ],
  },
]

const Footer = () => {
  return (
    <footer
      className="text-black border-t-2 "
      style={{
        backgroundImage: `url('${images.footerbg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full  mx-auto py-12   flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:px-25">
          <div className="md:w-[30%] flex flex-col items-center md:items-start text-center md:text-left gap-5">
            <div className="flex items-center gap-4 ">
              <img
                src={images.logo}
                alt="Kushel Digi Logo"
                className="w-20 h-20 object-contain border-r-2 border-blue-500 pr-1"
              />
              <div className="flex flex-col">
                <h2 className="text-xl md:text-2xl font-bold text-black">
                  Kushel Digi
                </h2>
                <span className="text-base md:text-lg tracking-wide text-gray-600">
                  Solutions
                </span>
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-800 space-y-2 ">
              <span className=" underline">Home Address:</span>
              First Floor, D242, F-32B, Sector 63 Rd, Noida, 201301 Uttar
              Pradesh
              <br />
              <span className=" underline mt-2">Phone:</span> +1-585-566-2070
              <br />
              <span className=" underline mt-2">Email:</span>{' '}
              info@kusheldigi.com
            </p>
          </div>

          <div className="md:w-[70%] flex flex-wrap justify-start md:justify-end gap-20">
            {footerLinks.map((item, index) => (
              <div key={index} className="min-w-[150px]">
                <p className="text-2xl font-semibold mb-3">{item.title}</p>
                <ul className="flex flex-col gap-2 text-[#444444] text-lg">
                  {item.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.link}
                        className="hover:text-blue-500 transition-colors"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-black mt-6 py-6  bg-[#f5f8fa] md:px-20">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex gap-4 text-xl">
              <a href="https://instagram.com" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://instagram.com" target="_blank">
                <FaPinterest />
              </a>
              <a href="https://instagram.com" target="_blank">
                <FaLinkedinIn />
              </a>
              <a href="https://facebook.com" target="_blank">
                <FaFacebookF />
              </a>

              <a href="https://twitter.com" target="_blank">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="mt-2 md:mt-0">
           <a href="#hero">
              <Button name="Back to top" />
            </a>  
          </div>

          <p className="text-center text-sm text-gray-600">
            © 2023 Kushel Digi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
