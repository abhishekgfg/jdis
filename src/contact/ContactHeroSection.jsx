import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import globeBg from "../components/images/solutions-hero-globe.png";

const heroIcons = [
  {
    icon: Mail,
    className: "left-[14%] top-[11%]",
  },
  {
    icon: Phone,
    className: "right-[12%] top-[10%]",
  },
  {
    icon: MapPin,
    className: "left-[14%] bottom-[12%]",
  },
  {
    icon: MessageSquare,
    className: "right-[12%] bottom-[14%]",
  },
];

const highlights = [
  {
    icon: BadgeCheck,
    title: "Quick Response",
    desc: "We reply within 24 hours",
  },
  {
    icon: UserRoundCheck,
    title: "Expert Guidance",
    desc: "Get free consultation",
  },
  {
    icon: ShieldCheck,
    title: "No Obligation",
    desc: "100% confidential",
  },
];

export default function ContactHeroSection() {
  return (
    <section className="relative min-h-[330px] overflow-hidden bg-[#020b1b] text-white lg:min-h-[380px]">
      <img
        src={globeBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-right-center opacity-88"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#020b1b_0%,rgba(2,11,27,.94)_38%,rgba(2,11,27,.28)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(24,144,255,.2),transparent_24%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-8 px-4 py-9 sm:px-6 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:px-16">
        <div>
          <div className="mb-7 flex items-center gap-2 text-[12px] font-bold">
            <a href="/" className="text-white/88">
              Home
            </a>
            <ChevronRight size={15} className="text-white/45" />
            <span className="text-[#158dff]">Contact Us</span>
          </div>

          <h1 className="max-w-[560px] text-[32px] font-bold leading-[1.08] tracking-normal sm:text-[50px] lg:text-[40px]">
            Let&apos;s Build Something
            <span className="block">
              Amazing <span className="text-[#18a8ff]">Together</span>
            </span>
          </h1>

          <p className="mt-5 max-w-[620px] text-[14px] font-medium leading-7 text-[#e7eef9] sm:text-[15px]">
            Have a project in mind? Get in touch with us and our experts will
            help you turn your ideas into powerful digital solutions.
          </p>

          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
            <a
              href="#contact-form"
              className="inline-flex h-12 w-full items-center justify-center gap-3 rounded bg-[#ffb525] px-6 text-[13px] font-extrabold text-[#061326] shadow-[0_12px_28px_rgba(255,181,37,.28)] transition hover:bg-[#ffc84d] sm:w-auto"
            >
              Start a Conversation
              <ArrowRight size={15} />
            </a>
            <a
              href="tel:+919523435814"
              className="inline-flex h-12 w-full items-center justify-center gap-3 rounded border border-white/35 bg-white/5 px-6 text-[13px] font-extrabold text-white shadow-[0_12px_28px_rgba(0,0,0,.16)] transition hover:bg-white/10 sm:w-auto"
            >
              Call Now
              <Phone size={15} />
            </a>
          </div>

          <div className="mt-7 grid max-w-[650px] gap-4 min-[480px]:grid-cols-2 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[.06] p-3 shadow-[0_12px_28px_rgba(0,0,0,.12)] backdrop-blur-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1767ff]/55 bg-[#0b2a6f]/70 text-[#5fb0ff] shadow-[0_0_20px_rgba(23,103,255,.24)]">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-[12px] font-extrabold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[10px] font-semibold text-[#c7d7ef]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative hidden min-h-[285px] lg:block">
          <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#27c4ff]/28 bg-[#0b57c7]/8 shadow-[0_0_80px_rgba(21,141,255,.34)]" />
          <div className="absolute left-1/2 top-1/2 z-10 w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-[14px] border border-[#2d7bff]/35 bg-[#061a3a]/82 p-5 text-center shadow-[0_18px_42px_rgba(0,0,0,.28),inset_0_0_28px_rgba(45,123,255,.15)] backdrop-blur-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1767ff] text-white shadow-[0_0_24px_rgba(23,103,255,.42)]">
              <MessageSquare size={22} />
            </div>
            <p className="mt-4 text-[12px] font-extrabold uppercase tracking-wide text-[#7fc4ff]">
              Free Consultation
            </p>
            <h3 className="mt-1 text-[22px] font-black leading-none text-white">
              24h
            </h3>
            <p className="mt-2 text-[11px] font-semibold leading-5 text-[#c7d7ef]">
              Average response time for new project enquiries.
            </p>
          </div>
          <div className="absolute left-[18%] right-[18%] top-1/2 border-t border-dashed border-[#168dff]/28" />
          <div className="absolute bottom-[17%] left-[23%] right-[23%] border-t border-dashed border-[#168dff]/28" />
          <div className="absolute left-[23%] top-[20%] h-[170px] rotate-[26deg] border-l border-dashed border-[#168dff]/28" />
          <div className="absolute right-[23%] top-[20%] h-[170px] -rotate-[26deg] border-l border-dashed border-[#168dff]/28" />

          {heroIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`absolute ${item.className} flex h-[62px] w-[62px] items-center justify-center rounded-full border border-[#2d7bff]/45 bg-[#071a3a]/86 text-[#b8d8ff] shadow-[0_16px_36px_rgba(0,0,0,.32),inset_0_0_22px_rgba(45,123,255,.18)] backdrop-blur-sm`}
              >
                <Icon size={28} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
