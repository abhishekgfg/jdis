import {
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardList,
  Code2,
  Globe2,
  Headphones,
  PencilRuler,
  Rocket,
  Search,
  ShieldCheck,
  ThumbsUp,
  UsersRound,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Understanding your business and goals.",
    icon: Search,
  },
  {
    number: "02",
    title: "Planning",
    desc: "Creating strategy, roadmap and plan.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design",
    desc: "UI/UX and prototype for your solution.",
    icon: PencilRuler,
  },
  {
    number: "04",
    title: "Development",
    desc: "Building scalable and secure solution.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Testing",
    desc: "Testing for quality, security and performance.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Deployment",
    desc: "Deploying solution to live environment.",
    icon: Rocket,
  },
  {
    number: "07",
    title: "Support",
    desc: "Continuous support and improvements.",
    icon: Headphones,
  },
];

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "500+",
    label: "Projects Delivered",
  },
  {
    icon: UsersRound,
    value: "200+",
    label: "Happy Clients",
  },
  {
    icon: Globe2,
    value: "15+",
    label: "Countries Served",
  },
  {
    icon: BadgeCheck,
    value: "50+",
    label: "Industry Experts",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Client Satisfaction",
  },
];

export default function IndustryDeliveryProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#011733] py-10 text-white sm:py-12 lg:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(0,132,255,.24),transparent_24%),radial-gradient(circle_at_92%_78%,rgba(24,144,255,.24),transparent_22%)]" />
      <div className="relative mx-auto  px-5 sm:px-8 lg:px-10">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#1793ff]">
            Our Process
          </span>
          <h2 className="mt-1 text-[26px] font-bold leading-tight text-white sm:text-[34px] lg:text-[34px]">
            How We Deliver Solutions
          </h2>
          <div className="mt-2 h-[3px] w-[35px] rounded-full bg-[#f6b51f]" />
        </div>

        <div className="relative mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
          <div className="absolute left-[6%] right-[6%] top-[43px] hidden border-t border-dashed border-[#1767ff]/70 lg:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative z-10 text-center"
              >
                {index < steps.length - 1 && (
                  <div className="absolute right-[-12px] top-[38px] hidden h-2 w-2 rotate-45 border-r-2 border-t-2 border-[#1793ff] lg:block" />
                )}

                <div className="mx-auto flex h-[78px] w-[78px] items-center justify-center rounded-full border-[3px] border-[#1169ff] bg-[linear-gradient(145deg,#0789ff,#0755df)] shadow-[0_0_0_8px_rgba(17,105,255,.14),0_12px_28px_rgba(0,0,0,.38),inset_0_0_18px_rgba(255,255,255,.18)]">
                  <Icon size={34} strokeWidth={2.3} className="text-white" />
                </div>
                <div className="mt-2 text-[18px] font-extrabold text-[#f6b51f]">
                  {step.number}
                </div>
                <h3 className="mt-1 text-[17px] font-extrabold text-[#f6b51f]">
                  {step.title}
                </h3>
                <p className="mx-auto mt-1 max-w-[145px] text-[11px] font-semibold leading-4 text-[#d8e7fb]">
                  {step.desc}
                </p>
              </article>
            );
          })}
        </div>

        <div className="relative mt-9 overflow-hidden rounded-[10px] border border-[#1767ff]/75 bg-[linear-gradient(100deg,#052466,#0b2c8f_45%,#062260)] shadow-[0_16px_36px_rgba(0,0,0,.3),inset_0_0_32px_rgba(23,103,255,.25)]">
          <div className="absolute inset-y-0 right-0 w-[210px] bg-[radial-gradient(circle_at_78%_35%,rgba(56,171,255,.7),transparent_10%),radial-gradient(circle_at_94%_0%,rgba(0,119,255,.6),transparent_28%)]" />
          <div className="relative grid grid-cols-1 divide-y divide-white/30 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="flex min-h-[128px] flex-col items-center justify-center px-6 py-5 text-center"
                >
                  <Icon size={27} strokeWidth={2.4} className="text-white" />
                  <strong className="mt-2 text-[30px] font-bold leading-none text-white">
                    {stat.value}
                  </strong>
                  <span className="mt-2 text-[12px] font-bold text-white">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
