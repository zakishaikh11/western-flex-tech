import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import serviceImage1 from './digital-marketing-service.png'; // Path to your first service image
import serviceImage2 from './web-development-service.png'; // Path to your second service image

const Services = () => {
    const services = [
        {
            id: 1, // Add an ID for navigation
            image: serviceImage1,
            title: "Digital Marketing Service",
            description: "We provide a comprehensive suite of digital marketing services tailored to meet your business needs. Enhance your online presence today!",
        },
        {
            id: 2, // Add an ID for navigation
            image: serviceImage2,
            title: "Web Development Service",
            description: "Our web development services focus on creating stunning, user-friendly websites that drive engagement and conversions.",
        },
    ];

    const [visibleCards, setVisibleCards] = useState(new Array(services.length).fill(false));
    const serviceRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1, // Trigger when 10% of the card is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = serviceRefs.current.indexOf(entry.target); // Find the index of the observed element
                if (entry.isIntersecting && index >= 0) {
                    setVisibleCards((prev) => {
                        const newVisibleCards = [...prev];
                        newVisibleCards[index] = true; // Set the card as visible
                        return newVisibleCards;
                    });
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        }, observerOptions);

        serviceRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            observer.disconnect(); // Cleanup observer on unmount
        };
    }, []);

    return (
        <section className="py-24 my-6 bg-gray-900 text-gray-100">
            <h2 className="text-center text-4xl font-bold mb-10">Services We Offer</h2>
            <div className="container mx-auto flex flex-wrap justify-center gap-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={(el) => (serviceRefs.current[index] = el)} // Assign ref to the card
                        className={`relative w-full sm:w-1/2 lg:w-1/3 p-4 shadow-lg rounded-lg bg-gray-800 text-white overflow-visible transition-transform duration-500 transform ${visibleCards[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} // Apply animation
                    >
                        {/* Conditionally render the image based on the index (odd or even) */}
                        <img
                            src={service.image}
                            alt={`${service.title} Image`}
                            className={`absolute ${index % 2 === 0 ? 'left-0 transform -translate-x-1/2' : 'right-0 transform translate-x-1/2'} w-3/5 h-auto object-cover z-10 hidden lg:block`} // Adjusted top positioning and placement
                        />
                        <img
                            src={service.image}
                            alt={`${service.title} Image`}
                            className="w-full h-40 object-cover mb-4 lg:hidden" // Mobile image
                        />
                        <div className={`relative p-8 text-left z-20 ${index % 2 === 0 ? 'pl-4 lg:pl-40' : 'pr-4 lg:pr-40'}`}>
                            <h3 className="text-2xl font-semibold text-yellow-400 mb-2 border-b border-yellow-400 pb-2">
                                {service.title}
                            </h3>
                            <p className="mb-4">{service.description}</p>
                            <Link to={`/service/${service.id}`} className="bg-yellow-400 text-blue-900 py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                Read More
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
