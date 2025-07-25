import React from "react";
import Topbar from "../components/Topbar";
import HeroSectionTop from "../components/HeroSectionTop";
import HeroSection from "../components/HeroSection";
import Image from "next/image";

const NewsPage = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "News" }]
  return (
    <div>
      <HeroSectionTop title="News" breadcrumbs={breadcrumbs} />
      <div className="main-container mx-auto px-4 py-12 space-y-16">
      <div className="min-h-[500px]"></div>
    </div>
      <HeroSection/>
    </div>
  );
};

export default NewsPage;
