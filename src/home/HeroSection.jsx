import { ArrowRight, Globe, Briefcase, Users, Star } from "lucide-react";
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
      className="relative min-h-[760px] lg:min-h-[820px] overflow-hidden text-white bg-[#030d1d]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pb-[100px]">
        <div className="pt-[50px] lg:pt-[50px] max-w-[620px]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#ffb700]/30 bg-[#081528]/90 backdrop-blur-md mb-8">
            <Globe size={14} className="text-[#ffb700]" />
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#ffb700]">
              Global IT Solutions
            </span>
          </div>

          <h1 className="font-bold leading-[1.05] tracking-[-2px]">
            <span className="block text-[44px] sm:text-[52px] lg:text-[56px] text-white">
              Transforming Ideas
            </span>
            <span className="block text-[44px] sm:text-[52px] lg:text-[56px] text-[#ffb700]">
              Into Digital Excellence
            </span>
          </h1>

          <p className="mt-6 text-[#c7d1e0] text-base sm:text-lg leading-8 max-w-[580px]">
            JD Infotech Solutions helps startups, businesses and enterprises
            build world-class websites, mobile apps, enterprise software, AI
            solutions and digital ecosystems that scale globally.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="h-[58px] px-8 rounded-lg bg-[#ffb700] hover:bg-[#ffc329] transition-all duration-300 text-black font-semibold flex items-center gap-3 shadow-lg shadow-yellow-500/20">
              Start Your Project
              <ArrowRight size={18} />
            </button>

            <button className="h-[58px] px-8 rounded-lg border border-[#2a3b5c] bg-[#081528]/80 hover:bg-[#0d1e38] transition-all duration-300 font-medium flex items-center gap-3">
              View Portfolio
              <ArrowRight size={18} className="text-[#ffb700]" />
            </button>
          </div>

          <div className="mt-12 max-w-[760px]">
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
                      `}
                    >
                      <div className="w-8 h-10 min-w-10 rounded-xl bg-[#ffb700]/10 border border-[#ffb700]/30 flex items-center justify-center">
                        <Icon size={22} className="text-[#ffb700]" />
                      </div>

                      <div>
                        <h3 className="text-3xl lg:text-[24px] font-bold leading-none">
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

      <div className="absolute bottom-0 left-0 right-0 bg-[#030d1d]/95 border-t border-[#14294f]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-7">
          <p className="text-[12px] uppercase tracking-[2px] text-[#6e7f99] mb-5">
            Trusted By Global Brands
          </p>

          <div className="flex flex-wrap justify-between items-center gap-8">
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
                className="text-white/85 text-xl sm:text-2xl font-semibold"
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