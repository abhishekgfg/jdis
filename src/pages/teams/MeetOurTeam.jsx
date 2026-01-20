import { motion } from "framer-motion";
import Aviraj from "../../components/images/aviraj.jpeg";
import Abhishek from "../../components/images/Abhishek.jpeg";
import Pankaj from "../../components/images/pankaj.jpeg";
import Rishabh from "../../components/images/rishbh.jpeg";
import Ritik from "../../components/images/hritik.jpeg";
import Suraj from "../../components/images/suraj.jpeg";
import Deepak from "../../components/images/deepak.jpeg";
import Golu from "../../components/images/Golu.jpeg";
import Vivek from "../../components/images/Vivek.jpeg";
import Rishikesh from "../../components/images/Rishikesh.png";
import Nikhil from "../../components/images/Nikhil.png";


export default function MeetOurTeam() {
  const teamStructure = {
    "Tech Team": [
      {
        name: "Aviraj Singh",
        role: "Full Stack Developer",
        description: "A dynamic full-stack developer who delivers impactful digital solutions with technical precision and innovative approaches.",
        img: Aviraj,
      },
      {
        name: "Abhishek Kumar Pandey",
        role: "Full Stack Developer & Marketing BDE",
        description: "Expert full-stack developer with strong marketing insights, combining technical excellence with business development expertise.",
        img: Abhishek,
      },
      {
        name: "Rishabh Gautam",
        role: "Full Stack & Mobile App Developer",
        description: "Specializes in scalable web and mobile applications, bridging technology with strategic business solutions.",
        img: Rishabh,
      },
      {
        name: "Hritik Thakur",
        role: "Python & Mobile App Developer",
        description: "Expert in Python development and modern mobile applications focused on performance and scalability.",
        img: Ritik,
      },
      {
        name: "Suraj Kumar",
        role: "Mobile App & MERN Stack Developer",
        description: "Develops robust mobile applications and MERN stack solutions with exceptional user experience focus.",
        img: Suraj,
      },
      {
        name: "Deepak Singh",
        role: "WordPress Developer",
        description: "Creates high-quality, performance-optimized WordPress websites with modern design principles.",
        img: Deepak,
      },
      {
        name: "Ranjan Kumar",
        role: "MERN Stack Developer & Digital Marketing Expert",
        description: "Full-stack MERN developer with expertise in digital marketing, SEO, and online advertising campaigns.",
        img: null,
      },
    ],
    "Marketing & Business Team": [
      {
        name: "Pankaj Kumar Pandey",
        role: "Marketing & Business Executive",
        description: "Drives client relations and business development with strategic marketing insights and growth-focused approaches.",
        img: Pankaj,
      },
      {
        name: "Vivek Kumar",
        role: "Business Development Executive",
        description: "Specializes in business development strategies and client relationship management for sustainable growth.",
        img: Vivek,
      },
       {
        name: "Abhishek Kumar",
        role: "Executive || Muzaffarpur",
        description: "Specializes in business development, strategic sales, and client relationship management to accelerate sustainable growth.",
        img: Golu,
      },
    ],
    "Creative & Design Team": [
        {
        name: "Nikhil Kumar",
        role: "Graphic Designer",
        description: "Creative graphic designer focused on visual branding, UI/UX design, and compelling visual communications.",
        img: Nikhil,
      },
      {
        name: "Rishikesh",
        role: "SEO Expert",
        description: "Specializes in search engine optimization strategies to improve online visibility and organic traffic growth.",
        img: Rishikesh,
      }
    ],
  };

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

      <div className="space-y-16 max-w-6xl mx-auto relative z-10">
        {Object.entries(teamStructure).map(([teamName, members], sectionIndex) => (
          <div key={sectionIndex} className="relative">
            {/* DEPARTMENT HEADER */}
            <div className="text-center mb-12 relative">
              {/* Department connector dot - positioned above the header */}
              <div className="absolute left-1/2 top-[-20px] -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
              <div className="bg-blue-600 dark:bg-blue-700 text-white px-8 py-4 rounded-2xl inline-block shadow-lg mt-2">
                <h2 className="text-2xl font-bold">{teamName}</h2>
              </div>
            </div>

            {/* TEAM MEMBERS */}
            <div className="space-y-8">
              {members.map((member, index) => (
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
                      {member.img ? (
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-48 h-48 rounded-3xl object-cover shadow-xl hover:scale-110 transition duration-300"
                        />
                      ) : (
                        <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center shadow-xl">
                          <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                      )}
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
          </div>
        ))}
      </div>
    </section>
  );
}
