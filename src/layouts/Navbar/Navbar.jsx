import React, { useState } from 'react';
import { MdOutlineSort } from "react-icons/md";
import logo from "./Logo.png"
function Navbar() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo}  alt="Logo" className="h-12 w-12 mr-2" />
  
          </div>
          {/* Botones para pantallas grandes */}
          <div className="hidden md:flex space-x-8">
            <button className="text-white">Home</button>
            <button className="text-white">Product</button>
            <button className="text-white">Pricing</button>
            <button className="text-white">About</button>
            <button className="text-white">Contact</button>
          </div>
  
  
          {/* Menú desplegable para pantallas móviles */}
          <div className="md:hidden">
            <button
              className="text-white"
              onClick={toggleMobileMenu}
            >
              <MdOutlineSort size={30} style={{ transform: 'scaleX(-1)' }} />
            </button>
            {isMobileMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-black py-2 flex flex-col items-center">
                <button className="block text-white px-4 py-2">Home</button>
                <button className="block text-white px-4 py-2">Product</button>
                <button className="block text-white px-4 py-2">Pricing</button>
                <button className="block text-white px-4 py-2">About</button>
                <button className="block text-white px-4 py-2">Contact</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    )

}

export default Navbar