import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/shop"); // Redirect to the shop page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl font-semibold mb-6">No Cart Product Found</h1>
      <button
        onClick={handleShopNow}
        className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
      >
        Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
