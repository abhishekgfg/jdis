import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
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
  const [activeTab, setActiveTab] = useState("All");
  const [projectOffset, setProjectOffset] = useState(0);

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
      type: "CRM",
      tech: "React / Node.js",
    },
    {
      img: ecommerceProject,
      title: "Ecommerce Marketplace",
      type: "Ecommerce",
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

  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return projects;
    if (activeTab === "Web Apps") {
      return projects.filter((project) => project.type === "Web Application");
    }
    if (activeTab === "Mobile Apps") return [];
    return projects.filter((project) => project.type.includes(activeTab));
  }, [activeTab]);

  const visibleProjects = useMemo(() => {
    if (filteredProjects.length === 0) return [];
    return filteredProjects.map(
      (_, index) => filteredProjects[(index + projectOffset) % filteredProjects.length]
    );
  }, [filteredProjects, projectOffset]);

  const selectTab = (tab) => {
    setActiveTab(tab);
    setProjectOffset(0);
  };

  const showNextProject = () => {
    setProjectOffset((current) =>
      filteredProjects.length ? (current + 1) % filteredProjects.length : 0
    );
  };

  const showPreviousProject = () => {
    setProjectOffset((current) =>
      filteredProjects.length
        ? (current - 1 + filteredProjects.length) % filteredProjects.length
        : 0
    );
  };

  return (
    <section className="overflow-hidden bg-[#061426] py-10 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        {/* Industries */}
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2b8cff]">
              Industries We Serve
            </span>
            <p className="mt-2 max-w-xl text-[14px] font-medium leading-6 text-white">
              We deliver industry-specific solutions that solve real business challenges.
            </p>
          </div>

          <Link
            to="/industries"
            className="hidden sm:inline-flex h-[46px] px-6 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 text-white text-[14px] font-semibold items-center gap-3 transition-all"
          >
            View All Industries
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-8">
          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex h-[104px] flex-col items-center justify-center rounded-lg border border-[#1c3558] bg-[#071b34] text-center shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0a2344] sm:h-[118px]"
              >
                <Icon size={30} className="mb-3 text-[#4f9bff] sm:mb-4 sm:h-[34px] sm:w-[34px]" />
                <h3 className="text-[14px] font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Featured Projects */}
        <div className="mb-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2b8cff]">
              Our Recent Work
            </span>
            <h2 className="mt-1 text-[24px] font-bold leading-tight sm:text-[26px] lg:text-[28px]">
              Featured Projects
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab}
                onClick={() => selectTab(tab)}
                className={`h-[34px] px-5 rounded-md text-[12px] font-semibold transition-all ${
                  tab === activeTab
                    ? "bg-[#ffb700] text-[#061326]"
                    : "bg-[#0b213d] text-white hover:bg-[#102b50]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <Link
            to="/portfolio"
            className="hidden sm:inline-flex h-[46px] px-6 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 text-white text-[14px] font-semibold items-center gap-3 transition-all"
          >
            View All Projects
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mb-2 flex gap-3 overflow-x-auto pb-4 lg:hidden">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab}
              onClick={() => selectTab(tab)}
              className={`h-[34px] px-5 rounded-md text-[12px] font-semibold whitespace-nowrap ${
                tab === activeTab
                  ? "bg-[#ffb700] text-[#061326]"
                  : "bg-[#0b213d] text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={showPreviousProject}
            className="hidden lg:flex absolute -left-8 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#0b213d] border border-white/15 items-center justify-center text-[#ffb700]"
            aria-label="Show previous project"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {visibleProjects.length > 0 ? visibleProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-lg border border-[#1c3558] bg-[#071b34] overflow-hidden hover:-translate-y-1 hover:bg-[#0a2344] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.20)]"
              >
                <div className="h-[180px] overflow-hidden bg-[#0b213d] sm:h-[135px]">
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

                  <div className="mt-4 flex flex-col gap-2 text-[12px] text-[#9fb0c7] sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <span>{project.type}</span>
                    <span className="flex items-center gap-1 text-[#6aa8ff]">
                      <span className="w-2 h-2 rounded-full bg-[#145cff]" />
                      {project.tech}
                    </span>
                  </div>
                </div>
              </div>
            )) : (
              <div className="rounded-lg border border-[#1c3558] bg-[#071b34] p-6 text-sm font-semibold text-white/80 lg:col-span-5">
                No projects available in this category yet.
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={showNextProject}
            className="hidden lg:flex absolute -right-8 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#0b213d] border border-white/15 items-center justify-center text-[#ffb700]"
            aria-label="Show next project"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
