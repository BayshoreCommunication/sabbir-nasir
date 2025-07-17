import React from "react";
import Topbar from "../components/Topbar";
import Link from "next/link";
import {
  MotionButton,
  MotionDiv,
  MotionH1,
  MotionP,
} from "../components/Motion/Motion";
import { serviceData } from "../config/data";
import { BsFillGridFill } from "react-icons/bs";

const ServicesPage = () => {
  return (
    <div className="overflow-hidden">
      <Topbar mainPage="Transformation Framework" />
      <section className="main-container spacer">
        <div className="text-center mb-4 lg:mb-9">
          <MotionH1
            initial={{ opacity: 0, x: "100px" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-4"
          >
            Sabbir Nasir Transformation Framework{" "}
          </MotionH1>
        </div>
        <div className=" space-y-8">
          <h3 className="text-2xl font-bold">
            Scale with Clarity and Confidence
          </h3>
          <p className="!mt-2">
            More than transforming the business to drive efficiency and fuel
            revenue growth, the <strong>Sabbir Nasir</strong> Transformation
            Framework creates an environment where leaders and teams can find
            harmony and fulfillment. We believe transformation isn’t just
            something you observe in a financial report. It’s something you
            feel. That’s how you know you’ve achieved something truly special –
            and
            <em> transformational</em>.
          </p>

          <h3 className="text-2xl font-bold">7 Phases of Transformation</h3>
          <p className="!mt-2">
            During each phase of the <strong>Sabbir Nasir</strong>{" "}
            Transformation Framework, we work together to overcome challenges,
            identify opportunities, and achieve your goals as a company and a
            leader.
          </p>

          <ol className="space-y-4 list-decimal list-inside text-xl font-semibold ">
            <li>
              <h4 className="text-xl font-semibold inline">HOLY TRAP</h4>
              <p className="text-base font-normal">
                Your talent and hard work got you to this level, but you’re
                trapped because that’s not enough to scale and thrive.
                Transformation begins by recognizing the lack of clarity in your
                vision, values, strengths, and opportunities. You have mountains
                of data, but little if any insights. The pieces are there, but
                confusion and fragmentation are keeping you from moving forward.
              </p>
            </li>

            <li>
              <h4 className="text-xl font-semibold inline">ARTICULATE</h4>
              <p className="text-base font-normal">
                Now, we begin to articulate a clear vision, define and
                prioritize values, and perform SWOT (strengths, weaknesses,
                opportunities, and threats) and PEST (political, economic,
                sociocultural, and technological) analyses. We’ll also collect
                data from multiple sources, bring data together into a coherent
                structure, and generate insights to inform decision making.
              </p>
            </li>

            <li>
              <h4 className="text-xl font-semibold inline">DISCOVER</h4>
              <p className="text-base font-normal">
                This phase focuses on data mining to make sense of where your
                organization stands. We collect financial, operational, and
                market data, as well as issue lists, and create a holistic fact
                sheet. During this process, we verify data accuracy, make sure
                you are reading your data correctly, and show you how to apply
                first-principle thinking and design thinking.
              </p>
            </li>

            <li>
              <h4 className="text-xl font-semibold inline">STRATEGIZE</h4>
              <p className="text-base font-normal">
                Strategic planning begins with identifying the company’s value
                proposition and brand position. We then create your brand
                identity, brand architecture, and organizational strategy map.
                Short- and long-term strategic plans and priorities are
                developed, along with a productivity loop. Key performance
                indicators (KPIs) are created in a dashboard, where all
                strategic components are connected.
              </p>
            </li>

            <li>
              <h4 className="text-xl font-semibold inline">RE-ENGINEER</h4>
              <p className="text-base font-normal">
                We create a competence map and conduct a leadership survey to
                identify ways to improve the skill reservoir and leadership
                scores. We re-engineer the organizational structure and
                processes to optimize standard operating procedures, automation,
                and digitalization and support the strategies previously
                developed. A culture audit and re-engineering are also needed to
                ensure alignment with your goals.
              </p>
            </li>

            <li>
              <h4 className="text-xl font-semibold inline">EXECUTE</h4>
              <p className="text-base font-normal">
                Now that the game plan is set, it’s time to act. We deliver the
                value proposition and execute results, which will elevate brand
                equity. A quantum leap in results could very well highlight the
                first wave of execution gains, but patience is key. This phase
                takes at least three years to achieve optimal results and
                meaningful change in brand equity.
              </p>
            </li>

            <li>
              <h4 className="text-xl font-semibold inline">EXPAND</h4>
              <p className="text-base font-normal">
                Let’s leverage your powerful brand to expand and scale through
                stakeholders. For example, small- and medium-sized investors
                often create franchises to capitalize on brand equity and drive
                revenue. In this phase, we develop relationships with equity and
                debt providers, discuss valuation, develop a valuation roadmap,
                and look for ways to create solid net worth.
              </p>
            </li>
          </ol>

          <div className="pt-6">
            <h3 className="text-2xl font-bold">Take the First Step</h3>
            <p>
              Schedule a complimentary 30-minute discovery call with Mr.{" "}
              <strong>Sabbir Nasir</strong> and his team. You’ll begin to{" "}
              <strong>
                see what is holding you back, and what is possible through
                transformation
              </strong>
              . Let’s start this journey together.
            </p>
            <div className="mt-4">
              <Link href={"/contact-us"}>
                <MotionButton
                  initial={{ opacity: 0, scale: 0 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-full px-4 h-10 text-white text-sm flex items-center justify-center gap-2 hover:text-white bg-primary-color hover:bg-gradient-to-tr from-black via-primary-color to-sky-200"
                >
                  <BsFillGridFill />
                  <div className="border-r-2 h-full border-gray-500"></div>
                  SCHEDULE A CALL
                </MotionButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
