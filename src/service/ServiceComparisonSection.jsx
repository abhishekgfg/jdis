import {
  Users,
  ShieldCheck,
  Clock3,
  Headphones,
  BadgeDollarSign,
  TrendingUp,
  Lock,
  Star,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react";

export default function ServiceComparisonSection() {
  const comparison = [
    ["Custom Solutions", "Yes", "Limited"],
    ["Experienced Team", "Yes", "Maybe"],
    ["On-Time Delivery", "Yes", "Sometimes"],
    ["Transparent Pricing", "Yes", "No"],
    ["Post-Launch Support", "Yes", "Limited"],
    ["Advanced Technology", "Yes", "Outdated"],
    ["Client Satisfaction", "98%", "70-80%"],
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Team",
      desc: "Skilled professionals with years of industry experience.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assured",
      desc: "We follow best practices to ensure top-notch quality.",
    },
    {
      icon: Clock3,
      title: "On-Time Delivery",
      desc: "We value your time and deliver on every promise.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Our support team is always available to help you.",
    },
    {
      icon: BadgeDollarSign,
      title: "Affordable Pricing",
      desc: "High-quality solutions within your budget.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      desc: "Solutions that grow with your business.",
    },
    {
      icon: Lock,
      title: "Data Security",
      desc: "We follow strict security standards to protect data.",
    },
    {
      icon: Star,
      title: "Client Satisfaction",
      desc: "Our success is measured by your success.",
    },
  ];

  return (
    <section className="bg-[#061326] py-10 text-white lg:py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid gap-8 items-start lg:grid-cols-[0.85fr_1.35fr] lg:gap-10">
          {/* Comparison */}
          <div>
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#2b8cff]">
              Service Comparison
            </span>

            <h2 className="mt-2 text-[24px] font-bold leading-tight sm:text-[30px] lg:text-[28px]">
              Why Businesses Choose <br className="hidden sm:block" />
              <span className="text-[#ffb700]">JD Infotech</span> Solutions
            </h2>

            <div className="mt-6 grid gap-3 sm:hidden">
              {comparison.map(([feature, jd, other]) => (
                <div
                  key={feature}
                  className="rounded-lg border border-[#294469] bg-[#071b34] p-4"
                >
                  <h3 className="text-[13px] font-bold text-white">
                    {feature}
                  </h3>

                  <div className="mt-3 grid grid-cols-2 gap-3 text-[12px]">
                    <div className="rounded-lg border border-[#145cff]/40 bg-[#145cff]/25 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-wide text-[#9fc2ff]">
                        JD Infotech
                      </p>
                      <div className="mt-2 flex items-center gap-2 font-semibold text-white">
                        <CheckCircle2 size={14} className="text-[#22c55e]" />
                        {jd}
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#294469] bg-[#061326] p-3">
                      <p className="text-[10px] font-bold uppercase tracking-wide text-[#9fb0c7]">
                        Others
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-[#d7e2f0]">
                        {other === "No" ||
                        other === "Limited" ||
                        other === "Outdated" ? (
                          <XCircle size={14} className="text-[#ef4444]" />
                        ) : (
                          <AlertCircle size={14} className="text-[#ffb700]" />
                        )}
                        {other}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 hidden overflow-x-auto rounded-lg border border-[#294469] bg-[#071b34] sm:block">
              <div className="min-w-[520px]">
              <div className="grid grid-cols-3 text-[12px] font-bold">
                <div className="border-r border-[#294469] p-3">Features</div>
                <div className="border-r border-[#294469] bg-[#145cff] p-3 text-center">
                  JD Infotech Solutions
                </div>
                <div className="p-3 text-center">Other Agencies</div>
              </div>

              {comparison.map(([feature, jd, other], index) => (
                <div
                  key={feature}
                  className={`grid grid-cols-3 text-[12px] ${
                    index !== comparison.length - 1
                      ? "border-t border-[#294469]"
                      : "border-t border-[#294469]"
                  }`}
                >
                  <div className="border-r border-[#294469] p-2 text-[#d7e2f0]">
                    {feature}
                  </div>

                  <div className="flex items-center justify-center gap-2 border-r border-[#294469] bg-[#145cff]/35 p-2 text-center font-semibold">
                    <CheckCircle2 size={14} className="text-[#22c55e]" />
                    {jd}
                  </div>

                  <div className="flex items-center justify-center gap-2 p-3 text-center text-[#d7e2f0]">
                    {other === "No" || other === "Limited" || other === "Outdated" ? (
                      <XCircle size={14} className="text-[#ef4444]" />
                    ) : (
                      <AlertCircle size={14} className="text-[#ffb700]" />
                    )}
                    {other}
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>

          {/* Why Choose */}
          <div>
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#2b8cff]">
              Why Choose Us
            </span>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="min-h-[145px] rounded-lg border border-[#294469] bg-[#071b34] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2b8cff]/70 sm:min-h-[155px]"
                  >
                    <Icon
                      size={36}
                      className="mx-auto text-[#145cff] mb-4"
                    />

                    <h3 className="text-[14px] font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-5 text-[#c7d1e0]">
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
