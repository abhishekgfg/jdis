import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "./images/jagdamba.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Links
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/services",
      label: "Services",
      submenu: [
        { href: "/services/website", label: "Website" },
        { href: "/services/mobile-application", label: "Mobile Application" },
      ],
    },
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/casestudy", label: "Case Studies" },
    { href: "/technologies", label: "Technologies" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];



  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-slate-900 z-50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg bg-white p-1 flex-shrink-0">
              <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base font-bold text-white leading-tight">JD Infotech</h1>
              <p className="text-xs text-gray-400">
                Solutions
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-6 items-center text-xs font-medium text-white">
            {links.map((link) => (
              <div key={link.href} className={link.submenu ? "relative group" : ""}>
                {link.submenu ? (
                  <>
                    <Link to={link.href} className="hover:text-yellow-400 transition-colors whitespace-nowrap inline-flex items-center gap-1">
                      {link.label}
                      <span className="text-[10px] mt-0.5">▾</span>
                    </Link>
                    <div className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-slate-900 border border-gray-700 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="flex flex-col py-3">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="px-4 py-2 text-sm text-white hover:bg-slate-800 hover:text-yellow-400 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : link.href?.startsWith("#") ? (
                  location.pathname === "/" ? (
                    <HashLink smooth to={link.href} className="hover:text-yellow-400 transition-colors whitespace-nowrap">
                      {link.label}
                    </HashLink>
                  ) : (
                    <HashLink smooth to={`/${link.href}`} className="hover:text-yellow-400 transition-colors whitespace-nowrap">
                      {link.label}
                    </HashLink>
                  )
                ) : (
                  <Link to={link.href} className="hover:text-yellow-400 transition-colors whitespace-nowrap">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Start Your Project Button */}
            <Link
              to="/contact"
              className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-1 group flex-shrink-0"
            >
              <span>Start Project</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </nav>
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
              className="fixed top-0 right-0 w-72 h-full bg-slate-900 shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg bg-white p-1">
                    <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="font-bold text-lg text-white">JD Infotech</h2>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col gap-4 px-6 mt-6 text-lg font-medium text-white">
                {links.map((link) => (
                  <div key={link.href}>
                    {link.submenu ? (
                      <div className="space-y-2">
                        <Link to={link.href} onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition-colors font-semibold">
                          {link.label}
                        </Link>
                        <div className="ml-4 flex flex-col gap-2">
                          {link.submenu.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={() => setIsOpen(false)}
                              className="hover:text-yellow-400 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : link.href?.startsWith("#") ? (
                      location.pathname === "/" ? (
                        <HashLink smooth to={link.href} onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition-colors">
                          {link.label}
                        </HashLink>
                      ) : (
                        <HashLink smooth to={`/${link.href}`} onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition-colors">
                          {link.label}
                        </HashLink>
                      )
                    ) : (
                      <Link to={link.href} onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Start Your Project Button */}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold rounded-lg text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  Start Your Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </nav>

              <div className="mt-auto px-6 py-4 text-sm text-gray-400 border-t border-gray-700">
                © {new Date().getFullYear()} JD Infotech Solutions
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
