import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSiteSettings } from "../lib/platform";
import {
  DEFAULT_IMAGE,
  getBaseSchema,
  getPageSeo,
  SITE_NAME,
  SITE_URL,
} from "./seoConfig";

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function setLink(rel, href, extraAttributes = {}, selector = `link[rel="${rel}"]`) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
  Object.entries(extraAttributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function getBreadcrumbSchema(page) {
  const parts = page.canonicalUrl.replace(SITE_URL, "").split("/").filter(Boolean);
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
  ];

  parts.forEach((part, index) => {
    const path = `/${parts.slice(0, index + 1).join("/")}`;
    itemListElement.push({
      "@type": "ListItem",
      position: index + 2,
      name: part
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      item: `${SITE_URL}${path}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

function getPageSchema(page) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${page.canonicalUrl}#webpage`,
    url: page.canonicalUrl,
    name: page.title,
    description: page.description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: DEFAULT_IMAGE,
    },
    inLanguage: "en-IN",
  };
}

function getServiceSchema(page) {
  if (!page.path.startsWith("/services")) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title.replace(` | ${SITE_NAME}`, ""),
    description: page.description,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: "Software development and digital solutions",
  };
}

function setJsonLd(page) {
  document
    .querySelectorAll('script[data-seo-json-ld="true"]')
    .forEach((element) => element.remove());

  const schemas = [
    ...getBaseSchema(),
    getPageSchema(page),
    getBreadcrumbSchema(page),
    getServiceSchema(page),
  ].filter(Boolean);

  schemas.forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-json-ld", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

const BUILT_IN_GA = "G-8D0H30X1TT";

export default function Seo() {
  const location = useLocation();

  // Search text written in the admin for this page wins over the built-in text below; tracking ids come from the admin too.
  useEffect(() => {
    let alive = true;
    getSiteSettings().then((site) => {
      if (!alive || !site) return;
      const path = location.pathname === "/" ? "/" : location.pathname.replace(/\/+$/, "");
      const o = site.pages && site.pages[path];
      if (o) {
        if (o.title) {
          document.title = o.title;
          setMeta('meta[name="title"]', { name: "title", content: o.title });
          setMeta('meta[property="og:title"]', { property: "og:title", content: o.title });
          setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: o.title });
        }
        if (o.description) {
          setMeta('meta[name="description"]', { name: "description", content: o.description });
          setMeta('meta[property="og:description"]', { property: "og:description", content: o.description });
          setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: o.description });
        }
        const img = o.ogImage || site.defaultOgImage;
        if (img) {
          setMeta('meta[property="og:image"]', { property: "og:image", content: img });
          setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: img });
        }
        if (o.noindex) setMeta('meta[name="robots"]', { name: "robots", content: "noindex, nofollow" });
      }
      if (site.googleVerification) setMeta('meta[name="google-site-verification"]', { name: "google-site-verification", content: site.googleVerification });
      if (site.gaMeasurementId && site.gaMeasurementId !== BUILT_IN_GA && typeof window.gtag === "function" && !window.__fa_ga_added) {
        window.__fa_ga_added = true;
        window.gtag("config", site.gaMeasurementId);
      }
    });
    return () => {
      alive = false;
    };
  }, [location.pathname]);

  useEffect(() => {
    const page = getPageSeo(location.pathname);
    const keywords = Array.isArray(page.keywords) ? page.keywords.join(", ") : page.keywords;

    document.documentElement.lang = "en-IN";
    document.title = page.title;

    setMeta('meta[name="title"]', { name: "title", content: page.title });
    setMeta('meta[name="description"]', {
      name: "description",
      content: page.description,
    });
    setMeta('meta[name="keywords"]', { name: "keywords", content: keywords });
    setMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    });
    setMeta('meta[name="author"]', { name: "author", content: SITE_NAME });
    setMeta('meta[name="language"]', { name: "language", content: "English" });
    setMeta('meta[name="geo.region"]', { name: "geo.region", content: "IN-UP" });
    setMeta('meta[name="geo.placename"]', {
      name: "geo.placename",
      content: "Noida, Uttar Pradesh, India",
    });
    setMeta('meta[name="theme-color"]', { name: "theme-color", content: "#061326" });

    setLink("canonical", page.canonicalUrl);
    setLink(
      "alternate",
      page.canonicalUrl,
      { hreflang: "en-IN" },
      'link[rel="alternate"][hreflang="en-IN"]'
    );
    setLink(
      "alternate",
      page.canonicalUrl,
      { hreflang: "x-default" },
      'link[rel="alternate"][hreflang="x-default"]'
    );

    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    setMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME,
    });
    setMeta('meta[property="og:url"]', { property: "og:url", content: page.canonicalUrl });
    setMeta('meta[property="og:title"]', { property: "og:title", content: page.title });
    setMeta('meta[property="og:description"]', {
      property: "og:description",
      content: page.description,
    });
    setMeta('meta[property="og:image"]', { property: "og:image", content: DEFAULT_IMAGE });
    setMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_IN" });

    setMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    setMeta('meta[name="twitter:url"]', {
      name: "twitter:url",
      content: page.canonicalUrl,
    });
    setMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: page.title,
    });
    setMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: page.description,
    });
    setMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: DEFAULT_IMAGE,
    });

    setJsonLd(page);
  }, [location.pathname]);

  return null;
}
