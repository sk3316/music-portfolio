import React from "react";

function Header() {
  return (
    <header className="bg-green-500 p-4">
      <nav className="flex justify-center space-x-4">
        <a href="#about" className="text-white hover:underline">About</a>
        <a href="#beats" className="text-white hover:underline">Beats</a>
        <a href="#contact" className="text-white hover:underline">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
