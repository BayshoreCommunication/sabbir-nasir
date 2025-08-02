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
        description="Your passion got you here, but now you need more than passion to grow. We help leaders break through stagnation and build companies that scale and create lasting impact."
      />
      <WhoWeServe />
      <TaketheFirstStep title="Take the First Step" />
    </div>
  );
};

export default page;
