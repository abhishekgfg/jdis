import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  PhoneCall,
  Plus,
  X,
} from "lucide-react";
import technologyBg from "./image/technology-hero-bg.png";
import aiProject from "./image/technology-project-ai.png";
import crmProject from "./image/technology-project-crm.png";
import ecommerceProject from "./image/technology-project-ecommerce.png";

const projects = [
  {
    badge: "Enterprise",
    image: crmProject,
    title: "Enterprise CRM Solution",
    desc: "A comprehensive CRM platform built with Next.js, Node.js and MongoDB.",
    tags: ["Next.js", "Node.js", "MongoDB", "AWS"],
    client: "B2B service company",
    timeline: "10 weeks",
    overview:
      "A custom CRM system designed for a growing service business that needed better lead tracking, faster follow-ups and clear visibility across sales, support and management teams.",
    challenge:
      "The team was handling leads in spreadsheets, call logs and separate WhatsApp conversations. Follow-ups were missed, managers had no reliable sales pipeline view, and customer history was difficult to find during support calls.",
    solution:
      "We built a secure CRM dashboard with lead capture, pipeline stages, role-based access, customer profiles, task reminders, follow-up notes and real-time reports. The interface keeps daily work simple for sales teams while giving management the numbers they need.",
    impact:
      "The CRM helped the client reduce manual reporting, respond faster to new enquiries and keep every customer conversation in one place. It also created a cleaner base for future automation and AI-assisted follow-up suggestions.",
    highlights: [
      "Central lead pipeline with status tracking and ownership",
      "Customer profiles with notes, call history and activity timeline",
      "Role-based dashboard for sales users, managers and admins",
      "Automated reminders for follow-ups and pending tasks",
    ],
    stats: [
      ["42%", "Faster follow-ups"],
      ["31%", "More qualified leads"],
      ["18 hrs", "Saved each week"],
    ],
  },
  {
    badge: "E-Commerce",
    image: ecommerceProject,
    title: "E-Commerce Platform",
    desc: "Scalable multi-vendor marketplace built with Laravel, Vue.js and MySQL.",
    tags: ["Laravel", "Vue.js", "MySQL", "AWS"],
    client: "Retail marketplace",
    timeline: "14 weeks",
    overview:
      "A multi-vendor e-commerce platform built for a retail brand that wanted to onboard sellers, manage product listings and create a smoother buying journey for customers.",
    challenge:
      "The existing store was slow, hard to update and not ready for multiple sellers. Product management took too much time, checkout was inconsistent on mobile, and the business needed better control over orders, inventory and vendor payouts.",
    solution:
      "We developed a marketplace architecture with vendor onboarding, product approval workflows, category management, secure checkout, order tracking and admin reporting. The front end was optimized for mobile users because most buyers came from social and search traffic.",
    impact:
      "The platform made it easier to add new sellers, publish products faster and improve conversion from mobile visitors. Clean product pages, better speed and structured content also helped the store become more search-friendly.",
    highlights: [
      "Vendor dashboard for products, orders and sales performance",
      "Mobile-first product pages with faster browsing and checkout",
      "Admin approval workflow for listings and category quality",
      "Secure payments, order status updates and inventory control",
    ],
    stats: [
      ["2.3x", "Faster catalog updates"],
      ["28%", "Higher mobile checkout"],
      ["65%", "Less admin effort"],
    ],
  },
  {
    badge: "AI Powered",
    image: aiProject,
    title: "AI Automation System",
    desc: "AI-powered automation system using Python, OpenAI and modern technologies.",
    tags: ["Python", "OpenAI", "React", "AWS"],
    client: "Operations team",
    timeline: "8 weeks",
    overview:
      "An AI automation system created for a busy operations team that wanted to reduce repetitive work, process customer requests faster and improve the consistency of internal decisions.",
    challenge:
      "The team was spending hours reading messages, preparing replies, sorting requests and updating records manually. Response quality changed from person to person, and managers had no easy way to measure bottlenecks.",
    solution:
      "We built an AI-assisted workflow with document parsing, smart request classification, draft responses, approval steps and analytics. The system keeps humans in control while removing the repetitive work that slows teams down.",
    impact:
      "The automation reduced manual handling time, improved response consistency and gave managers a live view of request volume. It also created a practical path for adding more AI features without disturbing existing operations.",
    highlights: [
      "AI request classification with human approval controls",
      "Smart response drafts trained around business tone and policy",
      "Document extraction for common forms and support files",
      "Analytics dashboard for workload, speed and team performance",
    ],
    stats: [
      ["54%", "Less manual work"],
      ["3x", "Faster response draft"],
      ["24/7", "Queue visibility"],
    ],
  },
];

