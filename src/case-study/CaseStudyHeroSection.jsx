import { ArrowRight, ChevronRight, CircleArrowRight } from "lucide-react";
import heroBg from "../portfolio/portfolio-hero-bg.svg";

const overviewStats = [
  ["Projects Delivered", "500+"],
  ["Client Satisfaction", "98%"],
  ["Success Rate", "120%"],
  ["Countries Served", "15+"],
];

export default function CaseStudyHeroSection() {
  return (
    <section
      className="relative isolate min-h-[430px] overflow-hidden bg-[#020b1b] text-white lg:min-h-[500px]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,11,27,.98)_0%,rgba(2,11,27,.92)_42%,rgba(2,11,27,.7)_100%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-2/3 bg-[radial-gradient(circle_at_55%_50%,rgba(17,98,255,.34),transparent_31%),radial-gradient(circle_at_88%_45%,rgba(0,145,255,.16),transparent_29%)]" />

      <div className="mx-auto grid  items-center gap-10 px-6 py-10 md:px-10 lg:grid-cols-[.78fr_1.22fr] lg:px-16 lg:py-10">
        <div className="max-w-[620px]">
          <div className="flex items-center gap-2 text-[12px] font-bold">
            <span className="text-white/88">Home</span>
            <ChevronRight size={15} className="text-white/45" />
            <span className="text-[#ffb525]">Case Studies</span>
          </div>

          <h1 className="mt-8 text-[42px] font-bold leading-[1.08] tracking-normal sm:text-[56px] lg:text-[40px]">
            Real Challenges.
            <span className="block text-[#18a8ff]">Proven Solutions.</span>
          </h1>

          <p className="mt-6 max-w-[580px] text-[15px] font-medium leading-8 text-[#e7eef9] sm:text-[16px]">
            Discover how we help businesses overcome complex challenges and
            achieve measurable results through innovative technology solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-7">
            <a
              href="/contact"
              className="inline-flex h-14 items-center gap-4 rounded bg-[#ffb525] px-8 text-[14px] font-extrabold text-[#061326] shadow-[0_12px_30px_rgba(255,181,37,.28)] transition hover:bg-[#ffc84d]"
            >
              Discuss Your Project
              <ArrowRight size={17} />
            </a>
            {/* <a
              href="/services"
              className="inline-flex h-14 items-center gap-3 text-[14px] font-extrabold text-white transition hover:text-[#18a8ff]"
            >
              View Our Services
              <CircleArrowRight size={21} />
            </a> */}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[760px] lg:ml-auto">
          <div className="absolute -inset-4 rounded-[18px] bg-[#0b64ff]/10 blur-2xl" />
          <div className="relative rotate-[-1deg] rounded-[12px] border border-[#2b66d9]/70 bg-[#061a3d]/80 p-5 shadow-[0_28px_80px_rgba(0,0,0,.38),inset_0_0_44px_rgba(22,104,255,.17)] backdrop-blur-sm">
            <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,#2b7dff,transparent)]" />
            <h2 className="text-[16px] font-extrabold text-white">
              Project Overview
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
              {overviewStats.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[8px] border border-[#1f55b8] bg-[#0b3c8d]/52 p-4 shadow-[inset_0_0_24px_rgba(24,144,255,.16)]"
                >
                  <p className="text-[10px] font-extrabold text-[#d9e8ff]">
                    {label}
                  </p>
                  <p className="mt-4 text-[26px] font-extrabold leading-none text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1.45fr_.85fr]">
              <div className="rounded-[8px] border border-[#1f55b8] bg-[#031632]/78 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[13px] font-extrabold text-white">
                    Growth Over Time
                  </h3>
                  <span className="rounded bg-[#6e93cf] px-3 py-1 text-[11px] font-extrabold text-white shadow-[0_8px_18px_rgba(110,147,207,.22)]">
                    120% Growth
                  </span>
                </div>

                <div className="relative mt-4 h-[150px] overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(61,111,174,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(61,111,174,.12)_1px,transparent_1px)] bg-[size:100%_25%,20%_100%]" />
                  <svg
                    viewBox="0 0 440 150"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    <polyline
                      points="8,124 75,90 145,96 213,70 285,78 350,47 428,24"
                      fill="none"
                      stroke="#168dff"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="8,124 75,90 145,96 213,70 285,78 350,47 428,24 428,150 8,150"
                      fill="rgba(22,141,255,.14)"
                    />
                    {[8, 75, 145, 213, 285, 350, 428].map((x, index) => (
                      <circle
                        key={x}
                        cx={x}
                        cy={[124, 90, 96, 70, 78, 47, 24][index]}
                        r="5"
                        fill="#18a8ff"
                        stroke="#031632"
                        strokeWidth="3"
                      />
                    ))}
                  </svg>

                  <div className="absolute bottom-0 left-0 right-0 grid grid-cols-5 text-[9px] font-semibold text-[#8fa9cb]">
                    {["2020", "2021", "2022", "2023", "2024"].map((year) => (
                      <span key={year}>{year}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[8px] border border-[#1f55b8] bg-[#031632]/78 p-5">
                <h3 className="text-[13px] font-extrabold text-white">
                  Project Success
                </h3>

                <div className="relative mx-auto mt-5 h-[142px] w-[142px]">
                  <div className="absolute inset-0 rounded-full bg-[conic-gradient(#287cff_0_78%,#153d90_78%_100%)] shadow-[0_0_36px_rgba(40,124,255,.25)]" />
                  <div className="absolute inset-[22px] rounded-full bg-[#061a3d] shadow-[inset_0_0_22px_rgba(0,0,0,.42)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[25px] font-extrabold text-white">
                      98%
                    </span>
                    <span className="mt-1 text-[10px] font-bold text-[#b9c8dc]">
                      Success Rate
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-5 text-[10px] font-bold text-[#cbd9ee]">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#168dff]" />
                    Successful
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#386dff]" />
                    Ongoing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="case-study-list" className="sr-only">
        Case study list
      </div>
    </section>
  );
}
