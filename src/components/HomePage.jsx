// src/components/HomePage.jsx
import React from "react";

import HeroSection from "../home/HeroSection";
// import Contact from "./ContactFormWithInfo";
// import Services from "./Services";
// import ProjectsShowcase from "./ProjectsShowcase";
// import Technologies from "./Technologies";
// import WebsiteProjects from "./WebsiteProjects";
// import IdeaToLaunch from "../IdeaToLaunch";
// import VisionMission from "./VisionMission";
// import TestimonialsSection from "./TestimonialsSection";
import AboutPreviewSection from "../home/AboutPreviewSection";
import PremiumServicesSection from "../home/PremiumServicesSection";
import IndustriesPortfolioSection from "../home/IndustriesPortfolioSection";
import WhyChooseProcessSection from "../home/WhyChooseProcessSection";
import TrustGlobalCTASection from "../home/TrustGlobalCTASection";
import LatestBlogSection from "../home/LatestBlogSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <PremiumServicesSection />
      <IndustriesPortfolioSection />
      <WhyChooseProcessSection />
      <TrustGlobalCTASection />
      <LatestBlogSection />
      {/* <Contact />
      <Services />
      <ProjectsShowcase />
      <Technologies />
      <WebsiteProjects />
      <IdeaToLaunch />
      <VisionMission />
      <TestimonialsSection /> */}
    </>
  );
};

export default HomePage;
