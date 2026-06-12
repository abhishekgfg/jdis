import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";
import ecommerceImg from "../components/images/solution-success-ecommerce.png";
import fintechImg from "../components/images/solution-success-fintech.png";
import healthcareImg from "../components/images/solution-success-healthcare.png";
import cloudImg from "../technology/image/technology-hero-bg.png";

const filters = [
  "All Case Studies",
  "Web Development",
  "Mobile Apps",
  "E-commerce",
  // "Enterprise Solutions",
  "AI & Automation",
  "Cloud Solutions",
];

const industries = [
  "All Industries",
  "Retail",
  "Finance",
  "Healthcare",
  "Manufacturing",
];

const caseStudies = [
  {
    image: ecommerceImg,
    badge: "E-commerce",
    badgeClass: "bg-[#56c46f]",
    title: "Scalable E-commerce Platform for Retail Giant",
    client: "ShopMart",
    industry: "Retail",
    desc: "We built a high-performance e-commerce platform with advanced search, personalized recommendations, and seamless checkout.",
    overview:
      "ShopMart needed a scalable online store that could handle campaign traffic, simplify product discovery, and keep checkout fast on mobile and desktop.",
    challenge:
      "The existing store was slow during peak sales, product filtering was limited, and the team had to manage promotions manually across multiple tools.",
    solution:
      "We rebuilt the storefront with a fast catalog, smart filters, recommendation blocks, secure checkout, inventory-aware promotions, and a clean admin workflow.",
    result:
      "The new platform improved conversion, reduced abandoned carts, and gave the retail team better control over campaigns and customer journeys.",
    stack: ["React", "Node.js", "Payment Gateway", "Analytics", "Cloud"],
    stats: [
      ["150%", "Sales Increase"],
      ["2.8M+", "Users"],
      ["99.9%", "Uptime"],
    ],
  },
  {
    image: fintechImg,
    badge: "Mobile App",
    badgeClass: "bg-[#6d4cff]",
    title: "Secure Mobile Banking App for Leading Bank",
    client: "FinTrust Bank",
    industry: "Finance",
    desc: "A secure and intuitive mobile banking solution with advanced features like fund transfer, bill payments, and real-time analytics.",
    overview:
      "FinTrust Bank wanted a mobile banking experience that felt simple for users while meeting strong security, reporting, and operational needs.",
    challenge:
      "Customers were dropping out during onboarding, transaction status was unclear, and support teams were receiving repeated payment-related queries.",
    solution:
      "We designed a secure mobile flow with guided onboarding, real-time transaction updates, account insights, bill payments, and admin monitoring.",
    result:
      "The app reduced support dependency, improved transaction confidence, and helped the bank deliver a smoother digital banking experience.",
    stack: ["React Native", "Secure APIs", "KYC", "Encryption", "Dashboard"],
    stats: [
      ["500K+", "Downloads"],
      ["98%", "User Satisfaction"],
      ["60%", "Faster Transactions"],
    ],
  },
  {
    image: healthcareImg,
    badge: "Healthcare",
    badgeClass: "bg-[#ef4d93]",
    title: "Patient Management System for Healthcare Provider",
    client: "MedLife Plus",
    industry: "Healthcare",
    desc: "We developed a comprehensive system to manage patient records, appointments, and billing with complete data security.",
    overview:
      "MedLife Plus needed one reliable system for appointments, patient records, billing, reminders, and staff coordination across departments.",
    challenge:
      "Patient data was scattered, appointment follow-ups were manual, and staff spent too much time switching between spreadsheets and messages.",
    solution:
      "We built a secure healthcare platform with patient profiles, appointment scheduling, doctor notes, billing, reminders, and role-based access.",
    result:
      "The system reduced manual coordination, improved appointment visibility, and helped staff deliver a more organized patient experience.",
    stack: ["React", "Secure APIs", "Patient Portal", "Cloud", "Analytics"],
    stats: [
      ["80%", "Time Saved"],
      ["45%", "Cost Reduction"],
      ["100%", "Data Security"],
    ],
  },
  {
    image: cloudImg,
    badge: "Cloud Solution",
    badgeClass: "bg-[#168dff]",
    title: "Cloud Migration for Global Manufacturing Company",
    client: "GlobalTech",
    industry: "Manufacturing",
    desc: "Migrated legacy infrastructure to AWS cloud, improving scalability, performance, and reducing operational costs.",
    overview:
      "GlobalTech wanted to modernize legacy infrastructure without interrupting daily manufacturing operations across multiple locations.",
    challenge:
      "The legacy setup was expensive to maintain, difficult to scale, and vulnerable to downtime during reporting and high-usage windows.",
    solution:
      "We planned a phased cloud migration with secure environments, automated backups, monitoring, deployment pipelines, and performance tuning.",
    result:
      "The migration improved reliability, reduced infrastructure cost, and gave the company a stronger foundation for analytics and automation.",
    stack: ["AWS", "Docker", "CI/CD", "Monitoring", "Security"],
    stats: [
      ["70%", "Cost Savings"],
      ["99.95%", "Availability"],
      ["3X", "Performance"],
    ],
  },
];

