import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import ecommerceImg from "../components/images/solution-success-ecommerce.png";
import fintechImg from "../components/images/mobile-portfolio-ecommerce.png";
import healthcareImg from "../components/images/solution-success-healthcare.png";
import realEstateImg from "../components/images/solutions-hero-globe.png";

const trustedBrands = [
  { name: "Microsoft", mark: "grid", color: "text-[#5f6678]" },
  { name: "aws", mark: "smile", color: "text-[#232f3e]" },
  { name: "Google", mark: "google", color: "text-[#4285f4]" },
  { name: "PayPal", mark: "p", color: "text-[#003087]" },
  { name: "SIEMENS", mark: "text", color: "text-[#00a19c]" },
  { name: "airtel", mark: "text", color: "text-[#e40000]" },
  { name: "TATA", mark: "text", color: "text-[#1f63ad]" },
  { name: "Infosys", mark: "text", color: "text-[#2672cb]" },
  { name: "DELL", mark: "circle", color: "text-[#0076ce]" },
  { name: "IBM", mark: "stripe", color: "text-[#245da8]" },
];

const caseStudies = [
  {
    image: ecommerceImg,
    tag: "Ecommerce",
    tagColor: "bg-[#1265ff]",
    title: "Scalable E-commerce Platform",
    desc: "Developed a robust e-commerce platform with custom features and seamless integrations.",
    client: "Growth-focused retail brand",
    timeline: "10 weeks",
    overview:
      "The client had strong products, but their buying journey was slow, confusing on mobile, and difficult for the team to manage during sales campaigns.",
    challenge:
      "Customers were dropping off between product detail pages and checkout because pricing, delivery timelines, and stock status were not clear enough. The internal team also needed better control over banners, offers, featured categories, and inventory-led promotions.",
    approach:
      "We mapped the full customer journey, reviewed analytics funnels, studied abandoned cart behavior, and redesigned the experience around speed, trust, and clear purchase decisions.",
    solution:
      "The new platform included a faster product catalog, optimized mobile checkout, smart cart recovery, inventory-aware merchandising, secure payment integration, and a clean admin dashboard for daily operations.",
    highlights: [
      "Mobile-first product pages with clear pricing and delivery information.",
      "Campaign-ready admin tools for offers, banners, and featured collections.",
      "Checkout flow reduced to fewer steps with stronger trust signals.",
    ],
    stack: ["React", "Node.js", "Payment Gateway", "Analytics", "Admin Panel"],
    stats: [
      { value: "120%", label: "Sales Increase" },
      { value: "2.5X", label: "User Engagement" },
      { value: "99.9%", label: "Uptime" },
    ],
  },
  {
    image: fintechImg,
    tag: "Fintech",
    tagColor: "bg-[#24a94a]",
    title: "Mobile Banking Application",
    desc: "Secure and user-friendly mobile banking app with advanced features.",
    client: "Digital finance startup",
    timeline: "14 weeks",
    overview:
      "The product needed to feel simple for users while staying strong enough for secure financial workflows, transaction visibility, and compliance-driven operations.",
    challenge:
      "Users were uncertain during onboarding and transaction processing. The team also needed better monitoring for failed payments, KYC status, and support-heavy edge cases.",
    approach:
      "We reviewed onboarding sessions, support tickets, payment drop-off points, and competitor banking flows to understand where confidence was breaking down.",
    solution:
      "We delivered a secure mobile banking flow with guided KYC, real-time transaction status, wallet summaries, alerts, role-based admin review, and clean reporting for operations teams.",
    highlights: [
      "Clear onboarding that explains every sensitive step in plain language.",
      "Real-time transaction tracking to reduce support dependency.",
      "Operational dashboard for KYC, failed payments, and user activity.",
    ],
    stack: ["React Native", "API Integration", "KYC", "Encryption", "Dashboard"],
    stats: [
      { value: "150K+", label: "Downloads" },
      { value: "98%", label: "User Satisfaction" },
      { value: "60%", label: "Cost Reduction" },
    ],
  },
  {
    image: healthcareImg,
    tag: "Healthcare",
    tagColor: "bg-[#724cff]",
    title: "Health Management System",
    desc: "A comprehensive system to manage patient records, appointments, and analytics.",
    client: "Multi-specialty healthcare provider",
    timeline: "12 weeks",
    overview:
      "The clinic needed a digital system that could reduce manual coordination, improve patient follow-ups, and give doctors cleaner context before appointments.",
    challenge:
      "Staff were managing appointments, records, reminders, and follow-ups through scattered tools. Patients missed visits because reminders were late or unclear.",
    approach:
      "We interviewed clinic staff, studied appointment workflows, reviewed patient communication patterns, and identified the moments where patients needed timely support.",
    solution:
      "We built a healthcare management system with appointment booking, secure records, patient reminders, doctor notes, staff dashboards, and analytics for care operations.",
    highlights: [
      "Patient-friendly appointment and reminder experience.",
      "Secure records with structured access for doctors and staff.",
      "Operational analytics for missed visits, follow-ups, and patient activity.",
    ],
    stack: ["React", "Secure APIs", "Patient Portal", "Analytics", "Cloud"],
    stats: [
      { value: "80%", label: "Efficiency" },
      { value: "45%", label: "Time Saving" },
      { value: "30%", label: "More Patients" },
    ],
  },
  {
    image: realEstateImg,
    tag: "Real Estate",
    tagColor: "bg-[#ff7a1a]",
    title: "Real Estate Portal",
    desc: "Property listing portal with advanced search, virtual tours and user dashboard.",
    client: "Real estate agency network",
    timeline: "9 weeks",
    overview:
      "The business wanted a modern property portal that helped buyers shortlist faster and helped agents manage leads with better context.",
    challenge:
      "Visitors were spending time browsing but not converting into qualified leads. Search filters were limited, listing pages lacked trust, and agents had no unified lead dashboard.",
    approach:
      "We studied search behavior, listing comparison patterns, buyer questions, and agent follow-up workflows to design a clearer property discovery journey.",
    solution:
      "The portal included advanced search, property comparison, inquiry capture, virtual-tour ready listing pages, agent dashboard, and lead prioritization tools.",
    highlights: [
      "Advanced filters for location, budget, property type, and features.",
      "High-conversion listing pages with inquiry and callback actions.",
      "Lead dashboard that helps agents prioritize serious buyers.",
    ],
    stack: ["React", "Maps", "CRM", "Search Filters", "Lead Dashboard"],
    stats: [
      { value: "200%", label: "Lead Generation" },
      { value: "3X", label: "Page Views" },
      { value: "75%", label: "Faster Search" },
    ],
  },
];

