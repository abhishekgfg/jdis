import {
  Zap,
  Rocket,
  MapPin,
  ShieldCheck,
  Droplets,
  Monitor,
  Lock,
  BarChart3,
  ShoppingCart,
  Gauge,
  Settings,
  RefreshCcw,
} from "lucide-react";

import websiteOverview from "../image/website-overview.png";

export default function WebsiteOverviewSection() {
  const overviewCards = [
    {
      icon: Rocket,
      title: "Custom Design",
      desc: "Unique designs that represent your brand identity.",
    },
    {
      icon: MapPin,
      title: "User Experience",
      desc: "Intuitive UI/UX for higher engagement and better conversions.",
    },
    {
      icon: ShieldCheck,
      title: "SEO Friendly",
      desc: "Built with SEO best practices to rank higher on search engines.",
    },
    {
      icon: Droplets,
      title: "Scalable Solutions",
      desc: "Future-ready websites that grow with your business.",
    },
  ];

  const features = [
    {
      icon: Monitor,
      title: "Responsive Design",
      desc: "Looks perfect on all devices and screen sizes.",
    },
    {
      icon: Settings,
      title: "CMS Integration",
      desc: "Easy to manage content with powerful CMS platforms.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Ready",
      desc: "Secure and scalable online stores and payment integration.",
    },
    {
      icon: Gauge,
      title: "Speed Optimization",
      desc: "Lightning fast websites for better user experience.",
    },
    {
      icon: Lock,
      title: "Security & SSL",
      desc: "Advanced security with SSL and data protection.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Tracking",
      desc: "Integrated analytics to track performance and insights.",
    },
    {
      icon: RefreshCcw,
      title: "Cross Browser Compatible",
      desc: "Works seamlessly across all major browsers.",
    },
    {
      icon: Settings,
      title: "Ongoing Support",
      desc: "Regular updates and dedicated technical support.",
    },
  ];

  return (
    <section className="bg-[#f8fbff] py-10 lg:py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Overview */}
        <div className="grid gap-7 items-center lg:grid-cols-[0.9fr_1.25fr] lg:gap-10">
          {/* Image */}
          <div className="relative h-[260px] overflow-hidden rounded-xl border border-[#dbe7f5] shadow-[0_12px_35px_rgba(15,23,42,0.12)] sm:h-[290px]">
            <img
              src={websiteOverview}
              alt="Website development workspace"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl border border-white/15 bg-[#061326]/90 px-4 py-3 text-white shadow-xl backdrop-blur-md sm:left-6 sm:right-auto sm:bottom-6 sm:gap-4 sm:px-5 sm:py-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#ffb700]/15 sm:h-12 sm:w-12">
                <Zap size={25} className="text-[#ffb700]" fill="#ffb700" />
              </div>

              <div>
                <h4 className="text-[14px] font-bold">Fast Loading</h4>
                <p className="text-[12px] text-[#c7d1e0]">
                  Optimized for speed
                  <br />
                  and performance
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
              Service Overview
            </span>

            <h2 className="mt-1 text-[24px] font-bold leading-tight text-[#071426] sm:text-[32px] lg:text-[28px]">
              Powerful Websites That Build Your Brand
            </h2>

            <p className="mt-2 text-[14px] leading-6 text-[#536174] max-w-[820px]">
              Our website development services focus on building
              high-performance websites that are tailored to your business
              needs. From corporate websites to complex web applications, we
              deliver solutions that are visually stunning, secure, and built to
              scale.
            </p>

            <div className="mt-5 grid border-y border-[#e1e8f2] sm:grid-cols-2 lg:grid-cols-4">
              {overviewCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`border-b border-[#e1e8f2] px-3 py-4 sm:px-4 lg:border-b-0 ${
                      index !== overviewCards.length - 1
                        ? "lg:border-r border-[#e1e8f2]"
                        : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#f3f7ff] border border-[#dbe7f5] flex items-center justify-center mb-4">
                      <Icon size={23} className="text-[#145cff]" />
                    </div>

                    <h3 className="text-[14px] font-bold text-[#071426]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[13px] leading-5 text-[#536174]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-10 border-t border-[#e1e8f2] pt-6">
          <div className="grid gap-7 lg:grid-cols-[0.65fr_1.35fr] lg:gap-8">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#145cff]">
                Key Features
              </span>

              <h2 className="mt-2 text-[24px] font-bold leading-tight text-[#071426] sm:text-[30px] lg:text-[28px]">
                Everything You Need in a <br className="hidden sm:block" />
                Modern Website
              </h2>

              <div className="mt-5 w-10 h-[3px] bg-[#ffb700] rounded-full" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-6">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4 rounded-xl border border-[#e5edf7] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                    <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl border border-[#dbe7f5] bg-[#f3f7ff]">
                      <Icon size={22} className="text-[#145cff]" />
                    </div>

                    <div>
                      <h3 className="text-[14px] font-bold text-[#071426]">
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
    </section>
  );
}
