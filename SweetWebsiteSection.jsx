import React from 'react';

const features = [
  {
    number: '01',
    title: 'Delicious Treats',
    description: 'Whether you crave sweets or want to indulge in a special treat, our selection has something for everyone.',
  },
  {
    number: '02',
    title: 'Handcrafted Goodies',
    description: 'All our sweets are made with love and care, ensuring every bite is as delicious as the last.',
  },
  {
    number: '03',
    title: 'Special Offers',
    description: 'Check out our best deals and offers, perfect for every sweet lover.',
  },
  {
    number: '04',
    title: 'Custom Orders',
    description: 'Looking for something special? We offer custom orders to make your celebration even sweeter.',
  },
  {
    number: '05',
    title: 'Nationwide Delivery',
    description: 'Enjoy our sweets from the comfort of your home, no matter where you are in the country.',
  },
];

const SweetWebsiteSection = () => {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#8B4513]">WHY WE</h2>
      <p className="text-center text-gray-700 mb-10">
        Indulge in our range of handcrafted sweets, made to bring joy to your day. From classic favorites to new creations, there's something for everyone.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div className="flex items-center">
              <div className="text-[#8B4513] text-4xl font-bold mr-4">{feature.number}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-yellow-500 p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-semibold text-white mb-2">JOIN US!</h3>
          <p className="text-white mb-4">First purchase with 60% discount</p>
          <button className="bg-white text-yellow-500 py-2 px-4 rounded-md font-semibold hover:bg-yellow-600 hover:text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SweetWebsiteSection;
