import React, { useContext, useState } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const Navbar = () => {
  const {Cartitems}=useContext(CartContext)
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close the menu after scrolling
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 h-16 px-4 sm:px-6 lg:px-8 flex justify-between items-center overflow-hidden w-full bg-white opacity-90 z-50">

      <div className=" items-center space-x-4 hidden sm:flex ">
        <a onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-lg hover:text-yellow-500">Home</a>
        <a onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-lg hover:text-yellow-500">About</a>
      </div>

      <div className="flex items-center">
       <Link to={"/"}>
       <img src={logo} alt="Your App Logo" className="h-12" />
       </Link>
      </div>

      <div className="hidden sm:flex items-center space-x-4">
        <Link to={"/menu"} className="text-gray-800 hover:text-lg hover:text-yellow-500">Menu</Link>
        <a onClick={() => scrollToSection('reservation')}  className="text-gray-800 hover:text-lg hover:text-yellow-500">Reservation</a>
        <Link to={"/cart"} className="text-gray-800 hover:text-lg hover:text-yellow-500">Cart({Cartitems.length})</Link>
      </div>
      <button
        className="sm:hidden text-gray-800 hover:text-lg hover:text-yellow-500 focus:outline-none"
        onClick={toggleMenu}
      >
        ☰
      </button>

      <div className={`sm:hidden fixed top-16 left-0 w-full bg-white ${menuOpen ? 'block' : 'hidden'}`}>
        <a onClick={() => scrollToSection('home')}  className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home</a>
        <a  onClick={() => scrollToSection('about')}  className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About</a>
        <Link to={"/menu"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Menu</Link>
        <a onClick={() => scrollToSection('reservation')}  className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Reservation</a>
        <Link to={"/cart"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
