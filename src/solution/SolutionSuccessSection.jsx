
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import ecommerceImg from "../components/images/solution-success-ecommerce.png";
import fintechImg from "../components/images/solution-success-fintech.png";
import healthcareImg from "../components/images/solution-success-healthcare.png";

export default function SolutionSuccessSection() {
  const [activeStudy, setActiveStudy] = useState(null);

  const caseStudies = [
    {
      image: fintechImg,
      title: "Fintech Platform",
      desc: "Built a secure fintech platform that increased transactions by 180%.",
      hook:
        "A growing finance team had the users, the demand, and the market timing, but their product was slowing down exactly when trust mattered most.",
      industry: "Digital payments and lending",
      timeline: "14 weeks",
      challenge:
        "The platform was losing conversion during KYC, support tickets were rising around failed transactions, and leadership needed stronger audit visibility before scaling into new regions.",
      research:
        "We studied onboarding recordings, payment drop-off points, support transcripts, compliance flows, and competitor checkout patterns.",
      solution:
        "We rebuilt the onboarding journey, added real-time transaction status, created role-based dashboards, and hardened backend security.",
      results: [
        "180% increase in completed transactions.",
        "42% fewer KYC-related support tickets.",
        "Admin review time dropped significantly.",
      ],
      takeaway:
        "Pairing security with clarity improved user trust and conversions.",
    },
    {
      image: healthcareImg,
      title: "Healthcare Solution",
      desc: "Developed a digital healthcare solution that improved patient engagement by 65%.",
      hook:
        "A healthcare provider had capable doctors and loyal patients, but care was still being coordinated through calls and paper notes.",
      industry: "Patient care and clinic operations",
      timeline: "12 weeks",
      challenge:
        "Patients were missing follow-ups and staff were repeating manual reminders.",
      research:
        "We interviewed clinic staff and mapped appointment workflows.",
      solution:
        "We designed a patient portal with appointment booking and care-plan reminders.",
      results: [
        "65% improvement in patient engagement.",
        "31% reduction in missed appointments.",
        "Less staff coordination workload.",
      ],
      takeaway:
        "The product succeeded because it reduced pressure on both patients and staff.",
    },
    {
      image: ecommerceImg,
      title: "Ecommerce Platform",
      desc: "Created a scalable ecommerce platform that boosted sales by 120%.",
      hook:
        "An ecommerce brand had strong products, but the site experience made discovery and checkout harder than necessary.",
      industry: "Online retail and growth commerce",
      timeline: "10 weeks",
      challenge:
        "The store had slow product pages and weak mobile checkout.",
      research:
        "We reviewed analytics funnels, heatmaps, and customer support themes.",
      solution:
        "We rebuilt product pages, streamlined checkout, and improved analytics.",
      results: [
        "120% sales uplift.",
        "38% faster mobile page load.",
        "27% lower cart abandonment.",
      ],
      takeaway:
        "Removing friction across the buying journey improved conversion rates.",
    },
  ];

  useEffect(() => {
    if (!activeStudy) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveStudy(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeStudy]);

  return (
    <>
      <section className="bg-[#f8fbff] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Industries We Empower
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Tailored Solutions Built For Unique Industry Challenges
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-yellow-400"></div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">
                    {study.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {study.desc}
                  </p>

                  <button
                    onClick={() => setActiveStudy(study)}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setActiveStudy(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveStudy(null)}
              className="mb-6 rounded-lg border px-4 py-2"
            >
              Close
            </button>

            <img
              src={activeStudy.image}
              alt={activeStudy.title}
              className="mb-6 h-72 w-full rounded-2xl object-cover"
            />

            <h2 className="mb-4 text-3xl font-bold">
              {activeStudy.title}
            </h2>

            <p className="mb-4 text-slate-600">{activeStudy.hook}</p>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div>
                <strong>Industry:</strong> {activeStudy.industry}
              </div>

              <div>
                <strong>Timeline:</strong> {activeStudy.timeline}
              </div>
            </div>

            <h3 className="mb-2 text-xl font-bold">Challenge</h3>
            <p className="mb-6">{activeStudy.challenge}</p>

            <h3 className="mb-2 text-xl font-bold">Research</h3>
            <p className="mb-6">{activeStudy.research}</p>

            <h3 className="mb-2 text-xl font-bold">Solution</h3>
            <p className="mb-6">{activeStudy.solution}</p>

            <h3 className="mb-2 text-xl font-bold">Results</h3>
            <ul className="mb-6 list-disc pl-5">
              {activeStudy.results.map((result, idx) => (
                <li key={idx}>{result}</li>
              ))}
            </ul>

            <h3 className="mb-2 text-xl font-bold">Key Takeaway</h3>
            <p>{activeStudy.takeaway}</p>
          </div>
        </div>
      )}
    </>
  );
}