const stats = [
  ["50+", "Technologies Used"],
  ["500+", "Projects Delivered"],
  ["200+", "Happy Clients"],
  ["15+", "Countries Served"],
  ["50+", "Tech Experts"],
  ["98%", "Client Satisfaction"],
];

const faqs = [
  {
    question: "Which technologies do you use?",
    answer:
      "We use modern, production-ready technologies such as React, Next.js, Vue.js, Node.js, Laravel, Python, MongoDB, MySQL, PostgreSQL, AWS, Firebase, Docker and AI tools like OpenAI. The final stack always depends on the project goal, traffic needs and long-term maintenance plan.",
  },
  {
    question: "How do you choose the right tech stack?",
    answer:
      "We first understand your business model, users, features, budget and growth plan. Then we choose a stack that is stable, scalable and easy to maintain, instead of picking a technology only because it is trending.",
  },
  {
    question: "Do you build mobile applications?",
    answer:
      "Yes. We build Android and iOS apps using Flutter, React Native and native-ready backend systems. We can create customer apps, booking apps, delivery apps, internal tools, dashboards and mobile-first platforms.",
  },
  {
    question: "Do you provide cloud deployment?",
    answer:
      "Yes. We deploy websites, apps and APIs on cloud platforms such as AWS, Google Cloud, Firebase, DigitalOcean and VPS servers. We also configure domains, SSL, backups, monitoring and basic DevOps workflows.",
  },
  {
    question: "Can you integrate AI in solutions?",
    answer:
      "Yes. We can add AI chatbots, smart search, document automation, content generation, recommendation systems, lead scoring and workflow automation. We focus on practical AI features that save time and improve customer experience.",
  },
  {
    question: "Do you provide maintenance and support?",
    answer:
      "Yes. After launch, we can handle updates, bug fixes, performance improvements, security checks, backups and new feature development. Support can be planned monthly or based on your project needs.",
  },
];

function MiniHeading({ eyebrow, title }) {
  return (
    <div>
      <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#168dff]">
        {eyebrow}
      </span>
      <h2 className="mt-1 text-[24px] font-extrabold leading-tight text-white lg:text-[28px]">
        {title}
      </h2>
    </div>
  );
}

