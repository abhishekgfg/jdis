import {
  Users,
  Cpu,
  CalendarCheck,
  Headphones,
  BadgeDollarSign,
  BadgeCheck,
  BookOpen,
  ClipboardList,
  PenTool,
  Code2,
  Atom,
  Rocket,
  LifeBuoy,
} from "lucide-react";

export default function WhyChooseProcessSection() {
  const whyChoose = [
    {
      icon: Users,
      title: "Experienced Team",
      desc: "Skilled professionals delivering excellence.",
    },
    {
      icon: Cpu,
      title: "Modern Technology",
      desc: "We use cutting-edge tools and technologies.",
    },
    {
      icon: CalendarCheck,
      title: "On-Time Delivery",
      desc: "We value time and deliver projects on schedule.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Round-the-clock support whenever you need.",
    },
    {
      icon: BadgeDollarSign,
      title: "Affordable Pricing",
      desc: "High-quality solutions within your budget.",
    },
    {
      icon: BadgeCheck,
      title: "Global Standards",
      desc: "We follow international quality standards.",
    },
  ];

  const process = [
    {
      icon: BookOpen,
      title: "Discovery",
      desc: "Understanding your requirements",
    },
    {
      icon: ClipboardList,
      title: "Strategy",
      desc: "Planning the right solution",
    },
    {
      icon: PenTool,
      title: "Design",
      desc: "Creating beautiful UI/UX",
    },
    {
      icon: Code2,
      title: "Development",
      desc: "Building high-quality solutions",
    },
    {
      icon: Atom,
      title: "Testing",
      desc: "Testing for quality assurance",
    },
    {
      icon: Rocket,
      title: "Deployment",
      desc: "Launching the solution",
    },
    {
      icon: LifeBuoy,
      title: "Support",
      desc: "Ongoing support & maintenance",
    },
  ];

  return (
    <section className="bg-[#f8fbff]">
      {/* Why Choose */}
      <div className="border-y border-[#e8eef7] bg-white/70">
        <div className="mx-auto px-4 lg:px-10">
          <div className="py-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
              Why Choose JD Infotech Solutions?
            </span>

            <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-6 divide-y sm:divide-y-0 lg:divide-x divide-[#e1e8f2]">
              {whyChoose.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 py-4 lg:px-6 first:lg:pl-0"
                  >
                    <div className="w-11 h-11 min-w-11 rounded-full border border-[#ffc44d]/40 bg-[#fff8e6] flex items-center justify-center">
                      <Icon size={22} className="text-[#ffb700]" />
                    </div>

                    <div>
                      <h3 className="text-[13px] font-bold text-[#071426]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[12px] leading-5 text-[#536174]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-10">
        <div className="mx-auto px-6 lg:px-12">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
            Our Process
          </span>

          <h2 className="mt-2 text-[26px] lg:text-[28px] font-bold text-[#071426]">
            Our Proven Development Process
          </h2>

          <div className="relative mt-9">
            <div className="hidden lg:block absolute top-[33px] left-[70px] right-[70px] h-px bg-[#c8d8f0]" />

            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-4 relative z-10">
              {process.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="relative text-center">
                    {index < process.length - 1 && (
                      <div className="hidden lg:flex absolute top-[20px] right-[-18px] z-20 text-[#145cff]">
                        →
                      </div>
                    )}

                    <div className="mx-auto w-[66px] h-[66px] rounded-full bg-white border border-[#cfe0ff] shadow-[0_8px_25px_rgba(20,92,255,0.15)] flex items-center justify-center">
                      <Icon size={28} className="text-[#145cff]" />
                    </div>

                    <h3 className="mt-5 text-[15px] font-bold text-[#071426]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-5 text-[#536174] max-w-[130px] mx-auto">
                      {item.desc}
                    </p>
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