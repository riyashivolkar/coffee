import bean from "../assets/BeanScene.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 flex items-center justify-between w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8 ">
      <img
        src={bean}
        width={100}
        height={100}
        alt="Bean Scene Logo"
        className="md:w-48"
      />
      <div className="lg:hidden">
        <button
          className="flex items-center justify-center w-12 h-12 bg-transparent"
          onClick={toggleMenu}
        >
          <FaBars className="text-white" />
        </button>
      </div>
      <div className="hidden text-white lg:flex lg:items-center font-playfair">
        <ul className="list-none lg:flex">
          <li className="px-4 py-2 cursor-pointer">Home</li>
          <li className="px-4 py-2 cursor-pointer">Menu</li>
          <li className="px-4 py-2 cursor-pointer">About Us</li>
          <li className="px-4 py-2 cursor-pointer">Contact Us</li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="absolute right-0 flex flex-col items-center w-40 h-full py-4 text-white font-playfair top-20 font">
          <ul className="list-none">
            <li className="py-2 cursor-pointer">Home</li>
            <li className="py-2 cursor-pointer">Menu</li>
            <li className="py-2 cursor-pointer">About Us</li>
            <li className="py-2 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
