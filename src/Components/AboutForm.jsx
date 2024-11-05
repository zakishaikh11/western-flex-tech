import React, { useEffect, useRef, useState } from 'react';
import aboutImage from './aboutBg.jpg'; // Path to your About image

const AboutForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        // Check if the section is in view
        if (top < window.innerHeight && top >= 0) {
          setIsVisible(true);
          // Remove event listener once it is visible
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-24 bg-gray-900 text-gray-100 relative overflow-hidden transition-transform duration-700 ease-in-out ${isVisible ? 'transform translate-y-0 scale-100 opacity-100' : 'transform translate-y-10 scale-90 opacity-0'}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{ backgroundImage: `url(${aboutImage})`, opacity: 0.6 }}
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-10 relative z-10">
        {/* About Section */}
        <div className="w-full lg:w-1/2 p-8 rounded-lg shadow-lg bg-gray-800 bg-opacity-90">
          <h2 className="text-5xl font-bold mb-4 text-gradient">About Us</h2>
          <p className="text-xl mb-4 leading-relaxed text-gray-300">
            Welcome to <span className="text-gradient font-semibold">WesternFlex Tech</span>, where innovation meets excellence. Our team of dedicated professionals specializes in providing cutting-edge web development and digital marketing solutions designed to meet your specific business needs.
          </p>
          <p className="text-xl mb-4 leading-relaxed text-gray-300">
            With years of experience and a passion for technology, we work collaboratively with our clients to understand their goals and deliver results that not only meet but exceed expectations. Our focus is on helping your business grow through effective online strategies that drive engagement and conversion.
          </p>
          <p className="text-2xl mb-4 leading-relaxed text-gradient font-semibold">
            Fill out this form, and our dedicated team will reach out to you shortly!
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 p-8 rounded-lg shadow-lg bg-gray-800 bg-opacity-90">
          <h2 className="text-5xl font-bold mb-6 text-gradient">Contact Us</h2>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-transparent bg-white bg-opacity-10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out shadow-md"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-transparent bg-white bg-opacity-10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out shadow-md"
              required
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="border border-transparent bg-white bg-opacity-10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out shadow-md"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border border-transparent bg-white bg-opacity-10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out shadow-md"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-teal-400 to-blue-600 text-white py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:from-blue-600 hover:to-teal-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Gradient Text Styles */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, #ff758c, #ff7eb3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default AboutForm;
