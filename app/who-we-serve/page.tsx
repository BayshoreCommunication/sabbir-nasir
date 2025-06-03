"use client";
import React from "react";
import Topbar from "../components/Topbar";
import VideoPlayer from "../components/WhoWeServe/WhoWeServePageComponent/VideoPlayer";
import Image from "next/image";
import whoWeServeImg from "../../public/images/who-we-serve/who-we-serve.png";
import CustomerFeedback from "../components/CustomerFeedback/CustomerFeedback";
import { MotionDiv, MotionSection } from "../components/Motion/Motion";

const WhoWeServe = () => {
  return (
    <div>
      <Topbar mainPage="Who We Serve" />
      <MotionSection
        initial={{ opacity: 0, y: "-100px" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        className="main-container spacer flex justify-center"
      >
        {/* <VideoPlayer /> */}
        <iframe
          width="50%"
          height="400"
          src="https://www.youtube.com/embed/_gwtroFSQAo?si=0hKhalHb_W7EAR2x"
          title="Sabbir Nasir at Live with a Purpose"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full lg:w-1/2"
        ></iframe>
      </MotionSection>
      <section className="main-container flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        <MotionDiv
          initial={{ opacity: 0, x: "-50px" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          className="flex-[1.5] flex flex-col gap-5"
        >
          <div className="lg:pt-2 pb-10 lg:pb-20">
            <p className="mb-8 text-lg">
              At <span className="font-bold">Team Sabbir Nasir</span>, we
              partner with individuals, teams, and organizations who are ready
              to challenge the status quo, embrace meaningful growth, and
              operate with clarity and purpose. Our services are designed to
              meet the needs of a diverse range of clients:
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Corporate Leaders & Executives
                </h3>
                <p className="text-gray-700">
                  For decision-makers navigating high-stakes environments, we
                  offer strategic insight, leadership development, and emotional
                  intelligence coaching to drive sustainable success with
                  authenticity and vision.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Entrepreneurs & Startups
                </h3>
                <p className="text-gray-700">
                  {`Whether you're launching or scaling, we provide branding,
                  strategic planning, and problem-solving consultancy to help
                  founders align their vision with execution and thrive in
                  competitive markets.`}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Organizations Seeking Transformation
                </h3>
                <p className="text-gray-700">
                  From culture change to long-term strategic planning, we
                  support businesses, NGOs, and institutions undergoing
                  transformation—offering frameworks to evolve with agility,
                  purpose, and measurable impact.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Creative Professionals & Thought Leaders
                </h3>
                <p className="text-gray-700">
                  Artists, educators, writers, and innovators benefit from our
                  10-year planning and personal branding consultancy—helping
                  them build meaningful legacies with intention and strategic
                  clarity.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Individuals on a Journey of Self-Discovery
                </h3>
                <p className="text-gray-700">
                  {` For those seeking deeper purpose, clarity, and connection, our
                  "Exploring Your Higher Self" and emotional intelligence
                  programs offer tools to live and lead from the inside out.`}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Teams in Transition</h3>
                <p className="text-gray-700">
                  We help teams align around shared goals, develop emotional
                  intelligence, and create actionable plans for performance,
                  cohesion, and cultural transformation.
                </p>
              </div>
            </div>

            <p className="mt-12 text-lg">
              Whether you are seeking professional breakthroughs, personal
              alignment, or organizational reinvention,{" "}
              <span className="font-bold">Team Sabbir Nasir</span> is here to
              guide, support, and empower your journey.
            </p>
          </div>

          {/* <p>
            {`At Team Sabbir Nasir, we partner with individuals, teams, and organizations who are ready to challenge the status quo, embrace meaningful growth, and operate with clarity and purpose. Our services are designed to meet the needs of a diverse range of clients:
`}
          </p>
          <p>
            {` At DXG, our approach is to intimately understand your event's
            objectives and forge a connection between your content and your
            audience. Whether through immersive experiences, captivating
            visuals, or interactive elements, we ensure that every aspect of
            your event resonates with attendees.
          `}
          </p>
          <p>
            We stay at the forefront of technology, harnessing innovative
            solutions to enhance engagement and streamline production. Our
            outcome-focused strategy is designed to deliver measurable results,
            turning your vision into a dynamic reality that leaves a lasting
            impression.
          </p> */}
        </MotionDiv>
        {/* <MotionDiv
          initial={{ opacity: 0, x: "50px" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          className="flex-1"
        >
          <Image src={whoWeServeImg} alt="who-we-serve-image" />
        </MotionDiv> */}
      </section>
      <section>
        <CustomerFeedback />
      </section>
    </div>
  );
};

export default WhoWeServe;
