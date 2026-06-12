import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import blog1 from "../components/images/b1.png";
import blog2 from "../components/images/b2.png";
import blog3 from "../components/images/b3.png";

export default function LatestBlogSection() {
  const blogs = [
    {
      img: blog1,
      tag: "Technology",
      title: "How AI is Transforming Modern Businesses",
      date: "May 12, 2024",
      author: "By Admin",
      time: "5 min read",
    },
    {
      img: blog2,
      tag: "Development",
      title: "Why Every Business Needs a Professional Website",
      date: "May 09, 2024",
      author: "By Admin",
      time: "7 min read",
    },
    {
      img: blog3,
      tag: "SEO",
      title: "SEO Strategies to Rank Higher in 2024",
      date: "May 06, 2024",
      author: "By Admin",
      time: "6 min read",
    },
  ];

  return (
    <section className="bg-[#f8fbff] py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-5 flex items-start justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
              From Our Blog
            </span>

            <h2 className="mt-1 text-[24px] font-bold leading-tight text-[#071426] sm:text-[26px] lg:text-[28px]">
              Latest Insights & Updates
            </h2>
          </div>

          <Link
            to="/blog"
            className="hidden sm:inline-flex h-[44px] px-6 rounded-md border border-[#d7e2f0] bg-white hover:bg-[#f3f7ff] text-[#071426] text-[14px] font-semibold items-center gap-3 shadow-sm transition-all"
          >
            View All Blogs
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              to="/blog"
              key={blog.title}
              className="group relative h-[260px] overflow-hidden rounded-xl border border-[#d7e2f0] shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:h-[220px] md:h-[165px]"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061326] via-[#061326]/80 to-[#061326]/20" />

              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <span className="w-fit mb-4 px-3 py-1 rounded-md bg-[#1b3458]/80 text-white/90 text-[10px] font-bold uppercase">
                  {blog.tag}
                </span>

                <h3 className="text-[16px] font-bold leading-snug text-white lg:text-[17px]">
                  {blog.title}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#c7d1e0]">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.author}</span>
                  <span>•</span>
                  <span>{blog.time}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/blog"
          className="mt-5 inline-flex h-[44px] w-full items-center justify-center gap-3 rounded-md border border-[#d7e2f0] bg-white px-6 text-[14px] font-semibold text-[#071426] shadow-sm sm:hidden"
        >
          View All Blogs
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}
