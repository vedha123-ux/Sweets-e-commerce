import React from 'react';

const CategoryCard = ({ image, title, description, items }) => {
  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex items-center">
    <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        <p className="text-sm text-gray-500 mt-4">{items} Items</p>
      </div>
      <img
        src={image}
        alt={title}
        className="w-32 h-32 object-cover rounded-md mr-4"
      />
    </div>
  );
};

export default CategoryCard;
