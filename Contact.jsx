import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.comment) tempErrors.comment = 'Comment is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data
      console.log('Form submitted successfully', formData);
      // Clear form data if needed
      setFormData({
        name: '',
        email: '',
        phone: '',
        comment: '',
      });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f5f0df] p-8">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Phone Card */}
        <div className="bg-white text-[#551a0b] p-6 rounded-lg shadow-md w-full max-w-sm hover:bg-[#f5f0df] transition-colors">
          <div className="flex items-center mb-4">
            <FaPhone className="text-2xl mr-2" />
            <h3 className="text-xl font-semibold">Phone</h3>
          </div>
          <p className="text-lg">18001036363</p>
        </div>
        
        {/* Email Card */}
        <div className="bg-white text-[#551a0b] p-6 rounded-lg shadow-md w-full max-w-sm hover:bg-[#f5f0df] transition-colors">
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-2xl mr-2" />
            <h3 className="text-xl font-semibold">Email</h3>
          </div>
          <p className="text-lg">heaven2@gmail.com</p>
        </div>
        
        {/* Address Card */}
        <div className="bg-white text-[#551a0b] p-6 rounded-lg shadow-md w-full max-w-sm hover:bg-[#f5f0df] transition-colors">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-2xl mr-2" />
            <h3 className="text-xl font-semibold">Address</h3>
          </div>
          <p className="text-lg">9, LB Road, Adyar, Chennai</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white text-[#551a0b] p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="name" className="text-sm font-medium text-[#551a0b]">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-3 border-2 border-[#551a0b] rounded-lg focus:outline-none focus:border-[#551a0b]"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="email" className="text-sm font-medium text-[#551a0b]">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-3 border-2 border-[#551a0b] rounded-lg focus:outline-none focus:border-[#551a0b]"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="phone" className="text-sm font-medium text-[#551a0b]">Phone number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-3 border-2 border-[#551a0b] rounded-lg focus:outline-none focus:border-[#551a0b]"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="comment" className="text-sm font-medium text-[#551a0b]">Comment *</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className="mt-1 p-3 border-2 border-[#551a0b] rounded-lg focus:outline-none focus:border-[#551a0b]"
              placeholder="Enter your comment"
              rows="4"
            ></textarea>
            {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment}</p>}
          </div>
          <button
            type="submit"
            className="bg-[#551a0b] text-white px-6 py-2 rounded-full hover:bg-[#781f11] transition-colors"
          >
            Send
          </button>
        </form>
      </div>

      {/* Google Maps Link */}
      <div className="mt-8">
        <a
          href="https://maps.app.goo.gl/JeQSQrG8qqyXJZYJA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#551a0b] text-lg underline hover:text-[#781f11]"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
};

export default Contact;

