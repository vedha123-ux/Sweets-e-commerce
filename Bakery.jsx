// BakeryBanner.js
import React from "react";
import right from "../assets/right.jpg";
const BakeryBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 bg-gray-50">
      {/* Text Section */}
      <div className="md:w-1/2 text-left space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Start the Day with Sweets
        </h1>
        <p className="text-gray-600">
          Sweets are confections that are typically high in sugar and often
          enjoyed as a treat or dessert. They come in various forms, including
          candies, chocolates, cakes, pastries, and ice creams. Sweets can be
          made with a range of ingredients like fruits, nuts, and spices, and
          are often characterized by their delightful flavors and appealing
          textures. They play a significant role in many cultures' celebrations
          and daily lives, providing a moment of indulgence and joy.
        </p>
        <p className="text-gray-600">
          They can also be a means of expressing creativity and tradition, with
          recipes passed down through generations and adapted with modern
          twists.
        </p>
        <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600">
          Visit Us
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src={right}
          alt="Freshly Baked Bread"
          className="rounded-lg shadow-lg max-w-xs md:max-w-md"
        />
      </div>
    </div>
  );
};

export default BakeryBanner;
