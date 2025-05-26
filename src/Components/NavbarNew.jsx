import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About us", path: "/about-us" },
  { label: "NDIS", path: "/ndis" },
  { label: "Services", path: "/services" },
  { label: "Contact us", path: "/contact" },
];

const NavbarNew = () => {
  return (
    <header className="w-full shadow-sm">
      {/* Top section with logo and contact */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-36 py-4 bg-gray-50 font-serif space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/images/logo.png"
            alt="Access Logo"
            className="w-40 h-auto md:w-56 md:h-44 object-contain"
          />
          <p className="text-[#59168b] text-sm mt-2">
            Nurture Disability Support Services
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-end space-y-2 text-sm">
          {/* Email */}
          <div className="flex items-center space-x-2">
            <span className="border border-green-500 p-1 rounded-sm text-green-600">
              📧
            </span>
            <span className="text-center text-black md:text-right break-all">
              info@nurturedisability.com.au
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2">
            <span className="border  border-green-500 p-1 rounded-sm text-green-600">
              📞
            </span>
            <span className="text-black flex items-center">0411910741 , 0423301149</span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-purple-900 px-4 md:px-6 py-3 border-t border-gray-200 font-serif">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-white text-sm">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="hover:text-blue-400 text-base md:text-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarNew;
