import {
  Gauge,
  Layers,
  LineChart,
  Rocket,
  ShieldCheck,
  Smartphone,
  Smile,
  Users,
} from "lucide-react";
import {
  SiInstagram,
  SiSpotify,
  SiWhatsapp,
  SiYoutube,
} from "react-icons/si";

export default function MobileOverviewSection() {
  const overviewCards = [
    {
      icon: Smartphone,
      title: "Native & Cross-Platform",
      desc: "We build native and cross-platform apps using the latest technologies.",
    },
    {
      icon: Rocket,
      title: "High Performance",
      desc: "Optimized apps that run smoothly across devices with exceptional speed.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      desc: "Advanced security measures to protect your data and user privacy.",
    },
    {
      icon: LineChart,
      title: "Growth Focused",
      desc: "Apps designed to drive engagement, retention and business growth.",
    },
  ];

  const benefits = [
    {
      icon: Smile,
      title: "Enhanced User Experience",
      desc: "Deliver intuitive and engaging experiences that users love.",
    },
    {
      icon: Users,
      title: "Increased Customer Engagement",
      desc: "Stay connected with your customers 24/7.",
    },
    {
      icon: Gauge,
      title: "Better Performance & Speed",
      desc: "Optimized performance for seamless app experiences.",
    },
    {
      icon: LineChart,
      title: "Higher ROI",
      desc: "Drive more conversions and improve your bottom line.",
    },
    {
      icon: Layers,
      title: "Scalable Solutions",
      desc: "Apps built to grow with your business.",
    },
  ];

  const floatingApps = [
    { icon: SiInstagram, className: "left-[13%] top-[15%] text-[#ff4fa3]" },
    { icon: SiWhatsapp, className: "right-[14%] top-[14%] text-[#56d66b]" },
    { icon: SiYoutube, className: "right-[8%] top-[42%] text-[#ff3030]" },
    { icon: SiSpotify, className: "right-[18%] bottom-[15%] text-[#29d162]" },
  ];

  return (
    <section className="bg-white py-8">
      <div className="mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[.95fr_1.75fr] gap-9 items-start">
          <div className="relative h-[276px] rounded-lg overflow-hidden bg-[#04162c] shadow-[0_15px_45px_rgba(15,23,42,.12)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,190,255,.55),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(20,92,255,.5),transparent_38%)]" />
            <div className="absolute inset-x-14 bottom-5 h-10 rounded-full bg-[#00b7ff]/30 blur-xl" />

            <div className="absolute left-1/2 top-5 h-[230px] w-[118px] -translate-x-1/2 rotate-[-5deg] rounded-[24px] border-[6px] border-[#071326] bg-[#071326] shadow-[0_22px_45px_rgba(0,0,0,.55)]">
              <div className="mx-auto h-4 w-16 rounded-b-xl bg-[#020814]" />
              <div className="px-3 py-3 text-white">
                <div className="text-center text-[10px] font-bold">Orbit</div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {Array.from({ length: 15 }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-7 rounded-lg ${
                        index % 4 === 0
                          ? "bg-[#19c37d]"
                          : index % 4 === 1
                            ? "bg-[#2f80ed]"
                            : index % 4 === 2
                              ? "bg-[#8b5cf6]"
                              : "bg-[#ffb700]"
                      } shadow-sm`}
                    />
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-4 gap-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <span key={index} className="h-5 rounded-md bg-white/15" />
                  ))}
                </div>
              </div>
            </div>

            {floatingApps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`absolute ${item.className} flex h-10 w-10 items-center justify-center rounded-xl bg-white/12 backdrop-blur border border-white/15 shadow-[0_10px_25px_rgba(0,0,0,.25)]`}
                >
                  <Icon size={22} />
                </div>
              );
            })}

            {Array.from({ length: 10 }).map((_, index) => (
              <span
                key={index}
                className="absolute h-9 w-9 rounded-lg bg-white/10 border border-white/10"
                style={{
                  left: `${14 + (index % 5) * 15}%`,
                  top: `${22 + Math.floor(index / 5) * 34}%`,
                }}
              />
            ))}
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
              Service Overview
            </span>
            <h2 className="mt-1 text-[26px] lg:text-[24px] leading-tight font-bold text-[#071426]">
              Smart Apps for a Digital-First World
            </h2>
            <p className="mt-1 max-w-[760px] text-[13px] leading-6 text-[#536174]">
              Our mobile app development services help you connect with your
              customers, streamline operations and achieve your business goals.
              We create feature-rich, secure and scalable applications tailored
              to your unique requirements.
            </p>

            <div className="mt-2 grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {overviewCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="min-h-[150px] rounded-lg border border-[#e5edf7] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,.06)]"
                  >
                    <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-lg bg-[#f3f7ff]">
                      <Icon size={24} className="text-[#145cff]" />
                    </div>
                    <h3 className="text-[14px] font-bold text-[#071426]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-5 text-[#536174]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
            Key Benefits
          </span>

          <div className="mt-4 grid md:grid-cols-5 gap-0 rounded-lg bg-white">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex gap-4 px-4 py-3 ${
                    index > 0 ? "md:border-l border-[#dbe7f5]" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] shadow-[0_8px_22px_rgba(20,92,255,.12)]">
                    <Icon size={23} className="text-[#145cff]" />
                  </div>
                  <div>
                    <h3 className="text-[14px] leading-5 font-bold text-[#071426]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-5 text-[#536174]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
