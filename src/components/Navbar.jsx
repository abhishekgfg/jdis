import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "./images/jagdamba.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🔹 Navbar Top */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <div className="w-20 h-15 rounded-xl flex items-center justify-center overflow-hidden shadow">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold">JD Infotech Solutions</h1>
              <p className="text-xs text-slate-500 -mt-1">
                Smart IT & Digital Services
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
       <nav className="hidden md:flex gap-6 items-center text-sm">
  <a href="#hero" className="hover:text-brand-700">Home</a>
  <a href="#services" className="hover:text-brand-700">Services</a>
  <a href="#projects" className="hover:text-brand-700">Projects</a>
  <a href="#technologies" className="hover:text-brand-700">Technologies</a>
  <a href="#webuild" className="hover:text-brand-700">We Build</a>

  <a href="#contact" className="hover:text-brand-700">Contact</a>

  <a
    href="#contact"
    className="ml-4 inline-block px-4 py-2 bg-gradient-to-r from-brand-500 to-blue-600 text-white rounded-lg shadow"
  >
    Let's Talk
  </a>
</nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* 🔹 Sidebar Overlay + Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar Menu */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="fixed top-0 right-0 w-72 h-full bg-gradient-to-b from-white to-slate-50 shadow-2xl z-50 flex flex-col"
            >
              {/* Header with Brand */}
              <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-700">
                  JD Infotech
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Sidebar Links */}
              <nav className="flex flex-col gap-6 mt-6 px-6 text-lg font-medium">
                <a
                  href="#services"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  Contact
                </a>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow text-center hover:scale-105 transition"
                >
                  Let's Talk
                </a>
              </nav>

              {/* Footer in Sidebar */}
              <div className="mt-auto px-6 py-4 text-sm text-slate-500 border-t border-slate-200">
                © {new Date().getFullYear()} JD Infotech Solutions
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
