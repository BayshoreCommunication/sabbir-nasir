import HeroSection from "./components/HeroSection/HeroSection";
import InvestmentPlanning from "./components/InvestmentPlanning/InvestmentPlanning";
import HelpingBusiness from "./components/Services/HelpingBusiness";
import OurServices from "./components/Services/OurServices";
import TabSection from "./components/TabSection/TabSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TabSection />
      <InvestmentPlanning />
      <HelpingBusiness />
      <OurServices />
    </>
  );
}
