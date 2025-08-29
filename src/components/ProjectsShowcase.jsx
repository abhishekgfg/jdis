// src/components/ProjectsShowcase.jsx
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Grocery Delivery",
    desc: "A user-friendly grocery delivery platform that allows customers to browse products, add items to cart, and place orders with real-time status updates.",
    stack: ["React", "Redux", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "HTML", "Git"],
    status: "🚧 Under Development",
    link: "#"
  },
  {
    title: "Ecommerce website ",
    desc: "A full-featured school management system to handle admissions, attendance, student progress, and teacher coordination — all in one dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "Git"],
    status: "🚧 Under Development",
    link: "https://herbs.manovaidya.in/"
  },
  {
    title: "Blog Website",
    desc: "A scalable solution for educational institutions with features like student enrollment, faculty modules, payment tracking, and reporting tools.",
    stack: ["React", "Redux", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "HTML", "Git"],
    status: "Successfull delivered",
    link: "https://airfresearch.com/"
  },
  {
    title: "Education Website",
    desc: "A modern marriage hall booking portal where users can check availability, explore event packages, and book halls online with integrated payment options.",
    stack: ["React", "Redux", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "HTML", "Git"],
    status: "Successfull delivered",
    link: "https://www.shodhsutra.com/"
  },
  {
    title: "Indian Institute of Research and Higher Education",
    desc: "An intuitive platform to guide students through the admission process — includes university listings, real-time counseling, and document submission.",
    stack: ["React", "Redux", "TailwindCSS", "Node.js", "MongoDB", "Firebase", "HTML", "Git"],
    status: "Successfull delivered",
    link: "https://iirhe.org.in/"
  },
  {
    title: "Restaurant Ordering System",
    desc: "A full-stack food ordering system that supports restaurant listings, dynamic menu uploads, table bookings, and real-time order status.",
    stack: ["React", "Redux", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "JWT"],
    status: "🚧 Under Development",
    link: "https://restaurant-tan-phi.vercel.app/"
  },
  {
    title: "School Website",
    desc: "An interactive website for a car detailing business showcasing services, appointment booking, pricing, and dynamic service listings with animation.",
    stack: ["React", "Framer Motion", "TailwindCSS", "Firebase", "Git"],
    status: "🚧 Under Development",
    link: "https://institute-frontend-mocha.vercel.app/"
  },
  {
    title: "Library Management System",
    desc: "A digital library system for managing book inventories, issuing/returning books, and tracking user activity with an admin dashboard.",
    stack: ["React", "Express", "MongoDB", "TailwindCSS", "JWT", "HTML", "Git"],
    status: "🚧 Under Development",
    link: "https://dashboard-ten-alpha-25.vercel.app/"
  },
  {
    title: "Counstatancy Website",
    desc: "A professional school website featuring admission forms, class sections, photo gallery, download center, and student result portal.",
    stack: ["React", "TailwindCSS", "Framer Motion", "Firebase", "Git"],
    status: "✅ Live",
    link: "https://manovaidya.in/"
  }
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-96 h-96 bg-purple-500 rounded-full opacity-20"></div>
        <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-teal-500 rounded-full opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-slate-800"
        >
          Our Deployed Projects in the Market
        </motion.h2>
        <p className="text-center text-slate-500 mt-3 max-w-2xl mx-auto">
          A showcase of innovative solutions we have designed and developed for businesses and institutions.
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
              className="relative group p-6 rounded-2xl bg-white/80 backdrop-blur-lg border border-slate-200 
                         shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* Left-to-right glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-700 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-500 animate-slide"></div>
</div>
              {/* Inner Content */}
              <div className="relative z-10">
                {/* Title + Link */}
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-slate-800">{p.title}</h3>
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 text-slate-400 hover:text-indigo-600" />
                  </a>
                </div>

                {/* Description */}
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{p.desc}</p>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 text-slate-700 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Status */}
                <div className="mt-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold 
                      ${p.status.includes("Live") 
                        ? "bg-green-100 text-green-600" 
                        : "bg-yellow-100 text-yellow-700 animate-pulse"}`}
                  >
                    {p.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
