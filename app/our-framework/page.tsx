import React from "react";
import Topbar from "../components/Topbar";
import HeroSectionTop from "../components/HeroSectionTop";
import HeroSection from "../components/HeroSection";
import Image from "next/image";

const OurFrameworkPage = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Our Framework" }]
  return (
    <div>
      <HeroSectionTop title="SABBIR NASIR & HIS TEAM FRAMEWORK" breadcrumbs={breadcrumbs} />
      <div className="main-container mx-auto px-4 py-12 space-y-16">
        
        {/* Transformation Framework Section */}
        <section className="text-center space-y-8">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-semibold text-black">
            Scale with Clarity and Confidence
          </h1>
          
          {/* Description */}
          <p className="text-lg text-[#8C8C8C] leading-relaxed text-left">
            More than transforming the business to drive efficiency and fuel revenue growth, the Sabbir Nasir Transformation Framework creates an environment where leaders and teams can find harmony and fulfillment. We believe transformation isn&apos;t just something you observe in a financial report. It&apos;s something you feel. That&apos;s how you know you&apos;ve achieved something truly special – and transformational.
          </p>
          
          {/* Download Button */}
          <div className="flex items-center justify-center space-x-2 text-blue-600 underline cursor-pointer hover:text-blue-800 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-lg">Download The Framework</span>
          </div>
        </section>

        {/* 7 Phases Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              7 Phases of Transformation
            </h2>
            <p className="text-lg text-[#8C8C8C] max-w-4xl mx-auto">
              During each phase of the Sabbir Nasir and his team Transformation Framework, we work together to overcome challenges, identify opportunities, and achieve your goals as a company and a leader.
            </p>
          </div>

          {/* Phases Grid */}
          <div className="grid gap-6 max-w-6xl mx-auto">
            {/* Phase 1 */}
            <div className=" rounded-xl p-6 bg-white shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <span className="text-cyan-500 font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#141212] mb-3">Holy Trap</h3>
                  <p className="text-[#8C8C8C] leading-relaxed">
                    Your talent and hard work got you to this level, but you&apos;re trapped because that&apos;s not enough to scale and thrive. Transformation begins by recognizing the lack of clarity in your vision, values, strengths, and opportunities. You have mountains of data, but little if any insights. The pieces are there, but confusion and fragmentation are keeping you from moving forward.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="rounded-xl p-6 bg-white shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <span className="text-cyan-500 font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#141212] mb-3">Articulate</h3>
                  <p className="text-[#8C8C8C] leading-relaxed">
                    Now, we begin to articulate a clear vision, define and prioritize values, and perform SWOT (strengths, weaknesses, opportunities, and threats) and PEST (political, economic, sociocultural, and technological) analyses. We&apos;ll also collect data from multiple sources, bring data together into a coherent structure, and generate insights to inform decision making.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="rounded-xl p-6 bg-white shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <span className="text-cyan-500 font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#141212] mb-3">Discover</h3>
                  <p className="text-[#8C8C8C] leading-relaxed">
                    This phase focuses on data mining to make sense of where your organization stands. We collect financial, operational, and market data, as well as issue lists, and create a holistic fact sheet. During this process, we verify data accuracy, make sure you are reading your data correctly, and show you how to apply first-principle thinking and design thinking.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="rounded-xl p-6 bg-white shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <span className="text-cyan-500 font-bold text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#141212] mb-3">Strategize</h3>
                  <p className="text-[#8C8C8C] leading-relaxed">
                    Strategic planning begins with identifying the company&apos;s value proposition and brand position. We then create your brand identity, brand architecture, and organizational strategy map. Short- and long-term strategic plans and priorities are developed, along with a productivity loop. Key performance indicators (KPIs) are created in a dashboard, where all strategic components are connected.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="rounded-xl p-6 bg-white shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <span className="text-cyan-500 font-bold text-lg">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#141212] mb-3">Re-engineer</h3>
                  <p className="text-[#8C8C8C] leading-relaxed">
                    We create a competence map and conduct a leadership survey to identify ways to improve the skill reservoir and leadership scores. We re-engineer the organizational structure and processes to optimize standard operating procedures, automation, and digitalization and support the strategies previously developed. A culture audit and re-engineering are also needed to ensure alignment with your goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 6 */}
            <div className="rounded-xl p-6 bg-white shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <span className="text-cyan-500 font-bold text-lg">6</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#141212] mb-3">Execute</h3>
                  <p className="text-[#8C8C8C] leading-relaxed">
                  Now that the game plan is set, it’s time to act. We deliver the value proposition and execute results, which will elevate brand equity. A quantum leap in results could very well highlight the first year of execution, but patience is key. This phase takes at least three years to achieve optimal results and meaningful change in brand equity.                  </p>
                </div>
              </div>
            </div>

            {/* Phase 7 */}
            <div className="rounded-xl p-6 bg-white shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <span className="text-cyan-500 font-bold text-lg">7</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#141212] mb-3">Expand</h3>
                  <p className="text-[#8C8C8C] leading-relaxed">
                  Let’s leverage your powerful brand to expand and scale through stakeholders. For example, small- and medium-sized investors often create franchises to capitalize on brand equity and drive revenue. In this phase, we develop relationships with equity and debt providers, discuss valuation, develop a valuation roadmap, and look for ways to create solid net worth.                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </div>
      <HeroSection/>
    </div>
  );
};

export default OurFrameworkPage; 
