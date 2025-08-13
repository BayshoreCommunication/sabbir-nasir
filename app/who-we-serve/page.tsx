import GlobalHeroSection from "@/components/GlobalHeroSection";
import TaketheFirstStep from "@/components/Homepage/TaketheFirstStep";
import WhoWeServe from "@/components/WhoWeServe/WhoWeServe";

const page = () => {
  return (
    <div className="overflow-hidden mt-[62px] md:mt-[100px]">
      <GlobalHeroSection
        titleH1={`Who We Serve`}
        titleH2={"Who We Serve"}
        slug={"who-we-serve"}
        image="/images/about-us/serve.jpg"
        description="If your business has hit a plateau and lacks a clear vision of success and how to move forward, we would love to hear your story."
        buttonFlag={true}
        buttonText="Start Your Journey"
      />

      <WhoWeServe />
      <TaketheFirstStep title="Take the First Step" />
    </div>
  );
};

export default page;
