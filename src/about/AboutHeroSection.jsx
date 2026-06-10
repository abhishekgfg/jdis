import {
  UserRound,
  Smile,
  Globe,
  Star,
  BadgeCheck,
  Users,
  Target,
  ShieldCheck,
} from "lucide-react";

import aboutBg from "../about/image/abouth.png";

export default function AboutHeroSection() {
  const badges = [
    { icon: BadgeCheck, text: "Innovation Driven" },
    { icon: Users, text: "Client Focused" },
    { icon: Target, text: "Result Oriented" },
    { icon: ShieldCheck, text: "Future Ready" },
  ];

  const stats = [
    {
      icon: UserRound,
      value: "500+",
      label: "Projects Delivered",
    },
    {
      icon: Smile,
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
      className="relative overflow-hidden bg-[#061326] text-white lg:min-h-[340px]"
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          rgba(3,10,24,.98) 0%,
          rgba(3,10,24,.88) 38%,
          rgba(3,10,24,.35) 100%
        ), url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 mx-auto px-4 py-10 sm:px-6 lg:px-12">
        <div className="grid gap-7 items-center lg:grid-cols-[1.25fr_0.75fr] lg:gap-6">
          {/* Left Content */}
          <div className="max-w-[620px]">
            <div className="flex items-center gap-2 text-[#ffb700] mb-3">
              <span className="w-3 h-3 rounded-full border border-[#ffb700] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb700]" />
              </span>

              <span className="text-[11px] uppercase tracking-wider font-bold">
                About Us
              </span>
            </div>

            <h1 className="text-[34px] font-bold leading-[1.08] tracking-[-1px] sm:text-[40px] lg:text-[46px] lg:leading-[1.05]">
              About JD Infotech
              <br className="hidden sm:block" />
              <span className="text-[#ffb700]">Solutions</span>
            </h1>

            <p className="mt-4 max-w-[560px] text-[14px] leading-6 text-[#d7e2f0]">
              We are a global technology company delivering digital
              transformation solutions that empower businesses to innovate,
              scale and lead in the digital era.
            </p>

            {/* Feature Badges */}
            <div className="mt-5 grid max-w-[620px] grid-cols-1 overflow-hidden rounded-lg border border-white/15 bg-[#061326]/70 backdrop-blur-md sm:grid-cols-2 lg:flex lg:flex-wrap">
              {badges.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className={`flex h-[42px] items-center gap-2 border-b border-white/10 px-4 text-[11px] font-semibold text-white sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:[&:nth-child(odd)]:border-r-0 ${
                      index !== badges.length - 1
                        ? "border-r border-white/10"
                        : ""
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                      <Icon size={13} />
                    </span>

                    {item.text}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Card */}
          <div className="w-full max-w-[360px] lg:justify-self-end">
            <div className="rounded-xl border border-[#2b4770] bg-[#061326]/80 backdrop-blur-md p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
              <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6">
                {stats.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label}>
                      <div className="w-11 h-11 rounded-full border border-[#ffb700]/40 bg-[#ffb700]/10 flex items-center justify-center mb-3">
                        <Icon size={22} className="text-[#ffb700]" />
                      </div>

                      <h3 className="text-[24px] font-bold leading-none sm:text-[28px]">
                        {item.value}
                      </h3>

                      <p className="mt-1 text-[12px] leading-5 text-[#c7d1e0]">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
