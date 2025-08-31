// src/components/ContactFormWithInfo.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactFormWithInfo() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "6202000340";
    const text = `Hello, my name is ${form.name}. Email: ${form.email}. Phone: ${form.phone}. Subject: ${form.subject}. Message: ${form.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  return (
   <section
  id="contact"
  className="relative w-full py-20 px-6 md:px-20 bg-gradient-to-b from-white via-sky-50 to-slate-50 overflow-hidden"
>
      {/* Background Circles */}
        <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 -left-24 w-96 h-96 bg-purple-500 rounded-full opacity-20"></div>
    <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-15"></div>
    <div className="absolute top-1/2 left-0 w-72 h-72 bg-teal-500 rounded-full opacity-10"></div>
  </div>

    <div className="relative max-w-7xl mx-auto grid gap-10 md:grid-cols-2 items-start">

        {/* Left: Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col gap-6 relative z-10"
        >
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              required
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="border border-gray-300 rounded-xl p-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <button
            type="submit"
            className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Send via WhatsApp
          </button>
        </motion.form>

        {/* Right: Contact Info */}
       <motion.div className="flex flex-col gap-6 relative z-10 w-full">

          {/* Address */}
          <div className="flex items-center gap-4 bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="p-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Address</h4>
              <p className="text-gray-500">
                Bhagwat Nagar Patna Bihar && noida sector 27 near of atta market noida uttar pradesh
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="p-4 rounded-full bg-gradient-to-br from-green-400 to-blue-500 text-white">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-500">
                <a
                  href="tel:+916202000340"
                  className="hover:underline hover:text-green-500 transition"
                >
                  +91 6209015004
                </a>
                ,{" "}
             <a
                  href="tel:+916200594193"
                  className="hover:underline hover:text-green-500 transition"
                >
              6202000340
                </a>
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="p-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-gray-500">
                <a
                  href="mailto:abhishek8579013@gmail.com"
                  className="hover:underline hover:text-purple-500 transition"
                >
                 jdinfotechsloution@gmail.com

                </a>
                ,{" "}
            
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
