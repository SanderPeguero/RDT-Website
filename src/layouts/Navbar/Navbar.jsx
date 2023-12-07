import React, { useState } from 'react';
import { MdOutlineSort } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from "./Logo.png"

function Navbar() {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  // <nav className=" max-w-full px-2 sm:px-6 md:px-24 bg-[#000320]">
  // <div className="relative flex h-16 items-center justify-between">
  return (
    <div className="fixed top-0 left-0 w-full px-2 sm:px-6 md:px-24 bg-[#000320] z-50">
      <div className="antialiased bg-[#000320] dark-mode:bg-gray-900">
        <div className="w-full text-gray-700 bg-[#000320] dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">

              <div className="text-lg font-semibold tracking-widest  uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                <div className="flex items-center">
                  <img src={logo} alt="Logo" className="h-12 mr-2" />

                </div>
              </div>


              <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={handleToggle}>
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  <path style={!open ? { display: 'initial' } : { display: 'none' }} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  <path style={open ? { display: 'initial' } : { display: 'none' }} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <nav className={`flex-col flex-grow ${open ? 'flex' : 'hidden'} pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>

              <button className="text-white px-4 py-2 mt-2">Home</button>
              <button className="text-white px-4 py-2 mt-2">Product</button>
              <button className="text-white px-4 py-2 mt-2">Pricing</button>
              <button className="text-white px-4 py-2 mt-2">About</button>
              <button className="text-white px-4 py-2 mt-2">Contact</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Navbar