// src/components/ServiceDesc.jsx
import React from 'react';
import AboutForm from './AboutForm';
const ServiceDesc = ({ service }) => {
  return (
    <div className="bg-gray-50 px-8 lg:px-12 py-20">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">{service.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed font-semibold">{service.introduction}</p>
        </div>

        {/* Image Section */}
        <div className="w-full mb-8">
          <img 
            src={service.image} 
            alt={service.title} 
            className="mx-auto w-full h-96 object-cover rounded-md shadow-lg"
          />
        </div>

        {/* Description Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>
        </div>

        {/* Process Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">How We Work</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.process}</p>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.whyUs}</p>
        </div>

        {/* Conclusion Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">Conclusion</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.conclusion}</p>
        </div>

        {/* Call to Action Button */}
       <AboutForm/>
      </div>
    </div>
  );
};

export default ServiceDesc;