function BrandLogo({ brand }) {
  if (brand.mark === "grid") {
    return (
      <div className="flex items-center gap-2">
        <span className="grid h-5 w-5 grid-cols-2 gap-[2px]">
          <span className="bg-[#f25022]" />
          <span className="bg-[#7fba00]" />
          <span className="bg-[#00a4ef]" />
          <span className="bg-[#ffb900]" />
        </span>
        <span>{brand.name}</span>
      </div>
    );
  }

  if (brand.mark === "google") {
    return (
      <span className="font-semibold">
        <span className="text-[#4285f4]">G</span>
        <span className="text-[#ea4335]">o</span>
        <span className="text-[#fbbc05]">o</span>
        <span className="text-[#4285f4]">g</span>
        <span className="text-[#34a853]">l</span>
        <span className="text-[#ea4335]">e</span>
      </span>
    );
  }

  if (brand.mark === "circle") {
    return (
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0076ce] text-[12px] font-extrabold">
        {brand.name}
      </span>
    );
  }

  return (
    <span
      className={`font-extrabold ${brand.mark === "stripe" ? "tracking-[.16em]" : ""}`}
    >
      {brand.name}
    </span>
  );
}

export default function PortfolioCaseStudiesSection() {
  const [activeStudy, setActiveStudy] = useState(null);

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
    <section className="bg-[#f7faff] pb-12">
      <div className="border-b border-[#dce8f8] bg-white shadow-[0_12px_30px_rgba(15,23,42,.04)]">
        <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-16">
          <p className="text-center text-[15px] font-extrabold text-[#151d35] sm:text-[16px]">
            Trusted by <span className="text-[#1265ff]">200+</span> Businesses
            Worldwide
          </p>

          <div className="mt-6 grid grid-cols-2 items-center gap-x-4 gap-y-5 text-[16px] font-bold sm:grid-cols-3 sm:gap-x-7 sm:text-[20px] md:grid-cols-5 lg:grid-cols-10">
            {trustedBrands.map((brand) => (
              <div
                key={brand.name}
                className={`flex min-h-10 min-w-0 items-center justify-center whitespace-nowrap ${brand.color}`}
              >
                <BrandLogo brand={brand} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 pt-8 sm:px-6 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-wide text-[#1265ff]">
              Featured Case Studies
            </span>
            <h2 className="mt-2 text-[28px] font-extrabold leading-tight text-[#151d35]">
              We Deliver <span className="text-[#1265ff]">Results</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setActiveStudy(caseStudies[0])}
            className="hidden items-center gap-3 text-[12px] font-extrabold text-[#1265ff] sm:inline-flex"
          >
            View All Case Studies
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="overflow-hidden rounded-lg border border-[#dce8f8] bg-white shadow-[0_12px_30px_rgba(15,23,42,.08)]"
            >
              <div className="relative h-[190px] overflow-hidden sm:h-[205px]">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/40 to-transparent" />
                <span
                  className={`absolute bottom-4 left-5 rounded-full ${study.tagColor} px-4 py-2 text-[11px] font-extrabold text-white shadow-lg`}
                >
                  {study.tag}
                </span>
              </div>

              <div className="px-5 pb-6 pt-3 sm:px-6">
                <h3 className="text-[15px] font-extrabold leading-6 text-[#151d35]">
                  {study.title}
                </h3>
                <p className="mt-1 text-[11px] font-medium leading-6 text-[#536174] sm:min-h-[48px]">
                  {study.desc}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
                  {study.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-[18px] font-extrabold leading-none text-[#151d35]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-[10px] font-bold leading-4 text-[#66758b]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStudy(study)}
                  className="mt-2 inline-flex items-center gap-3 text-[12px] font-extrabold text-[#1265ff]"
                >
                  View Case Study
                  <ArrowRight size={14} />
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
          aria-labelledby="portfolio-case-title"
          onMouseDown={() => setActiveStudy(null)}
        >
          <div
            className="max-h-none w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-[0_35px_100px_rgba(2,8,23,.38)] sm:max-h-[92vh] sm:overflow-y-auto"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[230px] overflow-hidden bg-[#061326] sm:min-h-[260px]">
              <img
                src={activeStudy.image}
                alt={activeStudy.title}
                className="absolute inset-0 h-full w-full object-cover opacity-65"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061326] via-[#061326]/82 to-[#061326]/34" />
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
                  className={`inline-flex rounded-full ${activeStudy.tagColor} px-4 py-2 text-[11px] font-extrabold uppercase tracking-wide`}
                >
                  {activeStudy.tag}
                </span>
                <h3
                  id="portfolio-case-title"
                  className="mt-5 pr-8 text-[24px] font-extrabold leading-tight sm:pr-0 sm:text-[42px]"
                >
                  {activeStudy.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[14px] font-medium leading-7 text-[#dce7f5]">
                  {activeStudy.overview}
                </p>

                <div className="mt-6 grid max-w-xl grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-4">
                  <div className="rounded-lg border border-white/15 bg-white/10 p-3">
                    <p className="text-[10px] font-extrabold uppercase text-[#ffc126]">
                      Client
                    </p>
                    <p className="mt-1 text-[12px] font-bold">
                      {activeStudy.client}
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/15 bg-white/10 p-3">
                    <p className="text-[10px] font-extrabold uppercase text-[#ffc126]">
                      Timeline
                    </p>
                    <p className="mt-1 text-[12px] font-bold">
                      {activeStudy.timeline}
                    </p>
                  </div>
                  {activeStudy.stats.slice(0, 2).map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-white/15 bg-white/10 p-3"
                    >
                      <p className="text-[18px] font-extrabold text-[#ffc126]">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[10px] font-bold text-[#dce7f5]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 p-5 text-[#152033] sm:p-8 lg:grid-cols-[1.08fr_.92fr]">
              <div className="space-y-5">
                {[
                  ["The Challenge", activeStudy.challenge],
                  ["Research & Strategy", activeStudy.approach],
                  ["What We Built", activeStudy.solution],
                ].map(([heading, text]) => (
                  <div key={heading}>
                    <h4 className="text-[18px] font-extrabold">{heading}</h4>
                    <p className="mt-2 text-[13px] font-medium leading-7 text-[#536174]">
                      {text}
                    </p>
                  </div>
                ))}

                <div>
                  <h4 className="text-[18px] font-extrabold">
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

              <aside className="rounded-lg bg-[#061326] p-5 text-white">
                <h4 className="text-[18px] font-extrabold">
                  Project Highlights
                </h4>
                <div className="mt-4 space-y-4">
                  {activeStudy.highlights.map((item) => (
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

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {activeStudy.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-white/12 bg-white/8 p-3"
                    >
                      <p className="text-[22px] font-extrabold text-[#ffc126]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-[10px] font-bold leading-4 text-[#c9d7ea]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-3 rounded bg-[#ffc126] px-5 text-[13px] font-extrabold text-[#061326]"
                >
                  Discuss Similar Project
                  <ArrowRight size={15} />
                </a>
              </aside>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
