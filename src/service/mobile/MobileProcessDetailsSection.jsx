import {
  ArrowRight,
  ClipboardList,
  Code2,
  Headphones,
  PenLine,
  Rocket,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  SiAmazon,
  SiAndroid,
  SiApple,
  SiDotnet,
  SiFirebase,
  SiFlutter,
  SiGraphql,
  SiKotlin,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSwift,
} from "react-icons/si";

export default function MobileProcessDetailsSection() {
  const process = [
    {
      icon: Search,
      step: "01",
      title: "Discovery",
      desc: "We understand your idea, business goals and target audience.",
    },
    {
      icon: ClipboardList,
      step: "02",
      title: "Planning",
      desc: "We create a roadmap, wireframes and define the project scope.",
    },
    {
      icon: PenLine,
      step: "03",
      title: "Design",
      desc: "Our designers craft stunning UI/UX designs that users will love.",
    },
    {
      icon: Code2,
      step: "04",
      title: "Development",
      desc: "Our developers build powerful and scalable applications using best practices.",
    },
    {
      icon: ShieldCheck,
      step: "05",
      title: "Testing",
      desc: "We perform rigorous testing to ensure a bug-free and secure app.",
    },
    {
      icon: Rocket,
      step: "06",
      title: "Deployment",
      desc: "We launch your app on the App Store and Google Play Store.",
    },
    {
      icon: Headphones,
      step: "07",
      title: "Support",
      desc: "We provide ongoing support and maintenance to keep your app growing.",
    },
  ];

  const technologies = [
    { icon: SiFlutter, name: "Flutter", color: "text-[#35c2ff]" },
    { icon: SiReact, name: "React Native", color: "text-sky-500" },
    { icon: SiSwift, name: "Swift", color: "text-orange-600" },
    { icon: SiKotlin, name: "Kotlin", color: "text-[#7f52ff]" },
    { icon: SiDotnet, name: "Xamarin", color: "text-[#3498db]" },
    { icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-600" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: SiGraphql, name: "GraphQL", color: "text-pink-500" },
    { icon: SiAmazon, name: "AWS", color: "text-orange-500" },
  ];

  const platforms = [
    {
      icon: SiApple,
      title: "iOS App Development",
      desc: "High-quality iOS apps built for iPhone, iPad and Apple Watch.",
    },
    {
      icon: SiAndroid,
      title: "Android App Development",
      desc: "Robust Android apps built for smartphones and tablets.",
    },
    {
      icon: SiFlutter,
      title: "Cross-Platform Development",
      desc: "Cost-effective cross-platform apps with a native-like experience.",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="border-t border-[#dbe7f5] pt-5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
            Our Development Process
          </span>
          <h2 className="mt-1 text-[22px] font-bold leading-tight text-[#071426] lg:text-[24px]">
            From Idea to Successful App
          </h2>

          <div className="relative mt-4">
            <div className="hidden lg:block absolute left-[85px] right-[85px] top-[39px] border-t border-dashed border-[#9dbbff]" />

            <div className="relative z-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 lg:gap-5">
              {process.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-[#e5edf7] bg-white p-4 text-center shadow-[0_8px_24px_rgba(20,92,255,.08)] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                    {index < process.length - 1 && (
                      <ArrowRight
                        size={13}
                        className="hidden lg:block absolute top-[33px] text-[#145cff]"
                        style={{ left: `${12.8 + index * 14.28}%` }}
                      />
                    )}

                    <div className="mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#cfe0ff] bg-white shadow-[0_8px_24px_rgba(20,92,255,.12)]">
                      <Icon size={27} className="text-[#145cff]" />
                    </div>
                    <div className="mt-1 text-[10px] font-semibold text-[#536174]">
                      {item.step}
                    </div>
                    <h3 className="text-[13px] font-bold text-[#071426]">
                      {item.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-[155px] text-[12px] leading-5 text-[#536174]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-[1fr_1.08fr] lg:gap-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
              Technologies We Use
            </span>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4">
              {technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex h-[78px] flex-col items-center justify-center gap-2 rounded-lg border border-[#e5edf7] bg-white text-center text-[12px] font-bold text-[#071426] shadow-[0_8px_24px_rgba(15,23,42,.05)]"
                  >
                    <Icon size={28} className={tech.color} />
                    {tech.name}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-[#dbe7f5] pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#145cff]">
              Platforms We Develop For
            </span>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <div
                    key={platform.title}
                    className="min-h-[150px] rounded-lg bg-[#061326] p-5 text-white shadow-[0_15px_35px_rgba(2,8,23,.16)] sm:min-h-[170px]"
                  >
                    <Icon
                      size={28}
                      className={
                        platform.title.includes("Android")
                          ? "text-[#8bdc3f]"
                          : platform.title.includes("Cross")
                            ? "text-[#35c2ff]"
                            : "text-white/70"
                      }
                    />
                    <h3 className="mt-5 text-[17px] leading-5 font-bold">
                      {platform.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-5 text-[#c7d1e0]">
                      {platform.desc}
                    </p>
                    <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-white">
                      Learn More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
