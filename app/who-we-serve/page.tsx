import Image from "next/image";
import HeroSection from "../components/HeroSection";
import HeroSectionTop from "../components/HeroSectionTop";

const WhoWeServePage = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Who we serve" }];
  return (
    <div>
      <HeroSectionTop title="Who we serve" breadcrumbs={breadcrumbs} />
      <div className="main-container mx-auto px-4 py-12 space-y-16">
        {/* About Section */}
        <section className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Is Your Organization Stuck in the Holy Trap?
          </h1>

          {/* Full-width introductory paragraph */}
          <p className="text-gray-600 leading-relaxed text-center max-w-6xl mx-auto">
            We’ve found that businesses often find early success due to the
            founder’s passion, purpose, and determination, not a structured,
            carefully crafted business plan. Revenue reaches $5-$10 million and
            their small team grows to 500-1,000 employees.
          </p>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto relative">
            {/* Left column - Colored background with icon (smaller, overlapping) */}
            <div className="bg-purple-50 p-8 rounded-2xl flex items-center justify-center min-h-[320px]  mt-0 md:-mt-8 -mr-0 md:-mr-20 relative z-10">
              <div className="bg-gray-400 p-6 rounded-2xl">
                <Image
                  src="/placeholder.png?height=60&width=60"
                  alt="Mountain peaks icon"
                  width={60}
                  height={60}
                  className="filter brightness-0 invert"
                />
              </div>
            </div>

            {/* Right column - Card design (wider, being overlapped) */}
            <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-8 pl-20 border border-gray-100">
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Then the company hits a wall that we call the Holy Trap.{" "}
                  <span className="font-semibold italic">
                    The sacred spark and positive energy that produced genuine
                    success aren&apos;t enough to scale.
                  </span>{" "}
                  The company tries to expand, but confusion remains. Closer
                  examination typically reveals:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">Cluttered vision</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">Undefined values</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">Fragmented data</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">Reactive strategy</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      Overwhelmed leadership
                    </span>
                  </li>
                </ul>

                <p className="text-gray-600 leading-relaxed">
                  These are the types of organizations that Sabbir Nasir and his
                  associates can help{" "}
                  <span className="font-semibold italic">
                    transform and scale to $100 million and beyond.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transformational Leadership Section */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A Universal Model for Transformation
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed text-left">
            <p>
              We understand the work because we’ve already done the work. Sabbir
              Nasir has led the transformation of a grocery chain (Shwapno) and
              a furniture manufacturer and retailer (Otobi) from the brink of
              failure and stagnancy respectively to become the largest and most
              successful organizations in Bangladesh in their respective
              business categories.
            </p>

            <p>
              The Sabbir Nasir Transformation Framework has produced remarkable
              growth in the retail and manufacturing sectors and is ideal for
              private equity firms seeking to buy, transform and sell companies
              for profit. However,{" "}
              <span className="font-semibold italic">
                {" "}
                this approach to transformation is industry-agnostic and can be
                applied to virtually any company in the world
              </span>{" "}
              that is stuck in the Holy Trap.
            </p>
          </div>
        </section>

        {/* Spiritual Journey Section */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Break Through the Wall
          </h2>

          <div className="  space-y-6 text-gray-600 leading-relaxed text-left">
            <p>
              <span className="font-semibold italic">
                We want to hear from you if your company is stuck and needs a
                turnaround
              </span>{" "}
              . An overhaul. A fresh perspective. A clear path forward. A
              sustainable strategy. Not just a change in function, but a change
              in thinking and culture. And a transformational architect to guide
              you through the process.
            </p>

            <p>
              Sabbir and his associates will examine every area of your business
              to identify and address issues that are holding you back. Vision,
              values, and culture. Processes, financials, and data. Value
              proposition, brand positioning, and strategic planning. Then the
              transformation begins and blossoms.
            </p>
          </div>
        </section>
      </div>
      <HeroSection />
    </div>
  );
};

export default WhoWeServePage;
