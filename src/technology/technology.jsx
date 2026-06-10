import { ArrowRight, ChevronRight, Rocket } from "lucide-react";
import { FaAws, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiFlutter, SiLaravel, SiNextdotjs } from "react-icons/si";
import technologyBg from "./image/technology-hero-bg.png";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "text-[#19d8ff]",
    className: "left-[50%] top-[12%] lg:left-[50%] lg:top-[10%]",
    line: "left-[56%] top-[20%] h-px w-[110px] rotate-[15deg]",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-[#35d04f]",
    className: "left-[53%] top-[41%] lg:left-[53%] lg:top-[39%]",
    line: "left-[58%] top-[44%] h-px w-[95px] -rotate-[8deg]",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-[#ffd447]",
    className: "left-[52%] bottom-[14%] lg:left-[52%] lg:bottom-[13%]",
    line: "left-[58%] bottom-[23%] h-px w-[96px] rotate-[14deg]",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
    className: "right-[6%] top-[8%]",
    line: "right-[14%] top-[19%] h-px w-[112px] -rotate-[18deg]",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "text-[#ff2d20]",
    className: "right-[0%] top-[33%]",
    line: "right-[11%] top-[39%] h-px w-[120px] rotate-[5deg]",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "text-[#ff9900]",
    className: "right-[4%] bottom-[26%]",
    line: "right-[13%] bottom-[35%] h-px w-[116px] -rotate-[8deg]",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "text-[#45d1ff]",
    className: "right-[1%] bottom-[4%]",
    line: "right-[11%] bottom-[17%] h-px w-[130px] -rotate-[18deg]",
  },
];

export default function TechnologyHeroSection() {
  return (
    <section className="relative isolate min-h-[520px] overflow-hidden bg-[#020b1b] text-white lg:min-h-[550px]">
      <img
        src={technologyBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,11,27,.96)_0%,rgba(2,11,27,.9)_34%,rgba(2,11,27,.42)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_45%,rgba(24,144,255,.22),transparent_28%)]" />

      <div className="mx-auto grid  items-center gap-8 px-6 py-10 md:px-10 lg:grid-cols-[.76fr_1.24fr] lg:px-16 lg:py-10">
        <div className="relative z-20 max-w-[640px]">
          <div className="flex items-center gap-2 text-[12px] font-bold">
            <span className="text-white/90">Home</span>
            <ChevronRight size={15} className="text-white/45" />
            <span className="text-white/90">Technologies</span>
          </div>

          <div className="mt-8 inline-flex h-9 items-center gap-2 rounded-full bg-[#1265d8] px-5 text-[11px] font-extrabold uppercase tracking-wide shadow-[0_10px_24px_rgba(18,93,215,.35)]">
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/60 text-[9px]">
              i
            </span>
            Our Technology Stack
          </div>

          <h1 className="mt-6 text-[42px] font-bold leading-[1.08] tracking-normal sm:text-[58px] lg:text-[44px]">
            Technologies That
            <span className="block text-[#158dff]">Power Innovation</span>
          </h1>

          <p className="mt-2 max-w-[560px] text-[15px] font-medium leading-6 text-[#e7eef9] sm:text-[16px]">
            We leverage modern technologies, frameworks, cloud platforms, AI
            tools and enterprise solutions to build scalable digital products.
          </p>

          <div className="mt-8 flex flex-nowrap items-center gap-3 sm:gap-5">
            <a
              href="#technology-stack"
              className="inline-flex h-14 items-center gap-2 rounded bg-[#ffb525] px-4 text-[12px] font-extrabold text-[#061326] shadow-[0_12px_30px_rgba(255,181,37,.28)] transition hover:bg-[#ffc84d] sm:gap-4 sm:px-8 sm:text-[14px]"
            >
              Explore Technologies
              <ArrowRight size={17} />
            </a>

            <a
              href="/contact"
              className="inline-flex h-14 items-center gap-2 rounded border border-white/35 bg-[#061326]/40 px-4 text-[12px] font-extrabold text-white shadow-[0_12px_30px_rgba(0,0,0,.18)] transition hover:border-white/70 hover:bg-white/10 sm:gap-4 sm:px-8 sm:text-[14px]"
            >
              Start Project
              <Rocket size={17} />
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] lg:min-h-[500px]">
          <div className="absolute left-[53%] top-1/2 hidden h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#27c4ff]/30 bg-[#0b57c7]/10 shadow-[0_0_80px_rgba(21,141,255,.42)] lg:block" />

          <div className="absolute left-[53%] top-1/2 hidden h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#45a7ff]/30 bg-[#031a3d]/45 text-[23px] font-extrabold tracking-wide shadow-[inset_0_0_35px_rgba(21,141,255,.18)] lg:flex">
            TECHNOLOGY
          </div>

          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div key={tech.name}>
                <span
                  className={`absolute hidden origin-left border-t border-dashed border-[#2094ff]/55 lg:block ${tech.line}`}
                />
                <div
                  className={`absolute ${tech.className} flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full border border-[#2d7bff]/35 bg-[#061a3b]/82 text-center shadow-[0_16px_38px_rgba(0,0,0,.35),inset_0_0_24px_rgba(45,123,255,.18)] backdrop-blur-sm sm:h-[112px] sm:w-[112px]`}
                >
                  <Icon size={34} className={tech.color} />
                  <span className="mt-2 text-[12px] font-extrabold text-white">
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="technology-stack" className="sr-only">
        Technology stack
      </div>
    </section>
  );
}
