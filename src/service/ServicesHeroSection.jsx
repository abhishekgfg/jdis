import {
  ArrowRight,
  PlayCircle,
  Code2,
  Smartphone,
  Cloud,
  Settings,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

import servicesHero from "./image/services-hero.png";

export default function ServicesHeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#061326] text-white lg:min-h-[380px]"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(3,10,24,.98) 0%, rgba(3,10,24,.88) 42%, rgba(3,10,24,.35) 100%), url(${servicesHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 mx-auto px-4 py-10 sm:px-6 lg:px-12 lg:py-12">
        <div className="grid gap-8 items-center lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          {/* Left Content */}
          <div className="max-w-[610px]">
            <div className="mb-5 flex items-center gap-3 text-[13px] font-semibold lg:mb-6">
              <span className="text-white/80">Home</span>
              <span className="text-white/40">›</span>
              <span className="text-[#ffb700]">Services</span>
            </div>

            <h1 className="text-[34px] font-bold leading-[1.08] tracking-[-1px] sm:text-[44px] lg:text-[40px] lg:leading-[1.05] lg:tracking-[-1.5px]">
              Our Services
              <br className="hidden sm:block" />
              Solutions That{" "}
              <span className="text-[#ffb700]">Drive Growth</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-[#d7e2f0] sm:text-[16px]">
              We deliver end-to-end digital solutions that help businesses
              innovate, automate and scale with confidence.
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-5">
              <Link to="/contact" className="inline-flex h-[52px] w-full items-center justify-center gap-4 rounded-md bg-[#ffb700] px-6 text-[14px] font-bold text-[#061326] shadow-lg shadow-yellow-500/20 transition-all hover:bg-[#ffc329] sm:w-auto sm:px-8 lg:h-[54px]">
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>

              <Link to="/portfolio" className="inline-flex h-[52px] w-full items-center justify-center gap-4 rounded-md border border-white/25 bg-white/5 px-6 text-[14px] font-semibold text-white transition-all hover:bg-white/10 sm:w-auto sm:px-8 lg:h-[54px]">
                View Our Work
                <PlayCircle size={20} className="text-[#ffb700]" />
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[270px]">
            <div className="relative w-[520px] h-[280px]">
              <img
                src={servicesHero}
                alt="Digital services visual"
                className="absolute inset-0 w-full h-full object-contain"
              />

              <FloatingIcon Icon={Code2} className="left-[8%] top-[20%]" />
              <FloatingIcon Icon={Smartphone} className="left-[4%] top-[53%]" />
              <FloatingIcon Icon={BarChart3} className="right-[16%] top-[6%]" />
              <FloatingIcon Icon={Cloud} className="right-[4%] top-[33%]" />
              <FloatingIcon Icon={Settings} className="right-[10%] top-[62%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingIcon({ Icon, className }) {
  return (
    <div
      className={`absolute ${className} w-[62px] h-[62px] rounded-full bg-[#061326]/75 border border-[#2b4770] backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(20,92,255,0.25)]`}
    >
      <Icon size={27} className="text-[#2b8cff]" />
    </div>
  );
}
