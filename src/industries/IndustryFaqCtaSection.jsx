import { useState } from "react";
import { ArrowRight, MessageSquareText, Phone, Plus } from "lucide-react";
import globeBg from "../components/images/solutions-hero-globe.png";

const faqs = [
  {
    question: "Which industries do you serve?",
    answer:
      "We build custom software, websites, mobile apps, CRM, ERP and automation solutions for healthcare, real estate, finance, education, e-commerce, logistics, manufacturing, travel and service-based businesses.",
  },
  {
    question: "Can you integrate AI features in solutions?",
    answer:
      "Yes. We can add AI chatbots, recommendation systems, smart search, document automation, predictive analytics and workflow automation based on your business goals and available data.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Our team works with modern technologies like React, Node.js, React Native, cloud hosting, secure APIs, payment gateways, CRM integrations, analytics tools and AI-powered automation platforms.",
  },
  {
    question: "Can solutions be customized for our business?",
    answer:
      "Yes. Every solution is planned around your workflow, customer journey, team structure and growth goals, so you get software that fits your operations instead of a generic template.",
  },
  {
    question: "How long does it take to develop a solution?",
    answer:
      "Timelines depend on features and complexity. A focused business website can take a few weeks, while a custom CRM, ERP, marketplace or mobile app usually takes 8 to 16 weeks after discovery and planning.",
  },
  {
    question: "Is my data secure with your solutions?",
    answer:
      "Yes. We follow secure development practices including role-based access, protected APIs, encrypted communication, reliable hosting, backups and security-focused testing before deployment.",
  },
  {
    question: "Do you provide support after deployment?",
    answer:
      "Yes. We provide post-launch support, bug fixes, performance monitoring, feature improvements and maintenance so your digital solution keeps running smoothly as your business grows.",
  },
  {
    question: "Do you provide mobile apps too?",
    answer:
      "Yes. We design and develop Android and iOS mobile apps for customer portals, booking systems, delivery platforms, healthcare apps, real estate apps and internal business tools.",
  },
];

export default function IndustryFaqCtaSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="bg-[#f8fbff] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-8 lg:px-10">
        <div className="mb-4 flex items-start justify-between gap-5">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#1767ff]">
              Frequently Asked Questions
            </span>
            <h2 className="mt-1 text-[24px] font-extrabold leading-tight text-[#0a1830] sm:text-[34px] lg:text-[36px]">
              Have Questions? We Have Answers!
            </h2>
            <div className="mt-2 h-[3px] w-[35px] rounded-full bg-[#f6b51f]" />
          </div>

          <button
            type="button"
            onClick={() => setOpenFaq("all")}
            className="hidden items-center gap-2 pt-5 text-[12px] font-extrabold text-[#1767ff] sm:inline-flex"
          >
            View All FAQs
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index || openFaq === "all";

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[6px] border border-[#dce7f7] bg-white shadow-[0_8px_24px_rgba(15,55,105,.06)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex min-h-[45px] w-full items-center justify-between gap-3 px-4 py-3 text-left text-[13px] font-extrabold text-[#0a1830]"
                  aria-expanded={isOpen}
                >
                  <span className="leading-5">{faq.question}</span>
                  <Plus
                    size={16}
                    strokeWidth={3}
                    className={`shrink-0 text-[#0a1830] transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-[#1767ff]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-[12px] font-semibold leading-6 text-[#475569]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative mt-5 overflow-hidden rounded-[12px] border border-[#1767ff]/60 bg-[#061b45] shadow-[0_16px_40px_rgba(2,8,23,.16)]">
          <img
            src={globeBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,18,48,.96)_0%,rgba(3,29,76,.9)_44%,rgba(6,45,122,.58)_100%)]" />
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_78%_28%,rgba(37,143,255,.72),transparent_13%),radial-gradient(circle_at_62%_58%,rgba(0,110,255,.4),transparent_34%)]" />

          <div className="relative z-10 flex min-h-[138px] flex-col items-stretch justify-between gap-5 px-5 py-6 text-center sm:px-8 lg:flex-row lg:items-center lg:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
              <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full border border-[#2293ff]/55 bg-[#1265ff]/18 shadow-[inset_0_0_28px_rgba(23,103,255,.28),0_0_34px_rgba(23,103,255,.24)] sm:h-[76px] sm:w-[76px]">
                <MessageSquareText
                  size={34}
                  strokeWidth={2.2}
                  className="text-[#45a7ff]"
                />
              </div>

              <div>
                <h2 className="text-[22px] font-bold leading-tight text-white sm:text-[34px] lg:text-[28px]">
                  Ready To{" "}
                  <span className="text-[#36a8ff]">
                    Transform Your Industry?
                  </span>
                </h2>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#dce8fb]">
                  Let's build innovative digital solutions that drive measurable
                  business growth.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap lg:pr-6">
              <a
                href="/contact"
                className="inline-flex h-[43px] w-full items-center justify-center gap-3 rounded-[5px] bg-[#f6b51f] px-6 text-[12px] font-extrabold text-[#061326] shadow-[0_10px_24px_rgba(246,181,31,.22)] transition hover:bg-[#ffc83d] sm:w-auto"
              >
                Start Your Project
                <ArrowRight size={15} />
              </a>
              <a
                href="tel:+919523435814"
                className="inline-flex h-[43px] w-full items-center justify-center gap-3 rounded-[5px] border border-white/35 bg-white/5 px-6 text-[12px] font-extrabold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Schedule A Call
                <Phone size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
