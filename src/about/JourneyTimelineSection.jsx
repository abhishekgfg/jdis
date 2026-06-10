import {
  Rocket,
  Code2,
  Smartphone,
  PanelsTopLeft,
  Cpu,
  Globe,
  Gem,
} from "lucide-react";

export default function JourneyTimelineSection() {
  const milestones = [
    {
      year: "2019",
      title: "Company Started",
      desc: "Laid the foundation with a small passionate team.",
      icon: Rocket,
    },
    {
      year: "2020",
      title: "Digital Services Expansion",
      desc: "Expanded into website development and digital solutions.",
      icon: Code2,
    },
    {
      year: "2021",
      title: "Mobile & Software Development",
      desc: "Delivered mobile apps and custom software solutions.",
      icon: Smartphone,
    },
    {
      year: "2022",
      title: "CRM & ERP Solutions",
      desc: "Started delivering CRM, ERP and business automation solutions.",
      icon: PanelsTopLeft,
    },
    {
      year: "2023",
      title: "AI & Automation Services",
      desc: "Integrated AI, automation and analytics into our service portfolio.",
      icon: Cpu,
    },
    {
      year: "2024",
      title: "Global Client Delivery",
      desc: "Served clients from multiple countries with successful delivery.",
      icon: Globe,
    },
    {
      year: "2025",
      title: "Enterprise Transformation Focus",
      desc: "Helping enterprises achieve digital excellence and long-term growth.",
      icon: Gem,
    },
  ];

  return (
    <section className="bg-[#f8fbff] py-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
            Our Journey
          </span>

          <h2 className="mt-1 text-[24px] font-bold leading-tight text-[#071426] sm:text-[28px] lg:text-[30px]">
            Milestones of Our Growth
          </h2>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-8 top-0 border-l border-dashed border-[#b9cdf0] sm:hidden" />
          <div className="hidden lg:block absolute top-[34px] left-[70px] right-[70px] border-t border-dashed border-[#b9cdf0]" />

          <div className="relative z-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 lg:gap-4">
            {milestones.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.year} className="flex items-start gap-4 rounded-xl border border-[#e5edf7] bg-white p-4 text-left shadow-[0_8px_25px_rgba(20,92,255,0.08)] sm:block sm:text-center lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                  <div className="flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center rounded-full border border-[#cfe0ff] bg-[#f8fbff] shadow-[0_8px_25px_rgba(20,92,255,0.12)] sm:mx-auto sm:h-[68px] sm:w-[68px]">
                    <Icon size={28} className="text-[#145cff]" />
                  </div>

                  <div>
                    <h3 className="text-[14px] font-bold text-[#071426] sm:mt-4">
                      {item.year}
                    </h3>

                    <h4 className="mt-2 text-[13px] font-bold leading-snug text-[#071426]">
                      {item.title}
                    </h4>

                    <p className="mt-2 max-w-[230px] text-[12px] leading-5 text-[#536174] sm:mx-auto sm:max-w-[150px]">
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
