import HeroSection from "./components/HeroSection/HeroSection";
import InvestmentPlanning from "./components/InvestmentPlanning/InvestmentPlanning";
import HelpingBusiness from "./components/Services/HelpingBusiness";
import OurServices from "./components/Services/OurServices";
import ServiceCarosel from "./components/Services/ServiceCarosel";
import TabSection from "./components/TabSection/TabSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <TabSection />
      <InvestmentPlanning />
      <div className="lg:translate-y-20">
        <HelpingBusiness />
      </div>
      <OurServices />
      <div className="lg:-translate-y-20">
        <ServiceCarosel />
      </div>
    </div>
  );
}
