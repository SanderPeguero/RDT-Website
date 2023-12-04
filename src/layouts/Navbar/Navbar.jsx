import React, { useState } from 'react';
import { MdOutlineSort } from "react-icons/md";
import logo from "./Logo.png"
import { Link } from 'react-router-dom';
import { navLinks } from "./constants/route"
function Navbar({ isAdmin }) {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  // <nav className=" max-w-full px-2 sm:px-6 md:px-24 bg-[#000320]">
  // <div className="relative flex h-16 items-center justify-between">
  return (
    <nav className="max-w-full px-2 sm:px-6 md:px-24 bg-[#000320]  pt-4 pb-4  z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-2" />

        </div>
        {/* Botones para pantallas grandes */}
        {
          isAdmin ? <div className="hidden md:flex space-x-8">
            <button className="text-white">Home</button>
            <button className="text-white">Product</button>
            <button className="text-white">Pricing</button>
            <button className="text-white">About</button>
            <button className="text-white">Contact</button>
          </div> :
            <ul className="hidden md:flex space-x-8">
              {
                navLinks.map((nav, index) => (
                  <li key={index} className={``}>
                    <a href={`#${nav.id}`} className='text-white px-1 py-2 mt-2 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>{nav.title}</a>
                  </li>
                ))
              }
            </ul>

        }





        {/* Menú desplegable para pantallas móviles */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={toggleMobileMenu}
          >
            <MdOutlineSort size={30} style={{ transform: 'scaleX(-1)' }} />
          </button>
          {isMobileMenuOpen && (
            <ul className="absolute top-16 left-0 right-0 bg-[#000320] py-2 flex flex-col items-center  z-50">
              {
                navLinks.map((nav, index) => (
                  <li key={index} className={``}>
                    <a href={`#${nav.id}`} className='block text-white px-4 py-2'>{nav.title}</a>
                  </li>
                ))
              }
              {/* <button className="block text-white px-4 py-2">Home</button>
              <button className="block text-white px-4 py-2">Product</button>
              <button className="block text-white px-4 py-2">Pricing</button>
              <button className="block text-white px-4 py-2">About</button>
              <button className="block text-white px-4 py-2">Contact</button> */}
            </ul>
          )}
        </div>
      </div>
    </nav>
  )

}

export default Navbar