import {
  ArrowRight,
  HeartPulse,
  GraduationCap,
  Landmark,
  Building2,
  ShoppingCart,
  Factory,
  Truck,
  Rocket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import healthcareProject from "../components/images/solution-success-healthcare.png";
import ecommerceProject from "../components/images/solution-success-ecommerce.png";
import educationProject from "../components/images/corporate-business-website.png";
import realEstateProject from "../industries/image/industry-real-estate.png";
import aiProject from "../technology/image/technology-project-ai.png";

export default function IndustriesPortfolioSection() {
  const industries = [
    { icon: HeartPulse, title: "Healthcare" },
    { icon: GraduationCap, title: "Education" },
    { icon: Landmark, title: "Finance" },
    { icon: Building2, title: "Real Estate" },
    { icon: ShoppingCart, title: "Ecommerce" },
    { icon: Factory, title: "Manufacturing" },
    { icon: Truck, title: "Logistics" },
    { icon: Rocket, title: "Startups" },
  ];

  const tabs = ["All", "Web Apps", "Mobile Apps", "CRM", "ERP", "AI", "Ecommerce"];

  const projects = [
    {
      img: healthcareProject,
      title: "Healthcare CRM Platform",
      type: "Web Application",
      tech: "React / Node.js",
    },
    {
      img: ecommerceProject,
      title: "Ecommerce Marketplace",
      type: "Web Application",
      tech: "Next.js / Laravel",
    },
    {
      img: educationProject,
      title: "Education LMS Portal",
      type: "Web Application",
      tech: "React / Node.js",
    },
    {
      img: realEstateProject,
      title: "Real Estate Platform",
      type: "Web Application",
      tech: "Next.js / MongoDB",
    },
    {
      img: aiProject,
      title: "AI Chatbot Assistant",
      type: "AI Solution",
      tech: "Python / OpenAI",
    },
  ];

  return (
    <section className="bg-[#061426] text-white py-10 overflow-hidden">
      <div className="mx-auto px-6 lg:px-12">
        {/* Industries */}
        <div className="flex items-start justify-between gap-6 mb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2b8cff]">
              Industries We Serve
            </span>
            <p className="mt-2 text-[14px] text-white font-medium">
              We deliver industry-specific solutions that solve real business challenges.
            </p>
          </div>

          <button className="hidden sm:inline-flex h-[46px] px-6 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 text-white text-[14px] font-semibold items-center gap-3 transition-all">
            View All Industries
            <ArrowRight size={17} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-10">
          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="h-[118px] rounded-lg border border-[#1c3558] bg-[#071b34] hover:bg-[#0a2344] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
              >
                <Icon size={34} className="text-[#4f9bff] mb-4" />
                <h3 className="text-[14px] font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Featured Projects */}
        <div className="flex items-start justify-between gap-6 mb-5">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2b8cff]">
              Our Recent Work
            </span>
            <h2 className="mt-1 text-[26px] lg:text-[28px] leading-tight font-bold">
              Featured Projects
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`h-[34px] px-5 rounded-md text-[12px] font-semibold transition-all ${
                  tab === "All"
                    ? "bg-[#ffb700] text-[#061326]"
                    : "bg-[#0b213d] text-white hover:bg-[#102b50]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button className="hidden sm:inline-flex h-[46px] px-6 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 text-white text-[14px] font-semibold items-center gap-3 transition-all">
            View All Projects
            <ArrowRight size={17} />
          </button>
        </div>

        <div className="lg:hidden flex gap-3 overflow-x-auto pb-4 mb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`h-[34px] px-5 rounded-md text-[12px] font-semibold whitespace-nowrap ${
                tab === "All"
                  ? "bg-[#ffb700] text-[#061326]"
                  : "bg-[#0b213d] text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative">
          <button className="hidden lg:flex absolute -left-8 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#0b213d] border border-white/15 items-center justify-center text-[#ffb700]">
            <ChevronLeft size={18} />
          </button>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-lg border border-[#1c3558] bg-[#071b34] overflow-hidden hover:-translate-y-1 hover:bg-[#0a2344] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.20)]"
              >
                <div className="h-[135px] bg-[#0b213d] overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-[15px] font-bold text-white">
                    {project.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between gap-3 text-[12px] text-[#9fb0c7]">
                    <span>{project.type}</span>
                    <span className="flex items-center gap-1 text-[#6aa8ff]">
                      <span className="w-2 h-2 rounded-full bg-[#145cff]" />
                      {project.tech}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="hidden lg:flex absolute -right-8 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#0b213d] border border-white/15 items-center justify-center text-[#ffb700]">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
