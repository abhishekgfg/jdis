import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "./images/jagdamba.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
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
    // { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  const handleEnquiryChange = (event) => {
    const { name, value } = event.target;
    setEnquiryForm((current) => ({ ...current, [name]: value }));
  };

  const handleEnquirySubmit = (event) => {
    event.preventDefault();

    const message = [
      "New Project Consultation Request",
      `Name: ${enquiryForm.name}`,
      `Phone: ${enquiryForm.phone}`,
      `Email: ${enquiryForm.email || "Not provided"}`,
      `Service: ${enquiryForm.service || "Not selected"}`,
      `Message: ${enquiryForm.message}`,
    ].join("\n");

    window.open(
      `https://wa.me/919523435814?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setIsEnquiryOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-slate-900 z-50 shadow-lg"
      >
        <div className="border-b border-white/10 bg-[#020b1b]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-[12px] font-semibold text-white">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+919523435814"
                className="inline-flex items-center gap-2 text-white/90 transition hover:text-yellow-400"
              >
                <Phone size={14} className="text-yellow-400" />
                +91 9523435814
              </a>
              <a
                href="tel:+916200594193"
                className="inline-flex items-center gap-2 text-white/90 transition hover:text-yellow-400"
              >
                <Phone size={14} className="text-yellow-400" />
                +91 6200594193
              </a>
            </div>

            {/* <button
              type="button"
              onClick={() => setIsEnquiryOpen(true)}
              className="inline-flex h-8 items-center gap-2 rounded bg-yellow-500 px-4 text-[12px] font-extrabold text-slate-900 shadow-[0_8px_20px_rgba(234,179,8,.22)] transition hover:bg-yellow-400"
            >
              Free Consultation
              <ArrowRight size={13} />
            </button> */}
          </div>
        </div>

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
            <button
              type="button"
              onClick={() => setIsEnquiryOpen(true)}
              className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-1 group flex-shrink-0"
            >
              <span>Start Project</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isEnquiryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[#020817]/78 px-4 py-6 backdrop-blur-sm"
            onMouseDown={() => setIsEnquiryOpen(false)}
          >
            <motion.form
              initial={{ y: 24, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleEnquirySubmit}
              onMouseDown={(event) => event.stopPropagation()}
              className="relative w-full max-w-xl rounded-2xl border border-[#23456e] bg-white p-6 shadow-[0_35px_100px_rgba(2,8,23,.38)]"
            >
              <button
                type="button"
                onClick={() => setIsEnquiryOpen(false)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                aria-label="Close project form"
              >
                <X size={18} />
              </button>

              <div className="pr-10">
                <span className="text-[12px] font-extrabold uppercase tracking-wide text-[#1767ff]">
                  Free Consultation
                </span>
                <h2 className="mt-1 text-[26px] font-extrabold leading-tight text-slate-900">
                  Tell Us About Your Project
                </h2>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-slate-600">
                  Fill this short form and your project details will be sent
                  directly to WhatsApp for a quick callback.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  value={enquiryForm.name}
                  onChange={handleEnquiryChange}
                  required
                  placeholder="Your name"
                  className="h-12 rounded-lg border border-slate-200 px-4 text-[13px] font-semibold outline-none focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/10"
                />
                <input
                  type="tel"
                  name="phone"
                  value={enquiryForm.phone}
                  onChange={handleEnquiryChange}
                  required
                  placeholder="Phone number"
                  className="h-12 rounded-lg border border-slate-200 px-4 text-[13px] font-semibold outline-none focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/10"
                />
                <input
                  type="email"
                  name="email"
                  value={enquiryForm.email}
                  onChange={handleEnquiryChange}
                  placeholder="Email address"
                  className="h-12 rounded-lg border border-slate-200 px-4 text-[13px] font-semibold outline-none focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/10"
                />
                <select
                  name="service"
                  value={enquiryForm.service}
                  onChange={handleEnquiryChange}
                  className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-[13px] font-semibold text-slate-500 outline-none focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/10"
                >
                  <option value="">Select service</option>
                  <option>Website Development</option>
                  <option>Mobile App Development</option>
                  <option>E-commerce Development</option>
                  <option>CRM / ERP Solution</option>
                  <option>AI & Automation</option>
                  <option>Cloud Deployment</option>
                </select>
              </div>

              <textarea
                name="message"
                value={enquiryForm.message}
                onChange={handleEnquiryChange}
                required
                placeholder="Tell us your requirement..."
                className="mt-4 h-28 w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-[13px] font-semibold outline-none focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/10"
              />

              <button
                type="submit"
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#1767ff] px-6 text-[13px] font-extrabold text-white shadow-[0_12px_24px_rgba(23,103,255,.22)] transition hover:bg-[#0f55da]"
              >
                Send to WhatsApp
                <ArrowRight size={15} />
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

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
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsEnquiryOpen(true);
                  }}
                  className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold rounded-lg text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  Start Your Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
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
