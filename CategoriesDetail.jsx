import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline'; // Import the wishlist icon
import { products } from '../Data/products';




const CategoryDetailPage = () => {
  const { id } = useParams();
  const categoryId = parseInt(id);
  const product = products.find(p => p.id === categoryId);

  if (!product) {
    return <div>Category not found</div>;
  }

  const handleAddToWishlist = (imageName) => {
    // Implement your add to wishlist logic here
    alert(`Added ${imageName} to wishlist`);
  };

  return (
    <div className="bg-[#faf3e3] min-h-screen py-12 px-6 text-[#40322f] font-sans">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.images.slice(0, 10).map((image, index) => (
          <div key={index} className="relative border border-[#e4d4c8] p-4 rounded-lg bg-white">
           <Link to={`/categories/${categoryId}/products/${index}`}>
              <img
                src={image.src}
                alt={`Categories ${categoryId} Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="absolute top-2 right-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the link click when adding to wishlist
                    handleAddToWishlist(image.name);
                  }}
                  className="bg-[#40322f] text-white p-2 rounded-full"
                >
                  <HeartIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="text-center mt-2">
                <p className="text-lg font-semibold mb-2">{image.name}</p>
                <p className="text-lg font-semibold mb-2">{image.price}</p>
                <p className="text-lg font-semibold mb-2">{image.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailPage;
