

import Banner from "./components/HeroSection/HeroSection";

import TabSection from "./components/TabSection/TabSection";

import Insights from "./components/Homepage/insights";
import HeroSection from "./components/HeroSection";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <TabSection />
      <Insights/>      
      <HeroSection/>
    </div>
  );
}
