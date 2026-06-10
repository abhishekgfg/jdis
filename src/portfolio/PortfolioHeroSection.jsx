import { ArrowRight, ChevronRight, MessageCircle } from "lucide-react";
import heroBg from "./portfolio-hero-bg.svg";

export default function PortfolioHeroSection() {
  return (
    <section
      className="relative isolate min-h-[360px] overflow-hidden bg-[#020b1b] text-white lg:min-h-[410px]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_45%,rgba(16,92,180,.26),transparent_32%),linear-gradient(90deg,rgba(2,11,27,.94)_0%,rgba(2,11,27,.78)_45%,rgba(2,11,27,.42)_100%)]" />

      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-4 py-10 sm:px-6 md:px-10 lg:grid-cols-[.82fr_1.18fr] lg:px-16 lg:py-12">
        <div className="max-w-[570px]">
          <div className="flex items-center gap-2 text-[12px] font-bold">
            <span className="text-white/88">Home</span>
            <ChevronRight size={15} className="text-white/45" />
            <span className="text-[#ffc126]">Portfolio</span>
          </div>

          <div className="mt-8 inline-flex h-9 items-center rounded-full bg-[#125dd7] px-5 text-[11px] font-extrabold uppercase tracking-wide shadow-[0_10px_24px_rgba(18,93,215,.35)]">
            Our Portfolio
          </div>

          <h1 className="mt-5 text-[30px] font-bold leading-[1.08] tracking-normal sm:text-[40px] lg:text-[40px]">
            Innovative Solutions.
            <span className="block text-[#2d9cff]">Proven Results.</span>
          </h1>

          <p className="mt-5 max-w-[510px] text-[15px] font-medium leading-8 text-[#e7eef9] sm:text-[16px]">
            Explore our recent projects that showcase our expertise, creativity,
            and commitment to delivering outstanding digital solutions.
          </p>

          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-5">
            <a
              href="/casestudy"
              className="inline-flex h-14 w-full items-center justify-center gap-4 rounded bg-[#ffb525] px-5 text-[13px] font-extrabold text-[#061326] shadow-[0_12px_30px_rgba(255,181,37,.28)] transition hover:bg-[#ffc84d] sm:w-auto sm:px-8 sm:text-[14px]"
            >
              View Case Studies
              <ArrowRight size={17} />
            </a>
            <a
              href="/contact"
              className="inline-flex h-14 w-full items-center justify-center gap-4 rounded border border-white/40 bg-[#061326]/40 px-5 text-[13px] font-extrabold text-white shadow-[0_12px_30px_rgba(0,0,0,.18)] transition hover:border-white/70 hover:bg-white/10 sm:w-auto sm:px-8 sm:text-[14px]"
            >
              Discuss Your Project
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto min-h-[265px] w-full max-w-[390px] overflow-hidden sm:max-w-none lg:min-h-[330px]">
          <div className="absolute left-0 top-[12%] w-[78%] max-w-[640px] rounded-[20px] border-[4px] border-[#8f98a6] bg-[#0b1220] p-1.5 shadow-[0_28px_70px_rgba(0,0,0,.55)] sm:left-[5%] sm:top-[8%] sm:border-[5px] sm:p-2">
            <div className="overflow-hidden rounded-[12px] bg-[#f6f9ff]">
              <div className="flex h-[190px] sm:h-[236px]">
                <div className="hidden w-[86px] bg-[#071833] px-3 py-4 text-white sm:block">
                  <div className="mb-5 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3f7ff] text-[10px] font-black text-[#1265ff]">
                      D
                    </span>
                    <div>
                      <div className="h-2 w-10 rounded bg-white/85" />
                      <div className="mt-1 h-1.5 w-7 rounded bg-white/30" />
                    </div>
                  </div>
                  {["Revenue", "Payments", "Customers", "Reports", "Transactions", "Settings"].map(
                    (item) => (
                      <div key={item} className="mb-3 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-sm bg-[#1877ff]" />
                        <span className="h-1.5 w-11 rounded bg-white/28" />
                      </div>
                    )
                  )}
                </div>

                <div className="min-w-0 flex-1 px-3 py-4 text-[#071426] sm:px-6 sm:py-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <div className="text-[14px] font-black">Dashboard</div>
                      <div className="mt-1 h-1.5 w-28 rounded bg-[#d9e4f5]" />
                    </div>
                    <div className="hidden items-center gap-3 sm:flex">
                      <span className="h-7 w-24 rounded-full bg-white shadow-sm" />
                      <span className="h-7 w-14 rounded-full bg-[#1265ff]" />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-[1.25fr_.75fr] sm:gap-4">
                    <div className="rounded-lg bg-white p-4 shadow-[0_6px_18px_rgba(44,76,120,.12)]">
                      <div className="mb-3 flex items-start justify-between">
                        <div>
                          <div className="h-2 w-24 rounded bg-[#d7e2f1]" />
                          <div className="mt-3 text-[18px] font-black sm:text-[24px]">
                            $98,765.43
                          </div>
                        </div>
                        <span className="text-[11px] font-black text-[#16a870]">
                          +8.45%
                        </span>
                      </div>
                      <div className="relative h-16 overflow-hidden rounded-md bg-[#f3f7ff] sm:h-24">
                        <svg
                          viewBox="0 0 280 100"
                          className="h-full w-full"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0 74 C32 44 54 58 82 68 C112 80 128 24 162 43 C194 61 202 72 232 42 C252 22 266 34 280 21"
                            fill="none"
                            stroke="#6b8cff"
                            strokeWidth="4"
                          />
                          <path
                            d="M0 74 C32 44 54 58 82 68 C112 80 128 24 162 43 C194 61 202 72 232 42 C252 22 266 34 280 21 V100 H0 Z"
                            fill="#6b8cff"
                            opacity=".12"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="hidden rounded-lg bg-white p-4 shadow-[0_6px_18px_rgba(44,76,120,.12)] sm:block">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="h-2 w-20 rounded bg-[#d7e2f1]" />
                        <span className="rounded-full bg-[#1265ff] px-3 py-1 text-[9px] font-black text-white">
                          Save
                        </span>
                      </div>
                      <div className="relative mx-auto h-24 w-24 rounded-full bg-[conic-gradient(#10244a_0_58%,#2e7bff_58%_78%,#dbe6f8_78%_100%)]">
                        <div className="absolute inset-5 rounded-full bg-white" />
                        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black">
                          62%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-4">
                    {["12,456", "8,764", "4.32%"].map((value) => (
                      <div
                        key={value}
                        className="rounded-lg bg-white p-2 shadow-[0_5px_15px_rgba(44,76,120,.1)] sm:p-3"
                      >
                        <div className="h-1.5 w-12 rounded bg-[#d7e2f1]" />
                        <div className="mt-2 text-[11px] font-black sm:text-[15px]">{value}</div>
                        <div className="mt-1 h-1.5 w-16 rounded bg-[#bfead6]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 h-6 w-[112%] -translate-x-1/2 rounded-b-[50%] bg-gradient-to-b from-[#c9cdd4] to-[#515966] shadow-[0_12px_22px_rgba(0,0,0,.38)]" />
          </div>

          <div className="absolute right-0 top-[30%] w-[112px] rounded-[22px] border-[4px] border-[#596575] bg-[#071426] p-1.5 shadow-[0_24px_52px_rgba(0,0,0,.58)] sm:right-[3%] sm:top-[21%] sm:w-[172px] sm:border-[5px] sm:p-2 lg:right-[2%]">
            <div className="overflow-hidden rounded-[18px] bg-[#08162b] px-3 py-4 text-white sm:px-4 sm:py-5">
              <div className="mx-auto mb-4 h-1 w-11 rounded-full bg-white/30" />
              <div className="text-[10px] font-bold text-[#8ea0bd]">Statistics</div>
              <div className="mt-3 text-[13px] font-black sm:mt-4 sm:text-[18px]">$98,765.43</div>
              <div className="text-[9px] font-bold text-[#15b66d]">+8.45%</div>
              <div className="mt-4 flex h-20 items-end gap-1.5 sm:mt-5 sm:h-28 sm:gap-2">
                {[34, 52, 44, 66, 74, 89].map((height, index) => (
                  <span
                    key={height}
                    className="flex-1 rounded-t bg-gradient-to-t from-[#1265ff] to-[#27c4ff]"
                    style={{ height: `${height}%`, opacity: 0.78 + index * 0.03 }}
                  />
                ))}
              </div>
              <div className="mt-4 text-[10px] font-bold text-[#8ea0bd] sm:mt-5">
                Recent Activity
              </div>
              <div className="mt-3 space-y-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#1bd485]" />
                    <span className="h-1.5 flex-1 rounded bg-white/22" />
                    <span className="h-1.5 w-3 rounded bg-white/18" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
