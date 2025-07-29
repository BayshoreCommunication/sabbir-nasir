import Image from "next/image";
import HeroSection from "../components/HeroSection";
import HeroSectionTop from "../components/HeroSectionTop";

const AboutUsPage = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "About Us" }];
  return (
    <div>
      <HeroSectionTop title="WHO WE ARE" breadcrumbs={breadcrumbs} />
      <div className="main-container mx-auto px-4 py-12 space-y-16">
        {/* About Section */}
        <section className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            About Sabbir Nasir & Associates
          </h1>

          {/* Full-width introductory paragraph */}
          <p className="text-gray-600 leading-relaxed text-center max-w-6xl mx-auto">
            Sabbir Nassir & Associates is a global business transformation
            consultancy created to help people and organizations scale to their
            full potential with clarity and purpose. We partner with founders,
            senior executives, and investors, working together to apply the
            Sabbir Nasir Transformation Framework, which combines proven
            business transformation principles with human presence,
            responsibility, and soul.
          </p>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto relative">
            {/* Left column - Image only with rounded corners */}
            <div className="flex items-center justify-center min-h-[320px] -mt-8 -mr-0 md:-mr-20 relative z-10">
              <Image
                src="/images/about-us/sabbir-nasir.jpg"
                alt="Sabbir Nasir"
                width={520}
                height={520}
                className="rounded-2xl object-cover"
              />
            </div>

            {/* Right column - Card design (wider, being overlapped) */}
            <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-8 pl-20 border border-gray-100">
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Sabbir Nasir launched his own consultancy because he observed
                  that stagnating companies need more than templated advice,
                  PowerPoint decks, and periodic check-ins with a traditional
                  advisor. Sabbir is{" "}
                  <span className="font-semibold italic">
                    a true partner and transformational architect who walks the
                    journey with you
                  </span>{" "}
                  – physically, mentally, emotionally, and spiritually. And
                  he&apos;ll stay with you until you can sustain your
                  transformational strategies without him.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Sabbir offers not only practical business experience and
                  insights, but also his full presence and a genuine desire to
                  see people and organizations thrive. He&apos;ll help you{" "}
                  <span className="font-semibold italic">
                    see clearly, think strategically, and act decisively
                  </span>
                  , and act decisively. You&apos;ll learn what your business
                  needs, what your soul wants, and how to honor both in a
                  unified vision for business and individual growth.
                </p>

                <div className="pt-4">
                  <h3 className="font-bold text-xl text-gray-900">
                    Sabbir Nasir
                  </h3>
                  <p className="text-gray-600 font-medium">Owner and Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transformational Leadership Section */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Transformational Leadership
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed text-left">
            <p>
              As Managing Director of ACI Logistics, Sabbir led the
              transformation of Shwapno from a struggling retailer with low
              brand equity to the{" "}
              <span className="font-semibold italic">
                largest, fastest-growing supermarket chain
              </span>{" "}
              in Bangladesh. Shwapno achieved record sales, record store-level
              profitability, and record operating profits across more than 600
              stores in 2024.
            </p>

            <p>
              Prior to joining ACI Logistics, Sabbir founded Roadmap Limited, a
              retail consultancy firm specializing in the retail and fast-moving
              consumer goods (FMCG) sectors. He also served as CEO of Otobi,
              transforming the medium-sized enterprise into the{" "}
              <span className="font-semibold italic">
                largest furniture manufacturer and retailer
              </span>{" "}
              in Bangladesh – and one of the country&apos;s most admired brands.
            </p>
          </div>
        </section>

        {/* Spiritual Journey Section */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A Spiritual Journey
          </h2>

          <div className="  space-y-6 text-gray-600 leading-relaxed text-left">
            <p>
              Soon after taking the reigns as CEO of Otobi, Sabbir felt the full
              weight of his new role. He was entrusted with the livelihoods and
              dreams of more than 1,000 employees and their families. When a
              friend gave Sabbir a book on Sufism, something metaphysical
              stirred inside him and sparked a profound spiritual
              transformation.
            </p>

            <p>
              Sabbir met <span className="italic">yogis</span> of the Himalayan
              Shaivite tradition. He traveled to Kenya, Turkey, the land of
              Shams-e-Tabriz, Rumi, and whirling dervishes. He encountered the
              Kabbalists in Europe. Returning to Bangladesh, Sabbir met a humble
              vegetable trader who brought clarity to the Quran, Torah, and
              Vedas through his embodiment of their teachings.
            </p>

            <p>
              These experiences led to an awakening of the soul and spirit that
              forms the foundation of Sabbir&apos;s approach to business
              transformation. Clarity before action. Stillness before calling.
              Alignment before growth.
            </p>

            <p className="italic font-medium text-gray-700 border-l-4 border-gray-300 pl-6">
              &quot;People, culture, structure, data, systems, strategy, and
              process are all parts of the equation. But real transformation
              begins within.&quot;
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Education
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex items-start space-x-4">
            {/* MIT Sloan */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                MIT Sloan School of Management
              </h3>
              <p className="text-gray-600 text-sm">
                Advanced Certificate for Executives in Management, Innovation
                and Technology, Business Administration
                <br /> and Management, General
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 ">
            {/* UC Berkeley */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Certificate of Excellence, Data Science and Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  University of California, Berkeley, Haas School of Business
                </p>
              </div>
            </div>
            {/* Harvard Business School */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Harvard Business School
                </h3>
                <p className="text-gray-600 text-sm">
                  Certificate, Retail Forum for Senior Leaders
                </p>
              </div>
            </div>

            {/* B.Sc Engineering */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  B.Sc Engineer, Mechanical Engineering
                </h3>
                <p className="text-gray-600 text-sm">
                  Bangladesh University of Engineering and Technology
                </p>
              </div>
            </div>

            {/* MBA */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">MBA, Marketing</h3>
                <p className="text-gray-600 text-sm">
                  Institute of Business Administration, University of Dhaka
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <HeroSection title="Speak with Sabbir Nasir and his team" />
    </div>
  );
};

export default AboutUsPage;
