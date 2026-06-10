import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Lock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FaSkype, FaWhatsapp } from "react-icons/fa";

const services = [
  "Website Development",
  "Mobile App Development",
  "E-commerce Development",
  "CRM / ERP Solution",
  "AI & Automation",
  "Cloud Deployment",
];

const contactItems = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 6200594193, +91 9523435814,+91 6202000340", "Mon - Sat: 9:30 AM - 7:00 PM (IST)"],
    color: "text-[#5d7cff]",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@jdinfotechsolutions.in", "We reply within 24 hours"],
    color: "text-[#6b8cff]",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      "Noida Sector 51, Hoshiyarpur",
      "Uttar Pradesh - 201301, India",
      "Mon - Sat: 10:00 AM - 6:00 PM (IST)",
    ],
    color: "text-[#6b8cff]",
  },
  {
    icon: FaSkype,
    title: "Skype",
    lines: ["jdinfotechsolutions"],
    color: "text-[#6b8cff]",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    lines: ["+91 6200594193 +91 9523435814", "Chat with us on WhatsApp"],
    color: "text-[#10c76f]",
  },
];

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    details: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "New Contact Enquiry",
      `Name: ${form.name}`,
      `Work Email: ${form.email}`,
      `Phone Number: ${form.phone || "Not provided"}`,
      `Company Name: ${form.company || "Not provided"}`,
      `Service Interested In: ${form.service || "Not selected"}`,
      `Project Details: ${form.details}`,
    ].join("\n");

    window.open(
      `https://wa.me/919523435814?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="bg-[#f7faff] py-12 text-[#151d35]">
      <div className="mx-auto grid max-w-[1480px] gap-7 px-5 sm:px-8 lg:grid-cols-[1.45fr_.95fr] lg:px-10">
        <form
          onSubmit={handleSubmit}
          className="rounded-[8px] border border-[#e0e8f4] bg-white p-6 shadow-[0_14px_36px_rgba(15,55,105,.08)] sm:p-8"
        >
          <div className="flex items-start gap-3">
            <Send size={27} className="mt-1 text-[#1767ff]" />
            <div>
              <h2 className="text-[26px] font-extrabold leading-tight">
                Send Us a Message
              </h2>
              <p className="mt-2 text-[13px] font-semibold text-[#536174]">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-[12px] font-extrabold">
                Your Name <span className="text-[#ef4444]">*</span>
              </span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="mt-2 h-12 w-full rounded-[5px] border border-[#dce7f7] px-4 text-[13px] font-semibold text-[#151d35] outline-none transition focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/12"
              />
            </label>

            <label className="block">
              <span className="text-[12px] font-extrabold">
                Work Email <span className="text-[#ef4444]">*</span>
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="mt-2 h-12 w-full rounded-[5px] border border-[#dce7f7] px-4 text-[13px] font-semibold text-[#151d35] outline-none transition focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/12"
              />
            </label>

            <label className="block">
              <span className="text-[12px] font-extrabold">Phone Number</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="mt-2 h-12 w-full rounded-[5px] border border-[#dce7f7] px-4 text-[13px] font-semibold text-[#151d35] outline-none transition focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/12"
              />
            </label>

            <label className="block">
              <span className="text-[12px] font-extrabold">Company Name</span>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Enter your company name"
                className="mt-2 h-12 w-full rounded-[5px] border border-[#dce7f7] px-4 text-[13px] font-semibold text-[#151d35] outline-none transition focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/12"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-[12px] font-extrabold">
              Service Interested In
            </span>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="mt-2 h-12 w-full rounded-[5px] border border-[#dce7f7] bg-white px-4 text-[13px] font-semibold text-[#6b7280] outline-none transition focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/12"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 block">
            <span className="text-[12px] font-extrabold">
              Project Details <span className="text-[#ef4444]">*</span>
            </span>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              required
              placeholder="Tell us about your project, goals and requirements..."
              className="mt-2 h-[150px] w-full resize-none rounded-[5px] border border-[#dce7f7] px-4 py-3 text-[13px] font-semibold text-[#151d35] outline-none transition focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/12"
            />
          </label>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex h-12 w-fit items-center justify-center gap-3 rounded-[5px] bg-[#1767ff] px-7 text-[13px] font-extrabold text-white shadow-[0_12px_24px_rgba(23,103,255,.22)] transition hover:bg-[#0f55da]"
            >
              Send Message
              <ArrowRight size={15} />
            </button>
            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#6b7280]">
              <Lock size={14} />
              Your information is safe with us
            </div>
          </div>
        </form>

        <aside className="relative overflow-hidden rounded-[8px] bg-[#020b1b] p-7 text-white shadow-[0_18px_42px_rgba(2,8,23,.18)] sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(23,103,255,.22),transparent_35%),radial-gradient(circle_at_0%_90%,rgba(0,153,255,.13),transparent_30%)]" />
          <div className="relative">
            <h2 className="text-[26px] font-extrabold">Get in Touch</h2>
            <div className="mt-3 h-[3px] w-10 rounded-full bg-[#1767ff]" />
            <p className="mt-5 max-w-[360px] text-[13px] font-medium leading-6 text-[#dce8fb]">
              We're here to help and answer any question you might have. We look
              forward to hearing from you.
            </p>

            <div className="mt-7 space-y-6">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b2a6f]/70 shadow-[0_0_24px_rgba(23,103,255,.16)]">
                      <Icon size={22} className={item.color} />
                    </div>
                    <div>
                      <h3 className="text-[13px] font-extrabold text-white">
                        {item.title}
                      </h3>
                      <div className="mt-1 space-y-1">
                        {item.lines.map((line) => (
                          <p
                            key={line}
                            className="text-[12px] font-semibold leading-5 text-[#dce8fb]"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
