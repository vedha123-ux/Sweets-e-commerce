import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Nut from '../assets/Nut.jpeg'
import sweet1 from '../assets/Candies.jpg'; // Replace with your background image
import sweet2 from '../assets/baked goods.jpeg';
import sweet3 from '../assets/icecream.jpeg';
import sweet4 from '../assets/sweets-of-india.webp';


const products = [
  { id: 1, name: 'Candies', price: 50.00, imageSrc: sweet1, status: 'In Stock' },
  { id: 2, name: 'Baked Snacks', price: 40.00, imageSrc: sweet2, status: 'Out of Stock' },
  { id: 3, name: 'Frozen Desserts', price: 30.00, imageSrc: sweet3, status: 'In Stock' },
  { id: 4, name: 'Traditional Sweets', price: 60.00, imageSrc: sweet4, status: 'In Stock' },
];

const SweetCategoryPage = () => {
  const [availabilityFilter, setAvailabilityFilter] = useState('All');
  const [sortOption, setSortOption] = useState('Best Selling');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(60);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);

  const filteredProducts = products
    .filter(product => availabilityFilter === 'All' || product.status === availabilityFilter)
    .filter(product => product.price >= minPrice && product.price <= maxPrice)
    .sort((a, b) => {
      switch (sortOption) {
        case 'Price Low to High':
          return a.price - b.price;
        case 'Price High to Low':
          return b.price - a.price;
        case 'Alphabetically A-Z':
          return a.name.localeCompare(b.name);
        case 'Alphabetically Z-A':
          return b.name.localeCompare(a.name);
        case 'Date Old to New':
          return a.id - b.id;
        case 'Date New to Old':
          return b.id - a.id;
        default:
          return 0;
      }
    });

  const handlePriceReset = () => {
    setMinPrice(0);
    setMaxPrice(Math.max(...products.map(p => p.price)));
  };

  const togglePriceDropdown = () => {
    setIsPriceDropdownOpen(!isPriceDropdownOpen);
  };

  return (
    <div className="bg-[#faf3e3] min-h-screen py-12 px-6 text-[#40322f] font-sans">
      {/* Background Image Section */}
      <div
        className="relative bg-cover bg-center h-64 mb-8"
        style={{ backgroundImage: `url(${Nut})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">Categories</h2>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-6 items-center">
          <span className="text-lg font-bold">Filter:</span>

          {/* Availability Dropdown */}
          <div className="relative">
            <select
              className="appearance-none bg-transparent font-medium border-none text-[#40322f] focus:ring-0 text-lg pr-8"
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
              style={{
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8"><path fill="%2340322f" d="M6 0L0 8h12z"/></svg>')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
              }}
            >
              <option value="All">Availability</option>
              <option value="In Stock">In stock</option>
              <option value="Out of Stock">Out of stock</option>
            </select>
          </div>

          {/* Price Filter */}
          <div className="relative">
            <div className="flex items-center space-x-2">
              <span
                className="text-lg font-bold cursor-pointer"
                onClick={togglePriceDropdown}
              >
                Price
                <ChevronDownIcon className="inline w-5 h-5 ml-1 text-[#40322f]" />
              </span>
              {isPriceDropdownOpen && (
                <div className="absolute top-full mt-2 p-4 rounded-lg bg-white border border-[#e4d4c8] z-10">
                  <div className="absolute top-0 right-0 p-2">
                    <button onClick={handlePriceReset} className="text-sm font-semibold text-[#40322f]">
                      Reset
                    </button>
                  </div>
                  <p className="text-sm mb-2">The highest price is ${Math.max(...products.map(p => p.price)).toFixed(2)}</p>
                  <div className="flex space-x-2">
                    <div className="flex items-center border border-[#836953] rounded-lg px-2 py-1">
                      <span className="text-sm">$</span>
                      <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        className="w-20 text-sm bg-transparent focus:outline-none ml-2"
                        min="0"
                      />
                    </div>
                    <div className="flex items-center border border-[#836953] rounded-lg px-2 py-1">
                      <span className="text-sm">$</span>
                      <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-20 text-sm bg-transparent focus:outline-none ml-2"
                        min="0"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sort By Dropdown */}
        <div className="relative">
          <span className="text-lg font-bold">Sort by:</span>
          <select
            className="appearance-none bg-transparent font-medium border-none text-[#40322f] focus:ring-0 text-lg ml-2 pr-8"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            style={{
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8"><path fill="%2340322f" d="M6 0L0 8h12z"/></svg>')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
            }}
          >
            <option value="Featured">Featured</option>
            <option value="Best Selling">Best Selling</option>
            <option value="Alphabetically A-Z">Alphabetically A-Z</option>
            <option value="Alphabetically Z-A">Alphabetically Z-A</option>
            <option value="Price Low to High">Price Low to High</option>
            <option value="Price High to Low">Price High to Low</option>
            <option value="Date Old to New">Date Old to New</option>
            <option value="Date New to Old">Date New to Old</option>
            <option value="All">All</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <Link
            key={product.id}
            to={`/Categories/${product.id}`}
            className="border border-[#e4d4c8] p-4 rounded-lg hover:shadow-lg transition-shadow bg-white"
          >
            <img
              src={product.imageSrc}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-[#836953] mb-2">${product.price.toFixed(2)} CAD</p>
              <p
                className={`text-sm ${
                  product.status === 'In Stock' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {product.status}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SweetCategoryPage;
