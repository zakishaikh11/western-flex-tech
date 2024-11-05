import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import feedbackImage from './person1.jpeg'; // Replace with the actual path to your feedback image

const Feedbacks = () => {
  const feedbacks = [
    {
      image: feedbackImage,
      text: "Thanks to our partnership with WesternFlex Tech, we're successfully using artificial intelligence to transform our finance function.",
      name: "ABC DEF",
      company: "Western Flex",
    },
    {
      image: feedbackImage,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      name: "John Doe",
      company: "Company XYZ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
      setFadeIn(true);
    }, 1000); // Duration matches the CSS transition time
  };

  return (
    <section className="py-24 bg-gray-700 text-yellow-300 overflow-hidden">
      <h2 className="text-center text-4xl font-bold mb-12">Feedback</h2>
      <div className="container mx-auto w-4/5">
        <div
          className={`flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-8 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={feedbacks[currentIndex].image}
              alt={feedbacks[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Feedback Text Section */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center bg-gray-900">
            <p className="text-2xl lg:text-5xl text-gray-300 italic font-medium leading-relaxed mb-6">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-5xl text-yellow-600 mr-3 align-top" /><br />
              {feedbacks[currentIndex].text}<br />
              <FontAwesomeIcon icon={faQuoteRight} className="text-5xl text-blue-600 ml-3 align-top" />
            </p>
            <h3 className="font-bold text-yellow-300 text-xl">- {feedbacks[currentIndex].name}</h3>
            <p className="text-xl font-semibold text-blue-600">{feedbacks[currentIndex].company}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
