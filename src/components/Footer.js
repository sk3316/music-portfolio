import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // Import social icons

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-8">
      <p>&copy; 2023 Your Name | Follow me on social media</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram size={24} />
        </a>
        <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
          <FaYoutube size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
