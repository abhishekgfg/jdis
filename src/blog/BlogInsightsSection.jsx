import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock,
  Search,
  Tag,
  X,
} from "lucide-react";
import ecommerceImg from "../components/images/solution-success-ecommerce.png";
import fintechImg from "../components/images/solution-success-fintech.png";
import healthcareImg from "../components/images/solution-success-healthcare.png";
import mobileImg from "../components/images/mobile-portfolio-ecommerce.png";
import cloudImg from "../technology/image/technology-hero-bg.png";
import aiImg from "../technology/image/technology-project-ai.png";

const categories = [
  "All",
  "Web Development",
  "SEO",
  "Mobile Apps",
  "AI Automation",
  "Cloud",
  "E-commerce",
];

const posts = [
  {
    image: ecommerceImg,
    category: "E-commerce",
    date: "June 2026",
    readTime: "6 min read",
    title: "How a High-Converting E-commerce Website Turns Visitors Into Buyers",
    excerpt:
      "A practical guide for retail businesses that want more sales from the same traffic through faster pages, better product discovery and smoother checkout.",
    intro:
      "Most online stores do not fail because the products are weak. They fail because customers cannot find the right product quickly, do not trust the checkout, or feel friction on mobile.",
    sections: [
      [
        "What customers expect",
        "Modern buyers expect fast loading pages, clear delivery details, easy filters, secure payments and transparent return information before they place an order.",
      ],
      [
        "Where conversion usually leaks",
        "Weak product images, confusing navigation, too many checkout steps, hidden charges and poor mobile performance are the most common reasons people leave without buying.",
      ],
      [
        "How we help",
        "We design e-commerce platforms around real buying behavior: fast catalogs, clean product pages, cart recovery, offer management, payment integrations and analytics that show what is working.",
      ],
    ],
    takeaway:
      "If your store already gets visitors but sales feel inconsistent, improving the buying journey can often deliver better ROI than spending more on ads.",
    benefits: [
      "Better mobile checkout and lower cart abandonment",
      "SEO-friendly product and category structure",
      "Admin controls for offers, inventory and campaigns",
    ],
  },
  {
    image: cloudImg,
    category: "SEO",
    date: "June 2026",
    readTime: "7 min read",
    title: "SEO-Friendly Website Development: What Business Owners Should Know",
    excerpt:
      "SEO is not only keywords. Your website speed, structure, content quality and technical setup decide whether customers can find you.",
    intro:
      "A beautiful website is useful only when the right people can discover it. SEO-friendly development makes sure your website is built for users and search engines from day one.",
    sections: [
      [
        "Start with search intent",
        "Before writing pages, understand what customers are actually searching for: services, locations, pricing questions, comparisons and problem-based queries.",
      ],
      [
        "Technical SEO matters",
        "Fast loading, clean URLs, mobile responsiveness, image optimization, metadata, schema and proper heading structure all help search engines understand your website.",
      ],
      [
        "Content should build trust",
        "Real service pages, FAQs, case studies, process explanations and helpful blogs make your website feel more credible and improve long-term organic visibility.",
      ],
    ],
    takeaway:
      "If you are planning a new website, SEO should be included during design and development, not added later as a patch.",
    benefits: [
      "Clear page structure for services and locations",
      "Faster website performance and better Core Web Vitals",
      "FAQ and blog content that answers buyer questions",
    ],
  },
  {
    image: mobileImg,
    category: "Mobile Apps",
    date: "May 2026",
    readTime: "5 min read",
    title: "When Does Your Business Really Need a Mobile App?",
    excerpt:
      "Not every business needs an app. But if users return often, need quick access, or expect personalized service, an app can become a strong growth channel.",
    intro:
      "Many businesses ask for an app because competitors have one. The better question is whether an app will make the customer journey easier and more profitable.",
    sections: [
      [
        "Good reasons to build an app",
        "Apps work well for booking, delivery, e-commerce, healthcare, education, finance, loyalty programs and internal team workflows where users need repeated access.",
      ],
      [
        "When a website is enough",
        "If users visit rarely or only need basic information, a fast responsive website may be more cost-effective than an app.",
      ],
      [
        "What makes apps successful",
        "Useful notifications, simple onboarding, secure login, fast screens, clear user value and reliable backend systems decide whether people keep using the app.",
      ],
    ],
    takeaway:
      "A mobile app should solve a recurring user problem. If it does, it can improve retention, service speed and customer experience.",
    benefits: [
      "Better repeat customer engagement",
      "Fast access to bookings, orders or dashboards",
      "Personalized notifications and loyalty workflows",
    ],
  },
  {
    image: aiImg,
    category: "AI Automation",
    date: "May 2026",
    readTime: "6 min read",
    title: "AI Automation for Small Businesses: Where to Start Safely",
    excerpt:
      "AI can save time in support, sales, reporting and operations, but the best results come from focused workflows rather than random tools.",
    intro:
      "AI automation is most useful when it removes repetitive work while keeping important decisions in human hands.",
    sections: [
      [
        "Start with one workflow",
        "Pick one repeated task such as lead qualification, support replies, document sorting, appointment reminders or report preparation.",
      ],
      [
        "Keep humans in control",
        "AI should draft, classify, summarize or suggest. Your team should approve sensitive messages, payments, policies and customer-facing decisions.",
      ],
      [
        "Measure the impact",
        "Track time saved, response speed, error reduction and customer satisfaction so the automation proves business value.",
      ],
    ],
    takeaway:
      "The safest way to adopt AI is to automate one clear workflow, measure results, then expand gradually.",
    benefits: [
      "Faster lead response and support replies",
      "Less manual data entry and document work",
      "Better visibility into team workload",
    ],
  },
  {
    image: fintechImg,
    category: "Cloud",
    date: "April 2026",
    readTime: "7 min read",
    title: "Cloud Migration Checklist for Growing Companies",
    excerpt:
      "Moving to cloud can reduce downtime and improve scalability, but only when migration is planned around security, backups and business continuity.",
    intro:
      "Cloud migration is not just moving files from one server to another. It is a chance to modernize performance, reliability, monitoring and deployment.",
    sections: [
      [
        "Audit before migration",
        "Review current hosting, database size, traffic patterns, third-party integrations, security risks and downtime tolerance.",
      ],
      [
        "Plan phased rollout",
        "A careful migration uses staging, backups, DNS planning, rollback options and monitoring before switching production traffic.",
      ],
      [
        "Optimize after launch",
        "Once live, tune performance, set alerts, check costs, review security rules and improve deployment processes.",
      ],
    ],
    takeaway:
      "A well-planned cloud migration gives your business a stronger foundation for growth, analytics and automation.",
    benefits: [
      "Improved uptime and scalability",
      "Better backup and recovery planning",
      "Cleaner deployment and monitoring workflows",
    ],
  },
  {
    image: healthcareImg,
    category: "Web Development",
    date: "April 2026",
    readTime: "5 min read",
    title: "Why Custom Software Often Beats Generic Tools for Service Businesses",
    excerpt:
      "Generic tools are useful at the start, but growing teams often need workflows, reports and automation designed around their real operations.",
    intro:
      "As a business grows, teams start using spreadsheets, chat apps, forms and separate dashboards to complete one workflow. That creates delays and mistakes.",
    sections: [
      [
        "The hidden cost of manual work",
        "Manual follow-ups, duplicate data entry, scattered customer history and unclear reporting waste time every week.",
      ],
      [
        "Where custom software helps",
        "A custom CRM, booking system, ERP or operations dashboard can combine your workflow, permissions, reports and automation in one place.",
      ],
      [
        "Build only what matters",
        "The best software starts with core business problems and expands in phases, so you do not pay for unnecessary features.",
      ],
    ],
    takeaway:
      "If your team is losing time because tools do not match your workflow, custom software can create measurable operational value.",
    benefits: [
      "Cleaner workflow and fewer manual mistakes",
      "Reports built around your business decisions",
      "Automation that fits your team process",
    ],
  },
];

