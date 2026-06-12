import {
  Search,
  ClipboardList,
  PenLine,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ProcessCTASection() {
  const process = [
    {
      icon: Search,
      step: "01",
      title: "Discover",
      desc: "We understand your business, goals, and challenges.",
    },
    {
      icon: ClipboardList,
      step: "02",
      title: "Plan",
      desc: "We create a strategic plan and roadmap for your project.",
    },
    {
      icon: PenLine,
      step: "03",
      title: "Design",
      desc: "Our UI/UX experts design intuitive and engaging experiences.",
    },
    {
      icon: Code2,
      step: "04",
      title: "Develop",
      desc: "Our developers build robust and scalable solutions.",
    },
    {
      icon: ShieldCheck,
      step: "05",
      title: "Test",
      desc: "We ensure quality, security and performance at every step.",
    },
    {
      icon: Rocket,
      step: "06",
      title: "Deploy & Support",
      desc: "We deploy, monitor and provide continuous support.",
    },
  ];

  return (
    <section className="bg-[#f8fbff] py-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
            Our Process
          </span>

          <h2 className="mt-1 text-[24px] font-bold leading-tight text-[#071426] sm:text-[28px] lg:text-[28px]">
            How We Deliver Excellence
          </h2>
        </div>

        {/* Process */}
        <div className="relative mt-8">
          <div className="hidden lg:block absolute top-[33px] left-[90px] right-[90px] border-t border-dashed border-[#b9cdf0]" />

          <div className="relative z-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-5">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.step} className="relative rounded-xl border border-[#e5edf7] bg-white p-5 text-center shadow-[0_8px_25px_rgba(20,92,255,0.08)] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                  {index < process.length - 1 && (
                    <span className="hidden lg:block absolute top-[20px] right-[-16px] text-[#145cff]">
                      →
                    </span>
                  )}

                  <div className="mx-auto w-[66px] h-[66px] rounded-full bg-white border border-[#cfe0ff] shadow-[0_8px_25px_rgba(20,92,255,0.15)] flex items-center justify-center">
                    <Icon size={27} className="text-[#145cff]" />
                  </div>

                  <h4 className="mt-5 text-[13px] font-bold text-[#071426]">
                    {item.step}
                  </h4>

                  <h3 className="mt-1 text-[16px] font-bold text-[#071426]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-[#536174] max-w-[155px] mx-auto">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-10 overflow-hidden rounded-xl border border-[#183456] bg-[#061326] shadow-[0_15px_40px_rgba(2,8,23,0.15)]">
          <div className="relative flex min-h-[140px] flex-col items-stretch justify-between gap-6 px-5 py-7 text-center sm:px-8 lg:flex-row lg:items-center lg:gap-8 lg:px-12 lg:py-8 lg:text-left">
            <div className="absolute left-0 top-0 bottom-0 w-[220px] opacity-30 bg-[radial-gradient(circle_at_center,#145cff_1px,transparent_1px)] [background-size:10px_10px]" />

            <div className="relative z-10 max-w-[430px]">
              <h2 className="text-[22px] font-bold leading-tight text-white sm:text-[24px] lg:text-[18px]">
                Ready to{" "}
                <span className="text-[#ffb700]">Transform</span> Your Ideas
                <br className="hidden sm:block" />
                into Reality?
              </h2>
            </div>

            <p className="relative z-10 mx-auto max-w-[280px] text-center text-[13px] leading-6 text-[#c7d1e0] lg:mx-0 lg:text-left">
              Let’s discuss how our services can help your business grow and
              succeed.
            </p>

            <div className="relative z-10 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-end">
              <Link to="/contact" className="inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-md bg-[#ffb700] px-5 font-bold text-[#061326] shadow-lg shadow-yellow-500/20 transition-all hover:bg-[#ffc329] sm:w-auto">
                Start Your Project
                <ArrowRight size={17} />
              </Link>

              <a href="tel:+919523435814" className="inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-md border border-white/25 bg-white/5 px-7 font-semibold text-white transition-all hover:bg-white/10 sm:w-auto">
                Schedule a Call
                <Phone size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
