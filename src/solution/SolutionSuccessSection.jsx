import { ArrowRight, Phone, PhoneCall } from "lucide-react";
import ecommerceImg from "../components/images/solution-success-ecommerce.png";
import fintechImg from "../components/images/solution-success-fintech.png";
import healthcareImg from "../components/images/solution-success-healthcare.png";

export default function SolutionSuccessSection() {
  const caseStudies = [
    {
      image: fintechImg,
      title: "Fintech Platform",
      desc: "Built a secure fintech platform that increased transactions by 180%.",
    },
    {
      image: healthcareImg,
      title: "Healthcare Solution",
      desc: "Developed a digital healthcare solution that improved patient engagement by 65%.",
    },
    {
      image: ecommerceImg,
      title: "Ecommerce Platform",
      desc: "Created a scalable ecommerce platform that boosted sales by 120%.",
    },
  ];

  return (
    <section className="bg-white pb-8">
      <div className="mx-auto px-6 lg:px-12">
        <div className="overflow-hidden rounded-lg bg-[#020b1b] p-5 text-white shadow-[0_16px_40px_rgba(2,8,23,.14)]">
          <div className="grid gap-5 lg:grid-cols-[.88fr_1fr_1fr_1fr]">
            <div className="flex min-h-[180px] flex-col justify-center">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1b7cff]">
                Success Story
              </span>
              <h2 className="mt-3 max-w-[300px] text-[25px] font-extrabold leading-tight lg:text-[29px]">
                How We Helped Businesses Achieve{" "}
                <span className="text-[#ffc126]">Real Results</span>
              </h2>
              <a
                href="/casestudy"
                className="mt-6 inline-flex h-11 w-fit items-center gap-3 rounded bg-[#1265ff] px-6 text-[12px] font-extrabold text-white shadow-[0_10px_24px_rgba(18,101,255,.25)]"
              >
                View Case Studies
                <ArrowRight size={15} />
              </a>
            </div>

            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="overflow-hidden rounded-lg border border-[#244060] bg-[#061326]"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-[94px] w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-[14px] font-extrabold text-white">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-[11px] font-medium leading-5 text-[#c5d2e4]">
                    {study.desc}
                  </p>
                  <a
                    href="/casestudy"
                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-extrabold text-[#2a8cff]"
                  >
                    View Case Study
                    <ArrowRight size={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-3 overflow-hidden rounded-lg bg-[#020b1b] px-6 py-5 text-white shadow-[0_16px_40px_rgba(2,8,23,.14)]">
          <div className="grid items-center gap-5 lg:grid-cols-[auto_1fr_auto]">
            <div className="flex h-[68px] w-[68px] items-center justify-center rounded-lg border border-[#1265ff]/60 bg-[#061a36] text-[#1265ff] shadow-[0_0_24px_rgba(18,101,255,.35)]">
              <PhoneCall size={36} />
            </div>

            <div>
              <h2 className="text-[24px] font-extrabold leading-tight lg:text-[29px]">
                Let's Build the{" "}
                <span className="text-[#ffc126]">Right Solution</span> for Your
                Business
              </h2>
              <p className="mt-2 text-[13px] font-medium text-[#d2ddec]">
                Share your requirements and our experts will get back to you
                with the best solution.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex h-12 items-center gap-4 rounded bg-[#ffc126] px-7 text-[13px] font-extrabold text-[#071426]"
              >
                Discuss Your Project
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:+919999999999"
                className="inline-flex h-12 items-center gap-4 rounded border border-white/30 bg-white/5 px-7 text-[13px] font-extrabold text-white"
              >
                Schedule a Call
                <Phone size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
