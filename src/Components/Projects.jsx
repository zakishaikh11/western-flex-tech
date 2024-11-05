import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChartLine, faShieldAlt, faCode } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projects = [
    {
      icon: faShoppingCart,
      title: "WesternFlex Shop",
      description: "An online store offering a wide range of products.",
    },
    {
      icon: faChartLine,
      title: "Analytics Dashboard",
      description: "A data analytics platform to track and optimize KPIs.",
    },
    {
      icon: faShieldAlt,
      title: "Secure Payments",
      description: "A secure and efficient payment solution for e-commerce.",
    },
    {
      icon: faCode,
      title: "Custom CMS",
      description: "A custom-built content management system for businesses.",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(new Array(projects.length).fill(false));
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = projectRefs.current.indexOf(entry.target); // Find the index of the observed element
        if (entry.isIntersecting && index >= 0) {
          setVisibleCards((prev) => {
            const newVisibleCards = [...prev];
            newVisibleCards[index] = true;
            return newVisibleCards;
          });
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    });

    projectRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect(); // Cleanup on component unmount
    };
  }, []);

  return (
    <section className="py-24 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-12">Our Projects</h2>
      <div className="container mx-auto flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)} // Assign ref to the card
            className={`relative w-full sm:w-1/2 lg:w-1/4 bg-white shadow-lg p-6 text-center rounded-[30px] rounded-tr-none transition-all duration-700 transform ${visibleCards[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} // Apply fade and slide-up animation
          >
            {/* Icon container with larger size and positioning */}
            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-6 shadow-md">
              <FontAwesomeIcon icon={project.icon} className="text-4xl" />
            </div>
            <h3 className="mt-14 text-2xl font-semibold text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600 mt-4 mb-6">{project.description}</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Visit Page
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
