import React, { useState } from "react";
import Logo from "../assets/Logo.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-lime-500 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Website Logo */}
        <img
          className="h-12 md:h-16 max-w-none object-contain"
          src={Logo}
          alt="Website Logo"
        />

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Menu */}
        <nav className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 text-white">
            {/* Regular Nav Items */}
            <NavItem href="/" name="Home" />
            <NavItem href="/landlords" name="Landlords" />
            <NavItem href="/funding" name="Funding" />
            <NavItem href="/contact-us" name="Contact Us" />
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Component for regular navigation item
const NavItem = ({ href, name }) => {
  return (
    <li>
      <a
        href={href}
        className="block mt-4 md:mt-0 hover:text-white hover:underline transition-colors duration-300 text-lg md:text-base" // Adjust text size
        style={{ marginLeft: "8px" }} // Move items more to the left
      >
        {name}
      </a>
    </li>
  );
};

export default Header;
