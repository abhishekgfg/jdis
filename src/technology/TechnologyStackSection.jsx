import {
  ArrowRight,
  Boxes,
  Cloud,
  Database,
  Gauge,
  LayoutDashboard,
  Lock,
  Monitor,
  Network,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import {
  FaAngular,
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import {
  SiAndroid,
  SiChatbot,
  SiDigitalocean,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiGooglecloud,
  SiJenkins,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const categories = [
  {
    icon: Monitor,
    title: "Frontend Development",
    desc: "Modern frameworks for beautiful user interfaces",
    color: "text-[#168dff]",
    border: "border-[#168dff]/45",
    glow: "shadow-[0_0_28px_rgba(22,141,255,.16)]",
    items: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Powerful technologies for robust server-side solutions",
    color: "text-[#45d13c]",
    border: "border-[#45d13c]/45",
    glow: "shadow-[0_0_28px_rgba(69,209,60,.14)]",
    items: ["Node.js", "Laravel", "PHP", "Python", "Express.js"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Cross-platform & native mobile application solutions",
    color: "text-[#a24cff]",
    border: "border-[#a24cff]/45",
    glow: "shadow-[0_0_28px_rgba(162,76,255,.15)]",
    items: ["Flutter", "React Native", "Android", "iOS"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Scalable cloud infrastructure and DevOps automation",
    color: "text-[#ffac00]",
    border: "border-[#ffac00]/45",
    glow: "shadow-[0_0_28px_rgba(255,172,0,.14)]",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Firebase"],
  },
];

const stackRows = [
  {
    label: "Frontend",
    items: [
      ["React", FaReact, "text-[#19d8ff]"],
      ["Next.js", SiNextdotjs, "text-white"],
      ["Vue.js", FaVuejs, "text-[#42b883]"],
      ["Angular", FaAngular, "text-[#dd0031]"],
      ["HTML5", FaHtml5, "text-[#e34f26]"],
      ["CSS3", FaCss3Alt, "text-[#1572b6]"],
      ["JavaScript", FaJsSquare, "text-[#f7df1e]"],
      ["TypeScript", SiTypescript, "text-[#3178c6]"],
    ],
  },
  {
    label: "Backend",
    items: [
      ["Node.js", FaNodeJs, "text-[#35d04f]"],
      ["Laravel", FaLaravel, "text-[#ff2d20]"],
      ["PHP", FaPhp, "text-[#8993be]"],
      ["Python", FaPython, "text-[#ffd447]"],
      ["ExpressJS", SiExpress, "text-white"],
      ["NestJS", FaNodeJs, "text-[#e0234e]"],
    ],
  },
  {
    label: "Database",
    items: [
      ["MongoDB", SiMongodb, "text-[#47a248]"],
      ["MySQL", SiMysql, "text-[#4479a1]"],
      ["PostgreSQL", SiPostgresql, "text-[#4169e1]"],
      ["Firebase", SiFirebase, "text-[#ffca28]"],
    ],
  },
  {
    label: "Mobile",
    items: [
      ["Flutter", SiFlutter, "text-[#45d1ff]"],
      ["React Native", SiReact, "text-[#61dafb]"],
    ],
  },
  {
    label: "Cloud",
    items: [
      ["AWS", FaAws, "text-[#ff9900]"],
      ["Microsoft Azure", Cloud, "text-[#0078d4]"],
      ["Google Cloud", SiGooglecloud, "text-[#4285f4]"],
      ["DigitalOcean", SiDigitalocean, "text-[#0080ff]"],
    ],
  },
  {
    label: "DevOps",
    items: [
      ["Docker", FaDocker, "text-[#2496ed]"],
      ["Kubernetes", SiKubernetes, "text-[#326ce5]"],
      ["GitHub Actions", SiGithubactions, "text-[#2088ff]"],
      ["Jenkins", SiJenkins, "text-[#d33833]"],
    ],
  },
  {
    label: "AI / ML",
    items: [
      ["OpenAI", SiOpenai, "text-white"],
      ["ChatGPT", SiChatbot, "text-[#10a37f]"],
      ["Claude AI", Boxes, "text-[#f97316]"],
      ["Gemini AI", Boxes, "text-[#c084fc]"],
    ],
  },
];

const benefits = [
  {
    icon: Network,
    title: "Scalability",
    desc: "Built to grow with your business",
    color: "text-[#10d6c3]",
  },
  {
    icon: Gauge,
    title: "Performance",
    desc: "Optimized for speed and efficiency",
    color: "text-[#168dff]",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Enterprise-grade security standards",
    color: "text-[#19d8ff]",
  },
  {
    icon: Workflow,
    title: "Flexibility",
    desc: "Adaptable to changing business needs",
    color: "text-[#75a7ff]",
  },
  {
    icon: LayoutDashboard,
    title: "Future Ready",
    desc: "Stay ahead with latest innovations",
    color: "text-[#00d8a7]",
  },
  {
    icon: Database,
    title: "Cost Effective",
    desc: "Maximum results within budget",
    color: "text-[#b25cff]",
  },
];

const comparisons = [
  ["React.js", "Web Applications", "★★★★★", "★★★★★", "★★★★☆", "★★★★★"],
  ["Next.js", "SSR & Fullstack", "★★★★★", "★★★★★", "★★★★☆", "★★★★★"],
  ["Node.js", "Backend Services", "★★★★☆", "★★★★★", "★★★★☆", "★★★★☆"],
  ["Laravel", "Web Development", "★★★★☆", "★★★★☆", "★★★★★", "★★★★☆"],
  ["Flutter", "Mobile Applications", "★★★★☆", "★★★★★", "★★★☆☆", "★★★★★"],
  ["Python", "AI, ML & Backend", "★★★★★", "★★★★★", "★★★★☆", "★★★★☆"],
];

const process = [
  ["01", "Research", "Understanding requirements", Search],
  ["02", "Architecture", "Planning system structure", LayoutDashboard],
  ["03", "UI Design", "Creating modern UI/UX", ArrowRight],
  ["04", "Development", "Building with best practices", Boxes],
  ["05", "Testing", "Quality assurance & testing", ShieldCheck],
  ["06", "Deployment", "Deploy to cloud infrastructure", Workflow],
  ["07", "Support", "Ongoing support & maintenance", Lock],
];

function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#168dff]">
        {eyebrow}
      </span>
      <h2 className="mt-1 text-[28px] font-extrabold leading-tight text-white lg:text-[34px]">
        {title}
      </h2>
      <div className="mt-2 h-[3px] w-[35px] rounded-full bg-[#f6b51f]" />
    </div>
  );
}

export default function TechnologyStackSection() {
  return (
    <section
      id="technology-stack"
      className="relative overflow-hidden bg-[#031632] py-10 text-white sm:py-12 lg:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_11%_3%,rgba(255,255,255,.24),transparent_15%),radial-gradient(circle_at_58%_42%,rgba(22,141,255,.22),transparent_20%),radial-gradient(circle_at_90%_8%,rgba(80,160,255,.15),transparent_24%)]" />
      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Technology Categories"
          title="Technologies We Use"
        />

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <article
                key={category.title}
                className="rounded-[10px] border border-[#23456e] bg-[#071c3c]/86 p-6 shadow-[0_16px_34px_rgba(0,0,0,.2)]"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-[10px] border ${category.border} bg-white/5 ${category.glow}`}
                  >
                    <Icon size={43} strokeWidth={2.1} className={category.color} />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-extrabold text-white">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-[12px] font-semibold leading-6 text-[#c8d6ea]">
                      {category.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-white/8 pt-4">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 text-[12px] font-semibold text-[#dbe9fb]"
                    >
                      <span className={`h-3 w-3 rounded-full bg-current ${category.color}`} />
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href="/contact"
                  className={`mt-6 inline-flex items-center gap-3 text-[13px] font-extrabold ${category.color}`}
                >
                  Explore
                  <ArrowRight size={15} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-9 grid gap-9 lg:grid-cols-[1.55fr_.85fr]">
          <div>
            <SectionHeading
              eyebrow="Popular Technologies"
              title="Our Technology Stack"
            />

            <div className="mt-5 overflow-hidden rounded-[10px] border border-[#23456e] bg-[#071c3c]/80 shadow-[0_16px_34px_rgba(0,0,0,.2)]">
              {stackRows.map((row) => (
                <div
                  key={row.label}
                  className="grid min-h-[60px] grid-cols-[120px_1fr] border-b border-[#23456e] last:border-b-0"
                >
                  <div className="flex items-center justify-center bg-white/8 px-4 text-[13px] font-extrabold text-white">
                    {row.label}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
                    {row.items.map(([name, Icon, color]) => (
                      <div
                        key={name}
                        className="flex min-h-[60px] flex-col items-center justify-center border-l border-[#23456e] px-3 text-center"
                      >
                        <Icon size={28} className={color} />
                        <span className="mt-1 text-[11px] font-bold text-[#dbe9fb]">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="pt-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#168dff]">
                Why We Choose Modern Technologies
              </span>
              <h2 className="mt-2 text-[28px] font-extrabold leading-tight text-white lg:text-[34px]">
                Building Better. Faster. Stronger.
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article
                    key={benefit.title}
                    className="flex min-h-[118px] items-center gap-4 rounded-[10px] border border-[#23456e] bg-[#071c3c]/82 p-5"
                  >
                    <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[8px] border border-[#168dff]/25 bg-[#0a2a57]">
                      <Icon size={28} className={benefit.color} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-extrabold text-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-[12px] font-semibold leading-5 text-[#c8d6ea]">
                        {benefit.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-9 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Technology Comparison"
              title="Compare Top Technologies"
            />

            <div className="mt-5 overflow-hidden rounded-[10px] border border-[#23456e] bg-[#071c3c]/80">
              <div className="grid grid-cols-[1.1fr_1.6fr_1fr_1fr_1fr_1fr] bg-white/10 text-[11px] font-extrabold text-[#dbe9fb]">
                {[
                  "Technology",
                  "Best For",
                  "Performance",
                  "Scalability",
                  "Learning Curve",
                  "Community Support",
                ].map((head) => (
                  <div key={head} className="border-l border-[#23456e] px-3 py-3 first:border-l-0">
                    {head}
                  </div>
                ))}
              </div>
              {comparisons.map((row) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-[1.1fr_1.6fr_1fr_1fr_1fr_1fr] border-t border-[#23456e] text-[11px] font-semibold text-[#dbe9fb]"
                >
                  {row.map((cell, index) => (
                    <div
                      key={`${row[0]}-${index}`}
                      className={`border-l border-[#23456e] px-3 py-3 first:border-l-0 ${
                        index > 1 ? "text-[#f6b51f]" : ""
                      }`}
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Our Development Workflow"
              title="Our Development Process"
            />

            <div className="relative mt-9 grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
              <div className="absolute left-[7%] right-[7%] top-[39px] hidden border-t border-dashed border-[#168dff]/70 lg:block" />
              {process.map(([number, title, desc, Icon], index) => (
                <article key={number} className="relative z-10 text-center">
                  {index < process.length - 1 && (
                    <span className="absolute right-[-4px] top-[36px] hidden h-2 w-2 rotate-45 border-r-2 border-t-2 border-[#168dff] lg:block" />
                  )}
                  <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full border-[3px] border-[#376cff] bg-[#1739d7] shadow-[0_0_0_8px_rgba(55,108,255,.15),inset_0_0_16px_rgba(255,255,255,.2)]">
                    <Icon size={27} className="text-white" />
                  </div>
                  <div className="mt-4 text-[18px] font-extrabold text-[#168dff]">
                    {number}
                  </div>
                  <h3 className="mt-2 text-[13px] font-extrabold text-white">
                    {title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[95px] text-[10px] font-semibold leading-4 text-[#c8d6ea]">
                    {desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
