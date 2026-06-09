import {
  ArrowRight,
  Building2,
  ChevronRight,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  MessageCircle,
  ShoppingCart,
} from "lucide-react";
import heroBg from "./industries-hero-bg.svg";

const industries = [
  {
    label: "Healthcare",
    icon: HeartPulse,
    className: "left-[17%] top-[7%] lg:left-[10%] lg:top-[8%]",
  },
  {
    label: "Education",
    icon: GraduationCap,
    className: "right-[5%] top-[7%] lg:right-[4%] lg:top-[8%]",
  },
  {
    label: "Real Estate",
    icon: Building2,
    className: "left-[4%] top-[35%] lg:left-[1%] lg:top-[35%]",
  },
  {
    label: "Finance",
    icon: Landmark,
    className: "right-[1%] top-[35%] lg:right-[0%] lg:top-[35%]",
  },
  {
    label: "E-Commerce",
    icon: ShoppingCart,
    className: "left-[13%] bottom-[9%] lg:left-[9%] lg:bottom-[9%]",
  },
  {
    label: "Manufacturing",
    icon: Factory,
    className: "right-[3%] bottom-[9%] lg:right-[1%] lg:bottom-[9%]",
  },
];

export default function Industries() {
  return (
    <section
      className="relative isolate min-h-[420px] overflow-hidden bg-[#020b1b] text-white lg:min-h-[500px]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,11,27,.96)_0%,rgba(2,11,27,.86)_42%,rgba(2,11,27,.34)_100%)]" />

      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-6 py-10 md:px-10 lg:grid-cols-[.82fr_1.18fr] lg:px-16 lg:py-14">
        <div className="max-w-[650px]">
          <div className="flex items-center gap-2 text-[12px] font-bold">
            <span className="text-white/88">Home</span>
            <ChevronRight size={15} className="text-white/45" />
            <span className="text-white/88">Industries</span>
          </div>

          <div className="mt-8 inline-flex h-9 items-center gap-2 rounded-full bg-[#125dd7] px-5 text-[11px] font-extrabold uppercase tracking-wide shadow-[0_10px_24px_rgba(18,93,215,.35)]">
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/60 text-[9px]">
              i
            </span>
            Our Industries
          </div>

          <h1 className="mt-5 text-[38px] font-bold leading-[1.08] tracking-normal sm:text-[50px] lg:text-[46px]">
            Industries We Serve
            <span className="block font-medium">Digital Solutions For</span>
            <span className="block text-[#158dff]">Every Industry</span>
          </h1>

          <p className="mt-6 max-w-[620px] text-[15px] font-medium leading-8 text-[#e7eef9] sm:text-[16px]">
            We deliver customized software, web, mobile, AI, CRM, ERP and
            automation solutions for businesses across multiple industries
            worldwide.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <a
              href="#industries-list"
              className="inline-flex h-14 items-center gap-4 rounded bg-[#ffb525] px-8 text-[14px] font-extrabold text-[#061326] shadow-[0_12px_30px_rgba(255,181,37,.28)] transition hover:bg-[#ffc84d]"
            >
              Explore Industries
              <ArrowRight size={17} />
            </a>
            {/* <a
              href="/contact"
              className="inline-flex h-14 items-center gap-4 rounded border border-white/40 bg-[#061326]/40 px-8 text-[14px] font-extrabold text-white shadow-[0_12px_30px_rgba(0,0,0,.18)] transition hover:border-white/70 hover:bg-white/10"
            >
              Discuss Your Project
              <MessageCircle size={18} />
            </a> */}
          </div>
        </div>

        <div className="relative min-h-[330px] lg:min-h-[410px]">
          <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#27c4ff]/30 bg-[#0b57c7]/10 shadow-[0_0_80px_rgba(21,141,255,.42)] sm:h-[360px] sm:w-[360px] lg:h-[430px] lg:w-[430px]" />
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`absolute ${item.className} flex h-[96px] w-[96px] flex-col items-center justify-center rounded-full border border-[#2d7bff]/40 bg-[#071a3a]/88 text-center shadow-[0_16px_38px_rgba(0,0,0,.35),inset_0_0_24px_rgba(45,123,255,.18)] backdrop-blur-sm sm:h-[112px] sm:w-[112px]`}
              >
                <Icon size={32} className="text-white" />
                <span className="mt-2 text-[12px] font-extrabold text-white">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div id="industries-list" className="sr-only">
        Industries list
      </div>
    </section>
  );
}
