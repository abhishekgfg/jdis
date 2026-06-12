import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Gauge,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";
import { SiAndroid, SiApple, SiFlutter, SiVisa } from "react-icons/si";
import { Link } from "react-router-dom";

export default function MobileDevelopmentHero() {
  const features = [
    { icon: BadgeCheck, text: "User-Centric Design" },
    { icon: Gauge, text: "High Performance" },
    { icon: ShieldCheck, text: "Secure & Scalable" },
  ];

  const platforms = [
    { icon: SiApple, label: "iOS" },
    { icon: SiAndroid, label: "Android" },
    { icon: SiFlutter, label: "Flutter" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#020b18] text-white lg:min-h-[430px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_90%,rgba(20,92,255,.4),transparent_32%),linear-gradient(90deg,rgba(2,11,24,1)_0%,rgba(2,11,24,.98)_38%,rgba(2,11,24,.9)_100%)]" />
      <div className="absolute inset-y-0 left-[18%] right-0 opacity-40 sm:left-[38%] sm:opacity-70">
        <div className="absolute top-[120px] left-0 h-px w-full bg-gradient-to-r from-transparent via-[#145cff] to-transparent" />
        <div className="absolute top-[190px] left-[-40px] h-px w-[760px] rotate-[8deg] bg-gradient-to-r from-transparent via-[#0ea5ff] to-transparent" />
        <div className="absolute top-[250px] left-[-70px] h-px w-[820px] -rotate-[7deg] bg-gradient-to-r from-transparent via-[#145cff] to-transparent" />
        <div className="absolute top-[310px] left-[20px] h-px w-[700px] rotate-[14deg] bg-gradient-to-r from-transparent via-[#0ea5ff] to-transparent" />
        <div className="absolute left-[62%] top-[90px] h-[210px] border-l border-dashed border-[#145cff]/45" />
        <div className="absolute left-[62%] top-[90px] w-[220px] border-t border-dashed border-[#145cff]/45" />
        <div className="absolute left-[62%] top-[190px] w-[220px] border-t border-dashed border-[#145cff]/45" />
        <div className="absolute left-[62%] top-[300px] w-[220px] border-t border-dashed border-[#145cff]/45" />
      </div>

      <div className="relative z-10 mx-auto px-4 py-8 sm:px-6 lg:px-12">
        <div className="grid gap-8 items-center lg:grid-cols-[1fr_1.25fr]">
          <div className="max-w-[650px]">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-[12px] font-semibold sm:gap-3 sm:text-[13px]">
              <span className="text-white/80">Home</span>
              <ChevronRight size={14} className="text-white/35" />
              <span className="text-white/80">Services</span>
              <ChevronRight size={14} className="text-white/35" />
              <span className="text-[#ffb700]">Mobile App Development</span>
            </div>

            <span className="inline-flex mb-3 px-4 py-2 rounded-full bg-[#09213f] border border-[#2b8cff]/35 text-[12px] font-bold uppercase tracking-wider text-[#dbe7ff]">
              Our Service
            </span>

            <h1 className="text-[33px] font-bold leading-[1.08] sm:text-[46px] lg:text-[36px]">
              Mobile App Development
              <br className="hidden sm:block" />
              Engaging Apps.{" "}
              <span className="text-[#ffb700]">Powerful Impact.</span>
            </h1>

            <p className="mt-5 max-w-[690px] text-[13px] leading-6 text-[#d7e2f0] sm:text-[13px] sm:leading-5">
              We build high-performance mobile applications for Android, iOS and
              cross-platform that deliver exceptional user experiences and drive
              your business growth.
            </p>

            <div className="mt-6 grid max-w-[560px] gap-3 sm:grid-cols-3">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex h-[42px] items-center justify-center gap-3 rounded-md border border-white/12 bg-[#05152b]/80 px-4 text-[10px] font-semibold backdrop-blur"
                  >
                    <Icon size={18} className="text-[#4f9bff]" />
                    {item.text}
                  </div>
                );
              })}
            </div>

            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <Link to="/contact" className="inline-flex h-[50px] w-full items-center justify-center gap-4 rounded-md bg-[#ffb700] px-7 text-[14px] font-bold text-[#061326] shadow-lg shadow-yellow-500/20 transition-all hover:bg-[#ffc329] sm:w-auto">
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>

              <Link to="/portfolio" className="inline-flex h-[50px] w-full items-center justify-center gap-4 rounded-md border border-white/25 bg-white/5 px-7 text-[14px] font-semibold text-white transition-all hover:bg-white/10 sm:w-auto">
                View Our Work
                <PlayCircle size={20} className="text-[#ffb700]" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto min-h-[330px] w-full max-w-[390px] overflow-hidden sm:min-h-[360px] sm:max-w-none lg:min-h-[380px]">
            <div className="absolute bottom-2 left-1/2 h-[46px] w-[280px] -translate-x-1/2 rounded-full border border-[#00b7ff] bg-[#145cff]/20 shadow-[0_0_45px_rgba(0,183,255,.9)] sm:h-[54px] sm:w-[360px]" />
            <div className="absolute bottom-5 left-1/2 h-[18px] w-[240px] -translate-x-1/2 rounded-full bg-[#00c8ff]/55 blur-lg sm:w-[310px]" />

            <div className="absolute left-[3%] top-4 w-[145px] rotate-[-7deg] rounded-[30px] border-[7px] border-[#101827] bg-white shadow-[0_24px_60px_rgba(0,0,0,.45)] sm:left-[19%] sm:top-2 sm:w-[164px]">
              <div className="mx-auto mt-1 h-4 w-20 rounded-b-xl bg-[#101827]" />
              <div className="px-4 pb-4 pt-3 text-[#091426]">
                <div className="flex items-center justify-between text-[9px] font-bold">
                  <span>Hello, James</span>
                  <span className="h-5 w-5 rounded-full bg-[#f2f5fb]" />
                </div>
                <p className="mt-3 text-[8px] text-slate-500">Total Balance</p>
                <h3 className="text-[18px] font-bold">$24,680.50</h3>
                <div className="mt-3 rounded-xl bg-gradient-to-br from-[#6d5dfc] to-[#321b91] p-3 text-white shadow-lg">
                  <div className="flex justify-between text-[9px] font-bold">
                    <span>tibo</span>
                    <SiVisa size={22} />
                  </div>
                  <div className="mt-7 text-[9px] opacity-80">**** 4138</div>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {["Transfer", "Wallet", "Top Up", "More"].map((item) => (
                    <div key={item} className="text-center text-[7px] text-slate-600">
                      <span className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#eef3ff] text-[#145cff]">
                        +
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  {["Dribbble", "Netflix", "Apple Store"].map((item, index) => (
                    <div key={item} className="flex items-center justify-between text-[8px]">
                      <span className="flex items-center gap-2">
                        <span
                          className={`h-5 w-5 rounded-md ${
                            index === 0 ? "bg-rose-500" : index === 1 ? "bg-red-500" : "bg-blue-500"
                          }`}
                        />
                        {item}
                      </span>
                      <strong>-$89.00</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute left-[43%] top-2 w-[155px] rotate-[5deg] rounded-[32px] border-[7px] border-[#101827] bg-[#071326] shadow-[0_24px_60px_rgba(0,0,0,.55)] sm:top-1 sm:w-[178px]">
              <div className="mx-auto mt-1 h-4 w-20 rounded-b-xl bg-[#101827]" />
              <div className="px-4 pb-4 pt-3 text-white">
                <div className="flex items-center justify-between text-[9px] font-bold">
                  <span>Analytics</span>
                  <span className="h-5 w-5 rounded-full border border-white/20" />
                </div>
                <p className="mt-5 text-[8px] text-slate-400">Total Revenue</p>
                <h3 className="text-[18px] font-bold">$48,680.50</h3>
                <div className="relative mt-5 h-[95px] rounded-xl bg-[#0b1d35] p-3">
                  <div className="absolute left-5 right-5 top-12 h-[2px] bg-[#3b82f6]/25" />
                  <div className="absolute left-6 top-14 h-8 w-24 rounded-[50%] border-t-2 border-[#875cff]" />
                  <div className="absolute right-8 top-9 h-4 w-4 rounded-full bg-[#875cff] shadow-[0_0_18px_rgba(135,92,255,.9)]" />
                  <span className="absolute right-6 top-5 rounded-md bg-white px-2 py-1 text-[7px] font-bold text-[#071326]">
                    8.7mio
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    ["Orders", "1,246"],
                    ["Users", "7,856"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg bg-[#0b1d35] p-2">
                      <p className="text-[7px] text-slate-400">{label}</p>
                      <strong className="text-[14px]">{value}</strong>
                      <p className="text-[7px] text-emerald-400">+8.4%</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-[10px] text-slate-500">
                  {["Home", "Card", "Stats", "User"].map((item) => (
                    <span key={item} className="h-4 w-4 rounded-full bg-[#10243f]" />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute right-[3%] top-[64px] hidden sm:grid gap-4">
              {platforms.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="h-[64px] w-[64px] rounded-xl border border-white/10 bg-[#07172e]/90 shadow-[0_12px_28px_rgba(0,0,0,.28)] flex items-center justify-center"
                    aria-label={item.label}
                  >
                    <Icon size={34} className={item.label === "Flutter" ? "text-[#35c2ff]" : item.label === "Android" ? "text-[#8bdc3f]" : "text-white"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
