"use client";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a] py-4 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">
          Sai Nanda Kumar <span className="text-yellow-400">Tirneddi</span>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg">
          <ScrollLink to="home" smooth={true} duration={800} className="cursor-pointer text-gray-300 hover:text-yellow-400">Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={800} className="cursor-pointer text-gray-300 hover:text-yellow-400">About</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={800} className="cursor-pointer text-gray-300 hover:text-yellow-400">Projects</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={800} className="cursor-pointer text-gray-300 hover:text-yellow-400">Contact</ScrollLink>
        </div>

        {/* Mobile Hamburger Menu */}
        <button className="md:hidden text-yellow-400 text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] text-lg text-center py-4 space-y-4">
          <ScrollLink to="home" smooth={true} duration={800} className="block text-gray-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={800} className="block text-gray-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={800} className="block text-gray-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Projects</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={800} className="block text-gray-300 hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</ScrollLink>
        </div>
      )}
    </nav>
  );
}