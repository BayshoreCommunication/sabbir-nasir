import AboutSection from "@/components/AboutUs/AboutSection";
import GlobalHeroSection from "@/components/GlobalHeroSection";
import TaketheFirstStep from "@/components/Homepage/TaketheFirstStep";

const page = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "About Us" }];
  return (
    <div className="overflow-hidden mt-[62px] md:mt-[100px]">
      <GlobalHeroSection
        titleH1="Who We Are"
        titleH2={"Who We Are"}
        slug={"about-us"}
        image="/images/about-us/about-us.jpg"
        description="Novastra Global Partners is prepared to walk with you on your journey, applying a business transformation model that is like no other in the world."
        buttonFlag={false}
        buttonText="Meet Team Novastra"
      />
      <AboutSection />
      <TaketheFirstStep title="Speak with Novastra Global Partners" />
    </div>
  );
};

export default page;
