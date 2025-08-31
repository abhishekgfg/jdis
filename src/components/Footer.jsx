// src/components/Footer.jsx
import React from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope 
} from "react-icons/fa";
import logo from "./images/jagdamba.png";



export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-white via-sky-50 to-white pt-32 overflow-hidden">
      {/* Full-width top curved background */}
      <motion.div
    
        className="absolute top-0 left-0 w-full h-48 bg-yellow-200 rounded-b-[50%] opacity-40"
      ></motion.div>

      {/* Additional subtle background shapes */}
      <motion.div
   
        className="absolute -bottom-36 left-0 w-64 h-64 bg-pink-300 rounded-t-[50%] opacity-25"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -bottom-40 right-0 w-72 h-72 bg-cyan-200 rounded-t-[50%] opacity-25"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10 text-slate-800">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-3">
             <img src={logo} alt="Logo" className="w-20 h-20 mr-3" />
              <span className="font-extrabold text-2xl text-sky-700">JD Infotech Solution</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              We are a full-service digital marketing company helping businesses succeed online with modern, results-driven strategies. From web design to social media, we've got you covered.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-sky-700">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {["Home", "About us", "Services", "Privacy Policy", "Blog", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s/g, "")}`} className="hover:text-sky-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-sky-700">Our Services</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {["Website Creation", "Software Development", "Application Development", "Google Services", "SEO", "Social Media Promotion"].map((service) => (
                <li key={service}>
                  <a href={`#${service.toLowerCase().replace(/\s/g, "")}`} className="hover:text-sky-500 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

<div>
  <h3 className="font-semibold text-xl mb-4 text-sky-700">Contact Us</h3>
  <ul className="flex flex-col gap-3 text-gray-700">
    {/* Address */}
    <li className="flex items-center gap-2">
      <FaMapMarkerAlt className="text-sky-500 mt-1" />
      <span>Bhagwat Nagar Patna Bihar && noida sector 27 near of atta market noida uttar pradesh</span>
    </li>

    {/* Phone Numbers */}
    <li className="flex items-center gap-2">
      <FaPhone className="text-green-500 mt-1" />
      <span>
        <a href="tel:+916202000340" className="hover:text-green-500 transition">
          +91 6209015004 ,8699913072
        </a>
      
        
      </span>
    </li>

    {/* Emails */}
    <li className="flex items-center gap-2">
      <FaEnvelope className="text-sky-500 mt-1" />
      <span>
        <a href="mailto:jdinfotechsloution@gmail.com
" className="hover:text-sky-500 transition">
          jdinfotechsloution@gmail.com

        </a>
      
       
      </span>
    </li>
  </ul>
</div>



        </div>

        {/* Animated Social Icons */}
        <div className="flex justify-center space-x-6 mt-12 relative z-10 text-slate-600">
          {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:text-sky-500 transition-colors"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-slate-500 text-sm mt-8 relative z-10 pb-6">
          © {new Date().getFullYear()} <a href="#" className="text-sky-500 hover:underline">JD Infotech Solution</a>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
