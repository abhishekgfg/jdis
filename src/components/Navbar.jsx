import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Phone, Menu, ChevronDown } from "lucide-react";
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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

  const renderMobileLink = (link) => {
    if (link.href?.startsWith("#")) {
      const to = location.pathname === "/" ? link.href : `/${link.href}`;

      return (
        <HashLink
          smooth
          to={to}
          onClick={() => setIsOpen(false)}
          className="flex rounded-2xl px-5 py-3 font-bold transition hover:bg-white/10 hover:text-yellow-300"
        >
          {link.label}
        </HashLink>
      );
    }

    return (
      <Link
        to={link.href}
        onClick={() => setIsOpen(false)}
        className={`flex rounded-2xl px-5 py-3 font-bold transition hover:bg-white/10 hover:text-yellow-300 ${
          location.pathname === link.href
            ? "bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/20 hover:bg-yellow-300 hover:text-slate-950"
            : "text-white/90"
        }`}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 z-50 w-full bg-slate-900 shadow-lg"
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
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-white p-1 shadow-lg">
              <img
                src={logo}
                alt="Logo"
                className="h-full w-full scale-125 object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold leading-tight text-white">
                JD Infotech
              </h1>
              <p className="text-sm font-bold leading-tight text-white">Solutions</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-xs font-medium text-white md:flex">
            {links.map((link) => (
              <div key={link.href} className={link.submenu ? "group relative" : ""}>
                {link.submenu ? (
                  <>
                    <Link
                      to={link.href}
                      className="inline-flex items-center gap-1 whitespace-nowrap transition-colors hover:text-yellow-400"
                    >
                      {link.label}
                      <ChevronDown size={12} className="mt-0.5" />
                    </Link>
                    <div className="invisible absolute left-0 top-full z-50 mt-2 w-56 rounded-xl border border-gray-700 bg-slate-900 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="flex flex-col py-3">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="px-4 py-2 text-sm text-white transition-colors hover:bg-slate-800 hover:text-yellow-400"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : link.href?.startsWith("#") ? (
                  location.pathname === "/" ? (
                    <HashLink
                      smooth
                      to={link.href}
                      className="whitespace-nowrap transition-colors hover:text-yellow-400"
                    >
                      {link.label}
                    </HashLink>
                  ) : (
                    <HashLink
                      smooth
                      to={`/${link.href}`}
                      className="whitespace-nowrap transition-colors hover:text-yellow-400"
                    >
                      {link.label}
                    </HashLink>
                  )
                ) : (
                  <Link
                    to={link.href}
                    className="whitespace-nowrap transition-colors hover:text-yellow-400"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => setIsEnquiryOpen(true)}
              className="group flex flex-shrink-0 items-center gap-1 rounded-lg bg-yellow-500 px-5 py-2 font-semibold text-slate-900 shadow-lg transition-all hover:bg-yellow-600 hover:shadow-xl"
            >
              <span>Start Project</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-lg shadow-black/20 transition hover:border-yellow-400/60 hover:bg-yellow-400 hover:text-slate-950 md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isEnquiryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020817]/78 px-4 py-6 backdrop-blur-sm"
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

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[80] bg-slate-950/70 backdrop-blur-sm md:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed right-0 top-0 z-[90] flex h-full w-[86vw] max-w-sm flex-col overflow-hidden border-l border-white/10 bg-[#061124] text-white shadow-[-24px_0_70px_rgba(0,0,0,.42)] md:hidden"
            >
              <div className="relative border-b border-white/10 bg-gradient-to-br from-[#0b1f3d] via-[#07162d] to-[#020817] p-5">
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-yellow-400/20 blur-3xl" />
                <div className="absolute -bottom-12 left-8 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-14 overflow-hidden rounded-2xl bg-white p-1 shadow-lg">
                      <img
                        src={logo}
                        alt="Logo"
                        className="h-full w-full scale-125 object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-base font-extrabold leading-tight text-white">
                        JD Infotech
                      </h2>
                      <p className="text-base font-extrabold leading-tight text-white">
                        Solutions
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
                    aria-label="Close navigation menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="relative mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-300">
                    Ready to build?
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-5 text-white/90">
                    Let's create a fast, modern digital product for your business.
                  </p>
                </div>
              </div>

              <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-5 text-[15px] text-white">
                {links.map((link) => (
                  <div key={link.href}>
                    {link.submenu ? (
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2">
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between rounded-xl px-3 py-3 font-bold transition hover:bg-white/10 hover:text-yellow-300"
                        >
                          <span>{link.label}</span>
                          <ChevronDown size={16} className="text-yellow-300" />
                        </Link>
                        <div className="mt-1 flex flex-col gap-1 border-l border-yellow-400/30 pl-3">
                          {link.submenu.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={() => setIsOpen(false)}
                              className="rounded-xl px-3 py-2 text-sm font-semibold text-white/75 transition hover:bg-white/10 hover:text-yellow-300"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      renderMobileLink(link)
                    )}
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsEnquiryOpen(true);
                  }}
                  className="group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-yellow-400/20 transition hover:bg-yellow-300"
                >
                  Start Your Project
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </nav>

              <div className="border-t border-white/10 bg-[#020817] px-5 py-4">
                <div className="grid gap-2 text-xs font-semibold text-white/75">
                  <a
                    href="tel:+919523435814"
                    className="inline-flex items-center gap-2 transition hover:text-yellow-300"
                  >
                    <Phone size={14} className="text-yellow-300" />
                    +91 9523435814
                  </a>
                  <a
                    href="tel:+916200594193"
                    className="inline-flex items-center gap-2 transition hover:text-yellow-300"
                  >
                    <Phone size={14} className="text-yellow-300" />
                    +91 6200594193
                  </a>
                </div>
                <p className="mt-3 text-xs font-semibold text-white/40">
                  Copyright {new Date().getFullYear()} JD Infotech Solutions
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
