import HeroSection from "../components/HeroSection";
import HeroSectionTop from "../components/HeroSectionTop";
import InsightsGrid from "../components/InsightsGrid";

const InsightsPage = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Blogs" }];
  return (
    <div>
      <HeroSectionTop title="NEWS" breadcrumbs={breadcrumbs} />
      <div className="main-container mx-auto px-4 py-12 space-y-16">
        <div className="max-w-7xl mx-auto">
          <InsightsGrid />
        </div>
      </div>
      <HeroSection />
    </div>
  );
};

export default InsightsPage;
