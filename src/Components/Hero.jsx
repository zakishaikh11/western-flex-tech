import React, { useEffect, useState } from 'react';
import heroImage from './hero-img.png';

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    const slideInTimer = setTimeout(() => {
      setSlideIn(true);
    }, 800); // Delay for slide-in animation

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(slideInTimer);
    };
  }, []);

  return (
    <section
      className={`bg-white text-darkblue-900 flex flex-col md:flex-row items-center justify-between transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      style={{ minHeight: 'calc(100vh + 4rem)', marginBottom: '-4rem' }} // Adjusted height to avoid collision
    >
      {/* Text Section */}
      <div className={`container md:w-1/2 p-4 md:pl-12 transition-transform duration-500 transform ${slideIn ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
        <h1 className="text-5xl font-semibold mb-2 text-left text-blue-400 transition-transform duration-700 delay-200 transform hover:scale-105">
          Join the Future with <span className="text-yellow-400 font-bold italic">WesternFlex Tech</span>
        </h1>
        <hr className="border-t border-4 border-yellow-300 w-50 mb-6 transition-opacity duration-700 delay-300" style={{ opacity: slideIn ? 1 : 0 }} />
        <p className="text-xl mb-6 text-left text-gray-700 transition-transform duration-700 delay-400 transform hover:scale-105">
          At WesternFlex Tech, we specialize in transforming your ideas into innovative digital solutions. Our dedicated team of experts in web development and digital marketing is committed to driving your business forward. Discover how we can elevate your online presence and help you connect with your audience. <span className="text-blue-400 font-bold">Don’t wait—let’s start your journey today!</span>
        </p>
        <div className="text-left">
          <button className="border-2 border-blue-500 text-blue-600 text-xl py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-700 hover:bg-blue-500 hover:text-yellow-300 transform hover:scale-105">
            Reach Out!
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <img
          src={heroImage}
          alt="Hero"
          className="max-w-85 h-auto transition-transform duration-500 hover:scale-105 mb-0"
        />
      </div>
    </section>
  );
};

export default Hero;
