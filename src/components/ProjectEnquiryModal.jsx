import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const ProjectEnquiryContext = createContext(null);

const ctaTextPattern =
  /\b(start|discuss|tell us about|contact)\b.*\b(project|consultation|requirement|us)\b|\b(start project|start your project|discuss your project|discuss similar project|contact us)\b/i;

function shouldOpenProjectModal(target) {
  const trigger = target.closest("a, button");

  if (!trigger) return false;

  const href = trigger.getAttribute("href") || "";
  const text = trigger.textContent?.replace(/\s+/g, " ").trim() || "";

  if (href.startsWith("tel:") || href.startsWith("mailto:")) return false;
  if (trigger.dataset.projectModal === "false") return false;
  if (trigger.dataset.projectModal === "true") return true;

  return href === "/contact" || ctaTextPattern.test(text);
}

export function ProjectEnquiryProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const handleClick = (event) => {
      if (!shouldOpenProjectModal(event.target)) return;

      event.preventDefault();
      event.stopPropagation();
      setIsOpen(true);
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({
      openProjectEnquiry: () => setIsOpen(true),
      closeProjectEnquiry: () => setIsOpen(false),
    }),
    []
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "New Project Consultation Request",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Service: ${form.service || "Not selected"}`,
      `Message: ${form.message}`,
    ].join("\n");

    window.open(
      `https://wa.me/919523435814?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setIsOpen(false);
    setForm({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <ProjectEnquiryContext.Provider value={value}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020817]/78 px-4 py-6 backdrop-blur-sm"
            onMouseDown={() => setIsOpen(false)}
          >
            <motion.form
              initial={{ y: 24, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSubmit}
              onMouseDown={(event) => event.stopPropagation()}
              className="relative w-full max-w-xl rounded-2xl border border-[#23456e] bg-white p-6 shadow-[0_35px_100px_rgba(2,8,23,.38)]"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                aria-label="Close project form"
              >
                <X size={18} />
              </button>

              <div className="pr-10">
                <span className="text-[12px] font-extrabold uppercase tracking-wide text-[#1767ff]">
                  Free Consultation
                </span>
                <h2 className="mt-1 text-[26px] font-extrabold leading-tight text-slate-900">
                  Tell Us About Your Project
                </h2>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-slate-600">
                  Fill this short form and your project details will be sent
                  directly to WhatsApp for a quick callback.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="h-12 rounded-lg border border-slate-200 px-4 text-[13px] font-semibold outline-none focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/10"
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone number"
                  className="h-12 rounded-lg border border-slate-200 px-4 text-[13px] font-semibold outline-none focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/10"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="h-12 rounded-lg border border-slate-200 px-4 text-[13px] font-semibold outline-none focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/10"
                />
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-[13px] font-semibold text-slate-500 outline-none focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/10"
                >
                  <option value="">Select service</option>
                  <option>Website Development</option>
                  <option>Mobile App Development</option>
                  <option>E-commerce Development</option>
                  <option>CRM / ERP Solution</option>
                  <option>AI & Automation</option>
                  <option>Cloud Deployment</option>
                </select>
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell us your requirement..."
                className="mt-4 h-28 w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-[13px] font-semibold outline-none focus:border-[#1767ff] focus:ring-2 focus:ring-[#1767ff]/10"
              />

              <button
                type="submit"
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#1767ff] px-6 text-[13px] font-extrabold text-white shadow-[0_12px_24px_rgba(23,103,255,.22)] transition hover:bg-[#0f55da]"
              >
                Send to WhatsApp
                <ArrowRight size={15} />
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </ProjectEnquiryContext.Provider>
  );
}

export function useProjectEnquiry() {
  const context = useContext(ProjectEnquiryContext);

  if (!context) {
    throw new Error(
      "useProjectEnquiry must be used inside ProjectEnquiryProvider"
    );
  }

  return context;
}
