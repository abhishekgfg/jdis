// src/components/ProjectsShowcase.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, CheckCircle, Clock, Briefcase, ShoppingBag, GraduationCap, Utensils, Users, Database, Layout } from "lucide-react";

// Combined projects data with enhanced details (no images)
const allProjects = [
  // Original projects
  {
    title: "Grocery Delivery",
    desc: "A user-friendly grocery delivery platform that allows customers to browse products, add items to cart, and place orders with real-time status updates.",
    stack: ["React", "Redux", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "HTML", "Git"],
    status: "Live",
    link: "https://shanumart.in/",
    category: "E-commerce",
    icon: ShoppingBag
  },
  {
    title: "Herbal E-commerce",
    desc: "A full-featured e-commerce platform for herbal products with secure payments, user authentication, and order tracking.",
    stack: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "Git"],
    status: "Live",
    link: "https://herbs.manovaidya.in/",
    category: "E-commerce",
    icon: ShoppingBag
  },
  {
    title: "Research Blog",
    desc: "A scalable solution for educational institutions with features like student enrollment, faculty modules, payment tracking, and reporting tools.",
    stack: ["React", "Redux", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "HTML", "Git"],
    status: "Successfully Delivered",
    link: "https://airfresearch.com/",
    category: "Education",
    icon: GraduationCap
  },
  {
    title: "Education Platform",
    desc: "A modern education portal where students can access courses, track progress, and interact with instructors online.",
    stack: ["React", "Redux", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "HTML", "Git"],
    status: "Successfully Delivered",
    link: "https://www.shodhsutra.com/",
    category: "Education",
    icon: GraduationCap
  },
  {
    title: "IIRHE",
    desc: "An intuitive platform to guide students through the admission process — includes university listings, real-time counseling, and document submission.",
    stack: ["React", "Redux", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "HTML", "Git"],
    status: "Successfully Delivered",
    link: "https://iirhe.org.in/",
    category: "Education",
    icon: GraduationCap
  },
  {
    title: "Restaurant Ordering System",
    desc: "A full-stack food ordering system that supports restaurant listings, dynamic menu uploads, table bookings, and real-time order status.",
    stack: ["React", "Redux", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "JWT"],
    status: "Live",
    link: "https://the9to9restaurant.com/",
    category: "Food & Beverage",
    icon: Utensils
  },
  {
    title: "School Website",
    desc: "An interactive school website showcasing academic programs, events, faculty, and admission information.",
    stack: ["React", "Framer Motion", "TailwindCSS", "Firebase", "Git"],
    status: "Under Development",
    link: "https://institute-frontend-mocha.vercel.app/",
    category: "Education",
    icon: GraduationCap
  },
  {
    title: "Library Management System",
    desc: "A digital library system for managing book inventories, issuing/returning books, and tracking user activity.",
    stack: ["React", "Express", "MongoDB", "TailwindCSS", "JWT", "HTML", "Git"],
    status: "Under Development",
    link: "https://dashboard-ten-alpha-25.vercel.app/",
    category: "Management",
    icon: Database
  },
  {
    title: "Consultancy Website",
    desc: "A professional school website featuring admission forms, class sections, photo gallery, download center, and student result portal.",
    stack: ["React", "TailwindCSS", "Framer Motion", "Firebase", "Git"],
    status: "Live",
    link: "https://manovaidya.in/",
    category: "Consultancy",
    icon: Briefcase
  },
  // Additional websites
  {
    title: "Gurmeet Kaur Store",
    desc: "Online retail store",
    stack: [],
    status: "Live",
    link: "https://www.gurmeetkaurstore.com/",
    category: "E-commerce",
    icon: ShoppingBag
  },
  {
    title: "Mano Vaidya",
    desc: "Healthcare platform",
    stack: [],
    status: "Live",
    link: "https://manovaidya.com/",
    category: "Healthcare",
    icon: Briefcase
  },
  {
    title: "CIHS Studies",
    desc: "Educational institute",
    stack: [],
    status: "Live",
    link: "https://cihsstudies.com/",
    category: "Education",
    icon: GraduationCap
  },
  {
    title: "Baryahr Service",
    desc: "Service provider",
    stack: [],
    status: "Live",
    link: "https://baryahrservice.in/",
    category: "Services",
    icon: Users
  },
  {
    title: "AI Fast Admission",
    desc: "Admission guidance",
    stack: [],
    status: "Live",
    link: "https://ai.fastadmission.in/",
    category: "Education",
    icon: GraduationCap
  },
  {
    title: "Mano Vaidya Course",
    desc: "Online courses",
    stack: [],
    status: "Live",
    link: "https://course.manovaidya.com/",
    category: "Education",
    icon: GraduationCap
  },
  {
    title: "IIST",
    desc: "Institute of Science & Technology",
    stack: [],
    status: "Live",
    link: "https://iist.ind.in/",
    category: "Education",
    icon: GraduationCap
  },
  {
    title: "IISD",
    desc: "International Institute of Skill Development",
    stack: [],
    status: "Live",
    link: "https://iisd.io/",
    category: "Education",
    icon: GraduationCap
  },
  {
    title: "Mano Vaidya Community",
    desc: "Community platform",
    stack: [],
    status: "Live",
    link: "https://community.manovaidya.com/",
    category: "Community",
    icon: Users
  },
  {
    title: "CRM Mano Vaidya",
    desc: "Customer relationship management",
    stack: [],
    status: "Live",
    link: "https://crm.manovaidya.com/",
    category: "Business",
    icon: Database
  },
  {
    title: "Sartaaj Bharat",
    desc: "Business platform",
    stack: [],
    status: "Live",
    link: "https://sartaaj-bharat-frontend.vercel.app/",
    category: "Business",
    icon: Briefcase
  },
  {
    title: "Admin Gurmeet Kaur Store",
    desc: "Admin dashboard",
    stack: [],
    status: "Live",
    link: "https://admin.gurmeetkaurstore.com/",
    category: "Admin Panel",
    icon: Layout
  },
  {
    title: "MBA Kappa",
    desc: "MBA resources",
    stack: [],
    status: "Live",
    link: "https://mba-kappa.vercel.app/",
    category: "Education",
    icon: GraduationCap
  }
];

