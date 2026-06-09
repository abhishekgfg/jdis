import { ArrowRight, CircleCheck } from "lucide-react";
import healthcareImage from "./image/industry-healthcare.png";
import financeImage from "./image/industry-finance.png";
import realEstateImage from "./image/industry-real-estate.png";

const industries = [
  {
    title: "Healthcare",
    image: healthcareImage,
    description:
      "We build secure and scalable healthcare solutions that improve patient care and streamline hospital operations.",
    solutions: [
      "Telemedicine Solutions",
      "Hospital Management Systems",
      "Patient Portals & EMR",
      "Pharmacy Management",
    ],
  },
  {
    title: "Finance",
    image: financeImage,
    description:
      "Delivering secure and compliant financial solutions that help businesses and customers grow.",
    solutions: [
      "Digital Banking Solutions",
      "Loan Management Systems",
      "Investment Platforms",
      "Payment Gateways",
    ],
  },
  {
    title: "Real Estate",
    image: realEstateImage,
    description:
      "We help real estate businesses manage properties, leads and customers efficiently.",
    solutions: [
      "Property Listing Portals",
      "CRM For Real Estate",
      "Lead Management",
      "Virtual Tour Solutions",
    ],
  },
];

export default function IndustryFocusSection() {
  return (
    <section className="relative overflow-hidden bg-[#011734] py-10 text-white sm:py-12 lg:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(23,125,255,.24),transparent_24%),radial-gradient(circle_at_87%_3%,rgba(0,198,255,.12),transparent_22%)]" />
      <div className="relative mx-auto  px-5 sm:px-8 lg:px-10">
        <div className="mb-5">
          <span className="text-[12px] font-extrabold uppercase tracking-wide text-[#1598ff]">
            Industry Focus
          </span>
          <h2 className="mt-1 text-[27px] font-extrabold leading-tight text-white sm:text-[34px] lg:text-[36px]">
            Solutions Built For Your Industry
          </h2>
          <div className="mt-2 h-[3px] w-[35px] rounded-full bg-[#f8b51d]" />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="group grid min-h-[260px] overflow-hidden rounded-[8px] border border-[#245183] bg-[#071f42]/95 shadow-[0_20px_50px_rgba(0,0,0,.28)] backdrop-blur sm:grid-cols-[1fr_1fr]"
            >
              <div className="relative min-h-[220px] overflow-hidden sm:min-h-full">
                <img
                  src={industry.image}
                  alt={`${industry.title} digital solutions`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,23,52,.06),rgba(1,23,52,.26))]" />
              </div>

              <div className="flex min-h-[260px] flex-col justify-center px-5 py-6 sm:px-6">
                <h3 className="text-[18px] font-extrabold text-white">
                  {industry.title}
                </h3>
                <p className="mt-4 text-[12px] font-semibold leading-6 text-[#d6e6fb]">
                  {industry.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {industry.solutions.map((solution) => (
                    <li
                      key={solution}
                      className="flex items-center gap-2 text-[12px] font-semibold text-[#dce9fb]"
                    >
                      <CircleCheck
                        size={14}
                        strokeWidth={2.5}
                        className="shrink-0 text-[#f6b91f]"
                      />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-[13px] font-extrabold text-[#f6b91f] transition group-hover:gap-3"
                >
                  Explore Solutions
                  <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
