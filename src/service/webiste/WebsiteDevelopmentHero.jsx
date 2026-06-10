import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Gauge,
  Settings,
} from "lucide-react";

import websiteHero from "../image/website.png";

export default function WebsiteDevelopmentHero() {
  const features = [
    {
      icon: ShieldCheck,
      text: "Modern & Responsive",
    },
    {
      icon: Gauge,
      text: "SEO Optimized",
    },
    {
      icon: Settings,
      text: "Secure & Scalable",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#061326] text-white lg:min-h-[430px]"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(3,10,24,.98) 0%,
            rgba(3,10,24,.9) 38%,
            rgba(3,10,24,.45) 62%,
            rgba(3,10,24,.2) 100%
          ),
          url(${websiteHero})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 mx-auto px-4 py-10 sm:px-6 lg:px-12">
        <div className="grid gap-8 items-center lg:grid-cols-[1fr_1.1fr]">
          <div className="max-w-[650px]">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-[12px] font-semibold sm:gap-3 sm:text-[13px] lg:mb-6">
              <span className="text-white/80">Home</span>
              <span className="text-white/40">›</span>
              <span className="text-white/80">Services</span>
              <span className="text-white/40">›</span>
              <span className="text-[#ffb700]">Website Development</span>
            </div>

            <span className="inline-flex mb-4 px-4 py-2 rounded-full bg-[#145cff]/25 border border-[#2b8cff]/30 text-[12px] font-bold uppercase tracking-wider text-[#dbe7ff]">
              Our Service
            </span>

            <h1 className="text-[34px] font-bold leading-[1.08] tracking-[-1px] sm:text-[46px] lg:text-[42px] lg:leading-[1.05] lg:tracking-[-1.5px]">
              Website Development
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#7df9ff] to-[#145cff] bg-clip-text text-transparent">
                That Drives Results
              </span>
            </h1>

            <p className="mt-5 max-w-[700px] text-[15px] leading-7 text-[#d7e2f0] sm:text-[16px]">
              We create responsive, fast, and SEO-friendly websites that not
              only look stunning but also deliver an exceptional user experience
              and measurable business growth.
            </p>

            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex h-[46px] items-center justify-center gap-3 rounded-md border border-white/15 bg-[#061326]/65 px-4 text-[13px] font-semibold backdrop-blur-md sm:px-5 sm:text-[14px]"
                  >
                    <Icon size={18} className="text-[#2b8cff]" />
                    {item.text}
                  </div>
                );
              })}
            </div>

            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-5">
              <button className="inline-flex h-[52px] w-full items-center justify-center gap-4 rounded-md bg-[#ffb700] px-6 text-[14px] font-bold text-[#061326] shadow-lg shadow-yellow-500/20 transition-all hover:bg-[#ffc329] sm:w-auto sm:px-8 lg:h-[54px]">
                Discuss Your Project
                <ArrowRight size={18} />
              </button>

              <button className="inline-flex h-[52px] w-full items-center justify-center gap-4 rounded-md border border-white/25 bg-white/5 px-6 text-[14px] font-semibold text-white transition-all hover:bg-white/10 sm:w-auto sm:px-8 lg:h-[54px]">
                View Our Work
                <PlayCircle size={20} className="text-[#ffb700]" />
              </button>
            </div>
          </div>

          <div className="hidden lg:block min-h-[300px]" />
        </div>
      </div>
    </section>
  );
}
