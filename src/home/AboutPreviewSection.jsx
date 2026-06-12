import { ArrowRight, CheckCircle, Cloud, ShieldCheck, Gem } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImg from "../components/images/aboutj.png";

export default function AboutPreviewSection() {
  const cards = [
    {
      icon: Cloud,
      title: "Our Mission",
      text: "Empowering businesses with innovative technology solutions that drive growth and efficiency.",
    },
    {
      icon: ShieldCheck,
      title: "Our Vision",
      text: "To be a global leader in digital transformation by delivering excellence, innovation and value.",
    },
    {
      icon: Gem,
      title: "Our Values",
      text: "We believe in integrity, transparency, quality and long-term partnership.",
    },
  ];

  return (
    <section className="bg-[#f8fbff] py-10 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid gap-6 items-stretch lg:grid-cols-[1.05fr_1fr_1.8fr]">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#145cff]">
              About JD Infotech Solutions
            </span>

            <h2 className="mt-3 text-[28px] leading-[1.15] font-bold text-[#071426] sm:text-[34px] lg:text-[24px]">
              Technology Partner for <br className="hidden sm:block" />
              Global{" "}
              <span className="text-[#145cff]">Digital Growth</span>
            </h2>

            <p className="mt-5 max-w-[390px] text-[14px] leading-7 text-[#536174] sm:text-[15px] lg:mt-6">
              We deliver innovative digital solutions that help businesses grow,
              scale and stay ahead in the digital world. Our mission is to
              create smart, secure and scalable technology that drives real impact.
            </p>

            <ul className="mt-6 space-y-1">
              {["Our Mission", "Our Vision", "Core Values"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#1d2b3f] font-medium">
                  <CheckCircle size={18} className="text-[#145cff] fill-[#145cff]/10" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="mt-7 flex h-[48px] w-full items-center justify-center gap-3 rounded-md bg-[#061326] px-6 font-semibold text-white shadow-lg transition-all hover:bg-[#0b1d38] sm:w-fit"
            >
              Know More About Us
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Image */}
          <div className="relative min-h-[280px] overflow-hidden rounded-xl border border-[#dbe7f5] shadow-xl sm:min-h-[360px]">
            <img
              src={aboutImg}
              alt="JD Infotech office building"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 right-0 flex h-[96px] w-[96px] flex-col items-center justify-center rounded-tl-xl bg-[#061326] text-white shadow-xl sm:h-[110px] sm:w-[110px]">
              <h3 className="text-[26px] font-bold leading-none sm:text-[30px]">5+</h3>
              <p className="mt-2 text-center text-[12px] font-semibold leading-tight text-[#ffb700] sm:text-[13px]">
                Years of <br /> Excellence
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="flex flex-col justify-between rounded-xl border border-[#e5edf7] bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#f3f7ff] flex items-center justify-center mb-5">
                      <Icon size={28} className="text-[#145cff]" />
                    </div>

                    <h3 className="text-[18px] font-bold text-[#071426] mt-1">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-[#536174] sm:text-[15px]">
                      {card.text}
                    </p>
                  </div>

                  <Link
                    to="/about"
                    className="mt-8 text-[#145cff] font-semibold flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight size={17} />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
