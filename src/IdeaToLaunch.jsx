// src/components/IdeaToLaunch.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaPenNib, FaCogs, FaRocket } from "react-icons/fa";

const steps = [
  {
    title: "Ideation",
    desc: "We brainstorm and analyze your concept to craft a clear roadmap.",
    icon: <FaLightbulb className="text-yellow-400 w-12 h-12" />,
  },
  {
    title: "Planning & Design",
    desc: "Wireframes, UI/UX design, and a solid plan to bring your vision to life.",
    icon: <FaPenNib className="text-pink-500 w-12 h-12" />,
  },
  {
    title: "Development",
    desc: "Our team builds scalable, robust solutions using modern technologies.",
    icon: <FaCogs className="text-sky-500 w-12 h-12" />,
  },
  {
    title: "Launch & Support",
    desc: "We launch your product and provide ongoing support and optimizations.",
    icon: <FaRocket className="text-green-500 w-12 h-12" />,
  },
];

export default function IdeaToLaunch() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 via-white to-sky-50 py-20 px-6  overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 via-white to-indigo-100 opacity-40 blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-800"
        >
          From Idea to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Launch</span>
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
        >
          We guide your project from a simple idea to a fully launched product, providing design, development, and continuous support.
        </motion.p>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform hover:shadow-2xl"
            >
              <div className="mb-5">{step.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
