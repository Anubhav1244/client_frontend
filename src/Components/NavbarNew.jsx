import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

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
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-36 py-4 bg-gray-50 font-serif space-y-6 md:space-y-0">
        
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

        {/* Contact Info aligned equally */}
        <div className="flex flex-col items-center md:items-end space-y-4 text-sm">
          {/* Email */}
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-lime-500" />
            <span className="text-black text-base">
              info@nurturedisability.com.au
            </span>
          </div>
          {/* Phone */}
          <div className="flex items-center  font-serif space-x-2">
            <Phone className="w-5 h-5 text-lime-500 " />
            <span className="text-black pr-6 font-serif text-base">
              0451 223 245, 0423 301 149
            </span>
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
