import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  Code2,
  Lightbulb,
  PhoneCall,
  Rocket,
} from "lucide-react";

const approachSteps = [
  {
    number: "1.",
    title: "Understand",
    desc: "We analyze your business challenges and goals.",
    icon: Lightbulb,
  },
  {
    number: "2.",
    title: "Strategize",
    desc: "Our experts create a custom strategy and solution roadmap.",
    icon: ClipboardList,
  },
  {
    number: "3.",
    title: "Build",
    desc: "We design, develop, and implement with agile methodology.",
    icon: Code2,
  },
  {
    number: "4.",
    title: "Deliver",
    desc: "We deploy, optimize, and ensure measurable results.",
    icon: Rocket,
  },
];

const testimonials = [
  {
    quote:
      "JD Infotech Solutions transformed our idea into a powerful digital platform that exceeded our expectations. Their team is professional, responsive, and truly invested in our success.",
    name: "Michael Thompson",
    role: "CTO, RetailHub",
  },
  {
    quote:
      "The team understood our business quickly and delivered a clean, scalable solution. We saw better user engagement within weeks of launch.",
    name: "Priya Mehra",
    role: "Founder, StyleCart",
  },
  {
    quote:
      "Their process was clear from discovery to deployment. Every feature felt intentional, and the final product made our operations much easier to manage.",
    name: "Arjun Malhotra",
    role: "Operations Head, MediCore",
  },
  {
    quote:
      "We needed speed, security, and a better customer journey. JD Infotech delivered all three without making the project feel complicated.",
    name: "Sarah Williams",
    role: "Product Lead, FinTrust",
  },
  {
    quote:
      "The communication was excellent, and the case-study results speak for themselves. Our team now has a system we can actually grow with.",
    name: "Rohan Kapoor",
    role: "Director, GlobalTech",
  },
  {
    quote:
      "From UI design to backend logic, everything was handled with care. They built a solution that feels modern, fast, and reliable.",
    name: "Emily Carter",
    role: "Marketing Manager, CloudWorks",
  },
];

export default function CaseStudyApproachTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const goPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className="bg-[#f7faff] pb-10 text-[#151d35] sm:pb-12">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_.98fr]">
          <div className="rounded-[10px] border border-[#e8eef8] bg-white/78 p-5 shadow-[0_16px_44px_rgba(15,55,105,.06)] sm:p-7">
            <span className="text-[12px] font-extrabold uppercase tracking-wide text-[#1767ff]">
              Our Approach
            </span>
            <h2 className="mt-2 text-[28px] font-extrabold leading-tight">
              How We Deliver Success
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {approachSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article key={step.title} className="relative">
                    {index < approachSteps.length - 1 && (
                      <div className="absolute left-[58px] top-[33px] hidden w-[88px] border-t border-dashed border-[#1767ff]/45 md:block xl:w-[110px]">
                        <span className="absolute -right-1 -top-[4px] h-2 w-2 rotate-45 border-r border-t border-[#1767ff]/65" />
                      </div>
                    )}

                    <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#d6e4ff] bg-white text-[#1767ff] shadow-[0_10px_24px_rgba(23,103,255,.12)] sm:h-[70px] sm:w-[70px]">
                      <Icon size={31} strokeWidth={2.1} />
                    </div>
                    <h3 className="mt-5 text-[15px] font-extrabold">
                      {step.number} {step.title}
                    </h3>
                    <p className="mt-2 text-[12px] font-semibold leading-6 text-[#536174]">
                      {step.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[10px] bg-[#020b1b] p-5 text-white shadow-[0_18px_44px_rgba(2,8,23,.22)] sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_0%,rgba(23,103,255,.32),transparent_34%),radial-gradient(circle_at_0%_80%,rgba(0,153,255,.18),transparent_28%)]" />
            <div className="relative">
              <span className="text-[12px] font-extrabold uppercase tracking-wide text-[#1767ff]">
                Client Testimonial
              </span>
              <div className="mt-5 text-[46px] font-black leading-none text-[#1767ff] sm:text-[54px]">
                “
              </div>
              <p className="text-[15px] font-medium leading-7 text-[#e7eef9] sm:min-h-[108px] sm:text-[18px] sm:leading-8">
                {activeTestimonial.quote}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[15px] font-extrabold text-[#061326]">
                    {activeTestimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-white">
                      {activeTestimonial.name}
                    </h3>
                    <p className="mt-1 text-[12px] font-semibold text-[#9eb2cf]">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[20px] text-[#ffb525] sm:text-[22px]">
                  {"★★★★★"}
                </div>
              </div>

              <div className="mt-7 flex flex-col items-center justify-between gap-5 sm:flex-row sm:gap-4">
                <div className="flex flex-1 justify-center gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeIndex
                          ? "w-7 bg-[#1767ff]"
                          : "w-2.5 bg-white/28 hover:bg-white/45"
                      }`}
                      aria-label={`Show testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#082858] text-[#9ebfff] transition hover:bg-[#103b78]"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#082858] text-[#9ebfff] transition hover:bg-[#103b78]"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[10px] bg-[#020b1b] shadow-[0_18px_44px_rgba(2,8,23,.18)]">
          <div className="relative flex flex-col gap-6 px-5 py-6 text-white sm:px-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_52%,rgba(67,88,255,.36),transparent_14%),radial-gradient(circle_at_72%_45%,rgba(23,103,255,.22),transparent_28%)]" />
            <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:gap-6 sm:text-left">
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-[#5f72ff]/55 bg-[#14227d] shadow-[0_0_34px_rgba(67,88,255,.42),inset_0_0_24px_rgba(255,255,255,.12)] sm:h-[76px] sm:w-[76px]">
                <Rocket size={32} className="text-white sm:h-9 sm:w-9" />
              </div>
              <div>
                <h2 className="text-[20px] font-bold leading-tight sm:text-[22px]">
                  Have a Challenge? Let's Solve It Together.
                </h2>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#dce8fb]">
                  Share your requirements and our experts will craft the right
                  solution for your business.
                </p>
              </div>
            </div>

            <div className="relative grid gap-3 sm:flex sm:flex-wrap sm:gap-4 lg:pr-8">
              <Link
                to="/contact"
                className="inline-flex h-[48px] w-full items-center justify-center gap-3 rounded-[5px] bg-[#ffb525] px-5 text-[13px] font-extrabold text-[#061326] shadow-[0_12px_28px_rgba(255,181,37,.24)] transition hover:bg-[#ffc84d] sm:w-auto sm:px-7"
              >
                Discuss Your Project
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+919523435814"
                className="inline-flex h-[48px] w-full items-center justify-center gap-3 rounded-[5px] border border-white/35 bg-white/5 px-5 text-[13px] font-extrabold text-white transition hover:bg-white/10 sm:w-auto sm:px-7"
              >
                Schedule a Call
                <PhoneCall size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
