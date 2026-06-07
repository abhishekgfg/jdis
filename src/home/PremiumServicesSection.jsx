import { useState } from "react";
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
    <section className="bg-[#f8fbff] py-16">
      <div className="mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[300px_1fr_190px] gap-8 items-start mb-8">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#145cff]">
              What We Do
            </span>

            <h2 className="mt-2 text-[34px] lg:text-[24px] leading-tight font-bold text-[#071426]">
              Our Premium Services
            </h2>
          </div>

          <p className="text-[15px] leading-7 text-[#536174] max-w-[590px] lg:pt-6">
            We provide end-to-end digital solutions to help businesses grow,
            automate and scale with the power of technology and innovation.
          </p>

          <div className="lg:pt-3 lg:text-right">
            <button className="h-[52px] text-[13px] px-6 rounded-md bg-[#061326] hover:bg-[#0b1d38] text-white font-semibold inline-flex items-center gap-3 shadow-lg transition-all">
              View All Services
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-[#e5edf7] shadow-[0_10px_35px_rgba(15,23,42,0.06)] p-6 min-h-[255px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)] transition-all duration-300"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#f3f7ff] flex items-center justify-center mb-7">
                    <Icon size={28} className="text-[#145cff]" />
                  </div>

                  <h3 className="text-[14px] leading-snug font-bold text-[#071426]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-6 text-[#536174]">
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
    className="fixed inset-0 z-[999] bg-[#020817]/70 backdrop-blur-sm flex items-start justify-center px-4 pt-20 pb-6 overflow-y-auto"
    onClick={closeModal}
  >
    <div
      className="relative w-full max-w-[720px] bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[78vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-[#061326] px-6 py-4 text-white relative overflow-hidden">
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

        <h3 className="text-2xl font-bold">{selectedService.title}</h3>

        <p className="mt-2 text-[#c7d1e0] text-[14px] leading-6 max-w-[620px]">
          {selectedService.desc}
        </p>
      </div>

      <div className="p-5">
        <h4 className="text-lg font-bold text-[#071426] mb-4">
          What’s Included
        </h4>

        <div className="grid sm:grid-cols-2 gap-3">
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

        <div className="mt-5 flex flex-wrap gap-3">
          <button className="h-[44px] px-5 rounded-md bg-[#145cff] hover:bg-[#004be0] text-white text-[14px] font-semibold inline-flex items-center gap-2 transition-all">
            Start This Service
            <ArrowRight size={16} />
          </button>

          <button
            onClick={closeModal}
            className="h-[44px] px-5 rounded-md border border-[#d7e2f0] text-[#071426] text-[14px] font-semibold hover:bg-[#f8fbff] transition-all"
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