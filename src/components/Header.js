// src/components/Header.js

import React from "react";

function Header() {
  return (
    <header className="bg-green-500 p-4 fixed w-full z-10 top-0">
      <nav className="flex justify-center space-x-4">
        <a href="#about" className="text-white hover:underline scroll-smooth">
          About
        </a>
        <a href="#beats" className="text-white hover:underline scroll-smooth">
          Beats
        </a>
        <a href="#contact" className="text-white hover:underline scroll-smooth">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
