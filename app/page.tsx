"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    propertyAddress: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add form submission logic
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with v0 block tag */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gray-200 text-gray-600 px-3 py-1 rounded-md text-sm mb-8">
            v0 block
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-800">Stuck with </span>
            <span className="text-green-600">Title Issues</span>
            <span className="text-gray-800"> or </span>
            <span className="text-green-600">Co-Ownership Problems?</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We Specialize in Solving Complex Property Issues That Block Your Sale
          </p>
          
          {/* Service tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-orange-50 border border-orange-200 rounded-lg px-4 py-2">
              <span className="text-orange-600 mr-2">⚠</span>
              <span className="text-orange-700 font-medium">Title Disputes</span>
            </div>
            <div className="flex items-center bg-orange-50 border border-orange-200 rounded-lg px-4 py-2">
              <span className="text-orange-600 mr-2">👥</span>
              <span className="text-orange-700 font-medium">Co-Ownership Issues</span>
            </div>
            <div className="flex items-center bg-orange-50 border border-orange-200 rounded-lg px-4 py-2">
              <span className="text-orange-600 mr-2">📋</span>
              <span className="text-orange-700 font-medium">Inheritance Problems</span>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="propertyAddress"
                  placeholder="Property Address"
                  value={formData.propertyAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Get My Problem Solved Now!
              </button>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-red-500 mr-2">🛑</span>
                  <span className="text-red-700 font-medium">
                    Don't Let Legal Issues Block Your Sale Any Longer!
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}