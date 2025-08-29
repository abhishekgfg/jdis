import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu, Monitor, Smartphone, Cloud, BarChart2, CheckCircle2, X, Globe, PenTool, Video, Server
} from "lucide-react";

const SERVICE_ICONS = {
  "Product Strategy": Cpu,
  "Design & UX": Monitor,
  "Frontend Engineering": Smartphone,
  "Backend & Cloud": Cloud,
  "Data & ML": BarChart2,
  "Delivery & QA": CheckCircle2,
  "Website Development": Globe,
  "App Development": Smartphone,
  "SEO & Content Marketing": BarChart2,
  "Graphic Design": PenTool,
  "Video Editing": Video,
  "Cloud & Server Management": Server,
};

const cards = [
  { title: "Website Development", desc: "Custom-designed websites that are fast, mobile-friendly, and SEO-optimized.", bullets: ["Responsive design", "SEO best practices", "Lightning performance"] },
  { title: "App Development", desc: "Cross-platform mobile and web apps tailored to streamline your business.", bullets: ["iOS & Android", "Web apps", "Automation workflows"] },
  { title: "SEO & Content Marketing", desc: "Improve search rankings and drive traffic with strategic content and SEO tactics.", bullets: ["On-page SEO", "Content strategy", "Link building"] },
  { title: "Graphic Design", desc: "Captivating graphics, brand kits, and social media creatives tailored for you.", bullets: ["Logos & brand kits", "Social media posts", "Presentation design"] },
  { title: "Video Editing", desc: "High-quality edits for reels, ads, tutorials, and storytelling videos.", bullets: ["Reels & shorts", "Ads & promos", "Tutorials & explainers"] },
  { title: "Cloud & Server Management", desc: "Reliable cloud setup, backups, and server security for businesses of all sizes.", bullets: ["Server setup", "Cloud migration", "24/7 monitoring"] },
  { title: "Product Strategy", desc: "Market-fit, roadmaps, discovery sprints, and prioritised MVPs.", bullets: ["User & market research", "Roadmaps & OKRs", "Rapid discovery sprints"] },
  { title: "Design & UX", desc: "User flows, prototypes and polished interfaces with accessibility in mind.", bullets: ["Interactive prototypes", "Design systems & tokens", "User testing"] },
  { title: "Frontend Engineering", desc: "React, TypeScript, performance-first UI and component libraries.", bullets: ["SSR & SSG", "Performance budgets", "Component-driven"] },
  { title: "Backend & Cloud", desc: "APIs, serverless, infra-as-code, and secure deployments.", bullets: ["Serverless & containers", "IaC (Terraform)", "Monitoring & alerts"] },
  { title: "Data & ML", desc: "Analytics, models and pipelines that unlock product value.", bullets: ["Event instrumentation", "Model validation", "Feature stores"] },
  { title: "Delivery & QA", desc: "CI/CD, testing, and observability for reliable delivery.", bullets: ["Automated pipelines", "E2E testing", "SLO-driven ops"] },
];

function Badge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full leading-none">
      <CheckCircle2 className="w-4 h-4" />
      <span>{children}</span>
    </div>
  );
}

function ServiceCard({ service, onOpen }) {
  const Icon = SERVICE_ICONS[service.title] || Monitor;
  return (
    <article
      className="relative p-6 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden group transition-all duration-500"
    >
      {/* animated hover background */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-100 via-sky-200 to-sky-100 
                      opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 
                      origin-left transition-transform duration-500 ease-out z-0"></div>

      <div className="relative flex items-start gap-4 z-10">
        <div className="p-3 rounded-xl bg-sky-50">
          <Icon className="w-6 h-6 text-sky-600" />
        </div>
        <div className="flex-1">
          <h4 className="text-base font-semibold text-slate-900">{service.title}</h4>
          <p className="mt-1 text-sm text-slate-500">{service.desc}</p>
          <ul className="mt-3 text-xs text-slate-400 space-y-1">
            {service.bullets.map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between relative z-10">
        <button
          onClick={() => onOpen(service)}
          className="text-sm font-medium text-sky-600 hover:underline"
        >
          Learn more →
        </button>
        <div className="text-xs text-slate-400">Estimated kickoff: 2–4 weeks</div>
      </div>
    </article>
  );
}

export default function Services() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  const filtered = cards.filter((c) => {
    if (filter !== "all") return c.title.toLowerCase().includes(filter);
    if (!query) return true;
    return (`${c.title} ${c.desc}`.toLowerCase().includes(query.toLowerCase()));
  });

  return (
   <section id="services" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
    {/* big gradient blob top-left */}
    <div className="absolute top-[-100px] left-[-100px] w-[450px] h-[450px] bg-sky-400 rounded-full blur-[120px] opacity-50"></div>

    {/* big gradient blob bottom-right */}
    <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-indigo-500 rounded-full blur-[120px] opacity-40"></div>

    {/* glowing sparks */}
    <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-50"></div>
    <div className="absolute top-2/3 right-1/3 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-50 animate-spin-slow"></div>
  </div>

       <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">What we do</h3>
            <p className="mt-3 text-slate-600">
              End-to-end product and engineering for ambitious startups — from discovery to production.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Badge>Fast delivery</Badge>
              <Badge>Production-grade</Badge>
              <Badge>Design-driven</Badge>
            </div>
          </div>

          <div className="w-full md:w-96">
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
              <label className="block text-xs text-slate-500">Quick search</label>
              <div className="mt-2 flex gap-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-200"
                  placeholder="Search services, e.g. frontend"
                />
                <button onClick={() => setQuery("")} className="px-3 rounded-lg bg-slate-100 text-sm">
                  Clear
                </button>
              </div>
 <div className="mt-3 flex gap-2 flex-wrap">
                <button onClick={() => setFilter("all")} className={`text-xs px-3 py-1 rounded-full ${filter === "all" ? "bg-sky-600 text-white" : "bg-white border"}`}>
                  All
                </button>
                <button onClick={() => setFilter("frontend")} className={`text-xs px-3 py-1 rounded-full ${filter === "frontend" ? "bg-sky-600 text-white" : "bg-white border"}`}>
                  Frontend
                </button>
                <button onClick={() => setFilter("backend")} className={`text-xs px-3 py-1 rounded-full ${filter === "backend" ? "bg-sky-600 text-white" : "bg-white border"}`}>
                  Backend
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <ServiceCard key={c.title} service={c} onOpen={setSelected} />
          ))}
        </div>
      </div>
    </section>
  );
}