export default function TechnologyShowcaseSection() {
  const [activeProject, setActiveProject] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section className="relative overflow-hidden bg-[#020b1b] pb-12 pt-8 text-white lg:pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(22,141,255,.2),transparent_26%),radial-gradient(circle_at_84%_56%,rgba(22,141,255,.22),transparent_30%)]" />
      <img
        src={technologyBg}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-[58%] w-full object-cover object-right-bottom opacity-55"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#031632_0%,rgba(3,22,50,.88)_36%,rgba(2,11,27,.5)_100%)]" />

      <div className="relative mx-auto max-w-[1480px] px-4 sm:px-8 lg:px-10">
        <div className="grid gap-10 xl:grid-cols-[1.65fr_.9fr]">
          <div>
            <MiniHeading
              eyebrow="Featured Projects"
              title="Built With Modern Technologies"
            />

            <div className="mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-[8px] border border-[#2a4f7d] bg-[#061a38]/88 shadow-[0_18px_42px_rgba(0,0,0,.26)]"
                >
                  <div className="relative h-[180px] overflow-hidden border-b border-[#2a4f7d] bg-[#020b1b] sm:h-[124px]">
                    <img
                      src={project.image}
                      alt=""
                      className="h-full w-full object-cover opacity-95"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,22,50,.06),rgba(3,22,50,.42))]" />
                    <span className="absolute left-4 top-3 rounded-full bg-[#4358ff] px-4 py-1.5 text-[11px] font-extrabold text-white shadow-[0_8px_22px_rgba(67,88,255,.35)]">
                      {project.badge}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="text-[14px] font-extrabold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-[11px] font-semibold leading-5 text-[#b9c8dc] sm:min-h-[42px]">
                      {project.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-white/10 px-3 py-1.5 text-[10px] font-bold text-[#dbe9fb]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="mt-4 inline-flex items-center gap-2 text-[11px] font-extrabold text-[#168dff]"
                    >
                      View Project
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <MiniHeading
              eyebrow="Technology By Numbers"
              title="Our Technology Impact"
            />

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-3">
              {stats.map(([value, label], index) => (
                <div
                  key={label}
                  className="flex min-h-[108px] flex-col items-center justify-center rounded-[8px] border border-[#15365f] bg-[#061a38]/68 text-center shadow-[inset_0_0_22px_rgba(22,141,255,.06)]"
                >
                  <div
                    className={`text-[28px] font-black ${
                      index === 3 || index === 5
                        ? "text-[#6d72ff]"
                        : "text-[#168dff]"
                    }`}
                  >
                    {value}
                  </div>
                  <p className="mt-2 text-[11px] font-semibold text-[#d7e4f4]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <MiniHeading
              eyebrow="Frequently Asked Questions"
              title="Have Questions? We Have Answers!"
            />
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-[12px] font-extrabold text-[#168dff]"
            >
              View All FAQs
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[6px] border border-[#23456e] bg-[#071c3c]/82 shadow-[inset_0_0_18px_rgba(255,255,255,.03)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex min-h-9 w-full items-center justify-between gap-3 px-4 py-2 text-left text-[11px] font-bold text-white"
                    aria-expanded={isOpen}
                  >
                    <span className="leading-5">{faq.question}</span>
                    <Plus
                      size={15}
                      className={`shrink-0 text-white/75 transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-[#168dff]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-[11px] font-semibold leading-6 text-[#b9c8dc]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[10px] border border-[#1f4c82] bg-[#062456]/78 shadow-[0_20px_48px_rgba(0,0,0,.32),inset_0_0_42px_rgba(22,141,255,.16)]">
          <div className="relative flex flex-col items-center gap-5 px-5 py-6 text-center sm:flex-row sm:items-center sm:px-8 sm:text-left">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_52%,rgba(22,141,255,.35),transparent_32%)]" />
            <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-[#168dff]/45 bg-[#062f6d] shadow-[0_0_28px_rgba(22,141,255,.28)] sm:h-[76px] sm:w-[76px]">
              <MessageSquare size={30} className="text-[#168dff] sm:h-[34px] sm:w-[34px]" />
            </div>
            <div className="relative flex-1">
              <h2 className="text-[24px] font-bold leading-tight text-white lg:text-[24px]">
                Ready To Build With{" "}
                <span className="text-[#168dff]">Modern Technology?</span>
              </h2>
              <p className="mt-1 text-[13px] font-semibold text-[#dbe9fb]">
                Let's create scalable digital solutions powered by cutting-edge
                technologies.
              </p>
              <div className="mt-4 grid gap-3 sm:flex sm:flex-wrap">
                <a
                  href="/contact"
                  className="inline-flex h-11 w-full items-center justify-center gap-3 rounded bg-[#ffb525] px-5 text-[12px] font-extrabold text-[#061326] shadow-[0_12px_28px_rgba(255,181,37,.25)] sm:w-auto sm:px-6"
                >
                  Start Your Project
                  <ArrowRight size={15} />
                </a>
                <a
                  href="/contact"
                  className="inline-flex h-11 w-full items-center justify-center gap-3 rounded border border-white/35 bg-[#061326]/45 px-5 text-[12px] font-extrabold text-white sm:w-auto sm:px-6"
                >
                  Schedule A Call
                  <PhoneCall size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#020817]/82 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-4 sm:py-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="technology-project-title"
          onMouseDown={() => setActiveProject(null)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-[10px] border border-[#1f4c82] bg-[#061a38] shadow-[0_35px_100px_rgba(0,0,0,.45)] sm:max-h-[92vh] sm:overflow-y-auto"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[245px] overflow-hidden bg-[#020b1b] sm:min-h-[285px]">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="absolute inset-0 h-full w-full object-cover opacity-55"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#031632_0%,rgba(3,22,50,.88)_48%,rgba(3,22,50,.38)_100%)]" />
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur sm:right-5 sm:top-5"
                aria-label="Close project details"
              >
                <X size={18} />
              </button>

              <div className="relative z-10 max-w-3xl px-5 py-7 sm:px-8 sm:py-8">
                <span className="inline-flex rounded-full bg-[#4358ff] px-4 py-2 text-[11px] font-extrabold uppercase tracking-wide text-white">
                  {activeProject.badge}
                </span>
                <h3
                  id="technology-project-title"
                  className="mt-5 pr-8 text-[24px] font-extrabold leading-tight text-white sm:pr-0 sm:text-[42px]"
                >
                  {activeProject.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[14px] font-medium leading-7 text-[#dce7f5]">
                  {activeProject.overview}
                </p>

                <div className="mt-6 grid max-w-xl grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-4">
                  <div className="rounded-[8px] border border-white/15 bg-white/10 p-3">
                    <p className="text-[10px] font-extrabold uppercase text-[#ffb525]">
                      Client
                    </p>
                    <p className="mt-1 text-[12px] font-bold text-white">
                      {activeProject.client}
                    </p>
                  </div>
                  <div className="rounded-[8px] border border-white/15 bg-white/10 p-3">
                    <p className="text-[10px] font-extrabold uppercase text-[#ffb525]">
                      Timeline
                    </p>
                    <p className="mt-1 text-[12px] font-bold text-white">
                      {activeProject.timeline}
                    </p>
                  </div>
                  {activeProject.stats.slice(0, 2).map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-[8px] border border-white/15 bg-white/10 p-3"
                    >
                      <p className="text-[18px] font-extrabold text-[#ffb525]">
                        {value}
                      </p>
                      <p className="mt-1 text-[10px] font-bold text-[#dce7f5]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.08fr_.92fr]">
              <div className="space-y-5">
                {[
                  ["The Challenge", activeProject.challenge],
                  ["The Solution", activeProject.solution],
                  ["Business Impact", activeProject.impact],
                ].map(([heading, text]) => (
                  <div key={heading}>
                    <h4 className="text-[18px] font-extrabold text-white">
                      {heading}
                    </h4>
                    <p className="mt-2 text-[13px] font-medium leading-7 text-[#b9c8dc]">
                      {text}
                    </p>
                  </div>
                ))}

                <div>
                  <h4 className="text-[18px] font-extrabold text-white">
                    Technology Stack
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#23456e] bg-[#071c3c] px-4 py-2 text-[11px] font-extrabold text-[#168dff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="rounded-[10px] border border-[#23456e] bg-[#020b1b]/78 p-5 text-white">
                <h4 className="text-[18px] font-extrabold">
                  Project Highlights
                </h4>
                <div className="mt-4 space-y-4">
                  {activeProject.highlights.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-[#ffb525]"
                      />
                      <p className="text-[13px] font-medium leading-6 text-[#d7e2f0]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {activeProject.stats.map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-[8px] border border-white/12 bg-white/8 p-3"
                    >
                      <p className="text-[22px] font-extrabold text-[#168dff]">
                        {value}
                      </p>
                      <p className="mt-2 text-[10px] font-bold leading-4 text-[#c9d7ea]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-3 rounded bg-[#ffb525] px-5 text-[13px] font-extrabold text-[#061326]"
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
