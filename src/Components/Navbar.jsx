import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-gradient-to-r from-[rgba(5,5,5,1)] to-[rgba(67,67,67,1)] text-white font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between  items-center">
          {/* Logo or Brand */}
          <div className="text-4xl font-bold ">#Developer</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 py-15 px-15">
            <Link to="/" className="hover:text-gray-300 text-white font-semibold text-2xl">Home</Link>
            <Link to="#about" className="hover:text-gray-300 text-white font-semibold text-2xl">About</Link>
            <Link to="#projects" className="hover:text-gray-300 text-white font-semibold text-2xl">Projects</Link>
            <Link to="#achievements" className="hover:text-gray-300 text-white font-semibold text-2xl">Achievements</Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-gray-300">Home</Link>
          <Link to="#about" className="block hover:text-gray-300">About</Link>
          <Link to="#projects" className="block hover:text-gray-300">Projects</Link>
          <Link to="#achievements" className="block hover:text-gray-300">Achievements</Link>
        </div>
      )}
    </nav>
  );
}

