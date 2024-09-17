import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate for redirection
import { FaSearch, FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // State for cart modal

  const navigate = useNavigate(); // Hook for navigation

  // Function to close the dropdown on scroll
  const handleScroll = () => {
    if (isProfileDropdownOpen) {
      setIsProfileDropdownOpen(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isProfileDropdownOpen]);

  // Function to handle the cart icon click
  const handleCartClick = () => {
    setIsCartModalOpen(true); // Show the cart modal first
  };

  // Function to handle redirection to the cart page
  const proceedToCartPage = () => {
    setIsCartModalOpen(false); // Close the modal
    navigate('/cart'); // Redirect to the cart page
  };

  return (
    <nav className="bg-[rgb(243,229,171)] shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-lg text-[#8B4513]">
                Heavenly Bites
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="py-4 px-2 text-[#8B4513] hover:text-[#F3E5AB] hover:bg-[#8B4513] transition duration-300 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="py-4 px-2 text-[#8B4513] hover:text-[#F3E5AB] hover:bg-[#8B4513] transition duration-300 font-semibold"
            >
              Shop
            </Link>
            <Link
              to="/Categories"
              className="py-4 px-2 text-[#8B4513] hover:text-[#F3E5AB] hover:bg-[#8B4513] transition duration-300 font-semibold"
            >
              Categories
            </Link>
            <Link
              to="/blog"
              className="py-4 px-2 text-[#8B4513] hover:text-[#F3E5AB] hover:bg-[#8B4513] transition duration-300 font-semibold"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="py-4 px-2 text-[#8B4513] hover:text-[#F3E5AB] hover:bg-[#8B4513] transition duration-300 font-semibold"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="py-4 px-2 text-[#8B4513] hover:text-[#F3E5AB] hover:bg-[#8B4513] transition duration-300 font-semibold"
            >
              Contact
            </Link>
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                className={`transition-all duration-300 border-2 border-[#8B4513] py-1 px-2 rounded-md ${
                  isSearchExpanded ? 'w-48 opacity-100' : 'w-0 opacity-0'
                }`}
                placeholder="Search"
                onBlur={() => setIsSearchExpanded(false)}
              />
              <button
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                className="absolute right-0 top-0 mt-1.5 mr-2 text-[#8B4513] hover:text-[#000000]"
              >
                {isSearchExpanded ? <FaTimes size={18} /> : <FaSearch size={18} />}
              </button>
            </div>

            {/* Cart Icon */}
            <button
              onClick={handleCartClick}
              className="text-[#8B4513] hover:text-[#000000]"
            >
              <FaShoppingCart size={20} />
            </button>

            {/* Profile Icon with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="text-[#8B4513] hover:text-[#000000]"
              >
                <FaUserCircle size={24} />
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <Link
                    to="/profile/address"
                    className="block px-4 py-2 text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F3E5AB] transition duration-300"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Address
                  </Link>
                  <Link
                    to="/profile/wishlist"
                    className="block px-4 py-2 text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F3E5AB] transition duration-300"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Wishlist
                  </Link>
                  <Link
                    to="/profile/orders"
                    className="block px-4 py-2 text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F3E5AB] transition duration-300"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Orders
                  </Link>
                  <Link
                    to="/profile/reviews"
                    className="block px-4 py-2 text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F3E5AB] transition duration-300"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Reviews
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={() => setShowMenu(!showMenu)}
              >
                <svg
                  className="w-6 h-6 text-[#8B4513] hover:text-[#F3E5AB]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${showMenu ? 'block' : 'hidden'} mobile-menu`}>
        <ul>
          <li>
            <Link
              to="/"
              className="block text-sm px-2 py-4 bg-[#8B4513] text-[#F3E5AB] font-semibold"
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="block text-sm px-2 py-4 text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F3E5AB] transition duration-300"
              onClick={() => setShowMenu(false)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/Categories"
              className="block text-sm px-2 py-4 text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F3E5AB] transition duration-300"
              onClick={() => setShowMenu(false)}
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="block text-sm px-2 py-4 text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F3E5AB] transition duration-300"
              onClick={() => setShowMenu(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-sm px-2 py-4 text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F3E5AB] transition duration-300"
              onClick={() => setShowMenu(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-sm px-2 py-4 text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F3E5AB] transition duration-300"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Cart Modal */}
      {isCartModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Cart</h2>
            <p>Your cart is currently empty!</p>
            <button
              onClick={() => setIsCartModalOpen(false)}
              className="mt-4 py-2 px-4 bg-[#8B4513] text-white rounded-md"
            >
              Close
            </button>
            <button
              onClick={proceedToCartPage}
              className="ml-2 mt-4 py-2 px-4 bg-[#8B4513] text-white rounded-md"
            >
              Proceed to Cart
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
