import React from "react";
import Topbar from "../components/Topbar";
import HeroSectionTop from "../components/HeroSectionTop";
import HeroSection from "../components/HeroSection";
import InsightsGrid from "../components/InsightsGrid";
import Image from "next/image";

const InsightsPage = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Insights" }]
  return (
    <div>
      <HeroSectionTop title="Insights" breadcrumbs={breadcrumbs} />
      <div className="main-container mx-auto px-4 py-12 space-y-16">
        <div className="max-w-7xl mx-auto">
          <InsightsGrid />
        </div>
      </div>
      <HeroSection/>
    </div>
  );
};

export default InsightsPage;
