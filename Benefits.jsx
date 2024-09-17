import React from 'react';
import breadImage from '../assets/benefits.jpg'; // Adjust path to your image file

const BenefitsOfBread = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800">Benefits Of Breads</h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
      Sweets can provide a quick source of energy, elevate mood, and offer a moment of enjoyment and comfort.
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-around mt-8 space-y-8 lg:space-y-0">
        {/* Benefit Cards */}
        <div className="flex flex-col space-y-4">
          <div className="bg-orange-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Energy</h3>
            <p className="text-gray-600">Sweet can provide a quick energy boost.</p>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Stress Relief</h3>
            <p className="text-gray-600">Sweets can help you get through stressful moments.</p>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Mood</h3>
            <p className="text-gray-600">Sweets can improve your mood and mental health.</p>
          </div>
        </div>

        {/* Bread Image */}
        <div className="flex justify-center">
          <img
            src={breadImage}
            alt="Bread"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Benefit Cards */}
        <div className="flex flex-col space-y-4">
          <div className="bg-orange-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Social Interaction</h3>
            <p className="text-gray-600">Facilitates bonding and socialization during shared treats</p>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Creativity</h3>
            <p className="text-gray-600">Inspires culinary creativity through diverse recipes and presentations.</p>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Tradition and Celebration</h3>
            <p className="text-gray-600">Plays a role in cultural and personal celebrations and traditions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfBread;
