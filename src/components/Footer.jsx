// // src/components/Footer.jsx
// import React from "react";
// // import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import { motion } from "framer-motion";

// import { 
//   FaFacebookF, 
//   FaInstagram, 
//   FaLinkedinIn, 
//   FaYoutube,
//   FaMapMarkerAlt, 
//   FaPhone, 
//   FaEnvelope 
// } from "react-icons/fa";
// import logo from "./images/jagdamba.png";



// export default function Footer() {
//   return (
//     <footer className="relative bg-gradient-to-t from-white via-sky-50 to-white pt-32 overflow-hidden">
//       {/* Full-width top curved background */}
//       <motion.div
    
//         className="absolute top-0 left-0 w-full h-48 bg-yellow-200 rounded-b-[50%] opacity-40"
//       ></motion.div>

//       {/* Additional subtle background shapes */}
//       <motion.div
   
//         className="absolute -bottom-36 left-0 w-64 h-64 bg-pink-300 rounded-t-[50%] opacity-25"
//       ></motion.div>
//       <motion.div
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 8, repeat: Infinity }}
//         className="absolute -bottom-40 right-0 w-72 h-72 bg-cyan-200 rounded-t-[50%] opacity-25"
//       ></motion.div>

//       <div className="max-w-7xl mx-auto px-6">
//         {/* Main content */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10 text-slate-800">
//           {/* Logo & Description */}
//           <div>
//             <div className="flex items-center mb-3">
//              <img src={logo} alt="Logo" className="w-20 h-20 mr-3" />
//               <span className="font-extrabold text-2xl text-sky-700">JD Infotech Solution</span>
//             </div>
//             <p className="text-slate-600 text-sm leading-relaxed">
//               We are a full-service digital marketing company helping businesses succeed online with modern, results-driven strategies. From web design to social media, we've got you covered.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold text-xl mb-4 text-sky-700">Quick Links</h3>
//             <ul className="space-y-2 text-sm text-slate-600">
//               {["Home", "About us", "Services", "Privacy Policy", "Blog", "Contact Us"].map((item) => (
//                 <li key={item}>
//                   <a href={`#${item.toLowerCase().replace(/\s/g, "")}`} className="hover:text-sky-500 transition-colors">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="font-semibold text-xl mb-4 text-sky-700">Our Services</h3>
//             <ul className="space-y-2 text-sm text-slate-600">
//               {["Website Creation", "Software Development", "Application Development", "Google Services", "SEO", "Social Media Promotion"].map((service) => (
//                 <li key={service}>
//                   <a href={`#${service.toLowerCase().replace(/\s/g, "")}`} className="hover:text-sky-500 transition-colors">
//                     {service}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

// <div>
//   <h3 className="font-semibold text-xl mb-4 text-sky-700">Contact Us</h3>
//   <ul className="flex flex-col gap-3 text-gray-700">
//     {/* Address */}
//     <li className="flex items-center gap-2">
//       <FaMapMarkerAlt className="text-sky-500 mt-1" />
//       <span>Bhagwat Nagar Patna Bihar && noida sector 27 near of atta market noida uttar pradesh</span>
//     </li>

//     {/* Phone Numbers */}
//     <li className="flex items-center gap-2">
//       <FaPhone className="text-green-500 mt-1" />
//       <span>
//         <a href="tel:+916202000340" className="hover:text-green-500 transition">
//           +91 6202000340
//         </a>
      
        
//       </span>
//     </li>

//     {/* Emails */}
//     <li className="flex items-center gap-2">
//       <FaEnvelope className="text-sky-500 mt-1" />
//       <span>
//         <a href="mailto:jdinfotechsloution@gmail.com
// " className="hover:text-sky-500 transition">
//           jdinfotechsloution@gmail.com

//         </a>
      
       
//       </span>
//     </li>
//   </ul>
// </div>



//         </div>

//         {/* Animated Social Icons */}
//         {/* Animated Social Icons */}
// <div className="flex justify-center space-x-6 mt-12 relative z-10 text-slate-600">
//   {[
//     { Icon: FaFacebookF, url: "https://www.facebook.com/profile.php?id=61579891453524" },
//     { Icon: FaInstagram, url: "https://www.instagram.com/jd_infotech_solutions?igsh=anp6ZmpzZmR1dTcy" },
//     { Icon: FaLinkedinIn, url: "https://www.linkedin.com/company/yourpage" },
//     { Icon: FaYoutube, url: "https://www.youtube.com/@yourchannel" }
//   ].map(({ Icon, url }, index) => (
//     <motion.a
//       key={index}
//       href={url}
//       target="_blank"
//       rel="noopener noreferrer"
//       whileHover={{ scale: 1.2, rotate: 10 }}
//       whileTap={{ scale: 0.9 }}
//       className="text-2xl hover:text-sky-500 transition-colors"
//     >
//       <Icon />
//     </motion.a>
//   ))}
// </div>


