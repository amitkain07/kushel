import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/kds.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#afhero" },
    { name: "Service", href: "#services" },
    { name: "Technology", href: "#technology" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="cursor-pointer">
        <img src={logo} alt="logo" width={140} height={100} />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4">
        <ul className="flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`px-3 py-1 rounded-full cursor-pointer transition ${
                  link.name === "Home"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-100"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="border-2 border-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm hover:shadow-lg"
        >
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-20">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-10">
          <ul className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`px-4 py-2 rounded cursor-pointer transition ${
                    link.name === "Home"
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-100"
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              className="border-2 border-blue-600 rounded-full p-2 mt-2 text-center hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm hover:shadow-lg"
              onClick={handleLinkClick}
            >
              Contact Us
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
