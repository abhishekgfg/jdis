import {
  ArrowRight,
  Globe,
  Smartphone,
  ShoppingCart,
  UsersRound,
  BarChart3,
  Code2,
  Cpu,
  Cloud,
  PenTool,
  TrendingUp,
  Rocket,
  Smile,
  Star,
  Award,
  X,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Search,
  BarChart,
  Target,
  Megaphone,
  Settings,
  Database,
  Shield,
  Zap,
  LineChart,
  Video,
  Palette,
  Layout,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DigitalSolutionsSection() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      desc: "Responsive, fast & SEO-friendly websites that create a powerful online presence.",
      color: "blue",
      path: "/services/website",
      details: {
        overview: "We build modern, responsive websites that load fast, rank well on search engines, and provide an exceptional user experience.",
        features: [
          "Custom website design & development",
          "Responsive & mobile-first approach",
          "SEO-optimized architecture",
          "Fast loading & performance optimized",
          "CMS integration (WordPress, Webflow, etc.)",
          "E-commerce functionality",
          "Secure & scalable solutions",
          "Ongoing maintenance & support"
        ],
        technologies: ["React", "Next.js", "Node.js", "PHP", "WordPress", "Shopify", "TypeScript", "JavaScript", "MERN Stack", "MongoDB", "PostgreSQL"],
        benefits: [
          "Increase online visibility",
          "Improve user engagement",
          "Higher conversion rates",
          "Scalable as your business grows"
        ]
      }
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "Scalable mobile apps for Android, iOS & cross-platform for maximum reach.",
      color: "purple",
      path: "/services/mobile-application",
      details: {
        overview: "We create powerful, user-friendly mobile applications that help you connect with your customers on the go.",
        features: [
          "Native iOS & Android apps",
          "Cross-platform development (React Native, Flutter)",
          "UI/UX optimized for mobile",
          "Push notifications & in-app messaging",
          "Offline functionality",
          "App store optimization",
          "Regular updates & maintenance",
          "Analytics & performance tracking"
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"],
        benefits: [
          "Reach customers anytime, anywhere",
          "Enhanced user engagement",
          "Increased brand loyalty",
          "Direct marketing channel"
        ]
      }
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce Development",
      desc: "Feature-rich online stores with secure payments & seamless shopping experience.",
      color: "green",
      details: {
        overview: "Launch your online store with our comprehensive ecommerce solutions that drive sales and customer satisfaction.",
        features: [
          "Custom ecommerce platforms",
          "Secure payment gateway integration",
          "Inventory management system",
          "Shopping cart & checkout optimization",
          "Product catalog management",
          "Order tracking & fulfillment",
          "Customer review system",
          "Abandoned cart recovery"
        ],
        technologies: ["Shopify", "WooCommerce", "Magento", "Custom PHP", "Stripe", "PayPal", "Razorpay", "React", "Next.js", "TypeScript", "JavaScript", "MERN Stack"],
        benefits: [
          "Sell products 24/7",
          "Global customer reach",
          "Automated inventory management",
          "Data-driven sales insights"
        ]
      }
    },
    {
      icon: UsersRound,
      title: "CRM Development",
      desc: "Smart CRM solutions to manage leads, customers & improve business relationships.",
      color: "orange",
      details: {
        overview: "Streamline your customer relationships with custom CRM solutions tailored to your business needs.",
        features: [
          "Lead & contact management",
          "Sales pipeline tracking",
          "Automated follow-ups",
          "Email & SMS integration",
          "Customer support ticketing",
          "Reports & analytics",
          "Mobile access",
          "Third-party integrations"
        ],
        technologies: ["Salesforce", "HubSpot", "Zoho", "Custom PHP", "React", "Node.js"],
        benefits: [
          "Improve customer retention",
          "Increase sales efficiency",
          "Better team collaboration",
          "Data-driven decision making"
        ]
      }
    },
    {
      icon: BarChart3,
      title: "ERP Development",
      desc: "Enterprise solutions to automate operations and improve business efficiency.",
      color: "blue",
      details: {
        overview: "Integrate and automate your core business processes with our enterprise resource planning solutions.",
        features: [
          "Financial management",
          "HR & payroll system",
          "Inventory & supply chain",
          "Manufacturing management",
          "Project management",
          "Business intelligence",
          "Compliance & reporting",
          "Multi-branch support"
        ],
        technologies: ["Odoo", "ERPNext", "Custom .NET", "Java", "Python", "PostgreSQL"],
        benefits: [
          "Streamline operations",
          "Reduce operational costs",
          "Real-time business insights",
          "Scalable for enterprise growth"
        ]
      }
    },
    {
      icon: Code2,
      title: "Custom Software Development",
      desc: "Tailor-made software solutions built to solve your unique business challenges.",
      color: "purple",
      details: {
        overview: "Get custom software solutions designed specifically for your unique business requirements and workflows.",
        features: [
          "Requirement analysis",
          "Custom architecture design",
          "Agile development process",
          "Quality assurance & testing",
          "Deployment & integration",
          "Training & documentation",
          "Ongoing maintenance",
          "Scalable solutions"
        ],
        technologies: ["Python", "Java", "C#", "Node.js", "React", "AWS", "Azure"],
        benefits: [
          "Tailored to your needs",
          "Competitive advantage",
          "Improved efficiency",
          "Full ownership & control"
        ]
      }
    },
    {
      icon: Cpu,
      title: "AI Solutions",
      desc: "AI-powered solutions to automate processes, gain insights and accelerate growth.",
      color: "blue",
      details: {
        overview: "Leverage artificial intelligence to automate tasks, gain valuable insights, and drive business growth.",
        features: [
          "Custom AI model development",
          "Machine learning solutions",
          "Natural language processing",
          "Computer vision systems",
          "Predictive analytics",
          "Intelligent automation",
          "Chatbot development",
          "Data mining & insights"
        ],
        technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "AWS AI"],
        benefits: [
          "Automate repetitive tasks",
          "Gain data-driven insights",
          "Improve decision making",
          "Reduce operational costs"
        ]
      }
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure, migration, DevOps & managed cloud services.",
      color: "blue",
      details: {
        overview: "Modernize your infrastructure with scalable cloud solutions that grow with your business.",
        features: [
          "Cloud migration services",
          "DevOps implementation",
          "Infrastructure as code",
          "Auto-scaling solutions",
          "Cloud security & compliance",
          "Backup & disaster recovery",
          "Cost optimization",
          "24/7 cloud monitoring"
        ],
        technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
        benefits: [
          "Scalable infrastructure",
          "Reduced IT costs",
          "Enhanced security",
          "Global accessibility"
        ]
      }
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      desc: "Human-centered designs that create engaging experiences and drive conversions.",
      color: "pink",
      details: {
        overview: "Create beautiful, intuitive interfaces that users love and that drive real business results.",
        features: [
          "User research & analysis",
          "Wireframing & prototyping",
          "Visual design systems",
          "Interaction design",
          "Usability testing",
          "Responsive design",
          "Accessibility compliance",
          "Design handoff & assets"
        ],
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
        benefits: [
          "Higher user engagement",
          "Improved conversion rates",
          "Reduced development costs",
          "Competitive advantage"
        ]
      }
    },
    {
      icon: TrendingUp,
      title: "SEO & Digital Marketing",
      desc: "Rank higher, get found online and grow your business with proven strategies.",
      color: "green",
      details: {
        overview: "Boost your online visibility and drive qualified traffic with our comprehensive digital marketing strategies.",
        features: [
          "Search Engine Optimization (SEO)",
          "Google Ads Management",
          "Social Media Marketing (SMO)",
          "Content Marketing Strategy",
          "Email Marketing Campaigns",
          "Meta Ads & Facebook Ads",
          "Instagram Marketing",
          "LinkedIn Marketing",
          "YouTube Marketing",
          "Influencer Marketing",
          "PPC Campaign Management",
          "Conversion Rate Optimization",
          "Marketing Automation",
          "Analytics & Reporting"
        ],
        technologies: ["Google Analytics", "Meta Business Suite", "Google Ads", "SEMrush", "Ahrefs", "HubSpot"],
        benefits: [
          "Increase organic traffic",
          "Generate quality leads",
          "Improve brand awareness",
          "Higher ROI on marketing spend"
        ]
      }
    },
    {
      icon: Video,
      title: "Video Editing",
      desc: "Professional video editing services that bring your stories to life and captivate audiences.",
      color: "purple",
      details: {
        overview: "Transform your raw footage into compelling visual stories with our professional video editing services. We create engaging videos that capture attention and drive results.",
        features: [
          "Corporate & promotional videos",
          "Social media video content",
          "YouTube video editing",
          "Product demo videos",
          "Explainer videos",
          "Event highlight reels",
          "Testimonial videos",
          "Motion graphics & animation",
          "Color grading & correction",
          "Audio mixing & sound design",
          "Green screen & visual effects",
          "Subtitles & captions",
          "Video optimization for platforms",
          "Short-form content (Reels, Shorts, TikTok)"
        ],
        technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "CapCut", "Filmora"],
        benefits: [
          "Professional storytelling",
          "Higher engagement rates",
          "Increased brand recall",
          "Better conversion rates",
          "Cross-platform optimization"
        ]
      }
    },
    {
      icon: Palette,
      title: "Logo & Branding Design",
      desc: "Create memorable brand identities with professional logo design and complete branding solutions.",
      color: "orange",
      details: {
        overview: "Build a strong, recognizable brand identity that sets you apart from competitors. We create comprehensive branding solutions that resonate with your target audience.",
        features: [
          "Logo design & development",
          "Brand identity design",
          "Brand style guides",
          "Color palette selection",
          "Typography selection",
          "Business card design",
          "Letterhead & stationery",
          "Brand merchandise design",
          "Social media brand kits",
          "Brand strategy consultation",
          "Brand voice & messaging",
          "Competitor brand analysis",
          "Brand refresh & rebranding",
          "Packaging design"
        ],
        technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma", "Procreate", "Affinity Designer"],
        benefits: [
          "Strong brand recognition",
          "Professional image",
          "Customer trust & loyalty",
          "Consistent brand message",
          "Competitive advantage"
        ]
      }
    },
    {
      icon: Layout,
      title: "Graphic Design",
      desc: "Stunning graphic design services for all your visual communication needs across print and digital.",
      color: "pink",
      details: {
        overview: "Bring your ideas to life with creative, professional graphic design that communicates your message effectively and leaves a lasting impression.",
        features: [
          "Social media graphics",
          "Marketing collateral design",
          "Brochures & flyers",
          "Posters & banners",
          "Infographics design",
          "Presentation design",
          "Email newsletter design",
          "Digital ads & banners",
          "Magazine & book layout",
          "Product packaging design",
          "Menu & catalog design",
          "Billboard & signage design",
          "T-shirt & merchandise design",
          "Custom illustrations",
          "Icon design",
          "Print-ready artwork preparation"
        ],
        technologies: ["Adobe Photoshop", "Illustrator", "InDesign", "Canva Pro", "Figma", "CorelDRAW", "Affinity Suite"],
        benefits: [
          "Professional visual identity",
          "Increased brand awareness",
          "Better communication",
          "Higher engagement rates",
          "Versatile design assets"
        ]
      }
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      desc: "Protect your digital assets with robust security, compliance and risk mitigation solutions.",
      color: "orange",
      details: {
        overview: "Secure your business infrastructure with solutions that prevent threats, safeguard data, and keep your operations compliant.",
        features: [
          "Vulnerability assessments",
          "Security audits & compliance reviews",
          "Data protection strategies",
          "Secure network architecture",
          "Incident response planning",
          "User access management",
          "Firewall and endpoint security",
          "Ongoing monitoring & threat detection"
        ],
        technologies: ["AWS Security", "Azure Security", "OWASP", "SIEM", "MFA", "Zero Trust"],
        benefits: [
          "Reduced security risk",
          "Stronger data protection",
          "Regulatory compliance",
          "Business continuity"
        ]
      }
    },
    {
      icon: Sparkles,
      title: "Maintenance & Support",
      desc: "Keep your digital products running smoothly with proactive monitoring, updates and expert support.",
      color: "blue",
      details: {
        overview: "Ensure consistent performance and reliability with maintenance plans tailored to your website, app or software product.",
        features: [
          "Regular platform updates",
          "Performance monitoring",
          "Bug fixes and enhancements",
          "Backup and recovery",
          "Security patching",
          "Technical support",
          "Feature upgrades",
          "Service level agreements"
        ],
        technologies: ["Node.js", "React", "Next.js", "WordPress", "Shopify", "Docker", "Kubernetes"],
        benefits: [
          "Higher uptime",
          "Faster issue resolution",
          "Improved user experience",
          "Long-term platform health"
        ]
      }
    },
  ];

  const stats = [
    { icon: Rocket, value: "100+", label: "Projects Delivered", color: "gold" },
    { icon: Smile, value: "90+", label: "Happy Clients", color: "gold" },
    { icon: Globe, value: "8+", label: "Countries Served", color: "blue" },
    { icon: UsersRound, value: "20+", label: "Expert Professionals", color: "blue" },
    { icon: Award, value: "200%", label: "Client Satisfaction", color: "gold" },
  ];

  const colorClasses = {
    blue: "from-[#145cff] to-[#00d4ff] shadow-blue-500/30",
    purple: "from-[#7c3aed] to-[#a855f7] shadow-purple-500/30",
    green: "from-[#00a86b] to-[#00ff99] shadow-emerald-500/30",
    orange: "from-[#ff9f1c] to-[#ffb700] shadow-yellow-500/30",
    pink: "from-[#db2777] to-[#ff5bbd] shadow-pink-500/30",
    gold: "from-[#ff9f1c] to-[#ffb700] shadow-yellow-500/30",
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = "auto";
  };

  const handleLearnMore = (event, service) => {
    event.stopPropagation();
    if (service.path) {
      navigate(service.path);
      return;
    }
    openModal(service);
  };

  const handleGetStarted = () => {
    document.body.style.overflow = "auto";
    navigate("/contact");
  };

  return (
    <>
      <section className="bg-[#061426] py-10 text-white lg:py-14">
        <div className="mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-8 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2b8cff]">
              What We Offer
            </span>
            <h2 className="mt-2 text-[24px] font-bold leading-tight sm:text-[32px] lg:text-[30px]">
              Complete Digital Solutions For Your Business
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group min-h-[220px] cursor-pointer rounded-xl border border-[#1c3558] bg-[#071b34]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2b8cff]/60 sm:min-h-[245px] sm:p-6"
                  onClick={() => openModal(service)}
                >
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br shadow-lg sm:h-16 sm:w-16 ${
                      colorClasses[service.color]
                    }`}
                  >
                    <Icon size={30} className="text-white" />
                  </div>

                  <h3 className="text-[16px] leading-tight font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-5 text-[#e6efff]">
                    {service.desc}
                  </p>

                  <button
                    type="button"
                    onClick={(event) => handleLearnMore(event, service)}
                    className="mt-5 text-[#2b8cff] group-hover:text-[#ffb700] text-[14px] font-semibold inline-flex items-center gap-2 transition-colors"
                  >
                    Learn More
                    <ArrowRight size={17} />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-[#1c3558] bg-[#071b34]/80">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className={`flex items-center gap-4 p-5 sm:gap-5 sm:p-6 ${
                      index !== stats.length - 1 ? "border-b border-[#1c3558] sm:border-b-0 lg:border-r" : ""
                    }`}
                  >
                    <div
                      className={`flex h-14 w-14 min-w-14 items-center justify-center rounded-full bg-gradient-to-br shadow-lg sm:h-16 sm:w-16 sm:min-w-16 ${
                        colorClasses[stat.color]
                      }`}
                    >
                      <Icon size={30} className="text-white" />
                    </div>

                    <div>
                      <h3 className="text-[26px] font-semibold leading-none sm:text-[30px]">
                        {stat.value}
                      </h3>
                      <p className="mt-2 text-[13px] text-[#c7d1e0]">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-3 pt-16 backdrop-blur-sm animate-in fade-in duration-300 sm:items-center sm:p-4">
          <div className="relative max-h-[84vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[#1c3558] bg-[#071b34] animate-in zoom-in-95 duration-300 sm:max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#1c3558] hover:bg-[#2b8cff] transition-colors z-10"
            >
              <X size={20} className="text-white" />
            </button>

            {/* Modal Content */}
            <div className="p-5 sm:p-8">
              {/* Header */}
              <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div
                  className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br shadow-lg sm:h-20 sm:w-20 ${
                    colorClasses[selectedService.color]
                  }`}
                >
                  {(() => {
                    const Icon = selectedService.icon;
                    return <Icon size={35} className="text-white" />;
                  })()}
                </div>
                <div>
                  <h2 className="pr-10 text-2xl font-bold sm:pr-0 sm:text-3xl">{selectedService.title}</h2>
                  <p className="text-[#2b8cff] mt-1">Complete Solution Overview</p>
                </div>
              </div>

              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Star size={20} className="text-[#ffb700]" />
                  Overview
                </h3>
                <p className="text-[#e6efff] leading-relaxed">
                  {selectedService.details.overview}
                </p>
              </div>

              {/* Features Grid */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Settings size={20} className="text-[#2b8cff]" />
                  Key Features & Services
                </h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {selectedService.details.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#e6efff]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2b8cff]"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              {selectedService.details.technologies && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Code2 size={20} className="text-[#00ff99]" />
                    Technologies & Tools We Use
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.details.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#1c3558] rounded-full text-sm text-[#e6efff]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award size={20} className="text-[#ffb700]" />
                  Benefits You Get
                </h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {selectedService.details.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#e6efff]">
                      <Zap size={16} className="text-[#00ff99]" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-end border-t border-[#1c3558] pt-4">
                <button
                  type="button"
                  onClick={handleGetStarted}
                  className="w-full rounded-lg bg-gradient-to-r from-[#145cff] to-[#00d4ff] px-6 py-2 font-semibold transition-all hover:shadow-lg sm:w-auto"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add required CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes zoom-in-95 {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-in {
          animation-duration: 0.2s;
          animation-fill-mode: both;
        }
        
        .fade-in {
          animation-name: fade-in;
        }
        
        .zoom-in-95 {
          animation-name: zoom-in-95;
        }
        
        .duration-300 {
          animation-duration: 0.3s;
        }
      `}</style>
    </>
  );
}
