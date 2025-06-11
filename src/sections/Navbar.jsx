import { useState } from "react";
import { motion } from "framer-motion"; // FIX: use 'framer-motion' instead of 'motion/react'

function Navigation() {
  return (
    <ul className="flex flex-col sm:flex-row gap-6 text-lg font-medium">
      <li><a className="nav-link text-white hover:text-purple-300" href="#home">Home</a></li>
      <li><a className="nav-link text-white hover:text-purple-300" href="#about">About</a></li>
      <li><a className="nav-link text-white hover:text-purple-300" href="#work">Work</a></li>
      <li><a className="nav-link text-white hover:text-purple-300" href="#contact">Contact</a></li>
    </ul>
  );
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-black/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-white">Ayushi</a>

          {/* Hamburger menu (mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-7 h-7"
              alt="Toggle menu"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden sm:block">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="sm:hidden px-6 pb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Navigation />
        </motion.div>
      )}
    </div>
  );
};
