import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import healthcareImage from "../components/images/solution-success-healthcare.png";
import ecommerceImage from "../components/images/solution-success-ecommerce.png";
import realEstateImage from "./image/industry-real-estate.png";

const caseStudies = [
  {
    tag: "Healthcare",
    image: healthcareImage,
    title: "Healthcare Management System",
    description:
      "A complete hospital management solution with patient portal, appointment booking and EMR.",
    client: "A growing multi-specialty clinic",
    timeline: "12 weeks",
    result: "The clinic reduced front-desk coordination work, improved appointment visibility, and gave doctors faster access to patient history before every consultation.",
    story:
      "The clinic team was doing a lot of good work, but their daily operations depended on phone calls, paper notes, shared spreadsheets, and manual follow-ups. Patients were calling repeatedly for appointment status, staff members were spending hours finding records, and doctors often received incomplete context before a visit.",
    challenge:
      "The biggest challenge was not just digitizing records. The system had to feel simple for reception staff, reliable for doctors, and reassuring for patients. We also had to keep privacy, role-based access, and fast search at the center of the experience.",
    solution:
      "We built a hospital management platform with appointment scheduling, patient profiles, EMR access, doctor notes, billing support, reminders, and a secure patient portal. The dashboard was designed around real clinic behavior, so staff could see today's appointments, pending follow-ups, and patient requests without jumping between tools.",
    highlights: [
      "Patient records became searchable and structured for doctors and staff.",
      "Automated reminders reduced missed appointments and repeated phone calls.",
      "Reception, doctor and admin roles received separate dashboards.",
    ],
    stats: [
      { value: "45%", label: "Less admin time" },
      { value: "30%", label: "More follow-ups" },
      { value: "12 wk", label: "Delivery time" },
    ],
  },
  {
    tag: "Real Estate",
    image: realEstateImage,
    title: "Real Estate CRM",
    description:
      "CRM solution for real estate businesses to manage leads, properties and customers.",
    client: "Regional property sales agency",
    timeline: "9 weeks",
    result: "The sales team got one clear place to manage leads, track property interest, schedule follow-ups, and understand which buyers were ready for site visits.",
    story:
      "The agency had strong property inventory and an active sales team, but leads were spread across calls, WhatsApp, website forms, and walk-ins. Good prospects were slipping through because follow-ups depended on memory and individual spreadsheets.",
    challenge:
      "The business needed a CRM that matched how real estate teams actually sell: quick inquiry capture, property matching, site-visit tracking, and clear handover between team members. It also needed to work smoothly for managers who wanted daily visibility without asking every agent for updates.",
    solution:
      "We designed a real estate CRM with lead capture, property tagging, follow-up reminders, customer notes, site-visit scheduling, and a manager dashboard. Agents can now see each buyer's budget, preferred location, shortlisted properties, and next action in one place.",
    highlights: [
      "Leads from multiple sources are organized into one pipeline.",
      "Agents can match buyers with properties faster using clear filters.",
      "Managers get real-time visibility into visits, calls and closures.",
    ],
    stats: [
      { value: "2.1x", label: "Lead response" },
      { value: "38%", label: "Faster follow-up" },
      { value: "9 wk", label: "Delivery time" },
    ],
  },
  {
    tag: "E-Commerce",
    image: ecommerceImage,
    title: "Multi Vendor Marketplace",
    description:
      "A scalable multi-vendor e-commerce platform with advanced admin dashboard.",
    client: "Online marketplace startup",
    timeline: "14 weeks",
    result: "The client launched with vendor onboarding, product approvals, order management, payment tracking, and a marketplace dashboard ready for growth.",
    story:
      "The founders wanted to bring multiple sellers onto one platform, but they did not want a generic store. They needed a marketplace where vendors could manage products, customers could shop with confidence, and the internal team could control quality before anything went live.",
    challenge:
      "A marketplace has more moving parts than a normal e-commerce site. Vendor onboarding, product approval, inventory updates, commission tracking, refunds, delivery status, and customer support all needed to work together without creating operational confusion.",
    solution:
      "We built a multi-vendor marketplace with vendor panels, product approval workflow, category management, secure checkout, order tracking, commission reports, and an admin dashboard. The UI was kept clean so buyers could move from discovery to checkout with fewer doubts.",
    highlights: [
      "Vendor onboarding and product approval were built into the admin flow.",
      "Customers received a fast shopping journey with secure payment support.",
      "The admin dashboard gives clear visibility into orders, revenue and vendors.",
    ],
    stats: [
      { value: "120+", label: "Vendors ready" },
      { value: "99.9%", label: "Uptime target" },
      { value: "14 wk", label: "Delivery time" },
    ],
  },
];