// Category icons mapping
const categoryIcons = {
  "E-commerce": ShoppingBag,
  "Education": GraduationCap,
  "Food & Beverage": Utensils,
  "Management": Database,
  "Consultancy": Briefcase,
  "Healthcare": Briefcase,
  "Services": Users,
  "Community": Users,
  "Business": Briefcase,
  "Admin Panel": Layout
};

export default function ProjectsShowcase() {
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", ...new Set(allProjects.map(p => p.category))];
  
  const filteredProjects = filterCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === filterCategory);

  // Stats calculation
  const totalProjects = allProjects.length;
  const liveProjects = allProjects.filter(p => p.status.includes("Live")).length;
  const totalCategories = categories.length - 1; // subtract "All"

  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Enhanced Background Elements - adjusted for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Heading - responsive text sizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-indigo-100 rounded-full mb-4 sm:mb-6">
            <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600" />
            <span className="text-xs sm:text-sm font-medium text-indigo-600">Our Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent px-2">
            Our Deployed Projects
          </h2>
          <p className="text-slate-500 mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg px-4">
            A showcase of innovative solutions we have designed and developed for businesses and institutions.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </motion.div>

        {/* Enhanced Category Filter - responsive wrapping and touch-friendly buttons */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
          {categories.map((category, idx) => {
            const CategoryIcon = categoryIcons[category] || Briefcase;
            return (
              <motion.button
                key={idx}
                onClick={() => setFilterCategory(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  filterCategory === category
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:border-indigo-300"
                }`}
              >
                {filterCategory === category && <CategoryIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                {category}
              </motion.button>
            );
          })}
        </div>

        {/* Cards Grid - Responsive grid with proper gaps and padding */}
        <div className="mt-10 sm:mt-12 md:mt-14 grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          <AnimatePresence>
            {filteredProjects.map((p, i) => {
              const StatusIcon = p.status.includes("Live") ? CheckCircle : p.status.includes("Delivered") ? CheckCircle : Clock;
              const CategoryIcon = categoryIcons[p.category] || Briefcase;
              const hasStack = p.stack && p.stack.length > 0;
              
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full flex flex-col"
                >
                  {/* Content */}
                  <div className="relative p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl flex flex-col h-full">
                    {/* Header with Icon and Category - responsive sizes */}
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                          <CategoryIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 bg-indigo-50 text-indigo-600 rounded-full">
                          {p.category}
                        </span>
                      </div>
                      <a 
                        href={p.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 rounded-full bg-slate-100 group-hover:bg-indigo-100 transition-all duration-300 group-hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Visit ${p.title} website`}
                      >
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 group-hover:text-indigo-600" />
                      </a>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors mb-2 sm:mb-3 line-clamp-1">
                      {p.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                      {p.desc}
                    </p>

                    {/* Tech stack - responsive chips */}
                    {hasStack && (
                      <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                        {p.stack.slice(0, 4).map((tech, j) => (
                          <span
                            key={j}
                            className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-gradient-to-r from-indigo-50 to-purple-50 text-slate-700 rounded-full border border-indigo-100 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {p.stack.length > 4 && (
                          <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-slate-100 text-slate-600 rounded-full font-medium">
                            +{p.stack.length - 4}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Status - responsive spacing */}
                    <div className="mt-4 sm:mt-5 pt-2 sm:pt-3 border-t border-slate-100">
                      <span
                        className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold 
                          ${p.status.includes("Live") 
                            ? "bg-green-50 text-green-700 border border-green-200" 
                            : p.status.includes("Delivered")
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : "bg-yellow-50 text-yellow-700 border border-yellow-200 animate-pulse"}`}
                      >
                        <StatusIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {p.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Enhanced Stats Banner - Responsive grid with proper spacing and text sizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-xl sm:rounded-2xl p-5 sm:p-8 text-white shadow-xl mx-2 sm:mx-0"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{totalProjects}</div>
              <div className="text-xs sm:text-sm opacity-90">Total Projects</div>
              <div className="text-[10px] sm:text-xs opacity-75">Delivered with excellence</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{liveProjects}</div>
              <div className="text-xs sm:text-sm opacity-90">Live Websites</div>
              <div className="text-[10px] sm:text-xs opacity-75">Active & running</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{totalCategories}+</div>
              <div className="text-xs sm:text-sm opacity-90">Categories</div>
              <div className="text-[10px] sm:text-xs opacity-75">Diverse industries</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">100%</div>
              <div className="text-xs sm:text-sm opacity-90">Client Satisfaction</div>
              <div className="text-[10px] sm:text-xs opacity-75">Happy clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}