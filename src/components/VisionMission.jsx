// src/components/VisionMission.jsx
import React from "react";
import { motion } from "framer-motion";
import { Globe, Target, Users } from "lucide-react";

const features = [
  {
    title: "Our Vision",
    desc: "To empower every business with innovative digital solutions and create a meaningful impact in the technology space.",
    icon: Globe,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Our Mission",
    desc: "Deliver top-notch software solutions, foster innovation, and ensure seamless experiences for our clients globally.",
    icon: Target,
    gradient: "from-green-400 to-blue-500",
  },
  {
    title: "Our Values",
    desc: "Integrity, Excellence, Collaboration, Innovation, and Customer Satisfaction drive everything we do.",
    icon: Users,
    gradient: "from-yellow-400 to-orange-500",
  },
];

export default function VisionMission() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-gradient-to-b from-white via-slate-50 to-sky-50">
        
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
        >
          Vision & Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl"
        >
          We are committed to delivering innovative solutions, shaping the future of technology, and creating lasting impact for our clients worldwide.
        </motion.p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div
              className={`w-20 h-20 mb-6 rounded-full flex items-center justify-center text-white text-3xl font-bold bg-gradient-to-br ${feature.gradient} shadow-lg`}
            >
              <feature.icon size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
