// import React, { useState } from 'react';
// import { Link } from 'react-scroll';
// import logo from './westernflex_logo.png'; // Update the path if needed
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faTools, faProjectDiagram, faComments, faUser, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="bg-gray-900 shadow-md fixed top-0 w-full z-50 transition duration-300 ease-in-out">
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <img src={logo} alt="Logo" className="h-12 mr-3" />
//           <span className="text-yellow-400 text-2xl font-bold">WesternFlex</span>
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <ul className={`hidden md:flex space-x-8`}>
//           <li>
//             <Link
//               to="home"
//               smooth={true}
//               duration={500}
//               className="flex items-center text-white hover:text-yellow-400 transition-colors cursor-pointer"
//             >
//               <FontAwesomeIcon icon={faHome} className="mr-2" />
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="services"
//               smooth={true}
//               duration={500}
//               className="flex items-center text-white hover:text-yellow-400 transition-colors cursor-pointer"
//             >
//               <FontAwesomeIcon icon={faTools} className="mr-2" />
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="projects"
//               smooth={true}
//               duration={500}
//               className="flex items-center text-white hover:text-yellow-400 transition-colors cursor-pointer"
//             >
//               <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="feedbacks"
//               smooth={true}
//               duration={500}
//               className="flex items-center text-white hover:text-yellow-400 transition-colors cursor-pointer"
//             >
//               <FontAwesomeIcon icon={faComments} className="mr-2" />
//               Feedback
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="about"
//               smooth={true}
//               duration={500}
//               className="flex items-center text-white hover:text-yellow-400 transition-colors cursor-pointer"
//             >
//               <FontAwesomeIcon icon={faUser} className="mr-2" />
//               About
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-800 text-white rounded-b-lg">
//           <div className="px-4 py-2 space-y-2">
//             <Link
//               to="home"
//               smooth={true}
//               duration={500}
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
//               onClick={closeMenu}
//             >
//               Home
//             </Link>
//             <Link
//               to="services"
//               smooth={true}
//               duration={500}
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
//               onClick={closeMenu}
//             >
//               Services
//             </Link>
//             <Link
//               to="projects"
//               smooth={true}
//               duration={500}
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
//               onClick={closeMenu}
//             >
//               Projects
//             </Link>
//             <Link
//               to="feedbacks"
//               smooth={true}
//               duration={500}
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
//               onClick={closeMenu}
//             >
//               Feedback
//             </Link>
//             <Link
//               to="about"
//               smooth={true}
//               duration={500}
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
//               onClick={closeMenu}
//             >
//               About
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './westernflex_logo.png'; // Update the path if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTools, faProjectDiagram, faComments, faUser, faTimes, faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // Check if the route is /service/:id to conditionally render content
  const isServiceDetailPage = location.pathname.startsWith('/service/');

  return (
    <nav className="bg-gray-900 shadow-md fixed top-0 w-full z-50 transition duration-300 ease-in-out">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Back Button only on /service/:id */}
        {isServiceDetailPage ? (
          <button onClick={goBack} className="text-yellow-400 hover:text-yellow-500 text-xl mr-4">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back
          </button>
        ) : (
          <>
            {/* Logo Section */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-12 mr-3" />
              <span className="text-yellow-400 text-2xl font-bold">WesternFlex</span>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className={`hidden md:flex space-x-8`}>
              <li>
                <Link to="home" smooth={true} duration={500} className="flex items-center text-white hover:text-yellow-400 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} className="flex items-center text-white hover:text-yellow-400 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faTools} className="mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} className="flex items-center text-white hover:text-yellow-400 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="feedbacks" smooth={true} duration={500} className="flex items-center text-white hover:text-yellow-400 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faComments} className="mr-2" />
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className="flex items-center text-white hover:text-yellow-400 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  About
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {!isServiceDetailPage && isOpen && (
        <div className="md:hidden bg-gray-800 text-white rounded-b-lg">
          <div className="px-4 py-2 space-y-2">
            <Link to="home" smooth={true} duration={500} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700" onClick={closeMenu}>
              Home
            </Link>
            <Link to="services" smooth={true} duration={500} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700" onClick={closeMenu}>
              Services
            </Link>
            <Link to="projects" smooth={true} duration={500} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700" onClick={closeMenu}>
              Projects
            </Link>
            <Link to="feedbacks" smooth={true} duration={500} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700" onClick={closeMenu}>
              Feedback
            </Link>
            <Link to="about" smooth={true} duration={500} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700" onClick={closeMenu}>
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
