// src/components/NewArrivals.jsx
import React from 'react';

// Import your collection images
import goodDayImage from '../assets/jamun.jpg'; // Replace with the actual path to the image
import bestOfferImage from '../assets/cup cake.jpg'; // Replace with the actual path to the image

const collections = [
  {
    image: goodDayImage,
    title: 'Good sweet for a good day',
    buttonText: 'Shop Now',
    buttonColor: 'bg-red-500',
  },
  {
    image: bestOfferImage,
    title: 'Best offer for our stores',
    buttonText: 'Shop Now',
    buttonColor: 'bg-orange-500',
  },
];

const NewArrivals = () => {
  return (
    <div className="py-8 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6  text-[#8B4513]">New Arrivals, Top Collection Sections</h2>
      <div className="flex flex-col md:flex-row gap-4">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="relative flex-1 h-64 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${collection.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center p-6 rounded-lg">
              <div className="text-white flex flex-col items-start">
                <h3 className="text-lg font-semibold mb-4">{collection.title}</h3>
                <button
                  className={`${collection.buttonColor} text-white py-1 px-2 rounded-md font-semibold text-sm hover:bg-opacity-80`}
                >
                  {collection.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
