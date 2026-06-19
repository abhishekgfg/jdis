import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Aviraj from "../components/images/aviraj.jpeg";
import Abhishek from "../components/images/Abhishek.jpeg";
import Pankaj from "../components/images/pankaj.jpeg";
import Rishabh from "../components/images/rishbh.jpeg";
import Ritik from "../components/images/hritik.jpeg";

export default function LeadershipTeamSection() {
  const leaders = [
    // {
    //   name: "Aviraj Singh",
    //   role: "Full Stack Developer",
    //   img: Aviraj,
    // },
    {
      name: "Abhishek Kumar Pandey",
      role: "Full Stack Developer & Marketing BDE",
      img: Abhishek,
    },
    {
      name: "Pankaj Kumar Pandey",
      role: "Marketing & Business Executive",
      img: Pankaj,
    },
    {
      name: "Rishabh Gautam",
      role: "Full Stack & Mobile App Developer",
      img: Rishabh,
    },
    {
      name: "Hritik Thakur",
      role: "Python & Mobile App Developer",
      img: Ritik,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/search/results/companies/?keywords=JD%20Infotech%20Solutions",
      label: "Find JD Infotech Solutions on LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/search?q=JD%20Infotech%20Solutions",
      label: "Find JD Infotech Solutions on X",
    },
    {
      icon: Mail,
      href: "mailto:jdinfotechsolution@gmail.com",
      label: "Email JD Infotech Solutions",
    },
  ];

  return (
    <section className="bg-[#f8fbff] py-10 lg:py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-6 flex items-start justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
              Our Leadership
            </span>

            <h2 className="mt-2 text-[24px] font-bold leading-tight text-[#071426] sm:text-[28px] lg:text-[32px]">
              Meet Our Leadership Team
            </h2>
          </div>

          <Link
            to="/meet-our-team"
            className="hidden sm:inline-flex h-[42px] px-5 rounded-md border border-[#9aa8bd] bg-white hover:bg-[#f3f7ff] text-[#071426] text-[13px] font-semibold items-center gap-3 transition-all"
          >
            Join Our Team
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-7">
          {leaders.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-xl border border-[#e5edf7] bg-white shadow-[0_10px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
            >
              <div className="h-[260px] overflow-hidden bg-[#eaf1fb] sm:h-[210px] md:h-[170px] lg:h-[150px]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-[14px] font-bold text-[#071426]">
                  {member.name}
                </h3>

                <p className="mt-1 text-[12px] text-[#536174]">
                  {member.role}
                </p>

                <div className="mt-4 flex items-center justify-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      aria-label={`${social.label} for ${member.name}`}
                      className="w-8 h-8 rounded-full bg-[#f3f7ff] hover:bg-[#145cff] text-[#071426] hover:text-white flex items-center justify-center transition-all"
                    >
                      <Icon size={14} />
                    </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/meet-our-team"
          className="mt-6 inline-flex h-[42px] w-full items-center justify-center gap-3 rounded-md border border-[#9aa8bd] bg-white px-5 text-[13px] font-semibold text-[#071426] sm:hidden"
        >
          Join Our Team
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
