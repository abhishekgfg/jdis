// src/components/WebsiteProjects.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  FaShoppingCart, 
  FaLaptop, 
  FaPenFancy, 
  FaBuilding, 
  FaChartLine, 
  FaCloud, 
  FaHeartbeat, 
  FaUtensils, 
  FaBookOpen,
  FaMobileAlt, 
  FaPlane,
  FaGlobe 
} from "react-icons/fa";


const projects = [
  {
    title: "E-commerce Websites",
    desc: "Feature-rich online stores with secure checkout, product catalog, and payment gateways.",
    icon: <FaShoppingCart className="text-yellow-500 w-12 h-12" />,
    color: "from-yellow-100 to-yellow-200",
  },
  {
    title: "Corporate Websites",
    desc: "Professional websites that showcase your business, services, and achievements.",
    icon: <FaBuilding className="text-indigo-500 w-12 h-12" />,
    color: "from-indigo-100 to-indigo-200",
  },
  {
    title: "Blogs & Personal Portfolios",
    desc: "Clean, responsive, and SEO-friendly blogs and portfolios to highlight your work.",
    icon: <FaPenFancy className="text-pink-500 w-12 h-12" />,
    color: "from-pink-100 to-pink-200",
  },
  {
    title: "SaaS Platforms",
    desc: "Scalable web platforms with dashboards, analytics, and subscription features.",
    icon: <FaChartLine className="text-green-500 w-12 h-12" />,
    color: "from-green-100 to-green-200",
  },
  {
    title: "Landing Pages",
    desc: "High-converting landing pages for marketing campaigns, products, or apps.",
    icon: <FaLaptop className="text-sky-500 w-12 h-12" />,
    color: "from-sky-100 to-sky-200",
  },
  {
    title: "Cloud-integrated Websites",
    desc: "Websites with cloud services integration for storage, hosting, and scalability.",
    icon: <FaCloud className="text-purple-500 w-12 h-12" />,
    color: "from-purple-100 to-purple-200",
  },
  {
    title: "Healthcare Websites",
    desc: "Websites for hospitals, clinics, and medical services with appointment systems.",
    icon: <FaHeartbeat className="text-red-500 w-12 h-12" />,
    color: "from-red-100 to-red-200",
  },
  {
    title: "Restaurant Websites",
    desc: "Interactive restaurant websites with menus, online reservations, and delivery options.",
    icon: <FaUtensils className="text-orange-500 w-12 h-12" />,
    color: "from-orange-100 to-orange-200",
  },
  {
    title: "Education & E-learning",
    desc: "Web platforms for schools, universities, and online courses with learning management.",
    icon: <FaBookOpen className="text-blue-500 w-12 h-12" />,
    color: "from-blue-100 to-blue-200",
  },
  {
    title: "Travel & Tourism",
    desc: "Websites for travel agencies, tour packages, and booking platforms.",
    icon: <FaPlane className="text-teal-500 w-12 h-12" />,
    color: "from-teal-100 to-teal-200",
  },
   {
    title: "Mobile Applications",
    desc: "Cross-platform and native mobile apps with modern UI/UX and smooth performance.",
    icon: <FaMobileAlt className="text-pink-500 w-12 h-12" />,
    color: "from-pink-100 to-pink-200",
  },
{
  title: "All Types of Websites",
  desc: "Cross-platform and native websites and apps with modern UI/UX and smooth performance.",
  icon: <FaGlobe className="text-teal-500 w-12 h-12" />,
  color: "from-teal-100 to-teal-200",
}

];

export default function WebsiteProjects() {
  return (
  <section 
  id="webuild" 
  className="relative bg-gradient-to-b from-white via-slate-50 to-indigo-50 py-20 px-6 md:px-16 overflow-hidden"
>
  {/* Background circle + spark design */}
 <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 -left-24 w-96 h-96 bg-purple-500 rounded-full opacity-20"></div>
    <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-15"></div>
    <div className="absolute top-1/2 left-0 w-72 h-72 bg-teal-500 rounded-full opacity-10"></div>
  </div>
       <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-800"
        >
          Websites We Build
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
        >
          We specialize in creating stunning websites for e-commerce, corporate, SaaS, blogs, healthcare, restaurants, education, travel, and more.
        </motion.p>

        {/* Project Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center text-center p-8 rounded-3xl shadow-lg bg-gradient-to-br ${project.color} hover:scale-105 hover:shadow-2xl transition-transform`}
            >
              <div className="mb-5">{project.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
              <p className="text-slate-700">{project.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1"
          >
            Let’s Build Your Website
          </a>
        </motion.div>
      </div>
    </section>
  );
}
