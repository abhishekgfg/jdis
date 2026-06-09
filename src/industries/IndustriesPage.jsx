// src/components/HomePage.jsx
import React from "react";
import Industries from "./Industries";
import IndustriesGridSection from "./IndustriesGridSection";
import IndustryFocusSection from "./IndustryFocusSection";
import IndustryTrustPartnerSection from "./IndustryTrustPartnerSection";
import IndustryDeliveryProcessSection from "./IndustryDeliveryProcessSection";
import IndustrySuccessStoriesSection from "./IndustrySuccessStoriesSection";
import IndustryFaqCtaSection from "./IndustryFaqCtaSection";



const IndustriesPage = () => {
  return (
    <>
      <Industries />
      <IndustriesGridSection />
      <IndustryFocusSection />
      <IndustryTrustPartnerSection />
      <IndustryDeliveryProcessSection />
      <IndustrySuccessStoriesSection />
      <IndustryFaqCtaSection />
    </>
  );
};

export default IndustriesPage;
