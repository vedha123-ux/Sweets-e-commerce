
import React from 'react';
import growthIcon from '../assets/growth (1).png';
import qualityIcon from '../assets/achievement (1).png';
import environmentIcon from '../assets/save.png';
import deliveryIcon from '../assets/fast-delivery.png';

const features = [
  {
    icon: growthIcon,
    description: ' Where Sustainability Meets Taste.',
  },
  {
    icon: qualityIcon,
    description: 'Freshness and Quality Handpicked for Your Table.',
  },
  {
    icon: environmentIcon,
    description: " Eco-Friendly Farming for a Healthier Planet",
  },
  {
    icon: deliveryIcon,
    description: 'We deliver within 20 minutes with our own express delivery service.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-red-800">WHY CHOOSE  US</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs">
            <img src={feature.icon} alt="Feature Icon" className="w-16 h-16 mb-4" />
            <p className="text-sm md:text-base text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
