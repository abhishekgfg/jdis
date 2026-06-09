import { ArrowRight, Phone, Quote, Rocket, Star } from "lucide-react";
import blogAi from "../components/images/b1.png";
import blogCloud from "../components/images/b2.png";
import blogSecurity from "../components/images/b3.png";
import blogDesign from "../service/image/website-overview.png";
import davidImg from "../components/images/deepak.jpeg";
import johnImg from "../components/images/Vivek.jpeg";
import sarahImg from "../components/images/Shubham.jpeg";

const testimonials = [
  {
    quote:
      "JD Infotech Solutions delivered beyond our expectations. Their team was professional, responsive, and truly understood our business needs.",
    name: "John Michael",
    role: "CTO, FinServe Inc.",
    image: johnImg,
  },
  {
    quote:
      "The team at JD Infotech is highly skilled and reliable. They delivered our project on time and helped us achieve outstanding results.",
    name: "Sarah Thompson",
    role: "Product Head, HealthPlus",
    image: sarahImg,
  },
  {
    quote:
      "We've been working with JD Infotech Solutions for years. Their support and innovative solutions have been instrumental in our growth.",
    name: "David Miller",
    role: "CEO, BuildMax Realty",
    image: davidImg,
  },
];

const blogs = [
  {
    image: blogAi,
    tag: "Technology",
    tagColor: "bg-[#1265ff]",
    title: "How AI is Transforming Business Operations",
    meta: "May 15, 2024",
    read: "5 min read",
  },
  {
    image: blogCloud,
    tag: "Cloud",
    tagColor: "bg-[#1265ff]",
    title: "Benefits of Cloud Migration for Modern Enterprises",
    meta: "May 10, 2024",
    read: "6 min read",
  },
  {
    image: blogSecurity,
    tag: "Security",
    tagColor: "bg-[#1265ff]",
    title: "Top Cybersecurity Practices Every Business Should Follow",
    meta: "May 05, 2024",
    read: "7 min read",
  },
  {
    image: blogDesign,
    tag: "Design",
    tagColor: "bg-[#7c4dff]",
    title: "UI/UX Design Trends to Watch in 2024",
    meta: "Apr 28, 2024",
    read: "4 min read",
  },
];

export default function PortfolioStoriesBlogSection() {
  return (
    <section className="bg-[#f7faff]">
      <div className="bg-[#020b1b] py-8 text-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <div className="mb-5 flex items-start justify-between gap-5">
            <div>
              <span className="text-[12px] font-extrabold uppercase tracking-wide text-[#1265ff]">
                What Our Clients Say
              </span>
              <h2 className="mt-2 text-[24px] font-bold leading-tight">
                Client Success Stories
              </h2>
            </div>

            <a
              href="/casestudy"
              className="hidden items-center gap-3 text-[12px] font-extrabold text-white sm:inline-flex"
            >
              View All Testimonials
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-lg border border-white/5 bg-[#0b182b] p-6 shadow-[0_14px_36px_rgba(0,0,0,.24)]"
              >
                <div className="flex items-start gap-4">
                  <Quote
                    size={32}
                    className="shrink-0 fill-[#1265ff] text-[#1265ff]"
                  />
                  <p className="text-[13px] font-medium leading-7 text-[#dce7f5]">
                    {item.quote}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 rounded-full border-2 border-white object-cover"
                    />
                    <div>
                      <h3 className="text-[14px] font-extrabold">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-[12px] font-medium text-[#c2cfdf]">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 text-[#ffb700]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="fill-[#ffb700]" />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-16">
        <div className="mb-5 flex items-end justify-between gap-5">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-wide text-[#1265ff]">
              From Our Blog
            </span>
            <h2 className="mt-2 text-[26px] font-extrabold leading-tight text-[#151d35]">
              Insights &amp; Trends
            </h2>
          </div>

          <a
            href="/blog"
            className="hidden items-center gap-3 text-[12px] font-extrabold text-[#1265ff] sm:inline-flex"
          >
            View All Articles
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="overflow-hidden rounded-lg border border-[#dce8f8] bg-white shadow-[0_12px_30px_rgba(15,23,42,.08)]"
            >
              <div className="relative h-[152px] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover"
                />
                <span
                  className={`absolute bottom-3 left-4 rounded-full ${blog.tagColor} px-4 py-2 text-[11px] font-extrabold text-white`}
                >
                  {blog.tag}
                </span>
              </div>

              <div className="p-5">
                <h3 className="min-h-[54px] text-[16px] font-bold leading-5 text-[#151d35]">
                  {blog.title}
                </h3>
                <div className="mt-3 flex items-center gap-3 text-[12px] font-semibold text-[#66758b]">
                  <span>{blog.meta}</span>
                  <span className="h-1 w-1 rounded-full bg-[#9aa8ba]" />
                  <span>{blog.read}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-lg bg-[#061326] text-white shadow-[0_18px_42px_rgba(2,8,23,.16)]">
          <div className="relative flex flex-col gap-6 px-6 py-7 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_9%_50%,rgba(124,77,255,.48),transparent_16%),linear-gradient(90deg,#21107a_0%,#071633_35%,#020b1b_100%)]" />

            <div className="relative z-10 flex items-center gap-6">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-[#875cff]/50 bg-[#421b88]/45 text-white shadow-[0_0_34px_rgba(124,77,255,.42)]">
                <Rocket size={44} />
              </div>
              <div>
                <h2 className="text-[22px] font-bold leading-tight">
                  Ready to Start Your Next Project?
                </h2>
                <p className="mt-2 text-[14px] font-medium text-[#dce7f5]">
                  Let's collaborate to build something amazing and drive your
                  business forward.
                </p>
              </div>
            </div>

            <div className="relative z-10 flex flex-nowrap gap-3 sm:gap-5">
              <a
                href="/contact"
                className="inline-flex h-14 items-center justify-center gap-2 rounded bg-[#ffb525] px-2 text-[10px] font-bold text-[#061326] shadow-[0_12px_30px_rgba(255,181,37,.28)] sm:px-9 sm:text-[12px]"
              >
                Start Your Project
                <ArrowRight size={17} />
              </a>
              <a
                href="tel:+919523435814"
                className="inline-flex h-14 items-center justify-center gap-2 rounded border border-white/35 bg-white/5 px-4 text-[12px] font-extrabold text-white sm:gap-4 sm:px-9 sm:text-[14px]"
              >
                Schedule a Call
                <Phone size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
