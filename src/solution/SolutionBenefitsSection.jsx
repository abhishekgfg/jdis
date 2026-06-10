import {
  BarChart3,
  Clock3,
  DollarSign,
  Globe2,
  Headphones,
  Medal,
  Rocket,
  ShieldCheck,
  Smile,
  TrendingUp,
  Users,
} from "lucide-react";

export default function SolutionBenefitsSection() {
  const stats = [
    { icon: Rocket, value: "500+", label: "Projects Delivered" },
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: Globe2, value: "15+", label: "Countries Served" },
    { icon: Medal, value: "98%", label: "Client Satisfaction" },
    { icon: Headphones, value: "24/7", label: "Support Available" },
  ];

  const benefits = [
    {
      icon: Clock3,
      title: "Improved Efficiency",
      desc: "Automate workflows and optimize processes to save time and resources.",
    },
    {
      icon: BarChart3,
      title: "Better Decision Making",
      desc: "Leverage data and analytics for real-time insights and strategic decisions.",
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      desc: "Reduce operational costs and improve ROI with smart solutions.",
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Security",
      desc: "Enterprise-grade security to protect your data and systems.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      desc: "Solutions built to scale with your business and adapt to future needs.",
    },
    {
      icon: Smile,
      title: "Customer Satisfaction",
      desc: "Deliver better experiences and build stronger customer relationships.",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="overflow-hidden rounded-xl bg-[#031027] px-5 py-6 text-white shadow-[0_16px_40px_rgba(2,8,23,.14)] sm:px-7">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 rounded-lg bg-white/5 p-4 lg:rounded-none lg:bg-transparent lg:p-0 ${
                    index > 0 ? "lg:border-l lg:border-white/12 lg:pl-7" : ""
                  }`}
                >
                  <Icon size={38} className="shrink-0 text-[#ffc126]" />
                  <div>
                    <div className="text-[27px] font-extrabold leading-none">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[12px] font-semibold text-[#cbd7e8]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:gap-8">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#145cff]">
              Why Our Solutions?
            </span>
            <h2 className="mt-2 max-w-[360px] text-[23px] font-extrabold leading-tight text-[#071426] sm:text-[25px] lg:text-[30px]">
              Benefits That Empower Your Business
            </h2>
            <div className="mt-4 h-[2px] w-12 rounded-full bg-[#ffc126]" />
            <p className="mt-7 max-w-[500px] text-[13px] font-medium leading-6 text-[#536174]">
              Our solutions are designed to help you stay ahead in a
              competitive market by delivering measurable results and long-term
              value.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:gap-x-10 lg:gap-y-6 lg:border-l lg:border-[#dbe5f2] lg:pl-10">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex gap-4 rounded-xl border border-[#e5edf7] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,.04)] lg:border-0 lg:p-0 lg:shadow-none">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-[#145cff] shadow-[0_8px_20px_rgba(20,92,255,.1)]">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-extrabold text-[#071426]">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-[12px] font-medium leading-5 text-[#536174]">
                      {benefit.desc}
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
