import {
  ArrowRight,
  Star,
  Quote,
  ChevronRight,
  ChevronLeft,
  MapPin,
} from "lucide-react";
import { useState, useEffect } from "react";

import globeMap from "../components/images/global-map.png";

export default function TrustGlobalCTASection() {
  const locations = ["India", "UAE", "USA", "UK", "Europe", "Australia"];

  const testimonials = [
    {
      id: 1,
      text: "JD Infotech Solutions delivered an amazing platform that improved our business operations and increased our efficiency by 200%. Highly professional team!",
      name: "Sanjay Yadav",
      title: "CEO, HealthPlus India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop",
    },
    {
      id: 2,
      text: "Exceptional service and outstanding results! The team understood our requirements perfectly and delivered a solution that exceeded all expectations.",
      name: "Nisha Sagar",
      title: "Founder, TechInnovate",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop",
    },
    {
      id: 3,
      text: "Working with JD Infotech was a game-changer for our startup. Their expertise in web development is unmatched. Highly recommended!",
      name: "Shuvam Verma",
      title: "CEO, EcommercePro Delhi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop",
    },
    {
      id: 4,
      text: "The team delivered our project on time and within budget. Their communication and professionalism were exceptional throughout.",
      name: "Mohammed Hassan",
      title: "Director, FinanceFlow Dubai",
      image: "https://images.unsplash.com/photo-1507539332150-34c366fd7ad2?q=80&w=120&auto=format&fit=crop",
    },
    {
      id: 5,
      text: "Outstanding work! JD Infotech transformed our vision into a powerful digital presence. The entire process was smooth and professional.",
      name: "Arjun Singh",
      title: "Founder, LogisticHub",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=120&auto=format&fit=crop",
    },
    {
      id: 6,
      text: "Best decision we made for our company! The team's technical knowledge and dedication resulted in a world-class platform.",
      name: "Anjali Verma",
      title: "CEO, DigitalMarket",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=120&auto=format&fit=crop",
    },
    {
      id: 7,
      text: "Incredible experience from start to finish! JD Infotech not only met our requirements but also suggested innovative features we hadn't considered.",
      name: "Vikram Mehta",
      title: "Founder, CloudSolutions",
      image: "https://images.unsplash.com/photo-1519085360771-9852d59a493a?q=80&w=120&auto=format&fit=crop",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const pins = [
    "left-[22%] top-[35%]",
    "left-[55%] top-[38%]",
    "left-[60%] top-[50%]",
    "left-[73%] top-[44%]",
    "left-[82%] top-[72%]",
    "left-[35%] top-[65%]",
  ];

  return (
    <section className="bg-[#f8fbff] py-8 lg:py-6">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid gap-4 items-stretch lg:grid-cols-[1.15fr_1.7fr_1fr]">
          {/* Testimonial */}
          <div className="relative min-h-[320px] rounded-xl border border-[#e5edf7] bg-white p-4 shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#145cff]">
              What Our Clients Say
            </span>

            <h2 className="mt-2 pr-8 text-[20px] font-bold leading-tight text-[#071426] sm:pr-0 sm:text-[22px]">
              Trusted by Businesses Worldwide
            </h2>

            <div className="mt-4 rounded-xl border border-[#eef3fb] bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
              <Quote size={24} className="text-[#145cff] fill-[#145cff]/10" />

              <p className="mt-3 text-[12px] leading-5 text-[#536174]">
                {testimonials[currentTestimonial].text}
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <h4 className="text-[13px] font-bold text-[#145cff]">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-[11px] text-[#536174]">
                      {testimonials[currentTestimonial].title}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[#ffb700]">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star key={item} size={13} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#145cff] bg-[#145cff] text-white shadow-md transition-all hover:bg-[#0f3da6] sm:top-1/2 sm:-translate-y-1/2"
            >
              <ChevronRight size={16} />
            </button>

            <button
              onClick={prevTestimonial}
              className="absolute right-14 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#e5edf7] bg-white text-[#145cff] shadow-md transition-all hover:bg-gray-50 sm:left-4 sm:right-auto sm:top-1/2 sm:-translate-y-1/2"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="mt-4 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "w-5 bg-[#145cff]"
                      : "w-2 bg-[#cfdaf0] hover:bg-[#b0c4de]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Global Map */}
          <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-[#183456] bg-[#061326] shadow-[0_15px_40px_rgba(2,8,23,0.18)] sm:min-h-[320px]">
            <img
              src={globeMap}
              alt="Serving clients across the globe"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#03101f]/95 via-[#03101f]/55 to-[#03101f]/25" />

            <div className="relative z-20 flex h-full flex-col sm:flex-row">
              <div className="w-full p-5 sm:w-[300px] sm:p-6">
                <h2 className="text-[24px] font-bold leading-tight text-white sm:text-[26px]">
                  Serving Clients
                  <br />
                  Across the Globe
                </h2>

                <ul className="mt-5 grid grid-cols-2 gap-3 space-y-0 sm:block sm:space-y-3">
                  {locations.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-white text-[13px]"
                    >
                      <span className="w-3 h-3 rounded-full bg-[#145cff] shadow-[0_0_12px_#145cff]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[190px] flex-1 sm:min-h-0">
                {pins.map((pin, index) => (
                  <div key={index} className={`absolute ${pin}`}>
                    <div className="relative">
                      <span className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-40" />
                      <div className="relative w-8 h-8 rounded-full bg-[#145cff] flex items-center justify-center shadow-[0_0_20px_#145cff]">
                        <MapPin size={17} className="text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex min-h-[260px] flex-col justify-center rounded-xl border border-[#e5edf7] bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] lg:min-h-[320px]">
            <h2 className="text-[22px] leading-tight font-bold text-[#071426]">
              Have a Project in Mind?
            </h2>

            <p className="mt-4 text-[13px] leading-6 text-[#536174] max-w-[250px]">
              Let’s turn your ideas into powerful digital solutions.
            </p>

            <button className="mt-5 inline-flex h-[48px] w-full items-center justify-center gap-3 rounded-md bg-[#ffb700] px-6 font-bold text-[#061326] shadow-lg shadow-yellow-500/20 transition-all hover:bg-[#ffc329] sm:w-fit">
              Start Your Project
              <ArrowRight size={17} />
            </button>

            <p className="mt-5 text-[12px] text-[#536174]">
              Or schedule a free consultation
            </p>

            <button className="mt-2 text-[#145cff] text-[13px] font-bold text-left">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
