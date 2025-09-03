// src/components/HomePage.jsx
import React from "react";

import Hero from "./Hero";
import Contact from "./ContactFormWithInfo";
import Services from "./Services";
import ProjectsShowcase from "./ProjectsShowcase";
import Technologies from "./Technologies";
import WebsiteProjects from "./WebsiteProjects";
import IdeaToLaunch from "../IdeaToLaunch";
import VisionMission from "./VisionMission";
import TestimonialsSection from "./TestimonialsSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Contact />
      <Services />
      <ProjectsShowcase />
      <Technologies />
      <WebsiteProjects />
      <IdeaToLaunch />
      <VisionMission />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;
