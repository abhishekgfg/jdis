import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Smartphone,
  ShoppingCart,
  UsersRound,
  TrendingUp,
  Cpu,
  PenTool,
  Target,
  Palette,
  Video,
  BadgeCheck,
  ServerCog,
  X,
  CheckCircle2,
} from "lucide-react";

export default function PremiumServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Code2,
      title: "Website Development",
      desc: "Responsive, fast & SEO friendly websites that drive results.",
      includes: [
        "Business Website",
        "Corporate Website",
        "Landing Page",
        "Portfolio Website",
        "CMS Website",
        "Speed Optimization",
        "SEO Friendly Structure",
        "Mobile Responsive Design",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "Scalable mobile apps for Android, iOS and cross-platform.",
      includes: [
        "Android App Development",
        "iOS App Development",
        "Flutter App",
        "React Native App",
        "App UI/UX Design",
        "API Integration",
        "Push Notifications",
        "Play Store Deployment",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce Development",
      desc: "Powerful online stores with seamless shopping experience.",
      includes: [
        "Online Store Development",
        "Product Management",
        "Cart & Checkout",
        "Payment Gateway Integration",
        "Order Management",
        "Inventory Management",
        "Customer Dashboard",
        "Admin Panel",
      ],
    },
    {
      icon: BadgeCheck,
      title: "Ecommerce Specialist",
      desc: "Specialized ecommerce solutions with payment, inventory and automation.",
      includes: [
        "Custom Ecommerce Strategy",
        "Marketplace Development",
        "Multi Vendor System",
        "Advanced Product Filters",
        "Coupon & Discount System",
        "Shipping Integration",
        "Abandoned Cart Recovery",
        "Sales Analytics",
      ],
    },
    {
      icon: UsersRound,
      title: "CRM Development",
      desc: "Customer-focused CRM solutions to improve sales & relationships.",
      includes: [
        "Lead Management",
        "Customer Management",
        "Sales Pipeline",
        "Follow-up Reminder",
        "Team Management",
        "Reports & Analytics",
        "Automation Workflow",
        "Role Based Access",
      ],
    },
    {
      icon: TrendingUp,
      title: "ERP Development",
      desc: "Enterprise solutions to manage business processes efficiently.",
      includes: [
        "HR Management",
        "Finance Management",
        "Inventory Management",
        "Billing System",
        "Employee Management",
        "Reports Dashboard",
        "Workflow Automation",
        "Multi Department Access",
      ],
    },
    {
      icon: Cpu,
      title: "AI Solutions",
      desc: "AI-powered solutions to automate, analyze and accelerate growth.",
      includes: [
        "AI Chatbot",
        "AI Assistant",
        "Lead Automation",
        "Data Analysis",
        "Predictive Analytics",
        "AI Workflow Automation",
        "OpenAI Integration",
        "Smart Recommendation System",
      ],
    },
    {
      icon: ServerCog,
      title: "DevOps Services",
      desc: "Server setup, deployment, CI/CD, cloud hosting and performance monitoring.",
      includes: [
        "Server Setup",
        "Domain & SSL Setup",
        "Nginx Configuration",
        "CI/CD Pipeline",
        "Cloud Deployment",
        "Docker Setup",
        "Performance Monitoring",
        "Backup & Security",
      ],
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      desc: "Beautiful, modern and user-friendly designs that convert.",
      includes: [
        "Website UI Design",
        "Mobile App UI Design",
        "Wireframing",
        "Prototyping",
        "User Flow Design",
        "Design System",
        "Dashboard UI",
        "Conversion Focused UX",
      ],
    },
    {
      icon: Palette,
      title: "Logo & Graphic Design",
      desc: "Creative branding, logos, social media posts and visual identity design.",
      includes: [
        "Logo Design",
        "Brand Identity",
        "Business Card Design",
        "Brochure Design",
        "Social Media Creatives",
        "Poster Design",
        "Banner Design",
        "Company Profile Design",
      ],
    },
    {
      icon: Video,
      title: "Video Editing",
      desc: "Professional video editing for reels, ads, promos and business branding.",
      includes: [
        "Reels Editing",
        "YouTube Video Editing",
        "Promotional Videos",
        "Corporate Videos",
        "Motion Graphics",
        "Ad Video Editing",
        "Color Correction",
        "Text & Subtitle Animation",
      ],
    },
    {
      icon: Target,
      title: "SEO & Digital Marketing",
      desc: "Rank higher, get found and grow your business online.",
      includes: [
        "Search Engine Optimization",
        "Google Ads",
        "Social Media Marketing",
        "Content Marketing",
        "Local SEO",
        "Technical SEO",
        "Lead Generation",
        "Performance Marketing",
      ],
    },
  ];

  const closeModal = () => setSelectedService(null);

  return (
    <section className="bg-[#f8fbff] py-10 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-8 grid gap-5 items-start lg:grid-cols-[300px_1fr_190px] lg:gap-8">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#145cff]">
              What We Do
            </span>

            <h2 className="mt-2 text-[28px] leading-tight font-bold text-[#071426] sm:text-[34px] lg:text-[24px]">
              Our Premium Services
            </h2>
          </div>

          <p className="max-w-[590px] text-[14px] leading-7 text-[#536174] sm:text-[15px] lg:pt-6">
            We provide end-to-end digital solutions to help businesses grow,
            automate and scale with the power of technology and innovation.
          </p>

          <div className="lg:pt-3 lg:text-right">
            <Link
              to="/services"
              className="inline-flex h-[50px] w-full items-center justify-center gap-3 rounded-md bg-[#061326] px-6 text-[13px] font-semibold text-white shadow-lg transition-all hover:bg-[#0b1d38] sm:w-auto lg:h-[52px]"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex min-h-[230px] flex-col justify-between rounded-xl border border-[#e5edf7] bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)] sm:min-h-[255px] sm:p-6"
              >
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3f7ff] sm:mb-7 sm:h-14 sm:w-14">
                    <Icon size={28} className="text-[#145cff]" />
                  </div>

                  <h3 className="text-[14px] leading-snug font-bold text-[#071426]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-6 text-[#536174] sm:mt-4">
                    {service.desc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-6 text-[#145cff] font-semibold flex items-center gap-2 text-[14px]"
                >
                  Read More
                  <ArrowRight size={17} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

    {selectedService && (
  <div
    className="fixed inset-0 z-[999] flex items-start justify-center overflow-y-auto bg-[#020817]/70 px-4 pb-6 pt-16 backdrop-blur-sm sm:pt-20"
    onClick={closeModal}
  >
    <div
      className="relative max-h-[82vh] w-full max-w-[720px] overflow-hidden overflow-y-auto rounded-2xl bg-white shadow-2xl sm:max-h-[78vh]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative overflow-hidden bg-[#061326] px-5 py-4 text-white sm:px-6">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
        >
          <X size={18} />
        </button>

        <div className="w-12 h-12 rounded-xl bg-[#145cff]/20 border border-[#145cff]/40 flex items-center justify-center mb-3">
          {(() => {
            const Icon = selectedService.icon;
            return <Icon size={24} className="text-[#ffb700]" />;
          })()}
        </div>

        <h3 className="pr-10 text-xl font-bold sm:text-2xl">{selectedService.title}</h3>

        <p className="mt-2 text-[#c7d1e0] text-[14px] leading-6 max-w-[620px]">
          {selectedService.desc}
        </p>
      </div>

      <div className="p-4 sm:p-5">
        <h4 className="text-lg font-bold text-[#071426] mb-4">
          What’s Included
        </h4>

        <div className="grid gap-3 sm:grid-cols-2">
          {selectedService.includes.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-[#f8fbff] border border-[#e5edf7] rounded-xl p-3"
            >
              <CheckCircle2
                size={18}
                className="text-[#145cff] min-w-[18px]"
              />
              <span className="text-[13px] font-medium text-[#24344d]">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
          <Link
            to={`/contact?service=${encodeURIComponent(selectedService.title)}`}
            className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-md bg-[#145cff] px-5 text-[14px] font-semibold text-white transition-all hover:bg-[#004be0] sm:w-auto"
          >
            Start This Service
            <ArrowRight size={16} />
          </Link>

          <button
            onClick={closeModal}
            className="h-[44px] w-full rounded-md border border-[#d7e2f0] px-5 text-[14px] font-semibold text-[#071426] transition-all hover:bg-[#f8fbff] sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </section>
  );
}
