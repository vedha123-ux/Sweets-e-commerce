// src/Home.jsx
import React from 'react';
import backgroundImage from '../assets/colorful-transformed.jpeg'; 
import CategoryCard from '../components/CategoryCard';
import WhyChooseUs from '../components/WhyChoose';
import Bestseller from '../components/BestSeller';
import NewArrivals from '../components/NewArrivals';
import SweetWebsiteSection from '../components/SweetWebsiteSection';
import Footer from '../components/Footer';

// Import your category images here
import assortedSweetsImage from '../assets/assorted-sweets.avif';
import traditionalSweetsImage from '../assets/traditional sweets.jpg';
import eliteGheeSweetsImage from '../assets/elite-sweets.jpeg';
import breadCakesImage from '../assets/cake.avif';

const Home = () => {
  return (
    <div>
      {/* Diwali Specials Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Festival of Light Specials</h1>
            <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Top Categories Section */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-[#8B4513]">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard 
            image={assortedSweetsImage}
            title="Assorted Sweets"
            description="Delight in Every Bite, a Treat for Every Taste."
            items="4"
          />
          <CategoryCard 
            image={traditionalSweetsImage}
            title="Traditional Sweets"
            description="The rich cultural heritage and the authentic taste of traditional sweets."
            items="21"
          />
          <CategoryCard 
            image={eliteGheeSweetsImage}
            title="Elite Ghee Sweets"
            description="Celebrate life's sweetest moments with our ghee treats"
            items="8"
          />
          <CategoryCard 
            image={breadCakesImage}
            title="Bread & Cakes"
            description="All you need is love and a slice of cake."
            items="8"
          />
        </div>
      </div>

      {/* About Us */}
      <WhyChooseUs />

      {/* Best Seller */}
      <Bestseller />

      {/* New Arrivals */}
      <NewArrivals />

      {/* Sweet Website Section */}
      <div className="flex justify-center items-center py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl">
          {/* The Rectangular Box */}
          <div className="border border-gray-300 rounded-lg p-6">
            <SweetWebsiteSection />
           </div>
           </div>
      </div>
       {/* Footer Section */}
       <Footer />
    </div>
  );
};

export default Home;
