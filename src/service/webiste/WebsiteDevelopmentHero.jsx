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
      className="relative min-h-[430px] overflow-hidden bg-[#061326] text-white"
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
      <div className="relative z-10 mx-auto px-6 lg:px-12 py-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-center">
          <div className="max-w-[650px]">
            <div className="flex items-center gap-3 text-[13px] font-semibold mb-6">
              <span className="text-white/80">Home</span>
              <span className="text-white/40">›</span>
              <span className="text-white/80">Services</span>
              <span className="text-white/40">›</span>
              <span className="text-[#ffb700]">Website Development</span>
            </div>

            <span className="inline-flex mb-4 px-4 py-2 rounded-full bg-[#145cff]/25 border border-[#2b8cff]/30 text-[12px] font-bold uppercase tracking-wider text-[#dbe7ff]">
              Our Service
            </span>

            <h1 className="text-[46px] lg:text-[42px] leading-[1.05] tracking-[-1.5px] font-bold">
              Website Development
              <br />
              <span className="bg-gradient-to-r from-[#7df9ff] to-[#145cff] bg-clip-text text-transparent">
                That Drives Results
              </span>
            </h1>

            <p className="mt-5 text-[16px] leading-7 text-[#d7e2f0] max-w-[700px]">
              We create responsive, fast, and SEO-friendly websites that not
              only look stunning but also deliver an exceptional user experience
              and measurable business growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="h-[46px] px-5 rounded-md border border-white/15 bg-[#061326]/65 backdrop-blur-md flex items-center gap-3 text-[14px] font-semibold"
                  >
                    <Icon size={18} className="text-[#2b8cff]" />
                    {item.text}
                  </div>
                );
              })}
            </div>

            <div className="mt-7 flex flex-wrap gap-5">
              <button className="h-[54px] px-8 rounded-md bg-[#ffb700] hover:bg-[#ffc329] text-[#061326] text-[14px] font-bold inline-flex items-center gap-4 shadow-lg shadow-yellow-500/20 transition-all">
                Discuss Your Project
                <ArrowRight size={18} />
              </button>

              <button className="h-[54px] px-8 rounded-md border border-white/25 bg-white/5 hover:bg-white/10 text-white text-[14px] font-semibold inline-flex items-center gap-4 transition-all">
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