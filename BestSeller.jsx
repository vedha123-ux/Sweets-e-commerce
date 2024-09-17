// src/components/Bestsellers.jsx
import React from 'react';

// Import your product images
import labStarterImage from '../assets/download.jpeg';
import lemongrassBBQImage from '../assets/download (1).jpeg';
import eastAsianSamplerImage from '../assets/download (2).jpeg';
import malaSaladImage from '../assets/images.jpeg';

const products = [
  {
    image: labStarterImage,
    title: 'Larb Starter 3-Pack',
    price: '$12.00 (CAD)',
  },
  {
    image: lemongrassBBQImage,
    title: 'Lemongrass BBQ Starter 3-Pack',
    price: '$12.00 (CAD)',
  },
  {
    image: eastAsianSamplerImage,
    title: 'The East Asian Sampler',
    price: '$22.00 (CAD)',
  },
  {
    image: malaSaladImage,
    title: 'Mala Salad Starter 3-Pack',
    price: '$12.00 (CAD)',
  },
];

const Bestsellers = () => {
  return (
    <div className="py-8 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6  text-[#8B4513]">Get your hands on our bestsellers 🔥</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
