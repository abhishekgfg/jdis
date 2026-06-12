import { ArrowRight, Globe, Briefcase, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import img from "../components/images/jhero.png";

export default function HeroSection() {
  const stats = [
    {
      icon: Briefcase,
      value: "500+",
      label: "Projects Delivered",
    },
    {
      icon: Users,
      value: "200+",
      label: "Happy Clients",
    },
    {
      icon: Globe,
      value: "15+",
      label: "Countries Served",
    },
    {
      icon: Star,
      value: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#030d1d] text-white lg:min-h-[820px]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pb-8 sm:px-6 lg:px-10 lg:pb-[100px]">
        <div className="max-w-[620px] pt-10 lg:pt-[50px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[#ffb700]/30 bg-[#081528]/90 px-4 py-2 backdrop-blur-md lg:mb-8">
            <Globe size={14} className="text-[#ffb700]" />
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#ffb700]">
              Global IT Solutions
            </span>
          </div>

          <h1 className="font-bold leading-[1.08] tracking-[-1px] lg:leading-[1.05] lg:tracking-[-2px]">
            <span className="block text-[34px] sm:text-[52px] lg:text-[56px] text-white">
              Transforming Ideas
            </span>
            <span className="block text-[34px] sm:text-[52px] lg:text-[56px] text-[#ffb700]">
              Into Digital Excellence
            </span>
          </h1>

          <p className="mt-5 max-w-[580px] text-[15px] leading-7 text-[#c7d1e0] sm:text-lg sm:leading-8 lg:mt-6">
            JD Infotech Solutions helps startups, businesses and enterprises
            build world-class websites, mobile apps, enterprise software, AI
            solutions and digital ecosystems that scale globally.
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4 lg:mt-10">
            <Link
              to="/contact"
              className="flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#ffb700] px-6 font-semibold text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:bg-[#ffc329] sm:w-auto sm:px-8 lg:h-[58px]"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/portfolio"
              className="flex h-[52px] w-full items-center justify-center gap-3 rounded-lg border border-[#2a3b5c] bg-[#081528]/80 px-6 font-medium transition-all duration-300 hover:bg-[#0d1e38] sm:w-auto sm:px-8 lg:h-[58px]"
            >
              View Portfolio
              <ArrowRight size={18} className="text-[#ffb700]" />
            </Link>
          </div>

          <div className="mt-8 max-w-[760px] lg:mt-12">
            <div className="bg-[#071427]/95 border border-[#1b2e50] rounded-xl overflow-hidden backdrop-blur-md shadow-2xl shadow-black/30">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className={`p-5 flex items-center gap-4 border-[#1b2e50]
                        ${index !== 3 ? "lg:border-r" : ""}
                        ${index < 2 ? "sm:border-b lg:border-b-0" : ""}
                        ${index % 2 === 0 ? "sm:border-r" : ""}
                        ${index !== stats.length - 1 ? "border-b sm:border-b-0" : ""}
                      `}
                    >
                      <div className="w-8 h-10 min-w-10 rounded-xl bg-[#ffb700]/10 border border-[#ffb700]/30 flex items-center justify-center">
                        <Icon size={22} className="text-[#ffb700]" />
                      </div>

                      <div>
                        <h3 className="text-2xl lg:text-[24px] font-bold leading-none">
                          {item.value}
                        </h3>
                        <p className="mt-1 text-[12px] text-[#9fb0c7] leading-snug">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#14294f] bg-[#030d1d]/95 lg:absolute lg:bottom-0 lg:left-0 lg:right-0">
        <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-12 lg:py-7">
          <p className="mb-4 text-center text-[11px] uppercase tracking-[2px] text-[#6e7f99] sm:text-left lg:mb-5">
            Trusted By Global Brands
          </p>

          <div className="grid grid-cols-2 items-center gap-4 text-center sm:flex sm:flex-wrap sm:justify-between sm:gap-8 sm:text-left">
            {[
              "Google",
              "Microsoft",
              "Amazon",
              "IBM",
              "Oracle",
              "Meta",
              "SAP",
              "Airbnb",
              "PayPal",
              "Adobe",
            ].map((item) => (
              <span
                key={item}
                className="text-base font-semibold text-white/85 sm:text-2xl"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
