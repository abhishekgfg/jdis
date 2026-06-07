import React from "react";
import SolutionBenefitsSection from "./SolutionBenefitsSection";
import SolutionCardsSection from "./SolutionCardsSection";
import SolutionHeroSection from "./SolutionHeroSection";
import SolutionSuccessSection from "./SolutionSuccessSection";

export default function Solution() {
  return (
    <>
      <SolutionHeroSection />
      <SolutionCardsSection />
      <SolutionBenefitsSection />
      <SolutionSuccessSection />
    </>
  );
}
