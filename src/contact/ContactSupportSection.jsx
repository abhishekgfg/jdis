import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Rocket,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const contactWays = [
  {
    icon: CalendarDays,
    title: "Schedule a Call",
    desc: "Book a free consultation call with our solution experts.",
    action: "Schedule Now",
    href: "/contact",
    color: "text-[#4f63ff]",
    bg: "bg-[#eef0ff]",
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: "Drop us an email with your requirements anytime.",
    action: "Send Email",
    href: "mailto:info@jdinfotechsolutions.in",
    color: "text-[#28b878]",
    bg: "bg-[#eafaf2]",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    desc: "Chat with our team for instant assistance.",
    action: "Start Chat",
    href: "/contact",
    color: "text-[#ff7a32]",
    bg: "bg-[#fff1e9]",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp Us",
    desc: "Quickest way to connect and get your answers.",
    action: "Chat Now",
    href: "https://wa.me/919523435814",
    color: "text-[#18b86b]",
    bg: "bg-[#eafaf2]",
  },
  {
    icon: FileText,
    title: "Request a Quote",
    desc: "Share your project details and get a custom quote.",
    action: "Request Now",
    href: "/contact",
    color: "text-[#8b5cf6]",
    bg: "bg-[#f2ecff]",
  },
];

const faqs = [
  {
    question: "How quickly will you respond to my inquiry?",
    answer:
      "We usually respond within 24 hours on working days. If you contact us through WhatsApp, our team often replies faster with the first project discussion or next-step guidance.",
  },
  {
    question: "Do you offer free consultation?",
    answer:
      "Yes. We offer a free initial consultation to understand your business goals, project scope, required features, budget range and the best technology approach before you make any commitment.",
  },
  {
    question: "What information should I include in my message?",
    answer:
      "Please share your business type, project idea, required features, target users, preferred timeline and any reference website or app. This helps us suggest the right website, mobile app, CRM, ERP, cloud or AI automation solution.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A business website can take a few weeks, while custom software, e-commerce platforms, mobile apps, CRM or ERP systems usually take 6 to 16 weeks depending on features, integrations and approval speed.",
  },
];

export default function ContactSupportSection() {
  const [openFaq, setOpenFaq] = useState(0);
  const mapQuery = encodeURIComponent(
    "Noida Sector 51 Hoshiyarpur Uttar Pradesh 201301 India"
  );

  return (
    <section className="bg-[#f7faff] pb-12 text-[#151d35]">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10">
        <h2 className="text-center text-[16px] font-extrabold text-[#151d35]">
          Connect With Us Your Way
        </h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {contactWays.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                className="rounded-[6px] border border-[#e1e9f5] bg-white px-5 py-5 text-center shadow-[0_10px_28px_rgba(15,55,105,.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(15,55,105,.1)]"
              >
                <div
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${item.bg}`}
                >
                  <Icon size={24} className={item.color} />
                </div>
                <h3 className="mt-3 text-[13px] font-extrabold">
                  {item.title}
                </h3>
                <p className="mx-auto mt-2 min-h-[40px] max-w-[160px] text-[10px] font-semibold leading-5 text-[#536174]">
                  {item.desc}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-extrabold text-[#1767ff]">
                  {item.action}
                  <ArrowRight size={12} />
                </span>
              </a>
            );
          })}
        </div>

        <div className="relative mt-5 overflow-hidden rounded-[6px] border border-[#dbe6f5] bg-white shadow-[0_10px_28px_rgba(15,55,105,.06)]">
          <iframe
            title="JD Infotech Solutions Noida Sector 51 Hoshiyarpur map"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="h-[210px] w-full border-0 md:h-[235px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(247,250,255,.96)_0%,rgba(247,250,255,.52)_34%,rgba(247,250,255,.04)_100%)]" />

          <div className="absolute left-5 top-1/2 w-[min(360px,calc(100%-40px))] -translate-y-1/2">
            <div className="rounded-[6px] border border-[#dce7f7] bg-white p-4 shadow-[0_12px_30px_rgba(15,55,105,.14)]">
              <div className="flex gap-3">
                <MapPin size={22} className="mt-1 shrink-0 text-[#1767ff]" />
                <div>
                  <h3 className="text-[13px] font-extrabold">
                    JD Infotech Solutions
                  </h3>
                  <p className="mt-2 text-[11px] font-semibold leading-5 text-[#536174]">
                    Noida Sector 51, Hoshiyarpur
                    <br />
                    Uttar Pradesh - 201301, India
                    <br />
                    Mon - Sat: 10:00 AM - 6:00 PM (IST)
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-[10px] font-extrabold text-[#1767ff]"
                  >
                    View on Google Maps
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[.82fr_1.18fr]">
          <div className="rounded-[8px] bg-[#020b1b] p-5 text-white shadow-[0_14px_34px_rgba(2,8,23,.18)]">
            <h2 className="text-[18px] font-extrabold">
              Frequently Asked Questions
            </h2>
            <div className="mt-4 space-y-2">
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
                      className="flex min-h-9 w-full items-center justify-between gap-3 px-4 py-2 text-left text-[11px] font-extrabold text-white"
                    >
                      {faq.question}
                      <ChevronDown
                        size={14}
                        className={`shrink-0 transition-transform ${
                          isOpen ? "rotate-180 text-[#1767ff]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="px-4 pb-4 text-[11px] font-medium leading-6 text-[#b9c8dc]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[8px] bg-[#1767ff] p-7 text-white shadow-[0_16px_36px_rgba(23,103,255,.22)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(255,255,255,.24),transparent_14%),radial-gradient(circle_at_78%_96%,rgba(2,11,27,.28),transparent_30%)]" />
            <div className="absolute bottom-0 right-4 hidden h-[155px] w-[155px] rounded-t-full bg-white/20 md:block" />
            <Rocket className="absolute bottom-8 right-20 hidden h-[98px] w-[98px] text-white drop-shadow-[0_18px_24px_rgba(2,8,23,.22)] md:block" />

            <div className="relative max-w-[560px]">
              <h2 className="text-[28px] font-extrabold leading-tight">
                Ready to Start Your Project?
              </h2>
              <p className="mt-3 max-w-[500px] text-[13px] font-semibold leading-6 text-[#e7efff]">
                Let's discuss how we can help you achieve your business goals
                with the right technology solution.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center gap-3 rounded bg-white px-6 text-[12px] font-extrabold text-[#1767ff]"
                >
                  Discuss Your Project
                  <ArrowRight size={14} />
                </a>
                <a
                  href="/services"
                  className="inline-flex h-11 items-center gap-3 rounded border border-white/40 bg-white/10 px-6 text-[12px] font-extrabold text-white"
                >
                  View Our Services
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
