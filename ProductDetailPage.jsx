import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../Data/products';
import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline'; // Wishlist and Share icons
import { FaLink, FaRegListAlt, FaAppleAlt, FaShippingFast, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Icons for dropdowns

const ProductDetailPage = () => {
  const { id, productIndex } = useParams();
  const navigate = useNavigate();
  const categoryId = parseInt(id);
  const product = products.find(p => p.id === categoryId);
  const productDetail = product ? product.images[productIndex] : null;

  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('250');

  const [showIngredients, setShowIngredients] = useState(false);
  const [showNutritionalInfo, setShowNutritionalInfo] = useState(false);
  const [showShipping, setShowShipping] = useState(false);

  if (!productDetail) {
    return <div>Product not found</div>;
  }

  // Handle Add to Cart functionality
  const handleAddToCart = () => {
    if (!localStorage.getItem('userLoggedIn')) {
      navigate('/Login');
      return;
    }
    alert(`Added ${quantity} ${productDetail.name} (${selectedWeight}g) to cart`);
  };

  // Handle Add to Wishlist functionality
  const handleAddToWishlist = () => {
    if (!localStorage.getItem('userLoggedIn')) {
      navigate('/Login');
      return;
    }
    alert(`Added ${productDetail.name} to wishlist`);
  };

  // Handle Buy Now functionality
  const handleBuyNow = () => {
    if (!localStorage.getItem('userLoggedIn')) {
      navigate('/Login');
      return;
    }
    alert(`Proceeding to buy ${quantity} ${productDetail.name} (${selectedWeight}g)`);
  };

  // Handle Copy Link functionality
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  // Update price based on selected weight
  const getPrice = () => {
    let basePrice = parseFloat(productDetail.price.replace('$', ''));
    if (selectedWeight === '700') {
      basePrice *= 2.5; // Adjust the multiplier as needed
    }
    return `$${basePrice.toFixed(2)}`;
  };

  return (
    <div className="bg-[#faf3e3] min-h-screen py-12 px-6 text-[#40322f] font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <img
            src={productDetail.src}
            alt={productDetail.name}
            className="w-full h-auto object-cover rounded-lg"
          />
          {/* Small images */}
          <div className="absolute bottom-2 right-2 flex space-x-2">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 object-cover border-2 border-white rounded-lg cursor-pointer"
                onClick={() => console.log(`Clicked thumbnail ${index + 1}`)} // Implement thumbnail click logic as needed
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{productDetail.name}</h1>
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setSelectedWeight('250')}
                className={`border px-4 py-2 rounded ${selectedWeight === '250' ? 'bg-[#40322f] text-white' : 'bg-white text-[#40322f]'}`}
              >
                250g
              </button>
              <button
                onClick={() => setSelectedWeight('700')}
                className={`border px-4 py-2 rounded ${selectedWeight === '700' ? 'bg-[#40322f] text-white' : 'bg-white text-[#40322f]'}`}
              >
                700g
              </button>
            </div>
            <p className="text-xl mb-4">{getPrice()}</p>
            <div className="mb-4">
              <label htmlFor="quantity" className="block mb-2">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(e.target.value)}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <button
                onClick={handleCopyLink}
                className="bg-[#e4d4c8] text-black py-2 px-4 rounded hover:bg-[#d3bda0] flex items-center"
              >
                <FaLink className="w-4 h-4 mr-2" />
                Copy Link
              </button>
            </div>
            <h2 className="text-2xl font-semibold mb-2">About This Product:</h2>
            <p className="mb-4">{productDetail.description}</p>

            {/* Dropdown Sections */}
            <div className="mt-6">
              <button
                onClick={() => setShowIngredients(!showIngredients)}
                className="flex items-center border px-4 py-2 rounded mb-2 w-full text-left bg-[#e4d4c8] text-black hover:bg-[#d3bda0]"
              >
                <FaAppleAlt className="w-5 h-5 mr-2" />
                Ingredients
                {showIngredients ? (
                  <FaChevronUp className="w-5 h-5 ml-auto" />
                ) : (
                  <FaChevronDown className="w-5 h-5 ml-auto" />
                )}
              </button>
              {showIngredients && (
                <div className="bg-white border p-4 rounded mb-4">
                  <p>Water, Sugar, Lemon Juice Concentrate, Natural Flavors, Preservatives.</p>
                </div>
              )}

              <button
                onClick={() => setShowNutritionalInfo(!showNutritionalInfo)}
                className="flex items-center border px-4 py-2 rounded mb-2 w-full text-left bg-[#e4d4c8] text-black hover:bg-[#d3bda0]"
              >
                <FaRegListAlt className="w-5 h-5 mr-2" />
                Nutritional Info
                {showNutritionalInfo ? (
                  <FaChevronUp className="w-5 h-5 ml-auto" />
                ) : (
                  <FaChevronDown className="w-5 h-5 ml-auto" />
                )}
              </button>
              {showNutritionalInfo && (
                <div className="bg-white border p-4 rounded mb-4">
                  <ul>
                    <li>Calories: 120</li>
                    <li>Total Fat: 0g</li>
                    <li>Sodium: 10mg</li>
                    <li>Total Carbohydrates: 30g</li>
                    <li>Sugars: 28g</li>
                  </ul>
                </div>
              )}

              <button
                onClick={() => setShowShipping(!showShipping)}
                className="flex items-center border px-4 py-2 rounded mb-2 w-full text-left bg-[#e4d4c8] text-black hover:bg-[#d3bda0]"
              >
                <FaShippingFast className="w-5 h-5 mr-2" />
                Shipping
                {showShipping ? (
                  <FaChevronUp className="w-5 h-5 ml-auto" />
                ) : (
                  <FaChevronDown className="w-5 h-5 ml-auto" />
                )}
              </button>
              {showShipping && (
                <div className="bg-white border p-4 rounded mb-4">
                  <p>Ships within 2-3 business days. Free shipping on orders over $50.</p>
                  <button
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                    className="flex items-center bg-[#40322f] text-white py-2 px-4 rounded hover:bg-[#2c2724]"
                  >
                    <ShareIcon className="w-5 h-5 mr-2" />
                    Share
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-[#40322f] text-white py-2 px-4 rounded hover:bg-[#2c2724]"
            >
              Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="flex items-center bg-[#40322f] text-white py-2 px-4 rounded hover:bg-[#2c2724]"
            >
              <HeartIcon className="w-5 h-5 mr-2" />
              Add to Wishlist
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-[#e4d4c8] text-black py-2 px-4 rounded hover:bg-[#d3bda0]"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
