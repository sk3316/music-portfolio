// src/components/About.js

import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg"; // Ensure the correct path

function About() {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center p-6 max-w-4xl mx-auto mt-20 md:mt-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Profile Image */}
      <motion.div
        className="flex-shrink-0 mb-4 md:mb-0 md:mr-6"
        whileHover={{ rotate: 5 }}
      >
        <img
          src={profileImage}
          alt="Your Name"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg transform transition-transform duration-300 hover:scale-105"
        />
      </motion.div>

      {/* Bio Content */}
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <p className="text-lg mb-4">
          Hi! I'm Nitin Lakra, a passionate music producer specializing in creating unique beats and tracks. My journey in music began 2 years ago, and since then, I’ve been dedicated to honing my craft and delivering high-quality sounds that resonate with listeners.
        </p>
        <p className="text-lg">
          Whether you're looking for energetic beats for your next project or smooth tracks to unwind, I've got you covered. Let's collaborate and create something amazing together!
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
