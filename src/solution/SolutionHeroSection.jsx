import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Gauge,
  Headphones,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "../components/images/solutions-hero-globe.png";

export default function SolutionHeroSection() {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Driving Future",
      className: "left-1/2 top-[2%] -translate-x-1/2",
      color: "text-[#ffc126]",
    },
    {
      icon: Gauge,
      title: "Performance",
      desc: "Optimized for Excellence",
      className: "right-[4%] top-[24%]",
      color: "text-[#2d8cff]",
    },
    {
      icon: BarChart3,
      title: "Scalability",
      desc: "Grow Without Limits",
      className: "left-[3%] top-[35%]",
      color: "text-[#4fa3ff]",
    },
    {
      icon: ShieldCheck,
      title: "Security",
      desc: "Built-in Protection",
      className: "left-[1%] bottom-[17%]",
      color: "text-[#258dff]",
    },
    {
      icon: Lightbulb,
      title: "Reliability",
      desc: "Always Available",
      className: "right-[3%] bottom-[19%]",
      color: "text-[#ffc126]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#020814] text-white lg:min-h-[430px]">
      <img
        src={heroBg}
        alt="Digital globe solutions background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020814] via-[#020814]/58 to-[#020814]/12" />
      <div className="absolute inset-y-0 left-0 w-full bg-[#020814]/45 sm:w-[45%] sm:bg-[#020814]/35" />

      <div className="relative z-10 mx-auto grid items-center px-4 py-10 sm:px-6 lg:min-h-[430px] lg:grid-cols-[.9fr_1.1fr] lg:px-12">
        <div>
          <div className="mb-7 flex items-center gap-2 text-[11px] font-semibold">
            <Link to="/" className="text-white/82">
              Home
            </Link>
            <ChevronRight size={13} className="text-white/45" />
            <span className="text-[#ffc126]">Solutions</span>
          </div>

          <h1 className="max-w-[470px] text-[32px] font-bold leading-[1.08] tracking-normal sm:text-[44px] lg:text-[42px]">
            Smart Solutions
            <span className="block">
              For a <span className="text-[#ffba19]">Digital World</span>
            </span>
          </h1>

          <p className="mt-3 max-w-[520px] text-[14px] leading-6 text-[#e0e8f5] sm:leading-5">
            We design and deliver innovative, scalable and future-ready solutions
            that help businesses streamline operations, enhance customer
            experience and accelerate growth.
          </p>

          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <a
              href="#solutions-list"
              className="inline-flex h-12 w-full items-center justify-center gap-4 rounded bg-[#ffc126] px-7 text-[13px] font-bold text-[#071426] shadow-[0_12px_30px_rgba(255,193,38,.23)] sm:w-auto"
            >
              Explore Solutions
              <ArrowRight size={16} />
            </a>
            <Link
              to="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-4 rounded border border-white/30 bg-white/5 px-7 text-[13px] font-bold text-white sm:w-auto"
            >
              Talk to Experts
              <Headphones size={16} />
            </Link>
          </div>
        </div>

        <div className="relative hidden min-h-[360px] lg:block">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`absolute ${item.className} flex min-w-[150px] items-center gap-3 rounded-lg border border-[#1a365b] bg-[#07152a]/86 px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,.24)] backdrop-blur-md`}
              >
                <Icon size={28} className={item.color} />
                <div>
                  <h3 className="text-[12px] font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[10px] font-semibold leading-4 text-[#b9c8da]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
