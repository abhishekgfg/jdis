// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    avatar: "/src/assets/client1.jpg",
    feedback:
      "Skyward Labs delivered exceptional results. Their attention to detail and innovative approach exceeded our expectations.",
  },
  {
    name: "Jane Smith",
    position: "Marketing Head, InnovateX",
    avatar: "/src/assets/client2.jpg",
    feedback:
      "The team at Skyward Labs is highly professional. They transformed our vision into a beautiful, functional product.",
  },
  {
    name: "Michael Johnson",
    position: "Founder, StartSmart",
    avatar: "/src/assets/client3.jpg",
    feedback:
      "Amazing experience working with Skyward Labs. The communication, creativity, and execution were top-notch.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-gradient-to-b from-sky-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl"
        >
          Our clients trust us to deliver world-class digital solutions. Here's what they have to say about working with us.
        </motion.p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="w-20 h-20 mb-6 rounded-full overflow-hidden border-4 border-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
              <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
            </div>
            <FaQuoteLeft className="text-purple-500 text-3xl mb-4" />
            <p className="text-gray-600 mb-6 italic">"{t.feedback}"</p>
            <h3 className="text-xl font-semibold text-gray-800">{t.name}</h3>
            <span className="text-gray-500">{t.position}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