export default function CaseStudySuccessStoriesSection() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const [activeStudy, setActiveStudy] = useState(null);

  const visibleStudies = caseStudies.filter((study) => {
    const categoryMatch =
      activeFilter === "All Case Studies" ||
      activeFilter === study.badge ||
      (activeFilter === "Web Development" && study.badge === "E-commerce") ||
      (activeFilter === "Cloud Solutions" && study.badge === "Cloud Solution");
    const industryMatch =
      activeIndustry === "All Industries" || activeIndustry === study.industry;

    return categoryMatch && industryMatch;
  });

  useEffect(() => {
    if (!activeStudy) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveStudy(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeStudy]);

  return (
    <section id="case-study-list" className="bg-[#f7faff] py-10 text-[#151d35] sm:py-12">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-wide text-[#1767ff]">
              Our Case Studies
            </span>
            <h2 className="mt-2 text-[26px] font-extrabold leading-tight sm:text-[36px]">
              Explore Our Success Stories
            </h2>
          </div>
          <p className="max-w-[680px] text-[14px] font-semibold leading-7 text-[#3f4b63] lg:pt-3">
            From startups to enterprises, we've partnered with businesses across
            industries to build digital solutions that drive growth and
            efficiency.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:mt-9 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 lg:flex-nowrap">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`h-11 shrink-0 whitespace-nowrap rounded-full border px-5 text-[12px] font-extrabold shadow-[0_8px_20px_rgba(15,55,105,.07)] transition xl:px-6 ${
                    isActive
                      ? "border-[#1767ff] bg-[#1767ff] text-white"
                      : "border-[#dce7f7] bg-white text-[#151d35] hover:border-[#1767ff]/55"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <label className="relative block w-full shrink-0 lg:w-[180px]">
            <select
              value={activeIndustry}
              onChange={(event) => setActiveIndustry(event.target.value)}
              className="h-11 w-full appearance-none rounded-[6px] border border-[#dce7f7] bg-white px-4 pr-10 text-[12px] font-extrabold text-[#151d35] shadow-[0_8px_20px_rgba(15,55,105,.07)] outline-none"
            >
              {industries.map((industry) => (
                <option key={industry}>{industry}</option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#151d35]"
            />
          </label>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visibleStudies.map((study) => (
            <article
              key={study.title}
              className="overflow-hidden rounded-[10px] border border-[#dce7f7] bg-white shadow-[0_14px_34px_rgba(15,55,105,.08)]"
            >
              <div className="relative h-[205px] overflow-hidden bg-[#061326] sm:h-[218px]">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/28 to-transparent" />
                <span
                  className={`absolute bottom-4 left-5 rounded-full ${study.badgeClass} px-4 py-2 text-[11px] font-extrabold text-white shadow-lg`}
                >
                  {study.badge}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-[18px] font-extrabold leading-7 text-[#151d35] sm:min-h-[58px] sm:text-[19px]">
                  {study.title}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-[12px] font-bold text-[#3f4b63]">
                  <span>
                    <span className="font-extrabold text-[#151d35]">
                      Client:
                    </span>{" "}
                    {study.client}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[#6d7890]" />
                  <span>{study.industry}</span>
                </div>
                <p className="mt-5 text-[13px] font-medium leading-7 text-[#536174] sm:min-h-[84px]">
                  {study.desc}
                </p>

                <div className="mt-6 grid grid-cols-3 divide-x divide-[#e8eef7]">
                  {study.stats.map(([value, label]) => (
                    <div key={label} className="min-w-0 px-2 first:pl-0 last:pr-0 sm:px-3">
                      <p className="break-words text-[18px] font-extrabold leading-none text-[#151d35] sm:text-[22px]">
                        {value}
                      </p>
                      <p className="mt-2 text-[10px] font-bold leading-4 text-[#5d6a80]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStudy(study)}
                  className="mt-6 inline-flex items-center gap-3 text-[12px] font-extrabold text-[#1767ff]"
                >
                  View Case Study
                  <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeStudy && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#020817]/80 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-4 sm:py-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
          onMouseDown={() => setActiveStudy(null)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-[12px] bg-white shadow-[0_35px_100px_rgba(2,8,23,.38)] sm:max-h-[92vh] sm:overflow-y-auto"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[245px] overflow-hidden bg-[#061326] sm:min-h-[290px]">
              <img
                src={activeStudy.image}
                alt={activeStudy.title}
                className="absolute inset-0 h-full w-full object-cover opacity-68"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061326] via-[#061326]/82 to-[#061326]/32" />
              <button
                type="button"
                onClick={() => setActiveStudy(null)}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded bg-white text-[#071426] shadow-lg sm:right-5 sm:top-5"
                aria-label="Close case study"
              >
                <X size={18} />
              </button>

              <div className="relative z-10 max-w-3xl px-5 py-7 text-white sm:px-8 sm:py-8">
                <span
                  className={`inline-flex rounded-full ${activeStudy.badgeClass} px-4 py-2 text-[11px] font-extrabold uppercase tracking-wide`}
                >
                  {activeStudy.badge}
                </span>
                <h3
                  id="case-study-modal-title"
                  className="mt-5 pr-8 text-[24px] font-extrabold leading-tight sm:pr-0 sm:text-[42px]"
                >
                  {activeStudy.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[14px] font-medium leading-7 text-[#dce7f5]">
                  {activeStudy.overview}
                </p>
              </div>
            </div>

            <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.08fr_.92fr]">
              <div className="space-y-5">
                {[
                  ["The Challenge", activeStudy.challenge],
                  ["What We Built", activeStudy.solution],
                  ["The Result", activeStudy.result],
                ].map(([heading, text]) => (
                  <div key={heading}>
                    <h4 className="text-[18px] font-extrabold text-[#151d35]">
                      {heading}
                    </h4>
                    <p className="mt-2 text-[13px] font-medium leading-7 text-[#536174]">
                      {text}
                    </p>
                  </div>
                ))}

                <div>
                  <h4 className="text-[18px] font-extrabold text-[#151d35]">
                    Technology Stack
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeStudy.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#dce8f8] bg-[#f7faff] px-4 py-2 text-[11px] font-extrabold text-[#1265ff]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="rounded-[10px] bg-[#061326] p-5 text-white">
                <h4 className="text-[18px] font-extrabold">
                  Measurable Impact
                </h4>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {activeStudy.stats.map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-[8px] border border-white/12 bg-white/8 p-3"
                    >
                      <p className="text-[22px] font-extrabold text-[#ffc126]">
                        {value}
                      </p>
                      <p className="mt-2 text-[10px] font-bold leading-4 text-[#c9d7ea]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    `Built for ${activeStudy.client} in the ${activeStudy.industry} industry.`,
                    "Designed with performance, security and long-term scalability in mind.",
                    "Created to support daily business operations and measurable growth.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-[#ffc126]"
                      />
                      <p className="text-[13px] font-medium leading-6 text-[#d7e2f0]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-3 rounded bg-[#ffc126] px-5 text-[13px] font-extrabold text-[#061326]"
                >
                  Discuss Similar Project
                  <ArrowRight size={15} />
                </Link>
              </aside>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
