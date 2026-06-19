export const SITE_URL = "https://www.jdinfotechsolutions.in";
export const SITE_NAME = "JD Infotech Solutions";
export const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.png`;
export const PRIMARY_PHONE = "+91 9523435814";
export const CONTACT_EMAIL = "info@jdinfotechsolutions.in";

const defaultKeywords = [
  "JD Infotech Solutions",
  "website development company in India",
  "web development company in Noida",
  "mobile app development company",
  "custom software development",
  "React development services",
  "ecommerce website development",
  "SEO friendly website development",
  "cloud solutions",
  "digital transformation services",
];

export const pageSeo = {
  "/": {
    title: "JD Infotech Solutions | Website, Mobile App & Software Development Company",
    description:
      "JD Infotech Solutions builds SEO-friendly websites, mobile apps, ecommerce platforms, cloud solutions, and custom software for startups, SMEs, and enterprises.",
    keywords: defaultKeywords,
  },
  "/about": {
    title: "About JD Infotech Solutions | Software Development Team in India",
    description:
      "Learn about JD Infotech Solutions, our mission, delivery process, and technology team helping businesses build scalable digital products.",
    keywords: [
      "about JD Infotech Solutions",
      "software development team India",
      "IT company in Noida",
      "technology partner for startups",
      ...defaultKeywords,
    ],
  },
  "/services": {
    title: "IT Services | Web, Mobile, Ecommerce, AI & Cloud Solutions",
    description:
      "Explore JD Infotech Solutions services including website development, mobile app development, ecommerce, CRM, ERP, AI automation, SEO, and cloud deployment.",
    keywords: [
      "IT services India",
      "website development services",
      "mobile app development services",
      "CRM development",
      "ERP development",
      "AI automation services",
      ...defaultKeywords,
    ],
  },
  "/services/website": {
    title: "Website Development Services | SEO Friendly Business Websites",
    description:
      "Get fast, responsive, SEO-ready websites, landing pages, ecommerce stores, and web applications built with modern frontend and backend technologies.",
    keywords: [
      "website development services",
      "business website design",
      "React website development",
      "SEO friendly website",
      "ecommerce website development",
      "landing page development",
      ...defaultKeywords,
    ],
  },
  "/services/mobile-application": {
    title: "Mobile App Development Services | Android & iOS App Solutions",
    description:
      "Build user-friendly mobile applications for ecommerce, healthcare, food delivery, education, and business automation with JD Infotech Solutions.",
    keywords: [
      "mobile app development services",
      "Android app development",
      "iOS app development",
      "business app development",
      "startup app development",
      ...defaultKeywords,
    ],
  },
  "/solutions": {
    title: "Business Technology Solutions | Startup, Enterprise, Cloud & AI",
    description:
      "JD Infotech Solutions delivers startup solutions, enterprise software, cloud platforms, AI automation, and digital transformation for growing businesses.",
    keywords: [
      "business technology solutions",
      "startup technology solutions",
      "enterprise software solutions",
      "cloud solutions India",
      "AI automation",
      ...defaultKeywords,
    ],
  },
  "/industries": {
    title: "Industry Software Solutions | Healthcare, Finance, Real Estate & Retail",
    description:
      "Discover custom software and web solutions for healthcare, finance, real estate, ecommerce, education, restaurants, and service businesses.",
    keywords: [
      "industry software solutions",
      "healthcare software development",
      "finance software solutions",
      "real estate website development",
      "retail ecommerce solutions",
      ...defaultKeywords,
    ],
  },
  "/portfolio": {
    title: "Portfolio | Website, App & Software Projects by JD Infotech Solutions",
    description:
      "View JD Infotech Solutions portfolio of websites, mobile apps, ecommerce platforms, CRM systems, and digital products built for real businesses.",
    keywords: [
      "software development portfolio",
      "website development portfolio",
      "mobile app portfolio",
      "ecommerce projects",
      "JD Infotech projects",
      ...defaultKeywords,
    ],
  },
  "/case-study": {
    title: "Case Studies | Digital Product Success Stories",
    description:
      "Read JD Infotech Solutions case studies showing how strategy, design, development, and automation helped businesses grow online.",
    keywords: [
      "software case studies",
      "website development case study",
      "digital transformation case study",
      "technology success stories",
      ...defaultKeywords,
    ],
  },
  "/casestudy": {
    canonicalPath: "/case-study",
    title: "Case Studies | Digital Product Success Stories",
    description:
      "Read JD Infotech Solutions case studies showing how strategy, design, development, and automation helped businesses grow online.",
    keywords: [
      "software case studies",
      "website development case study",
      "digital transformation case study",
      ...defaultKeywords,
    ],
  },
  "/technologies": {
    title: "Technologies We Use | React, Node.js, Cloud, AI & Modern Web Stack",
    description:
      "Explore the technology stack JD Infotech Solutions uses for scalable web apps, mobile apps, cloud deployment, APIs, AI automation, and digital platforms.",
    keywords: [
      "React development",
      "Node.js development",
      "modern web technologies",
      "cloud technology stack",
      "AI technology solutions",
      ...defaultKeywords,
    ],
  },
  "/blog": {
    title: "Blog | Web Development, App Development, SEO & Technology Insights",
    description:
      "Read insights from JD Infotech Solutions on website development, mobile apps, SEO, ecommerce, automation, cloud, and digital growth.",
    keywords: [
      "technology blog",
      "web development blog",
      "SEO tips",
      "mobile app development blog",
      "digital marketing insights",
      ...defaultKeywords,
    ],
  },
  "/meet-our-team": {
    title: "Meet Our Team | JD Infotech Solutions Technology Experts",
    description:
      "Meet the JD Infotech Solutions team of developers, designers, strategists, and technology experts building digital products for businesses.",
    keywords: [
      "JD Infotech team",
      "software developers India",
      "web development experts",
      "technology team",
      ...defaultKeywords,
    ],
  },
  "/contact": {
    title: "Contact JD Infotech Solutions | Start Your Website or App Project",
    description:
      "Contact JD Infotech Solutions for website development, mobile app development, ecommerce, SEO, CRM, ERP, AI automation, and cloud solutions.",
    keywords: [
      "contact JD Infotech Solutions",
      "hire website developer",
      "hire app developer",
      "software development quote",
      "IT company contact",
      ...defaultKeywords,
    ],
  },
};

export const indexedRoutes = [
  "/",
  "/about",
  "/services",
  "/services/website",
  "/services/mobile-application",
  "/solutions",
  "/industries",
  "/portfolio",
  "/case-study",
  "/technologies",
  "/blog",
  "/meet-our-team",
  "/contact",
];

export function getCanonicalUrl(pathname = "/") {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const config = pageSeo[normalizedPath] || pageSeo["/"];
  const canonicalPath = config.canonicalPath || normalizedPath;
  return `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;
}

export function getPageSeo(pathname = "/") {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const config = pageSeo[normalizedPath] || pageSeo["/"];
  return {
    ...pageSeo["/"],
    ...config,
    path: normalizedPath,
    canonicalUrl: getCanonicalUrl(normalizedPath),
  };
}

export function getBaseSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: DEFAULT_IMAGE,
      image: DEFAULT_IMAGE,
      email: CONTACT_EMAIL,
      telephone: PRIMARY_PHONE,
      description:
        "JD Infotech Solutions builds websites, mobile apps, ecommerce platforms, cloud solutions, SEO-ready digital experiences, and custom software for businesses.",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61579891453524",
        "https://www.instagram.com/jd_infotech_solutions",
        "https://www.linkedin.com/company/jd-infotech-solutions",
        "https://www.youtube.com/@jdinfotechsolutions",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: PRIMARY_PHONE,
          email: CONTACT_EMAIL,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      image: DEFAULT_IMAGE,
      logo: DEFAULT_IMAGE,
      telephone: PRIMARY_PHONE,
      email: CONTACT_EMAIL,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Noida Sector 27, near Atta Market",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
      areaServed: ["India", "Noida", "Delhi NCR", "Patna"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:30",
          closes: "19:00",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ];
}
