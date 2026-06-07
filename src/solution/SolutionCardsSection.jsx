import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Cloud,
  Cpu,
  Headset,
  X,
  ShieldCheck,
  Smartphone,
  Waypoints,
} from "lucide-react";

export default function SolutionCardsSection() {
  const [activeSolution, setActiveSolution] = useState(null);

  const solutions = [
    {
      icon: Waypoints,
      title: "Digital Transformation",
      desc: "Modernize your business with cutting-edge technologies and innovative digital strategies.",
      includes: [
        "Business process automation",
        "Legacy system modernization",
        "Digital strategy and roadmap",
        "Customer experience improvement",
      ],
      benefits: [
        "Faster operations",
        "Better customer engagement",
        "Reduced manual work",
      ],
      bg: "bg-[#dfe8ff]",
      color: "text-[#286bff]",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      desc: "Migrate, manage and optimize your cloud infrastructure for better agility and scalability.",
      includes: [
        "Cloud migration",
        "Cloud hosting setup",
        "Backup and disaster recovery",
        "Performance and cost optimization",
      ],
      benefits: ["High scalability", "Secure infrastructure", "Lower IT overhead"],
      bg: "bg-[#ffe2f3]",
      color: "text-[#e943a8]",
    },
    {
      icon: Bot,
      title: "AI & Automation",
      desc: "Leverage the power of AI and automation to streamline processes and drive efficiency.",
      includes: [
        "AI chatbot solutions",
        "Workflow automation",
        "Predictive analytics",
        "Smart data processing",
      ],
      benefits: ["Improved productivity", "24/7 automation", "Smarter decisions"],
      bg: "bg-[#dffbe8]",
      color: "text-[#20b85a]",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      desc: "Turn data into actionable insights to make smarter decisions and drive business growth.",
      includes: [
        "Business dashboards",
        "Data reporting systems",
        "Customer behavior insights",
        "KPI tracking and analytics",
      ],
      benefits: ["Clear insights", "Data-driven planning", "Real-time reporting"],
      bg: "bg-[#ffe8d9]",
      color: "text-[#ff7d2a]",
    },
    {
      icon: Smartphone,
      title: "Enterprise Solutions",
      desc: "Custom enterprise solutions that integrate systems and improve operational efficiency.",
      includes: [
        "CRM and ERP solutions",
        "Internal portals",
        "Custom business apps",
        "Third-party integrations",
      ],
      benefits: ["Centralized systems", "Better team workflow", "Scalable operations"],
      bg: "bg-[#dcfbf8]",
      color: "text-[#19bdb3]",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      desc: "Protect your business with advanced security solutions and proactive threat detection.",
      includes: [
        "Security audits",
        "Threat monitoring",
        "Data protection",
        "Access control and compliance",
      ],
      benefits: ["Safer data", "Lower security risk", "Stronger compliance"],
      bg: "bg-[#f2dcff]",
      color: "text-[#bb47f0]",
    },
    {
      icon: Cpu,
      title: "IT Consulting",
      desc: "Strategic IT consulting to help you plan, implement and scale with confidence.",
      includes: [
        "Technology planning",
        "Architecture consulting",
        "Vendor and tool selection",
        "Project execution guidance",
      ],
      benefits: ["Clear tech roadmap", "Reduced mistakes", "Better scalability"],
      bg: "bg-[#dfeaff]",
      color: "text-[#2f7dff]",
    },
    {
      icon: Headset,
      title: "Managed IT Services",
      desc: "End-to-end IT management and support to keep your business running smoothly.",
      includes: [
        "Server and system support",
        "Monitoring and maintenance",
        "Helpdesk support",
        "Updates, backups and security checks",
      ],
      benefits: ["Reliable support", "Less downtime", "Smooth daily operations"],
      bg: "bg-[#ffe1ef]",
      color: "text-[#f1519f]",
    },
  ];

  return (
    <section className="bg-[#f8fbff] py-8">
      <div className="mx-auto px-6 lg:px-12">
        <div className="text-center">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#145cff]">
            Our Solutions
          </span>
          <h2 className="mx-auto mt-1 max-w-[720px] text-[24px] font-extrabold leading-tight text-[#071426] lg:text-[31px]">
            End-to-End Solutions for Every Business Need
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-12 rounded-full bg-[#ffc126]" />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <article
                key={solution.title}
                className="min-h-[150px] rounded-lg border border-[#e4edf8] bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,.06)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${solution.bg} shadow-[0_10px_24px_rgba(15,23,42,.08)]`}
                  >
                    <Icon size={26} className={solution.color} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-[#071426]">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-[11px] font-medium leading-5 text-[#536174]">
                      {solution.desc}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveSolution(solution)}
                  className="mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#145cff]"
                >
                  Learn More
                  <ArrowRight size={14} />
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {activeSolution && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#020814]/75 px-4 py-6 backdrop-blur-sm">
          <div className="relative max-h-[88vh] w-full max-w-[760px] overflow-y-auto rounded-xl border border-[#dbe7f5] bg-white p-6 shadow-[0_24px_70px_rgba(2,8,20,.28)]">
            <button
              type="button"
              aria-label="Close solution details"
              onClick={() => setActiveSolution(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f2f6fb] text-[#071426]"
            >
              <X size={18} />
            </button>

            <div className="flex items-start gap-4 pr-10">
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${activeSolution.bg}`}
              >
                {(() => {
                  const ActiveIcon = activeSolution.icon;
                  return (
                    <ActiveIcon size={30} className={activeSolution.color} />
                  );
                })()}
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#145cff]">
                  Solution Details
                </span>
                <h3 className="mt-1 text-[26px] font-extrabold text-[#071426]">
                  {activeSolution.title}
                </h3>
                <p className="mt-3 text-[14px] leading-7 text-[#536174]">
                  {activeSolution.desc}
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-lg bg-[#f8fbff] p-5">
                <h4 className="text-[15px] font-extrabold text-[#071426]">
                  What It Includes
                </h4>
                <ul className="mt-4 space-y-3">
                  {activeSolution.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[13px] font-semibold text-[#415066]"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#145cff]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-[#fffaf0] p-5">
                <h4 className="text-[15px] font-extrabold text-[#071426]">
                  Business Benefits
                </h4>
                <ul className="mt-4 space-y-3">
                  {activeSolution.benefits.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[13px] font-semibold text-[#415066]"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#ffc126]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-11 items-center gap-3 rounded bg-[#ffc126] px-6 text-[13px] font-extrabold text-[#071426]"
              >
                Discuss This Solution
                <ArrowRight size={15} />
              </a>
              <button
                type="button"
                onClick={() => setActiveSolution(null)}
                className="inline-flex h-11 items-center rounded border border-[#d8e5f5] px-6 text-[13px] font-extrabold text-[#071426]"
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
