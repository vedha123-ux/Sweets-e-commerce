import React from "react";
import bannerImage from "../assets/blogs.jpg";

// Dummy blog images
import blog1 from "../assets/mumbai.jpg";
import blog2 from "../assets/sweets-of-india.webp";
import blog3 from "../assets/sweet shopss.jpg";

const FoundersSection = () => {
  const blogs = [
    {
      title: "Top 10 Sweet Shops in the Mumbai",
      description: "Discover the best sweet shops and their famous treats.",
      image: blog1,
      url: "https://lbb.in/mumbai/best-sweet-shops-mumbai/", // External or internal link
    },
    {
      title: "Traditional Sweets from Different Cultures",
      description: "Explore the unique sweets from different countries.",
      image: blog2,
      url: "https://anandhaassweets.com/blogs/news/the-importance-of-sweets-in-indian-tradition?srsltid=AfmBOop3ALbRXRtvZAtX1Dvs9topH-FcxVGZMM3TQTokdmboyCtxIfH5", // External or internal link
    },
    {
      title: "How to Start Your Own Sweet Shop",
      description: "A guide on setting up your own dream sweet shop.",
      image: blog3,
      url: "https://okcredit.in/blog/how-to-open-a-sweet-shop/#google_vignette", // External or internal link
    },
  ];

  // Function to handle click and redirect
  const handleCardClick = (url) => {
    window.location.href = url; // Redirects to the URL when card is clicked
  };

  return (
    <section>
      {/* Banner Section */}
      <div
        className="bg-cover bg-center h-80 flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center bg-black bg-opacity-50 py-2 px-4 rounded">
          Blogs of Heavenly Bites
        </h1>
      </div>

      {/* Blogs Section */}
      <div className="container mx-auto my-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Latest Blogs on Sweet Shops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="cursor-pointer max-w-sm bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
              onClick={() => handleCardClick(blog.url)} // Card becomes clickable
            >
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <span className="text-indigo-600 hover:text-indigo-800 font-semibold">
                  Read More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
