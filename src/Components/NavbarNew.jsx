import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About us", path: "/about-us" },
  { label: "NDIS", path: "/ndis" },
  { label: "Services", path: "/services" },
  // { label: "Brochure", path: "/" },
  { label: "Contact us", path: "/contact" },
];

const NavbarNew = () => {
  return (
    <header className="w-full shadow-sm">
      <div className="flex items-center w-full justify-between font-serif  px-36 py-3 bg-gray-50">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src="/images/logo.png"
            alt="Access Logo"
            className="w-46 h-38"
          />
      <div className="text-center font-serif  text-[#59168b] ">
        <p className="text-sm ">Nurture Disability Support Services </p>
        {/* <p className="text-xs">and Support Services</p> */}
      </div>
        </div>
        {/* Contact */}
        <div className="flex justify-center items-center space-x-24 mx-10">
        <div className="flex items-center space-x-6  font-serif">
    {/* Email */}
    <div className="flex  items-center space-x-2">
      <span className="border border-green-500  p-1 rounded-sm font-serif text-green-600">
        📧
      </span>
      <span className="text-black">info@nurturedisability.com.au</span>
    </div>

    {/* Phone */}
    <div className="flex items-center space-x-2">
      <span className="border border-green-500 p-1 font-serif rounded-sm text-green-600">
        📞
      </span>
      <span className="text-black">0411910741 , 0423301149</span>
    </div>
        </div>
</div>

        {/* Search + Buttons */}
        <div className="flex items-center gap-3">
          {/* <input
            type="text"
            placeholder="Search"
            className="border rounded-full px-4 py-1 text-sm focus:outline-none"
          /> */}
          {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-1 px-4 rounded-full">
            Referral
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-1 px-4 rounded-full">
            Book
          </button> */}
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-purple-900 font-serif  px-6 py-4 border-t border-gray-200">
        <ul className="flex flex-wrap justify-center gap-6 text-sm  text-white">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="hover:text-blue-600 text-lg transition-colors font-medium">
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