export default function IndustrySuccessStoriesSection() {
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
    <section className="bg-[#f8fbff] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-8 lg:px-10">
        <div className="flex items-start justify-between gap-5">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#1767ff]">
              Case Studies
            </span>
            <h2 className="mt-1 text-[24px] font-extrabold leading-tight text-[#0a1830] sm:text-[34px] lg:text-[36px]">
              Our Success Stories
            </h2>
            <div className="mt-2 h-[3px] w-[35px] rounded-full bg-[#f6b51f]" />
          </div>

          <a
            href="/portfolio"
            className="hidden items-center gap-2 pt-5 text-[12px] font-extrabold text-[#1767ff] sm:inline-flex"
          >
            View All Projects
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-7 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="overflow-hidden rounded-[8px] border border-[#dce7f7] bg-white shadow-[0_12px_32px_rgba(15,55,105,.09)]"
            >
              <div className="relative h-[190px] overflow-hidden md:h-[160px]">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/35 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-[#1767ff] px-4 py-2 text-[11px] font-extrabold text-white shadow-lg">
                  {study.tag}
                </span>
              </div>

              <div className="px-5 py-5">
                <h3 className="text-[16px] font-extrabold text-[#0a1830]">
                  {study.title}
                </h3>
                <p className="mt-2 text-[12px] font-semibold leading-6 text-[#475569] md:min-h-[48px]">
                  {study.description}
                </p>

                <button
                  type="button"
                  onClick={() => setActiveStudy(study)}
                  className="mt-3 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#1767ff] transition hover:gap-3"
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
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#020817]/80 px-4 py-5 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="industry-case-title"
          onMouseDown={() => setActiveStudy(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[10px] bg-white shadow-[0_35px_100px_rgba(2,8,23,.4)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[230px] overflow-hidden bg-[#061326] sm:min-h-[260px]">
              <img
                src={activeStudy.image}
                alt={activeStudy.title}
                className="absolute inset-0 h-full w-full object-cover opacity-65"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061326] via-[#061326]/88 to-[#061326]/42" />

              <button
                type="button"
                onClick={() => setActiveStudy(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded bg-white text-[#061326] shadow-lg"
                aria-label="Close case study"
              >
                <X size={18} />
              </button>

              <div className="relative z-10 max-w-3xl px-5 py-8 text-white sm:px-8">
                <span className="inline-flex rounded-full bg-[#1767ff] px-4 py-2 text-[11px] font-extrabold uppercase tracking-wide">
                  {activeStudy.tag}
                </span>
                <h3
                  id="industry-case-title"
                  className="mt-5 text-[24px] font-extrabold leading-tight sm:text-[42px]"
                >
                  {activeStudy.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[14px] font-medium leading-7 text-[#dce7f5]">
                  {activeStudy.result}
                </p>
              </div>
            </div>

            <div className="grid gap-7 p-5 text-[#152033] sm:p-8 lg:grid-cols-[1.08fr_.92fr]">
              <div className="space-y-5">
                {[
                  ["Project Story", activeStudy.story],
                  ["The Challenge", activeStudy.challenge],
                  ["What We Built", activeStudy.solution],
                ].map(([heading, text]) => (
                  <div key={heading}>
                    <h4 className="text-[18px] font-extrabold">{heading}</h4>
                    <p className="mt-2 text-[13px] font-medium leading-7 text-[#536174]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <aside className="rounded-[8px] bg-[#061326] p-5 text-white">
                <h4 className="text-[18px] font-extrabold">Impact Summary</h4>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {activeStudy.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[8px] border border-white/12 bg-white/8 p-3"
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

                <div className="mt-6 space-y-4">
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

                <div className="mt-6 rounded-[8px] border border-white/12 bg-white/8 p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-wide text-[#ffc126]">
                    Client
                  </p>
                  <p className="mt-1 text-[13px] font-bold">
                    {activeStudy.client}
                  </p>
                  <p className="mt-4 text-[10px] font-extrabold uppercase tracking-wide text-[#ffc126]">
                    Timeline
                  </p>
                  <p className="mt-1 text-[13px] font-bold">
                    {activeStudy.timeline}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
