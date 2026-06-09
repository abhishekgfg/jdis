import {
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

export default function IndustriesGridSection() {
  const industries = [
    {
      title: "Healthcare",
      icon: HeartPulse,
      description:
        "Digital healthcare solutions for better patient care and hospital management.",
    },
    {
      title: "Education",
      icon: GraduationCap,
      description:
        "Smart learning platforms and management systems for modern education.",
    },
    {
      title: "Real Estate",
      icon: Building2,
      description:
        "Property management solutions to simplify your real estate business.",
    },
    {
      title: "Finance",
      icon: Landmark,
      description:
        "Secure fintech solutions for banking, lending and financial services.",
    },
    {
      title: "E-Commerce",
      icon: ShoppingCart,
      description:
        "Scalable e-commerce platforms to grow your online business.",
    },
    {
      title: "Travel & Hospitality",
      icon: Plane,
      description:
        "Travel portals and hospitality solutions for seamless booking experiences.",
    },
    {
      title: "Manufacturing",
      icon: Factory,
      description:
        "ERP and automation solutions to optimize manufacturing processes.",
    },
    {
      title: "Logistics",
      icon: Truck,
      description:
        "Fleet management and logistics solutions for better supply chains.",
    },
    {
      title: "Technology",
      icon: Cpu,
      description:
        "Advanced technology solutions for startups and enterprises.",
    },
    {
      title: "Automotive",
      icon: Car,
      description:
        "Smart automotive software for dealerships, services and customers.",
    },
    {
      title: "Government",
      icon: LandmarkIcon,
      description:
        "Digital transformation solutions for government and public services.",
    },
    {
      title: "NGOs",
      icon: Users,
      description:
        "Technology solutions to help NGOs manage operations effectively.",
    },
  ];

  return (
    <section id="industries-list" className="bg-[#f7f9fd] py-16 lg:py-10">
      <div className="mx-auto  px-5 lg:px-10">
        <div className="mb-10">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#2563eb]">
            Industries We Empower
          </span>

          <h2 className="mt-2 text-[28px] font-bold leading-tight text-[#0f172a] md:text-[28px]">
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
                className="group rounded-2xl border border-[#e8edf7] bg-white p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-2xl bg-gradient-to-b from-[#2d7cff] to-[#0047ff] shadow-[0_12px_25px_rgba(37,99,235,.35)]">
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="mt-2 text-[18px] font-bold text-[#0f172a]">
                  {industry.title}
                </h3>

                <p className="mt-3 min-h-[70px] text-[14px] leading-5 text-[#64748b]">
                  {industry.description}
                </p>

                <button className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-[#2563eb] transition-all hover:gap-3">
                  Learn More
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