//         {/* Footer Bottom */}
//         <div className="text-center text-slate-500 text-sm mt-8 relative z-10 pb-6">
//           © {new Date().getFullYear()} <a href="#" className="text-sky-500 hover:underline">JD Infotech Solution</a>. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }







import {
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#061326] text-white overflow-hidden">
      {/* Top CTA */}
      <div className="bg-gradient-to-r from-[#061326] via-[#0b2a66] to-[#061326] border-b border-[#183456]">
        <div className="mx-auto px-6 lg:px-12 py-3 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center">
            <h2 className="text-[24px] leading-tight font-bold">
              Ready to Build Your Next Digital Product?
            </h2>
            <p className="text-[13px] text-[#c7d1e0] mt-1">
              Let&apos;s create something amazing together!
            </p>
          </div>

          <button className="h-[44px] px-7 rounded-md bg-[#ffb700] hover:bg-[#ffc329] text-[#061326] text-[14px] font-bold inline-flex items-center gap-3 transition-all shadow-lg shadow-yellow-500/20">
            Start Your Project
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto px-6 lg:px-12 py-5">
        <div className="grid lg:grid-cols-[1.25fr_0.85fr_1fr_1fr_1.55fr] gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="text-[42px] font-extrabold leading-none">
                <span className="text-white">J</span>
                <span className="text-[#ffb700]">D</span>
              </div>

              <div>
                <h3 className="text-[18px] font-bold leading-none">
                  JD INFOTECH
                </h3>
                <p className="text-[12px] tracking-widest font-semibold">
                  SOLUTIONS
                </p>
              </div>
            </div>

            <p className="mt-3 max-w-[270px] text-[13px] leading-6 text-[#c7d1e0]">
              We help businesses grow with innovative technology solutions.
              Your success is our mission.
            </p>

            <div className="mt-4 flex items-center gap-3">
              {[
                { Icon: Facebook, url: "https://www.facebook.com/profile.php?id=61579891453524" },
                { Icon: Linkedin, url: "https://www.linkedin.com/company/jd-infotech-solutions" },
                { Icon: Twitter, url: "#" },
                { Icon: Instagram, url: "https://www.instagram.com/jd_infotech_solutions?igsh=anp6ZmpzZmR1dTcy" },
                { Icon: Youtube, url: "https://www.youtube.com/@jdinfotechsolutions" },
              ].map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/8 hover:bg-[#145cff] flex items-center justify-center transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-l border-white/10 pl-8">
            <h4 className="text-[15px] font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[13px] text-[#c7d1e0]">
              {["Home", "About Us", "Portfolio", "Case Studies", "Blog", "Careers", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-[#ffb700] transition">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="border-l border-white/10 pl-8">
            <h4 className="text-[15px] font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-[13px] text-[#c7d1e0]">
              {[
                "Website Development",
                "Mobile App Development",
                "Ecommerce Development",
                "CRM Development",
                "ERP Development",
                "AI Solutions",
                "UI/UX Design",
                "SEO & Digital Marketing",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#ffb700] transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="border-l border-white/10 pl-8">
            <h4 className="text-[15px] font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-[13px] text-[#c7d1e0]">
              {[
                "Startup Solutions",
                "Enterprise Solutions",
                "Cloud Solutions",
                "AI Automation",
                "Business Automation",
                "Digital Transformation",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#ffb700] transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="border-l border-white/10 pl-8">
            <h4 className="text-[15px] font-bold mb-4">Newsletter</h4>

            <p className="text-[13px] leading-6 text-[#c7d1e0] max-w-[280px]">
              Subscribe to our newsletter for the latest updates & insights.
            </p>

            <div className="mt-3 flex h-[44px] rounded-md overflow-hidden border border-white/10 bg-[#071b34] max-w-[330px]">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent px-4 text-[13px] outline-none text-white placeholder:text-[#71829c]"
              />

              <button className="w-[48px] bg-[#ffb700] hover:bg-[#ffc329] text-[#061326] flex items-center justify-center transition">
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="mt-3 space-y-2 text-[13px] text-[#c7d1e0]">
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-[#ffb700]" />
                +91 9523435814
              </p>

              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[#ffb700]" />
                info@jdinfotechsolutions.in
              </p>

              <p className="flex items-center gap-2">
                <Globe size={14} className="text-[#ffb700]" />
                www.jdinfotechsolutions.in
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto px-6 lg:px-12 py-2 flex flex-col md:flex-row items-center justify-between gap-2 text-[12px] text-[#c7d1e0]">
          <p>© 2024 JD Infotech Solutions. All Rights Reserved.</p>
          <p>
            Made with <span className="text-red-500">♥</span> in India
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/916200594193"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 z-50 w-14 h-14 rounded-full bg-[#25D366] border-4 border-white flex items-center justify-center shadow-xl hover:scale-110 transition-all"
      >
        <Phone size={28} className="text-white" />
      </a>
    </footer>
  );
}