import { useState } from "react";
import {
  Search,
  ClipboardList,
  PenLine,
  Code2,
  ShieldCheck,
  Rocket,
  Headphones,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Landmark,
  Plane,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Plus,
  Phone,
} from "lucide-react";
import {
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";

import industryImg from "../../components/images/aboutj.png";
import portfolioImg from "../../components/images/corporate-business-website.png";
import project1 from "../../components/images/project1.png";
import project2 from "../../components/images/project2.png";
import project3 from "../../components/images/project3.png";
import project4 from "../../components/images/project4.png";
import project5 from "../../components/images/project5.png";

export default function WebsiteProcessDetailsSection() {
  const [openFaq, setOpenFaq] = useState(null);
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  const process = [
    { icon: Search, step: "Discovery", desc: "Understanding your business and goals." },
    { icon: ClipboardList, step: "Planning", desc: "Creating strategy, sitemap and wireframes." },
    { icon: PenLine, step: "Design", desc: "Designing stunning UI/UX that reflects your brand." },
    { icon: Code2, step: "Development", desc: "Building responsive and high-performance website." },
    { icon: ShieldCheck, step: "Testing", desc: "Rigorous testing for quality and security." },
    { icon: Rocket, step: "Launch", desc: "Deploying your website to the live server." },
    { icon: Headphones, step: "Support", desc: "Ongoing maintenance and improvements." },
  ];

  const industries = [
    { icon: Building2, name: "Real Estate" },
    { icon: HeartPulse, name: "Healthcare" },
    { icon: GraduationCap, name: "Education" },
    { icon: ShoppingCart, name: "E-commerce" },
    { icon: Landmark, name: "Finance" },
    { icon: Plane, name: "Travel & Hospitality" },
  ];

  const technologies = [
    { name: "React", icon: SiReact, color: "text-sky-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-[#111827]" },
    { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-500" },
    { name: "Angular", icon: SiAngular, color: "text-red-600" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
    { name: "Redux", icon: SiRedux, color: "text-purple-600" },
    { name: "WordPress", icon: SiWordpress, color: "text-blue-700" },
    { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "A standard business website usually takes 2 to 4 weeks. Larger custom websites, e-commerce stores, or CMS-based projects can take longer depending on features and content.",
    },
    {
      question: "Can I update the website content myself?",
      answer:
        "Yes. We can build your website with an easy-to-manage CMS or admin panel so you can update text, images, blogs, and pages without coding.",
    },
    {
      question: "Will my website be SEO optimized?",
      answer:
        "Yes. We include SEO-friendly structure, fast loading, responsive layout, clean URLs, meta tags, and basic on-page optimization during development.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes. Every website is built responsive so it works smoothly on mobile, tablet, laptop, and desktop screens.",
    },
    {
      question: "Do you provide domain and hosting?",
      answer:
        "Yes. We can help you choose, connect, and configure domain and hosting. If you already have them, we can deploy the website there too.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes. We provide support for maintenance, updates, bug fixes, performance improvements, backups, and future feature additions.",
    },
  ];

  const portfolioProjects = [
    {
      img: portfolioImg,
      title: "Corporate Business Website",
      type: "Web Development",
      desc: "Modern corporate website with CMS integration and multi-language support.",
      link: "/portfolio",
    },
    {
      img: project1,
      title: "Grocery Delivery",
      type: "E-commerce",
      desc: "React and Redux grocery platform with cart, orders, and real-time status updates.",
      link: "https://shanumart.in/",
    },
    {
      img: project2,
      title: "Herbal E-commerce",
      type: "E-commerce",
      desc: "Full-featured herbal products store with secure payments and order tracking.",
      link: "https://herbs.manovaidya.in/",
    },
    {
      img: project3,
      title: "Research Blog",
      type: "Education",
      desc: "Scalable education and research platform with content modules and reporting tools.",
      link: "https://airfresearch.com/",
    },
    {
      img: project4,
      title: "Education Platform",
      type: "Education",
      desc: "Modern learning portal where students access courses and track their progress.",
      link: "https://www.shodhsutra.com/",
    },
    {
      img: project5,
      title: "Restaurant Ordering System",
      type: "Food & Beverage",
      desc: "Full-stack food ordering website with menus, bookings, and live order status.",
      link: "https://the9to9restaurant.com/",
    },
  ];

  const showPrevProject = () => {
    setPortfolioIndex((current) =>
      current === 0 ? portfolioProjects.length - 1 : current - 1
    );
  };

  const showNextProject = () => {
    setPortfolioIndex((current) =>
      current === portfolioProjects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="bg-[#f8fbff] py-8">
      <div className="mx-auto px-6 lg:px-12">
        {/* Process */}
        <div className="rounded-xl bg-white/70 border border-[#e5edf7] shadow-[0_10px_35px_rgba(15,23,42,0.05)] p-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
            Our Process
          </span>

          <h2 className="text-[24px] lg:text-[28px] font-bold text-[#071426]">
            Our Proven Website Development Process
          </h2>

          <div className="relative mt-6">
            <div className="hidden lg:block absolute top-[31px] left-[65px] right-[65px] border-t border-dashed border-[#b9cdf0]" />

            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 relative z-10">
              {process.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="text-center relative">
                    {index < process.length - 1 && (
                      <span className="hidden lg:block absolute top-[24px] right-[-16px] text-[#145cff]">
                        →
                      </span>
                    )}

                    <div className="mx-auto w-[62px] h-[62px] rounded-full bg-white border border-[#cfe0ff] shadow-[0_8px_25px_rgba(20,92,255,0.15)] flex items-center justify-center">
                      <Icon size={25} className="text-[#145cff]" />
                    </div>

                    <h3 className="mt-4 text-[14px] font-bold text-[#071426]">
                      {item.step}
                    </h3>

                    <p className="mt-2 text-[12px] leading-5 text-[#536174] max-w-[145px] mx-auto">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Middle Cards */}
        <div className="grid lg:grid-cols-[1fr_1fr_1.05fr] gap-5 mt-5">
          {/* Industries */}
          <div className="rounded-xl bg-white border border-[#e5edf7] shadow-[0_10px_35px_rgba(15,23,42,0.05)] overflow-hidden">
            <div className="p-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
                Industries We Serve
              </span>

              <div className="mt-4 grid grid-cols-[160px_1fr] gap-4">
                <div className="space-y-4">
                  {industries.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="flex items-center gap-3 text-[13px] font-semibold text-[#071426]"
                      >
                        <Icon size={16} className="text-[#145cff]" />
                        {item.name}
                      </div>
                    );
                  })}

                  <button className="pt-2 text-[#145cff] text-[13px] font-bold inline-flex items-center gap-2">
                    View All Industries
                    <ArrowRight size={15} />
                  </button>
                </div>

                <img
                  src={industryImg}
                  alt="Industries"
                  className="w-full h-[190px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="rounded-xl bg-white border border-[#e5edf7] shadow-[0_10px_35px_rgba(15,23,42,0.05)] p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
              Technologies We Use
            </span>

            <div className="grid grid-cols-4 gap-3 mt-4">
              {technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="h-[64px] rounded-lg border border-[#e5edf7] bg-white hover:bg-[#f3f7ff] flex flex-col items-center justify-center gap-1.5 text-center text-[11px] font-semibold text-[#071426] shadow-sm transition-all"
                  >
                    <Icon size={20} className={tech.color} />
                    <span className="leading-none">{tech.name}</span>
                  </div>
                );
              })}
            </div>

            <button className="mt-4 text-[#145cff] text-[13px] font-bold inline-flex items-center gap-2">
              Explore All Technologies
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Related Portfolio */}
          <div className="rounded-xl bg-white border border-[#e5edf7] shadow-[0_10px_35px_rgba(15,23,42,0.05)] p-5 overflow-hidden">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
                Related Portfolio
              </span>

              <a
                href="/portfolio"
                className="text-[#145cff] text-[12px] font-bold inline-flex items-center gap-2"
              >
                View All Projects
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="relative mt-4">
              <button
                type="button"
                onClick={showPrevProject}
                aria-label="Previous portfolio project"
                className="absolute left-[-12px] top-[96px] z-20 w-8 h-8 rounded-full bg-white border border-[#dbe7f5] text-[#145cff] shadow-[0_8px_20px_rgba(15,23,42,0.12)] flex items-center justify-center hover:bg-[#f3f7ff] transition-all"
              >
                <ChevronLeft size={17} />
              </button>

              <div className="rounded-xl overflow-hidden border border-[#e5edf7] shadow-sm">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${portfolioIndex * 100}%)` }}
                >
                  {portfolioProjects.map((project) => (
                    <div key={project.title} className="min-w-full bg-white">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-[130px] object-cover"
                      />

                      <div className="p-4">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-[14px] font-bold text-[#071426] leading-5">
                            {project.title}
                          </h3>
                          <span className="shrink-0 px-3 py-1 rounded-full bg-[#eaf1ff] text-[#145cff] text-[11px] font-bold">
                            {project.type}
                          </span>
                        </div>

                        <p className="mt-2 min-h-[40px] text-[12px] leading-5 text-[#536174]">
                          {project.desc}
                        </p>

                        <a
                          href={project.link}
                          target={project.link.startsWith("http") ? "_blank" : undefined}
                          rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="mt-3 text-[#145cff] text-[13px] font-bold inline-flex items-center gap-2"
                        >
                          View Project
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={showNextProject}
                aria-label="Next portfolio project"
                className="absolute right-[-12px] top-[96px] z-20 w-8 h-8 rounded-full bg-white border border-[#dbe7f5] text-[#145cff] shadow-[0_8px_20px_rgba(15,23,42,0.12)] flex items-center justify-center hover:bg-[#f3f7ff] transition-all"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
                Frequently Asked Questions
              </span>

              <h2 className="text-[24px] font-bold text-[#071426]">
                Have Questions? We Have Answers!
              </h2>
            </div>

            <button className="hidden sm:inline-flex text-[#145cff] text-[13px] font-bold items-center gap-2">
              View All FAQs
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 items-start">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-lg border border-[#dbe7f5] bg-white shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full min-h-[52px] px-4 py-3 text-left text-[#071426] text-[13px] font-semibold flex items-center justify-between gap-3"
                  >
                    <span className="leading-5">{faq.question}</span>
                    <Plus
                      size={16}
                      className={`shrink-0 text-[#145cff] transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-[12px] leading-5 text-[#536174]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-5 rounded-xl bg-[#061326] overflow-hidden border border-[#183456] shadow-[0_15px_40px_rgba(2,8,23,0.15)]">
          <div className="min-h-[90px] px-7 py-5 flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-[#145cff]/20 border border-[#145cff]/40 flex items-center justify-center">
                <Headphones size={30} className="text-[#2b8cff]" />
              </div>

              <div>
                <h2 className="text-white text-[26px] lg:text-[28px] leading-tight font-bold">
                  Ready to Build a{" "}
                  <span className="text-[#2b8cff]">Powerful Website?</span>
                </h2>
                <p className="mt-1 text-[13px] text-[#c7d1e0]">
                  Let’s create a website that represents your brand and drives real results.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="h-[46px] px-7 rounded-md bg-[#ffb700] hover:bg-[#ffc329] text-[#061326] font-bold inline-flex items-center gap-3 shadow-lg shadow-yellow-500/20 transition-all">
                Start Your Project
                <ArrowRight size={17} />
              </button>

              <button className="h-[46px] px-7 rounded-md border border-white/25 bg-white/5 hover:bg-white/10 text-white font-semibold inline-flex items-center gap-3 transition-all">
                Schedule a Call
                <Phone size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
