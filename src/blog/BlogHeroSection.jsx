import { ArrowRight, ChevronRight, Search, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "../portfolio/portfolio-hero-bg.svg";

export default function BlogHeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#020b1b] text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,11,27,.98)_0%,rgba(2,11,27,.92)_44%,rgba(2,11,27,.62)_100%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-2/3 bg-[radial-gradient(circle_at_68%_45%,rgba(23,103,255,.3),transparent_31%)]" />

      <div className="mx-auto grid min-h-[420px] max-w-[1480px] items-center gap-8 px-4 py-12 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-2 text-[12px] font-bold">
            <Link to="/" className="text-white/88">
              Home
            </Link>
            <ChevronRight size={15} className="text-white/45" />
            <span className="text-[#ffb525]">Blog</span>
          </div>

          <div className="mt-8 inline-flex h-9 items-center gap-2 rounded-full bg-[#125dd7] px-5 text-[11px] font-extrabold uppercase tracking-wide shadow-[0_10px_24px_rgba(18,93,215,.35)]">
            <Sparkles size={14} />
            Digital Growth Insights
          </div>

          <h1 className="mt-5 max-w-[720px] text-[33px] font-bold leading-[1.08] tracking-normal sm:text-[56px] lg:text-[54px]">
            Practical Tech Ideas
            <span className="block">
              That Help Your <span className="text-[#18a8ff]">Business Grow</span>
            </span>
          </h1>

          <p className="mt-5 max-w-[650px] text-[15px] font-medium leading-8 text-[#e7eef9]">
            Read clear, business-friendly guides on websites, mobile apps, SEO,
            automation, AI, cloud and digital strategy. Each article is written
            to help you make smarter technology decisions before you invest.
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <a
              href="#blog-insights"
              className="inline-flex h-13 w-full items-center justify-center gap-3 rounded bg-[#ffb525] px-5 py-4 text-[13px] font-extrabold text-[#061326] shadow-[0_12px_30px_rgba(255,181,37,.28)] transition hover:bg-[#ffc84d] sm:w-auto sm:px-7"
            >
              Explore Articles
              <ArrowRight size={16} />
            </a>
            <Link
              to="/contact"
              className="inline-flex h-13 w-full items-center justify-center gap-3 rounded border border-white/35 bg-white/5 px-5 py-4 text-[13px] font-extrabold text-white transition hover:bg-white/10 sm:w-auto sm:px-7"
            >
              Book Consultation
              <Search size={16} />
            </Link>
          </div>
        </div>

        <div className="relative hidden min-h-[330px] lg:block">
          <div className="absolute right-0 top-1/2 w-[620px] -translate-y-1/2 rounded-[14px] border border-[#2b66d9]/55 bg-[#061a3d]/72 p-5 shadow-[0_28px_80px_rgba(0,0,0,.34),inset_0_0_44px_rgba(22,104,255,.15)] backdrop-blur-sm">
            <div className="grid gap-4">
              {[
                ["Website ROI", "A website should generate enquiries, not just look good."],
                ["SEO Planning", "Structure, speed and useful content decide long-term visibility."],
                ["AI Automation", "Automate repetitive work without losing human control."],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className="rounded-[10px] border border-[#1f55b8] bg-[#031632]/76 p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-[16px] font-extrabold">{title}</h3>
                    <span className="text-[28px] font-black text-[#1767ff]">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] font-medium leading-6 text-[#c8d6ea]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
