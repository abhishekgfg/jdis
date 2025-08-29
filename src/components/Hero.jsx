import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence} from "framer-motion";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });

  // --------- Rotating Words ---------
  const words = ["scalable", "innovative", "impactful"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // word changes every 2s
    return () => clearInterval(interval);
  }, []);

  // --------- Handle Form ---------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello, my name is ${formData.name}.
Email: ${formData.email}
Project Details: ${formData.project}`;
    const phoneNumber = "916202000340"; // your WhatsApp number (without +)
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
   <section className="relative bg-white overflow-hidden">
       <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full blur-3xl opacity-30"></div>
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center pt-24 pb-12 px-6 -mt-5">
    {/* 👇 yaha aapka pura Hero ka content rahega */}
        <div>
          {/* Heading with rotating words */}
         <motion.h2
  initial={{ x: -40, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.1 }}
  className="text-4xl md:text-5xl font-extrabold leading-tight flex flex-wrap gap-2"
>
  We build{" "}
  <span className="inline-flex items-center min-w-[120px]">
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: -90, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-blue-600"
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  </span>
  software products for startups.
</motion.h2>

          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-600"
          >
            From discovery to deployment — product strategy, UX, and engineering aligned to ship fast and iterate smarter.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex gap-4"
          >
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-500 to-blue-600 text-white font-semibold shadow-lg"
            >
              Start a Project
            </button>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full border border-slate-200 text-slate-700"
            >
              View Work
            </a>
          </motion.div>

          {/* Stats */}
          <div className="mt-8 flex gap-6 text-sm text-slate-500">
            <div>
              <div className="text-2xl font-bold">20+</div>
              <div>Products shipped</div>
            </div>
            <div>
              <div className="text-2xl font-bold">50+</div>
              <div>Experienced engineers</div>
            </div>
            <div>
              <div className="text-2xl font-bold">10</div>
              <div>Years of combined experience</div>
            </div>
          </div>
        </div>

        {/* Right Side Mock Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="relative"
        >
          <div className="rounded-2xl p-6 shadow-2xl bg-gradient-to-br from-slate-50 to-white">
            <img
              alt="product mock"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop&crop=faces"
              className="rounded-xl w-full h-80 object-cover shadow"
            />
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white shadow">
                <div className="text-xs text-slate-400">Platform</div>
                <div className="font-semibold">SaaS Marketplace</div>
              </div>
              <div className="p-4 rounded-lg bg-white shadow">
                <div className="text-xs text-slate-400">Tech</div>
                <div className="font-semibold">React • Node • AWS</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Popup Form */}
    {showForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    {/* Background with gradient + watermark */}
    <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-1 rounded-2xl shadow-2xl w-[420px] overflow-hidden">
      
      {/* ✅ Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 text-6xl font-extrabold text-gray-700">
        JD Infotech Solutions
      </div>

      {/* Actual Form */}
      <div className="relative bg-white rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-brand-500 to-blue-600 bg-clip-text text-transparent">
          Start a Project 🚀
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="👤 Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="📧 Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          {/* ✅ Phone Field */}
          <input
            type="tel"
            name="phone"
            placeholder="📞 Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <textarea
            name="project"
            placeholder="💡 Tell us about your project"
            value={formData.project}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-md hover:scale-105 transform transition"
            >
              ✅ Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

    </section>
  );
}
