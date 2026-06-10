import {
  BadgeDollarSign,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Headphones,
  ShieldCheck,
  Sparkles,
  Timer,
  UsersRound,
  X,
} from "lucide-react";

const comparisons = [
  "Custom Solutions",
  "Industry Expertise",
  "AI Integration",
  "Security",
  "Scalability",
  "Support",
];

const features = [
  {
    icon: Sparkles,
    title: "Expert Team",
    desc: "Skilled professionals with industry experience.",
  },
  {
    icon: Timer,
    title: "Fast Delivery",
    desc: "Agile process for on-time project delivery.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    desc: "Cost-effective solutions for every business.",
  },
  {
    icon: ShieldCheck,
    title: "Data Security",
    desc: "Enterprise-grade security for your data.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Round-the-clock technical support and assistance.",
  },
  {
    icon: Cloud,
    title: "Cloud Ready",
    desc: "Scalable solutions hosted on cloud.",
  },
  {
    icon: BrainCircuit,
    title: "AI Powered",
    desc: "Intelligent solutions powered by AI.",
  },
  {
    icon: UsersRound,
    title: "Quality Assurance",
    desc: "Rigorous testing for bug-free solutions.",
  },
];

export default function IndustryTrustPartnerSection() {
  return (
    <section className="bg-[#f8fbff] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto px-4 sm:px-8 lg:px-10">
        <div className="mb-5">
          <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#1767ff]">
            Why Choose JD Infotech
          </span>
          <h2 className="mt-1 text-[24px] font-extrabold leading-tight text-[#0a1830] sm:text-[34px] lg:text-[36px]">
            Your Trusted Technology Partner
          </h2>
          <div className="mt-2 h-[3px] w-[35px] rounded-full bg-[#f6b51f]" />
        </div>

        <div className="grid gap-5 lg:grid-cols-[.92fr_1.55fr]">
          <div className="grid gap-3 sm:hidden">
            {comparisons.map((feature) => (
              <div
                key={feature}
                className="rounded-[8px] border border-[#dce7f7] bg-white p-4 shadow-[0_10px_28px_rgba(15,55,105,.08)]"
              >
                <h3 className="text-[13px] font-extrabold text-[#0d1d36]">
                  {feature}
                </h3>
                <div className="mt-3 grid grid-cols-2 gap-3 text-center text-[11px] font-extrabold">
                  <div className="rounded-lg bg-[#eef4ff] p-3 text-[#1767ff]">
                    JD Infotech
                    <CheckCircle2
                      size={18}
                      strokeWidth={3}
                      className="mx-auto mt-2 text-[#1767ff]"
                    />
                  </div>
                  <div className="rounded-lg bg-[#f8fbff] p-3 text-[#475569]">
                    Others
                    <X
                      size={17}
                      strokeWidth={3}
                      className="mx-auto mt-2 text-[#111827]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden overflow-hidden rounded-[8px] border border-[#dce7f7] bg-white shadow-[0_10px_28px_rgba(15,55,105,.08)] sm:block">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-[#dce7f7] bg-white text-[13px] font-extrabold text-[#0d1d36]">
              <div className="px-5 py-4">Feature</div>
              <div className="border-l border-[#dce7f7] px-5 py-4 text-center text-[#1767ff]">
                JD Infotech
              </div>
              <div className="border-l border-[#dce7f7] px-5 py-4 text-center">
                Others
              </div>
            </div>

            {comparisons.map((feature) => (
              <div
                key={feature}
                className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-[#dce7f7] last:border-b-0"
              >
                <div className="px-5 py-[15px] text-[13px] font-bold text-[#34425a]">
                  {feature}
                </div>
                <div className="flex items-center justify-center border-l border-[#dce7f7] px-5 py-[15px]">
                  <CheckCircle2
                    size={18}
                    strokeWidth={3}
                    className="text-[#1767ff]"
                  />
                </div>
                <div className="flex items-center justify-center border-l border-[#dce7f7] px-5 py-[15px]">
                  <X size={17} strokeWidth={3} className="text-[#111827]" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="flex min-h-[145px] flex-col items-center justify-center rounded-[8px] border border-[#dce7f7] bg-white px-5 py-6 text-center shadow-[0_10px_28px_rgba(15,55,105,.08)] transition duration-300 hover:-translate-y-1 hover:border-[#1767ff]/45 hover:shadow-[0_16px_34px_rgba(23,103,255,.14)]"
                >
                  <Icon
                    size={39}
                    strokeWidth={1.9}
                    className="text-[#1767ff]"
                  />
                  <h3 className="mt-4 text-[16px] font-extrabold text-[#0a1830]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12px] font-semibold leading-5 text-[#475569]">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
