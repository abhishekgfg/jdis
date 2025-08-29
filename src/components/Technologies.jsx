// src/components/Technologies.jsx
import React, { useState } from "react";
import { FaReact, FaServer, FaTools } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  // Frontend
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  // Backend
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiGraphql,
  SiAmazon,
  // Tools
  SiGit,
  SiGithub,
  SiFigma,
  SiJira,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

export default function Technologies() {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontend = [
    { name: "React", icon: <SiReact className="text-sky-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { name: "AWS", icon: <SiAmazon className="text-orange-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  ];

  const tools = [
    { name: "Git", icon: <SiGit className="text-red-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-800" /> },
    { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Jira", icon: <SiJira className="text-blue-600" /> },
  ];

const tabs = [
  { id: "frontend", label: "Frontend", icon: <FaReact className="inline-block mr-2" /> },
  { id: "backend", label: "Backend", icon: <FaServer className="inline-block mr-2" /> },
  { id: "tools", label: "Tools & Platforms", icon: <FaTools className="inline-block mr-2" /> },
];

  const getItems = () => {
    switch (activeTab) {
      case "frontend":
        return frontend;
      case "backend":
        return backend;
      case "tools":
        return tools;
      default:
        return [];
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-sky-50 py-20 px-6 md:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 via-white to-indigo-100 opacity-60 blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-800"
        >
          Technologies{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
            We Use
          </span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
        >
          We specialize in both frontend and backend development, powered by
          modern tools to deliver high-quality, scalable solutions.
        </motion.p>

        {/* Tabs */}
{/* Tabs */}
<div className="flex flex-wrap justify-center gap-4 mt-12">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all transform ${
        activeTab === tab.id
          ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white scale-105 shadow-lg"
          : "bg-white/70 backdrop-blur-md text-slate-700 hover:scale-105 hover:shadow-md"
      }`}
    >
      {tab.icon}
      <span className="truncate">{tab.label}</span>
    </button>
  ))}
</div>


        {/* Tech Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {getItems().map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08, y: -4 }}
                className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 transition-all hover:shadow-xl"
              >
                <div className="text-5xl mb-3 animate-bounce">{tech.icon}</div>
                <div className="font-semibold text-slate-700">{tech.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1"
          >
            Let’s Build Something Great
          </a>
        </motion.div>
      </div>
    </section>
  );
}
