import { ArrowRight, CheckCircle, Cloud, ShieldCheck, Gem } from "lucide-react";
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
    <section className="bg-[#f8fbff] py-16">
      <div className=" mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.05fr_1fr_1.8fr] gap-6 items-stretch">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#145cff]">
              About JD Infotech Solutions
            </span>

            <h2 className="mt-3 text-[34px] lg:text-[24px] leading-[1.15] font-bold text-[#071426]">
              Technology Partner for <br />
              Global{" "}
              <span className="text-[#145cff]">Digital Growth</span>
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-[#536174] max-w-[390px]">
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

            <button className="mt-7 w-fit h-[48px] px-6 rounded-md bg-[#061326] hover:bg-[#0b1d38] text-white font-semibold flex items-center gap-3 shadow-lg transition-all">
              Know More About Us
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Image */}
          <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#dbe7f5] min-h-[360px]">
            <img
              src={aboutImg}
              alt="JD Infotech office building"
              className="w-full h-full object-cover"
            />

            <div className="absolute right-0 bottom-0 bg-[#061326] text-white w-[110px] h-[110px] rounded-tl-xl flex flex-col items-center justify-center shadow-xl">
              <h3 className="text-[30px] font-bold leading-none">5+</h3>
              <p className="mt-2 text-[13px] text-[#ffb700] font-semibold leading-tight text-center">
                Years of <br /> Excellence
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="bg-white rounded-xl border border-[#e5edf7] shadow-[0_10px_35px_rgba(15,23,42,0.06)] p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#f3f7ff] flex items-center justify-center mb-5">
                      <Icon size={28} className="text-[#145cff]" />
                    </div>

                    <h3 className="text-[18px] font-bold text-[#071426] mt-1">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-[15px] leading-6 text-[#536174]">
                      {card.text}
                    </p>
                  </div>

                  <button className="mt-8 text-[#145cff] font-semibold flex items-center gap-2">
                    Learn More
                    <ArrowRight size={17} />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}