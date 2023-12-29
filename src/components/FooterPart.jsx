import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const FooterPart = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto p-6 rounded-t-lg overflow-hidden border-t-4 border-white">
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-4">Quick Crave</h2>
            <p className="text-gray-300">Elevating your dining experience to new heights.</p>
          </div>

          {/* Middle Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-gray-300 hover:text-white transition duration-300">Home</a></li>
              <li><a href="/menu" className="text-gray-300 hover:text-white transition duration-300">Menu</a></li>
             
            </ul>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
              <li><a href="/faq" className="text-gray-300 hover:text-white transition duration-300">FAQs</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white transition duration-300">Terms</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white transition duration-300">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4 mt-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
            <i className="fab fa-facebook-square text-2xl"><FaFacebook /></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
            <i className="fab fa-twitter-square text-2xl"><FaTwitter /></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
            <i className="fab fa-instagram-square text-2xl"><FaInstagram /></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPart;