const faqs = [
  {
    question: "Can a blog really help my business get more leads?",
    answer:
      "Yes, if it answers real customer questions. Helpful blogs can rank for problem-based searches, educate buyers before they contact you, and make your business look more trustworthy during comparison.",
  },
  {
    question: "What type of content should a service business publish?",
    answer:
      "Start with service guides, pricing factors, process explanations, FAQs, case studies, comparison articles and location-based pages. These topics match what real buyers search before requesting a quote.",
  },
  {
    question: "How often should we update our website or blog?",
    answer:
      "For most businesses, publishing one useful article every 2 to 4 weeks is enough if the content is practical, original and connected to your services. Quality matters more than volume.",
  },
  {
    question: "Can JD Infotech help with SEO content and development together?",
    answer:
      "Yes. We can plan SEO-friendly website structure, write helpful content sections, optimize performance, add FAQs, build landing pages and connect the site with analytics so you can track enquiries.",
  },
];

export default function BlogInsightsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePost, setActivePost] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const visiblePosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  useEffect(() => {
    if (!activePost) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActivePost(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePost]);

  return (
    <section id="blog-insights" className="bg-[#f7faff] py-10 text-[#151d35] sm:py-12">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[.92fr_1.08fr] lg:items-end">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-wide text-[#1767ff]">
              Latest Insights
            </span>
            <h2 className="mt-2 text-[26px] font-extrabold leading-tight sm:text-[38px]">
              Digital Strategy, SEO and Technology Articles
            </h2>
          </div>
          <p className="max-w-[720px] text-[14px] font-semibold leading-7 text-[#3f4b63]">
            These guides are written for business owners and decision-makers who
            want practical answers before starting a website, app, automation or
            custom software project.
          </p>
        </div>

        <div className="-mx-4 mt-8 flex gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`h-11 shrink-0 rounded-full border px-5 text-[12px] font-extrabold shadow-[0_8px_20px_rgba(15,55,105,.07)] transition ${
                  isActive
                    ? "border-[#1767ff] bg-[#1767ff] text-white"
                    : "border-[#dce7f7] bg-white text-[#151d35] hover:border-[#1767ff]/55"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visiblePosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-[10px] border border-[#dce7f7] bg-white shadow-[0_14px_34px_rgba(15,55,105,.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,55,105,.12)]"
            >
              <div className="relative h-[210px] overflow-hidden bg-[#061326] sm:h-[230px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/44 to-transparent" />
                <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 rounded-full bg-[#1767ff] px-4 py-2 text-[11px] font-extrabold text-white shadow-lg">
                  <Tag size={13} />
                  {post.category}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold text-[#536174]">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={14} className="text-[#1767ff]" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock size={14} className="text-[#1767ff]" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="mt-4 text-[19px] font-extrabold leading-7 sm:min-h-[72px] sm:text-[21px]">
                  {post.title}
                </h3>
                <p className="mt-3 text-[13px] font-medium leading-7 text-[#536174] sm:min-h-[72px]">
                  {post.excerpt}
                </p>
                <button
                  type="button"
                  onClick={() => setActivePost(post)}
                  className="mt-5 inline-flex items-center gap-3 text-[12px] font-extrabold text-[#1767ff]"
                >
                  View Details
                  <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-[8px] bg-[#020b1b] p-5 text-white shadow-[0_14px_34px_rgba(2,8,23,.18)] sm:p-6">
            <h2 className="text-[22px] font-extrabold">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-[12px] font-medium leading-6 text-[#b9c8dc]">
              Common questions businesses ask before investing in blogs, SEO
              content or a new website.
            </p>

            <div className="mt-5 space-y-2">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-[5px] border border-[#1f3458] bg-[#071a34]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex min-h-11 w-full items-center justify-between gap-3 px-4 py-3 text-left text-[12px] font-extrabold text-white"
                    >
                      {faq.question}
                      <ChevronDown
                        size={15}
                        className={`shrink-0 transition-transform ${
                          isOpen ? "rotate-180 text-[#1767ff]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="px-4 pb-4 text-[12px] font-medium leading-6 text-[#b9c8dc]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[8px] bg-[#1767ff] p-5 text-white shadow-[0_16px_36px_rgba(23,103,255,.22)] sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_18%,rgba(255,255,255,.24),transparent_15%),radial-gradient(circle_at_85%_95%,rgba(2,11,27,.28),transparent_30%)]" />
            <div className="relative max-w-[680px]">
              <span className="text-[12px] font-extrabold uppercase tracking-wide text-white/85">
                Need a Growth Plan?
              </span>
              <h2 className="mt-2 text-[25px] font-extrabold leading-tight sm:text-[36px]">
                Turn Your Website Into a Lead-Generating Asset
              </h2>
              <p className="mt-4 max-w-[640px] text-[14px] font-semibold leading-7 text-[#e7efff]">
                If your website is not bringing enough enquiries, we can review
                your design, speed, SEO structure and content, then suggest a
                practical improvement plan.
              </p>
              <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex h-12 w-full items-center justify-center gap-3 rounded bg-white px-5 text-[13px] font-extrabold text-[#1767ff] sm:w-auto sm:px-7"
                >
                  Get Free Consultation
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/case-study"
                  className="inline-flex h-12 w-full items-center justify-center gap-3 rounded border border-white/40 bg-white/10 px-5 text-[13px] font-extrabold text-white sm:w-auto sm:px-7"
                >
                  See Case Studies
                  <Search size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#020817]/80 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-4 sm:py-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-modal-title"
          onMouseDown={() => setActivePost(null)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-[12px] bg-white shadow-[0_35px_100px_rgba(2,8,23,.38)] sm:max-h-[92vh] sm:overflow-y-auto"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[250px] overflow-hidden bg-[#061326] sm:min-h-[310px]">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="absolute inset-0 h-full w-full object-cover opacity-62"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061326] via-[#061326]/86 to-[#061326]/30" />
              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded bg-white text-[#071426] shadow-lg sm:right-5 sm:top-5"
                aria-label="Close blog details"
              >
                <X size={18} />
              </button>

              <div className="relative z-10 max-w-3xl px-5 py-7 text-white sm:px-8 sm:py-8">
                <span className="inline-flex rounded-full bg-[#1767ff] px-4 py-2 text-[11px] font-extrabold uppercase tracking-wide">
                  {activePost.category}
                </span>
                <h3
                  id="blog-modal-title"
                  className="mt-5 pr-8 text-[24px] font-extrabold leading-tight sm:pr-0 sm:text-[42px]"
                >
                  {activePost.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[14px] font-medium leading-7 text-[#dce7f5]">
                  {activePost.intro}
                </p>
              </div>
            </div>

            <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.08fr_.92fr]">
              <div className="space-y-5">
                {activePost.sections.map(([heading, text]) => (
                  <div key={heading}>
                    <h4 className="text-[18px] font-extrabold text-[#151d35]">
                      {heading}
                    </h4>
                    <p className="mt-2 text-[13px] font-medium leading-7 text-[#536174]">
                      {text}
                    </p>
                  </div>
                ))}

                <div className="rounded-[8px] border border-[#dce8f8] bg-[#f7faff] p-5">
                  <h4 className="text-[16px] font-extrabold text-[#151d35]">
                    Key Takeaway
                  </h4>
                  <p className="mt-2 text-[13px] font-semibold leading-7 text-[#536174]">
                    {activePost.takeaway}
                  </p>
                </div>
              </div>

              <aside className="rounded-[10px] bg-[#061326] p-5 text-white">
                <h4 className="text-[18px] font-extrabold">
                  Why This Matters for Your Business
                </h4>
                <div className="mt-5 space-y-4">
                  {activePost.benefits.map((item) => (
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
                  className="mt-7 inline-flex h-12 w-full items-center justify-center gap-3 rounded bg-[#ffc126] px-5 text-[13px] font-extrabold text-[#061326]"
                >
                  Discuss This for My Business
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
