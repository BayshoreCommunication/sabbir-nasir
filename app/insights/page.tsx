import GlobalHeroSection from "@/components/GlobalHeroSection";
import TaketheFirstStep from "@/components/Homepage/TaketheFirstStep";
import InsightsGrid from "@/components/InsightsGrid";
import GetAllBlogPost from "@/lib/GetAllBlogPost";
import { BlogPostData } from "@/lib/types";

const page = async () => {
  const blogPostData: BlogPostData = await GetAllBlogPost();

  return (
    <div className="overflow-hidden mt-[62px] md:mt-[100px]">
      <GlobalHeroSection
        titleH1={`Insights`}
        titleH2={"Insights"}
        slug={"insights"}
        image="/images/about-us/blog.jpg"
        description="Sign up to receive in-depth analysis of business transformation with real-world stories that show how our framework has been successfully applied."
        buttonFlag={true}
        buttonText="Contact Us"
      />
      <InsightsGrid blogPostData={blogPostData} />
      <TaketheFirstStep title="Take the First Step" />
    </div>
  );
};

export default page;
