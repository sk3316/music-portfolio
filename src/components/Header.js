// src/components/Header.js

import React from "react";

function Header() {
  return (
    <header className="relative bg-gradient-to-r from-green-500 via-teal-600 to-green-500 h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Banner Section */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center p-4 text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
          Welcome to My Beats Collection
        </h1>
        
        {/* Tagline */}
        <p className="text-lg md:text-2xl italic animate-bounce">Unleashing Rhythm and Sound</p>

        {/* Navigation Links */}
        <nav className="flex space-x-4 mt-8">
          <a href="#about" className="text-lg hover:underline hover:text-teal-300 transition duration-200">About</a>
          <a href="#beats" className="text-lg hover:underline hover:text-teal-300 transition duration-200">Beats</a>
          <a href="#contact" className="text-lg hover:underline hover:text-teal-300 transition duration-200">Contact</a>
        </nav>

        {/* Scroll Indicator */}
        <a href="#beats" className="mt-12 animate-bounce">
          <svg className="w-8 h-8 text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
