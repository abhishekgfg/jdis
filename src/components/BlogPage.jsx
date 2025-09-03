import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI in Web Development",
    desc: "Explore how artificial intelligence is transforming modern web development and UI/UX design.",
    author: "JD Infotech Solutions",
    date: "Sep 2025",
    link: "#",
    image: "https://acropolium.com/img/articles/ai-and-web-development-why-and-how-to-leverage-ai-for-digital-solutions/img01.jpg"
  },
  {
    title: "Top 10 JavaScript Frameworks in 2025",
    desc: "A comprehensive comparison of the most popular JS frameworks and their unique features.",
    author: "JD Infotech Solutions",
    date: "Aug 2025",
    link: "#",
    image: "https://www.mindinventory.com/blog/wp-content/uploads/2025/06/best-javascript-frameworks.webp"
  },
  {
    title: "Designing for Mobile-First Experiences",
    desc: "Tips and techniques for creating responsive and engaging mobile-first designs.",
    author: "JD Infotech Solutions",
    date: "Jul 2025",
    link: "#",
    image: "https://fredericgonzalo.com/app/uploads/2019/06/responsive-vs-mobile-first-webdesign-022-1024x689-728x490.png"
  },
  {
    title: "Boosting Web Performance in 2025",
    desc: "Learn the latest techniques to optimize your website speed and SEO effectively.",
    author: "JD Infotech Solutions",
    date: "Jun 2025",
    link: "#",
    image: "https://cdn-aahbe.nitrocdn.com/atRjhaAsMHbPaZMOukHscOVOXfGAsiqT/assets/images/optimized/rev-1074f35/nitropack.ams3.digitaloceanspaces.com/upload/blog/seo-webinar-recap_96f7026383.png"
  },
  {
    title: "UI/UX Trends to Watch",
    desc: "Discover the top UI/UX trends shaping modern digital experiences.",
    author: "JD Infotech Solutions",
    date: "May 2025",
    link: "#",
    image: "https://cdn.sanity.io/images/0mnqm898/production/c00bce58c817ec3a16945711111641d37320ae67-2240x1260.png"
  },
  {
    title: "Full-Stack Development in 2025",
    desc: "A complete guide to mastering modern full-stack development technologies.",
    author: "JD Infotech Solutions",
    date: "Apr 2025",
    link: "#",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*enEX6_JJn388UmRWqYFQlg.png"
  },
];

export default function BlogPage() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-96 h-96 bg-purple-500 rounded-full opacity-20 animate-blob"></div>
        <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-teal-500 rounded-full opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-slate-800"
        >
          Our Latest Insights & Articles
        </motion.h2>
        <p className="text-center text-slate-500 mt-3 max-w-2xl mx-auto">
          Explore our expert tips, industry news, and insights on technology, design, and business growth.
        </p>

        {/* Blog Cards */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-t-3xl">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6 flex flex-col gap-3">
                <span className="text-sm text-indigo-500 font-semibold">{post.date}</span>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
                <p className="text-slate-600 text-sm">{post.desc}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-slate-500">By {post.author}</span>
                  <a
                    href={post.link}
                    className="flex items-center gap-1 text-indigo-600 hover:gap-2 transition-all"
                  >
                    Read <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Glow overlay effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse mix-blend-overlay"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
