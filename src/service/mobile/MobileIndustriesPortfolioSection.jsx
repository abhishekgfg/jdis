import { useRef, useState } from "react";
import {
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  HeartPulse,
  Landmark,
  Minus,
  Phone,
  Plane,
  Plus,
  Share2,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";
import project4 from "../../components/images/project4.png";
import project5 from "../../components/images/project5.png";
import ctaMockup from "../../components/images/mobile-cta-app-mockup.png";
import ecommercePortfolio from "../../components/images/mobile-portfolio-ecommerce.png";
import foodPortfolio from "../../components/images/mobile-portfolio-food.png";
import healthcarePortfolio from "../../components/images/mobile-portfolio-healthcare.png";

export default function MobileIndustriesPortfolioSection() {
  const portfolioRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(0);

  const industries = [
    { icon: ShoppingCart, name: "E-commerce" },
    { icon: HeartPulse, name: "Healthcare" },
    { icon: GraduationCap, name: "Education" },
    { icon: Landmark, name: "Finance" },
    { icon: Building2, name: "Real Estate" },
    { icon: Share2, name: "Social Networking" },
    { icon: Plane, name: "Travel & Hospitality" },
    { icon: UtensilsCrossed, name: "On-Demand" },
  ];

  const projects = [
    {
      image: ecommercePortfolio,
      title: "E-Commerce App",
      tag: "Shopping",
      desc: "A complete online shopping solution with advanced features.",
    },
    {
      image: healthcarePortfolio,
      title: "Healthcare App",
      tag: "Healthcare",
      desc: "Patient management app with appointment booking and telemedicine.",
    },
    {
      image: foodPortfolio,
      title: "Food Delivery App",
      tag: "On-Demand",
      desc: "On-demand food delivery app with real-time tracking and payments.",
    },
    {
      image: project4,
      title: "Education App",
      tag: "Learning",
      desc: "Digital learning platform with course content and progress tracking.",
    },
    {
      image: project5,
      title: "Restaurant App",
      tag: "Food Tech",
      desc: "Restaurant ordering experience with menu browsing and quick checkout.",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "A simple app usually takes 4-8 weeks, while feature-rich mobile apps can take 10-16 weeks depending on design, integrations and testing scope.",
    },
    {
      question: "Do you provide app maintenance and support?",
      answer:
        "Yes, we provide ongoing updates, bug fixes, performance checks, security improvements and feature enhancements after launch.",
    },
    {
      question: "Which platform should I choose for my app?",
      answer:
        "If your users are mostly on one platform, native iOS or Android works well. For faster multi-platform launch, Flutter or React Native is often the best choice.",
    },
    {
      question: "Will you publish the app on App Store and Play Store?",
      answer:
        "Yes, we help prepare builds, store listings, screenshots, compliance details and submit your app to both stores.",
    },
    {
      question: "How much does app development cost?",
      answer:
        "Cost depends on features, screens, backend, integrations and platform choice. After understanding your requirements, we share a clear estimate.",
    },
    {
      question: "Can you integrate third-party services?",
      answer:
        "Yes, we can integrate payment gateways, maps, analytics, CRMs, chat, notifications, social login and custom APIs.",
    },
  ];

  const scrollPortfolio = (direction) => {
    const track = portfolioRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * Math.max(track.clientWidth * 0.75, 260),
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-full overflow-hidden px-4 pt-8 sm:px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1fr]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
              Industries We Serve
            </span>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-7 lg:grid-cols-4">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={industry.name}
                    className="flex items-center gap-2 rounded-lg border border-[#e5edf7] bg-white p-3 text-[12px] font-bold text-[#233149] shadow-[0_8px_22px_rgba(15,23,42,.04)] sm:border-0 sm:p-0 sm:shadow-none"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f6ff] text-[#145cff]">
                      <Icon size={16} />
                    </span>
                    {industry.name}
                  </div>
                );
              })}
            </div>

            <a
              href="/industries"
              className="mt-8 inline-flex items-center gap-2 text-[12px] font-bold text-[#145cff]"
            >
              View All Industries
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="relative min-w-0 overflow-hidden">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
                Related Portfolio
              </span>
              <div className="hidden sm:flex gap-2">
                <button
                  type="button"
                  aria-label="Previous portfolio item"
                  onClick={() => scrollPortfolio(-1)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8e5ff] bg-white text-[#145cff] shadow-[0_8px_22px_rgba(20,92,255,.1)]"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Next portfolio item"
                  onClick={() => scrollPortfolio(1)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8e5ff] bg-white text-[#145cff] shadow-[0_8px_22px_rgba(20,92,255,.1)]"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div
              ref={portfolioRef}
              className="-mx-4 overflow-x-auto px-4 scroll-smooth [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
            >
              <div
                className="flex w-max gap-3 sm:w-auto"
              >
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="relative h-[220px] w-[calc(100vw-32px)] flex-none overflow-hidden rounded-lg bg-[#061326] p-4 text-white shadow-[0_14px_30px_rgba(2,8,23,.13)] sm:h-[176px] sm:w-auto sm:min-w-[calc((100%_-_24px)/3)]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover object-right"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#061326] via-[#061326]/88 to-[#061326]/12" />
                    <div className="relative z-20 max-w-[72%] sm:max-w-[54%]">
                      <h3 className="text-[14px] font-bold leading-5">
                        {project.title}
                      </h3>
                      <span className="mt-2 inline-flex rounded border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-semibold text-[#c6d6ee]">
                        {project.tag}
                      </span>
                      <p className="mt-2 text-[11px] leading-4 text-[#d4deee]">
                        {project.desc}
                      </p>
                      <a
                        href="/portfolio"
                        className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold text-white"
                      >
                        View Case Study
                        <ArrowRight size={12} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              aria-label="Next portfolio item"
              onClick={() => scrollPortfolio(1)}
              className="absolute -right-4 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#145cff] shadow-[0_10px_28px_rgba(20,92,255,.22)] lg:flex"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-[#020b18]">
        <div className="mx-auto grid gap-7 px-4 py-6 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1e8bff]">
              Frequently Asked Questions
            </span>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={faq.question}
                    className="rounded border border-[#1d385d] bg-[#07172b]"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-[12px] font-semibold text-white"
                    >
                      {faq.question}
                      {isOpen ? (
                        <Minus size={16} className="shrink-0 text-white" />
                      ) : (
                        <Plus size={16} className="shrink-0 text-white" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="px-4 pb-4 text-[11px] leading-5 text-[#b7c6d9]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-[#0f315d] bg-[#061a36] px-5 py-6 text-white shadow-[0_16px_36px_rgba(0,0,0,.22)] sm:px-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(31,139,255,.55),transparent_34%),linear-gradient(90deg,#061a36_0%,#061a36_45%,rgba(5,28,56,.72)_100%)]" />
            <div className="relative z-10 max-w-[310px]">
              <h2 className="text-[22px] font-bold leading-tight lg:text-[25px]">
                Ready to Build Your Next Big App?
              </h2>
              <p className="mt-3 text-[12px] leading-5 text-[#d2dcec]">
                Let's turn your idea into a powerful mobile application.
              </p>
              <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
                <a
                  href="/contact"
                  className="inline-flex h-10 w-full items-center justify-center gap-3 rounded bg-[#ffc126] px-5 text-[12px] font-bold text-[#071426] shadow-[0_10px_22px_rgba(255,193,38,.25)] sm:w-auto"
                >
                  Discuss Your Project
                  <ArrowRight size={15} />
                </a>
                <a
                  href="tel:+919523435814"
                  className="inline-flex h-10 w-full items-center justify-center gap-3 rounded border border-white/25 px-5 text-[12px] font-bold text-white sm:w-auto"
                >
                  Schedule a Call
                  <Phone size={15} />
                </a>
              </div>
            </div>
            <img
              src={ctaMockup}
              alt="Mobile app interface mockup"
              className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-[48%] object-cover object-center opacity-95 md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
