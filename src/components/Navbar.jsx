import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "./images/jagdamba.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Links
  const links = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#technologies", label: "Technologies" },
    { href: "#webuild", label: "We Build" },
    { href: "/contact", label: "Contact" },
    { href: "/casestudy", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
  ];

  // Helper to render links
  const renderLink = (link) => {
    if (link.href.startsWith("#")) {
      // ID link
      return location.pathname === "/" ? (
        <HashLink smooth to={link.href} onClick={() => setIsOpen(false)}>
          {link.label}
        </HashLink>
      ) : (
        <HashLink smooth to={`/${link.href}`} onClick={() => setIsOpen(false)}>
          {link.label}
        </HashLink>
      );
    }
    return (
      <Link to={link.href} onClick={() => setIsOpen(false)}>
        {link.label}
      </Link>
    );
  };

  return (
    <>
      {/* Navbar */}
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
              <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">JD Infotech Solutions</h1>
              <p className="text-xs text-slate-500 -mt-1">Smart IT & Digital Services</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 items-center text-sm">
            {links.map((link) => (
              <div key={link.href} className="hover:text-brand-700">
                {renderLink(link)}
              </div>
            ))}

            <HashLink
              smooth
              to={location.pathname === "/" ? "#contact" : "/#contact"}
              className="ml-4 inline-block px-4 py-2 bg-gradient-to-r from-yellow-500 to-blue-600 text-white rounded-lg shadow hover:scale-105 transition-transform"
            >
              Let's Talk
            </HashLink>
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

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
              className="fixed top-0 right-0 w-72 h-full bg-gradient-to-b from-white to-slate-50 shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-200 flex items-center justify-between yellow text-blue rounded-b-xl shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-20 h-15 rounded-full overflow-hidden shadow-md">
                    <img src={logo} alt="JD Infotech Logo" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-lg font-bold">JD Infotech Solution</h2>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/20 transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Sidebar Links */}
              <motion.nav
                initial="hidden"
                animate="visible"
                className="flex flex-col mt-6 px-6 gap-4 text-lg font-medium"
                variants={{
                  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                }}
              >
                {links.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
                  >
                    {renderLink(link)}
                  </motion.div>
                ))}

                <HashLink
                  smooth
                  to={location.pathname === "/" ? "#contact" : "/#contact"}
                  className="px-4 py-2 mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow text-center hover:scale-105 transition-transform"
                >
                  Let's Talk
                </HashLink>
              </motion.nav>

              {/* Footer */}
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
