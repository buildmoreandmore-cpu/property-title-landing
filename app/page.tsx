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
    
    // Validate form fields
    if (!formData.fullName.trim()) {
      alert("Please enter your full name");
      return;
    }
    if (!formData.email.trim()) {
      alert("Please enter your email address");
      return;
    }
    if (!formData.propertyAddress.trim()) {
      alert("Please enter the property address");
      return;
    }
    
    // Create mailto link with form data
    const subject = encodeURIComponent("Property Title Issue - New Lead");
    const body = encodeURIComponent(
      `New Property Title Lead:

Full Name: ${formData.fullName}
Email: ${formData.email}
Property Address: ${formData.propertyAddress}

Please contact this lead regarding their property title issues.`
    );
    
    const mailtoLink = `mailto:martin@homeowner-support.com?subject=${subject}&body=${body}`;
    
    // Open email client with mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with v0 block tag */}
        <div className="text-center mb-8">
          
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
        <div className="max-w-md mx-auto mb-20">
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
                    Don&apos;t Let Legal Issues Block Your Sale Any Longer!
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            We&apos;ve Solved Complex Property Issues for Thousands
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="flex text-green-500 mb-4">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &quot;Had a messy inheritance with 3 siblings. They sorted out all the title issues and we got our cash offer!&quot;
              </p>
              <p className="text-green-600 font-semibold">- Sarah M.</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="flex text-green-500 mb-4">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &quot;Divorce left us with co-ownership problems. They handled everything and we closed in 10 days.&quot;
              </p>
              <p className="text-green-600 font-semibold">- Michael R.</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="flex text-green-500 mb-4">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &quot;Property had liens and title disputes for years. Finally found someone who could actually solve it!&quot;
              </p>
              <p className="text-green-600 font-semibold">- Jennifer L.</p>
            </div>
          </div>
          
        </div>

        {/* We Solve What Others Can't Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            We Solve What Others Can&apos;t
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Title Issue Resolution */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Title Issue Resolution</h3>
              <p className="text-gray-600">Clear liens, disputes, and ownership problems</p>
            </div>

            {/* Co-Ownership Solutions */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Co-Ownership Solutions</h3>
              <p className="text-gray-600">Handle multiple heirs and divorce situations</p>
            </div>

            {/* Legal Expertise */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Legal Expertise</h3>
              <p className="text-gray-600">Navigate complex inheritance and property law</p>
            </div>

            {/* Fair Cash Offers */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fair Cash Offers</h3>
              <p className="text-gray-600">Get paid despite the complications</p>
            </div>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Licensed & Certified Property Specialists
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-center">
              <span className="text-gray-600 font-medium">Real Estate Law Certified</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-center">
              <span className="text-gray-600 font-medium">Title Insurance Licensed</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-center">
              <span className="text-gray-600 font-medium">Probate Court Approved</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-center">
              <span className="text-gray-600 font-medium">Better Business Bureau A+</span>
            </div>
          </div>
          
        </div>
      </div>

      {/* Final CTA Footer */}
      <div className="bg-green-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stop Letting Title Issues Block Your Sale
          </h2>
          
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get expert help with inheritance disputes, co-ownership problems, and complex title issues.
          </p>
          
          <button 
            onClick={() => {
              document.querySelector('input[name="fullName"]')?.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
              });
            }}
            className="bg-green-700 hover:bg-green-800 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg"
          >
            Solve My Property Issues Now!
          </button>
        </div>
      </div>
    </div>
  );
}