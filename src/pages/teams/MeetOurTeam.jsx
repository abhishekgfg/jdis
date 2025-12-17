import React from "react";
import { motion } from "framer-motion";
import Aviraj from "../../components/images/aviraj.jpeg";
import Abhishek from "../../components/images/Abhishek.jpeg";
import Pankaj from "../../components/images/pankaj.jpeg";
import Rishabh from "../../components/images/rishbh.jpeg";

// ADD YOUR NEW IMAGES HERE
import Ritik from "../../components/images/hritik.jpeg";
import Suraj from "../../components/images/suraj.jpeg";
import Deepak from "../../components/images/deepak.jpeg";

export default function MeetOurTeam() {
  const team = [
    {
      name: "Aviraj Singh",
      role: "Full Stack Developer & Marketing Representative",
      description:
        "A dynamic full-stack developer who blends technical precision with smart marketing insight to deliver impactful digital solutions.",
      img: Aviraj,
    },
    {
      name: "Abhishek Kumar Pandey",
      role: "Full Stack Developer & Marketing Representative",
      description:
  "A results-driven full stack developer who combines robust application development with strategic marketing insights to enhance brand visibility, performance, and user retention.",

      img: Abhishek,
    },
    {
      name: "Pankaj Kumar Pandey",
      role: "Business Executive",
      description:
        "Driving client relations and business development with strong communication, strategy, and a growth-focused approach.",
      img: Pankaj,
    },
    {
      name: "Rishabh Gautam",
      role: "Full Stack Developer & Mobile Application development & Business Executive",
     description:
  "Bridging technology and business by delivering scalable digital solutions aligned with strategic goals and long-term growth.",

      img: Rishabh,
    },
    {
      name: "Hritik Thakur",
      role: "Python Developer & Mobile App Developer & Marketing Executive",
      description:
  "Developing scalable Python solutions and modern mobile applications, while supporting marketing efforts to enhance reach, engagement, and business growth.",
       img: Ritik,
    },
    {
      name: "Suraj Kumar ",
      role: "Mobile App Developer & MERN Stack Developer",
      description:
  "Developing robust mobile applications and MERN stack solutions focused on performance, scalability, and exceptional user experience.",
      img: Suraj,
    },
    {
      name: "Deepak Singh",
      role: "WordPress Developer & Sales Representative & SMO/SMM",
      description:
  "Developing high-quality, performance-optimized WordPress websites while strengthening brand presence through effective sales and social media marketing strategies.",
      img: Deepak,
    },
    {
      name: "Ranjan Kumar ",
      role: " MERN STACK Developer,Digital Marketing & SEO, Meta Ads Expert, Google Ads Expert",
      description:
  "Driving business growth by combining MERN stack development with data-driven digital marketing, high-ROI Meta and Google Ads campaigns, and advanced SEO strategies.",

      // img: Rishabh,
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 px-6">
      {/* SECTION HEADING */}
      <h1 className="text-center text-5xl font-black text-blue-600 dark:text-blue-400 tracking-wide mb-2">
        Meet Our Team
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
        A team of innovators shaping ideas into reality.
      </p>

      {/* TIMELINE LINE */}
      <div className="absolute left-1/2 top-32 w-[4px] bg-blue-200 dark:bg-gray-700 h-[85%] -translate-x-1/2 rounded-full"></div>

      <div className="space-y-5 max-w-6xl mx-auto relative z-10">
        {team.map((member, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } w-full`}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700 
                         rounded-3xl p-8 w-full max-w-lg hover:shadow-2xl transition duration-300"
            >
              {/* DOT */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 shadow-md
                border-4 border-white dark:border-gray-900 left-[-40px]"
              ></div>

              {/* IMAGE */}
              <div className="flex justify-center mb-5">
               <img
  src={member.img}
  alt={member.name}
  className="w-48 h-48 rounded-3xl object-cover shadow-xl hover:scale-110 transition duration-300"
/>

              </div>

              {/* CONTENT */}
              <h2 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400">
                {member.name}
              </h2>

              <p className="text-center text-gray-700 dark:text-gray-300 mb-2 text-lg">
                {member.role}
              </p>

              <p className="text-center text-gray-600 dark:text-gray-400 leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
