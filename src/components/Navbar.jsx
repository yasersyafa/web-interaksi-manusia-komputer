import { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="backdrop-blur-md bg-white/70 sticky w-full z-10 top-0 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-lora font-bold text-gray-900">
          HAVENHUES
        </div>

        {/* Menu Button for Mobile */}
        <button className="md:hidden text-gray-900" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Menu Links for Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to={`/`} className="text-gray-900 font-futura hover:text-gray-600 transition-colors duration-300">Home</Link>
          <Link to={`/about`} className="text-gray-900 font-futura hover:text-gray-600 transition-colors duration-300">About</Link>
          <Link to={`/products`} className="text-gray-900 font-futura hover:text-gray-600 transition-colors duration-300">Products</Link>
          
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white backdrop-blur-md shadow-lg z-10">
          <div className="flex flex-col items-start p-4 space-y-4">
            <Link to={`/`} className="text-gray-900 font-futura hover:text-gray-600 transition-colors duration-300 w-full text-left">Home</Link>
            <Link to={`/about`} className="text-gray-900 font-futura hover:text-gray-600 transition-colors duration-300 w-full text-left">About</Link>
            <Link to={`/products`} className="text-gray-900 font-futura hover:text-gray-600 transition-colors duration-300 w-full text-left">Products</Link>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

