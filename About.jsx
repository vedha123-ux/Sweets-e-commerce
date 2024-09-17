// About.js
import React from "react";
import bakeryImage from "../assets/sweet shop.webp"; // Adjusted image import path
import backgroundImage from "../assets/background.jpg"; // Adjusted background image import path
import { FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
import Bakery from "../components/Bakery";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      {/* About Us Section with Background */}
      <div
        className="bg-cover bg-center py-16"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-rep+eat",
        }}
      >
        <div className="bg-[#f5f0df] bg-opacity-80 py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            About Us
          </h2>
          <p className="text-lg text-gray-700 mb-8 px-6 max-w-2xl mx-auto text-center">
            Unlock the Delight of Sweet Discoveries
          </p>
        </div>
      </div>

      {/* Sweet Info Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between bg-white py-12 px-8 lg:px-24 space-y-12 lg:space-y-0 lg:space-x-16">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={bakeryImage} // Replace this with your bakery image path
            alt="Bakery"
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">Heavenly Bites</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Heavenly Bites offers a curated selection of gourmet treats that
            tantalize the taste buds with every bite. Each product is crafted
            from the finest ingredients to deliver exceptional quality and
            flavor. Indulge in our unique and delicious creations for a truly
            heavenly experience.
          </p>

          {/* Opening Hours Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Opening Hours:
            </h3>
            <ul className="text-gray-600 mt-2 space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-orange-600">09:00 AM - 04:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span className="text-orange-600">10:00 AM - 07:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-4">
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-500">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-500">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-gray-500">
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>
      </section>

      {/* Bakery Banner Section */}
      <Bakery/>
        {/* Benefits Section */}
        <Benefits />
       {/* Footer Section */}
       <Footer />
    </>
  );
};

export default About;
