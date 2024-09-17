import React from 'react';
import { FaTwitter, FaFacebookF, FaPinterest, FaInstagram, FaTiktok } from 'react-icons/fa';

// Import the 6 images you want to display in the footer
import footerImage1 from '../assets/visa.png';
import footerImage2 from '../assets/mastercard.png';
import footerImage3 from '../assets/American.png';
import footerImage4 from '../assets/paypal.webp';
import footerImage5 from '../assets/diners.png';
import footerImage6 from '../assets/discover.png';

const Footer = () => {
  return (
    <footer className="bg-[#f3e5ab] text-[#8B4513] py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold">HEAVENLY BITES</h2>
        </div>

        {/* Quick Links and Social Media Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Quick links</h3>
          <ul className="mb-4">
            <li><a href="#shop" className="hover:underline">Shop all</a></li>
            <li><a href="#meet" className="hover:underline">Meet us</a></li>
            <li><a href="#recipes" className="hover:underline">Recipes</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
          <div className="flex space-x-4">
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="text-2xl hover:text-gray-500" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF className="text-2xl hover:text-gray-500" />
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest">
              <FaPinterest className="text-2xl hover:text-gray-500" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-gray-500" />
            </a>
            <a href="https://tiktok.com" aria-label="TikTok">
              <FaTiktok className="text-2xl hover:text-gray-500" />
            </a>
          </div>
        </div>

        {/* Mission Section */}
        <div>
          <h3 className="text-lg font-semibold">Our mission</h3>
          <p>To bring proud, loud Asian flavors to your fingertips any day of the week.</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="container mx-auto mt-8 flex justify-end">
        <div className="flex space-x-2">
          <img src={footerImage1} alt="Visa" className="w-10 h-auto" />
          <img src={footerImage2} alt="Mastercard" className="w-10 h-auto" />
          <img src={footerImage3} alt="American Express" className="w-10 h-auto" />
          <img src={footerImage4} alt="Paypal" className="w-10 h-auto" />
          <img src={footerImage5} alt="Diners Club" className="w-10 h-auto" />
          <img src={footerImage6} alt="Discover" className="w-10 h-auto" />
        </div>
      </div>

      {/* Copyright and Theme Information */}
      <div className="container mx-auto mt-8 text-center text-sm">
        <p>
          © 2024 theme-heavenly bites-demo powered by Shopify
        </p>
      </div>
    </footer>
  );
};

export default Footer;
