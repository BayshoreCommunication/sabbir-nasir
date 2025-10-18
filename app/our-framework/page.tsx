import GlobalHeroSection from "@/components/GlobalHeroSection";
import TaketheFirstStep from "@/components/Homepage/TaketheFirstStep";
import OurFramworkSection from "@/components/OurFramwork/OurFramworkSection";

export default function page() {
  return (
    <div className="overflow-hidden mt-[62px] md:mt-[100px]">
      <GlobalHeroSection
        titleH1={
          <div className="">
            Sabbir Nasir
            <br /> transformation <br /> FRAMEWORK
          </div>
        }
        titleH2={"Our Framework"}
        slug={"our-framework"}
        image="/images/about-us/framework.jpg"
        description=""
        buttonFlag={false}
        buttonText="Meet Team Novastra"
        altText="Team Novastra Transformation Framework"
      />

      <OurFramworkSection />
      <TaketheFirstStep title="Take the First Step" />
    </div>
  );
}
