import GlobalHeroSection from "@/components/GlobalHeroSection";
import TaketheFirstStep from "@/components/Homepage/TaketheFirstStep";
import OurFramworkSection from "@/components/OurFramwork/OurFramworkSection";

export default function page() {
  return (
    <div className="overflow-hidden mt-[62px] md:mt-[100px]">
      <GlobalHeroSection
        titleH1={
          <div className="">
            SABBIR NASIR
            <br /> transformation <br /> FRAMEWORK
          </div>
        }
        titleH2={"Our Framework"}
        slug={"our-framework"}
        image="/images/about-us/framework.jpg"
        description="You’re not just fixing a business; you’re building a legacy. This framework empowers leaders to scale with clarity, integrity, and inner alignment."
      />

      <OurFramworkSection />
      <TaketheFirstStep title="Take the First Step" />
    </div>
  );
}
