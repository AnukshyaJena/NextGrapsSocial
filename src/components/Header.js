import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle the menu state
  };

  return (
    <header className='fixed top-0 left-0 w-full z-50'>
      <div className="container mx-auto py-6 flex justify-between items-center">
        <nav>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="text-white text-xl uppercase hover:text-purple-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white text-xl uppercase hover:text-purple-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white text-xl uppercase hover:text-purple-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-white text-xl uppercase hover:text-purple-500">
                Products
              </Link>
            </li>
            <li>
              <Link to="/industries" className="text-white text-xl uppercase hover:text-purple-500">
                Industries
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-white text-xl uppercase hover:text-purple-500">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/career" className="text-white text-xl uppercase hover:text-purple-500">
                Career
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white text-xl uppercase hover:text-purple-500">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between">
            <button onClick={toggleMenu} className="text-white">
              {/* Hamburger icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Mobile Menu */}
            <div className={`absolute top-0 left-0 w-full bg-gray-800 p-4 space-y-6 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform`}>
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link to="/" className="text-white text-xl uppercase hover:text-purple-500" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white text-xl uppercase hover:text-purple-500" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white text-xl uppercase hover:text-purple-500" onClick={toggleMenu}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-white text-xl uppercase hover:text-purple-500" onClick={toggleMenu}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="text-white text-xl uppercase hover:text-purple-500" onClick={toggleMenu}>
                    Industries
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white text-xl uppercase hover:text-purple-500" onClick={toggleMenu}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="text-white text-xl uppercase hover:text-purple-500" onClick={toggleMenu}>
                    Career
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white text-xl uppercase hover:text-purple-500" onClick={toggleMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
