import {
  X,
  HeartPulse,
  GraduationCap,
  Building2,
  Landmark,
  ShoppingCart,
  Plane,
  Factory,
  Truck,
  Cpu,
  Car,
  LandmarkIcon,
  Users,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function IndustriesGridSection() {
  const [activeIndustry, setActiveIndustry] = useState(null);

  const industries = [
    {
      title: "Healthcare",
      icon: HeartPulse,
      description:
        "Digital healthcare solutions for better patient care and hospital management.",
      solutions: ["Hospital management", "Patient portals", "Telemedicine", "EMR systems"],
    },
    {
      title: "Education",
      icon: GraduationCap,
      description:
        "Smart learning platforms and management systems for modern education.",
      solutions: ["LMS platforms", "Online classes", "Student portals", "Institute ERP"],
    },
    {
      title: "Real Estate",
      icon: Building2,
      description:
        "Property management solutions to simplify your real estate business.",
      solutions: ["Property portals", "Real estate CRM", "Lead tracking", "Virtual tours"],
    },
    {
      title: "Finance",
      icon: Landmark,
      description:
        "Secure fintech solutions for banking, lending and financial services.",
      solutions: ["Digital payments", "Loan systems", "KYC workflows", "Finance dashboards"],
    },
    {
      title: "E-Commerce",
      icon: ShoppingCart,
      description:
        "Scalable e-commerce platforms to grow your online business.",
      solutions: ["Online stores", "Marketplaces", "Payment gateway", "Inventory systems"],
    },
    {
      title: "Travel & Hospitality",
      icon: Plane,
      description:
        "Travel portals and hospitality solutions for seamless booking experiences.",
      solutions: ["Booking portals", "Hotel management", "Travel CRM", "Itinerary tools"],
    },
    {
      title: "Manufacturing",
      icon: Factory,
      description:
        "ERP and automation solutions to optimize manufacturing processes.",
      solutions: ["ERP systems", "Inventory tracking", "Production planning", "Workflow automation"],
    },
    {
      title: "Logistics",
      icon: Truck,
      description:
        "Fleet management and logistics solutions for better supply chains.",
      solutions: ["Fleet tracking", "Delivery apps", "Route planning", "Warehouse tools"],
    },
    {
      title: "Technology",
      icon: Cpu,
      description:
        "Advanced technology solutions for startups and enterprises.",
      solutions: ["SaaS products", "Cloud platforms", "AI automation", "Custom software"],
    },
    {
      title: "Automotive",
      icon: Car,
      description:
        "Smart automotive software for dealerships, services and customers.",
      solutions: ["Dealer portals", "Service booking", "Inventory systems", "Customer apps"],
    },
    {
      title: "Government",
      icon: LandmarkIcon,
      description:
        "Digital transformation solutions for government and public services.",
      solutions: ["Citizen portals", "Workflow systems", "Reporting tools", "Secure dashboards"],
    },
    {
      title: "NGOs",
      icon: Users,
      description:
        "Technology solutions to help NGOs manage operations effectively.",
      solutions: ["Donation platforms", "Volunteer portals", "Program tracking", "Impact reports"],
    },
  ];

  return (
    <section id="industries-list" className="bg-[#f7f9fd] py-10 sm:py-16 lg:py-10">
      <div className="mx-auto px-4 sm:px-5 lg:px-10">
        <div className="mb-8 lg:mb-10">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#2563eb]">
            Industries We Empower
          </span>

          <h2 className="mt-2 text-[24px] font-bold leading-tight text-[#0f172a] sm:text-[28px] md:text-[28px]">
            Tailored Solutions Built For Unique Industry Challenges
          </h2>

          <div className="mt-4 h-[4px] w-[60px] rounded-full bg-[#ffb700]" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group rounded-xl border border-[#e8edf7] bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl sm:p-3"
              >
                <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-2xl bg-gradient-to-b from-[#2d7cff] to-[#0047ff] shadow-[0_12px_25px_rgba(37,99,235,.35)]">
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="mt-2 text-[18px] font-bold text-[#0f172a]">
                  {industry.title}
                </h3>

                <p className="mt-3 text-[14px] leading-5 text-[#64748b] sm:min-h-[70px]">
                  {industry.description}
                </p>

                <button
                  type="button"
                  onClick={() => setActiveIndustry(industry)}
                  className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-[#2563eb] transition-all hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {activeIndustry && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#020817]/75 px-4 py-6 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal="true"
          onMouseDown={() => setActiveIndustry(null)}
        >
          <div
            className="w-full max-w-2xl rounded-xl bg-white p-5 shadow-[0_28px_80px_rgba(2,8,23,.32)] sm:p-7"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndustry(null)}
              aria-label="Close industry details"
              className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#eef4ff] text-[#071426]"
            >
              <X size={18} />
            </button>

            <div className="mt-2 flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#2d7cff] to-[#0047ff] text-white">
                {(() => {
                  const Icon = activeIndustry.icon;
                  return <Icon size={32} />;
                })()}
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#2563eb]">
                  Industry Solutions
                </span>
                <h3 className="mt-1 text-[24px] font-extrabold text-[#0f172a]">
                  {activeIndustry.title}
                </h3>
                <p className="mt-3 text-[14px] leading-7 text-[#536174]">
                  {activeIndustry.description}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-[#f7f9fd] p-5">
              <h4 className="text-[15px] font-extrabold text-[#0f172a]">
                What We Can Build
              </h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {activeIndustry.solutions.map((solution) => (
                  <div
                    key={solution}
                    className="flex items-center gap-3 text-[13px] font-semibold text-[#415066]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#2563eb]" />
                    {solution}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href="/contact"
                className="inline-flex h-11 w-full items-center justify-center gap-3 rounded bg-[#ffb525] px-6 text-[13px] font-extrabold text-[#061326] sm:w-auto"
              >
                Discuss This Industry
                <ArrowRight size={15} />
              </a>
              <button
                type="button"
                onClick={() => setActiveIndustry(null)}
                className="inline-flex h-11 w-full items-center justify-center rounded border border-[#d8e5f5] px-6 text-[13px] font-extrabold text-[#071426] sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
