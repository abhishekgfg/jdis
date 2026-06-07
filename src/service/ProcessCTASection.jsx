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
      <div className="mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
            Our Process
          </span>

          <h2 className="mt-1 text-[28px] lg:text-[28px] leading-tight font-bold text-[#071426]">
            How We Deliver Excellence
          </h2>
        </div>

        {/* Process */}
        <div className="relative mt-8">
          <div className="hidden lg:block absolute top-[33px] left-[90px] right-[90px] border-t border-dashed border-[#b9cdf0]" />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-5 relative z-10">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.step} className="text-center relative">
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
        <div className="mt-10 rounded-xl bg-[#061326] overflow-hidden border border-[#183456] shadow-[0_15px_40px_rgba(2,8,23,0.15)]">
          <div className="relative min-h-[140px] px-8 lg:px-12 py-8 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="absolute left-0 top-0 bottom-0 w-[220px] opacity-30 bg-[radial-gradient(circle_at_center,#145cff_1px,transparent_1px)] [background-size:10px_10px]" />

            <div className="relative z-10 max-w-[430px]">
              <h2 className="text-white text-[24px] lg:text-[18px] leading-tight font-bold">
                Ready to{" "}
                <span className="text-[#ffb700]">Transform</span> Your Ideas
                <br />
                into Reality?
              </h2>
            </div>

            <p className="relative z-10 max-w-[280px] text-[13px] leading-6 text-[#c7d1e0] text-center lg:text-left">
              Let’s discuss how our services can help your business grow and
              succeed.
            </p>

            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              <button className="h-[52px] px-5 rounded-md bg-[#ffb700] hover:bg-[#ffc329] text-[#061326] font-bold inline-flex items-center gap-3 shadow-lg shadow-yellow-500/20 transition-all">
                Start Your Project
                <ArrowRight size={17} />
              </button>

              <button className="h-[52px] px-7 rounded-md border border-white/25 bg-white/5 hover:bg-white/10 text-white font-semibold inline-flex items-center gap-3 transition-all">
                Schedule a Call
                <Phone size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}