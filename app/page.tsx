import AnyQuery from "./components/AnyQuery";
import CustomerFeedback from "./components/CustomerFeedback/CustomerFeedback";
import HeroSection from "./components/HeroSection/HeroSection";
import InvestmentPlanning from "./components/InvestmentPlanning/InvestmentPlanning";
import RequestACall from "./components/RequestACall/RequestACall";
import HelpingBusiness from "./components/Services/HelpingBusiness";
import OurServices from "./components/Services/OurServices";
import ServiceCarosel from "./components/Services/ServiceCarosel";
import TabSection from "./components/TabSection/TabSection";
import WhoWeServe from "./components/WhoWeServe/WhoWeServe";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

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
      <WhoWeServe />
      <AnyQuery />
      <WhyChooseUs />
      <CustomerFeedback />
      <RequestACall />
    </div>
  );
}
