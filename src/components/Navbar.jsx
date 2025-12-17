import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "./images/jagdamba.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Links (Resources dropdown)
  const links = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "/meet-our-team", label: "Our Team" },
    { href: "#projects", label: "Projects" },
    { href: "#technologies", label: "Technologies" },
    { href: "#webuild", label: "We Build" },

    {
      label: "Resources",
      children: [
        { href: "/casestudy", label: "Case Studies" },
        { href: "/blog", label: "Blog" },
      ],
    },

    { href: "/contact", label: "Contact" },
  ];

  // Helper function
  const renderLink = (link) => {
    if (link.href?.startsWith("#")) {
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
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-20 h-15 rounded-xl overflow-hidden shadow">
              <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">JD Infotech Solutions</h1>
              <p className="text-xs text-slate-500 -mt-1">
                Smart IT & Digital Services
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-6 items-center text-sm">
            {links.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                    {link.label}
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </span>

                  {/* Dropdown */}
                  <div
                    className="absolute top-full left-0 mt-2 w-44 bg-white shadow-xl rounded-lg
                               opacity-0 group-hover:opacity-100 translate-y-1
                               group-hover:translate-y-0 transition-all duration-200"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2 text-sm hover:bg-slate-100 rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div key={link.href} className="hover:text-blue-600">
                  {renderLink(link)}
                </div>
              )
            )}

            <HashLink
              smooth
              to={location.pathname === "/" ? "#contact" : "/#contact"}
              className="ml-4 px-4 py-2 bg-gradient-to-r from-yellow-500 to-blue-600
                         text-white rounded-lg shadow hover:scale-105 transition-transform"
            >
              Let's Talk
            </HashLink>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed top-0 right-0 w-72 h-full bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden shadow">
                    <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="font-bold text-lg">JD Infotech</h2>
                </div>
                <button onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col gap-4 px-6 mt-6 text-lg font-medium">
                {links.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <p className="flex items-center gap-2 text-slate-500 font-semibold">
                        {link.label}
                        <ChevronDown size={16} />
                      </p>
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setIsOpen(false)}
                            className="hover:text-blue-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div key={link.href}>{renderLink(link)}</div>
                  )
                )}

                <HashLink
                  smooth
                  to={location.pathname === "/" ? "#contact" : "/#contact"}
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600
                             text-white rounded-lg text-center"
                >
                  Let's Talk
                </HashLink>
              </nav>

              <div className="mt-auto px-6 py-4 text-sm text-slate-500 border-t">
                © {new Date().getFullYear()} JD Infotech Solutions
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
