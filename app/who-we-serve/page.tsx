"use client";
import React from "react";
import Topbar from "../components/Topbar";
import VideoPlayer from "../components/WhoWeServe/WhoWeServePageComponent/VideoPlayer";
import Image from "next/image";
import whoWeServeImg from "../../public/images/who-we-serve/who-we-serve.png";
import CustomerFeedback from "../components/CustomerFeedback/CustomerFeedback";
import {
  MotionButton,
  MotionDiv,
  MotionSection,
} from "../components/Motion/Motion";
import Link from "next/link";
import { BsFillGridFill } from "react-icons/bs";

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
          <div className="space-y-4 pb-6 lg:pb-10">
            <div>
              <h2 className="text-3xl font-bold text-start text-gray-800">
                Is Your Organization Stuck in the Holy Trap?
              </h2>

              <p className="text-gray-700 mt-4">
                We’ve found that businesses often find early success due to the
                founder’s passion, purpose, and determination, not a structured,
                carefully crafted business plan. Revenue reaches $5-$10 million
                and their small team grows to 500-1,000 employees.
              </p>
              <p className="text-gray-700 mt-4">
                Then the company hits a wall that we call the Holy Trap.{" "}
                <strong>
                  The sacred spark and positive energy that produced genuine
                  success aren’t enough to scale.
                </strong>{" "}
                The company tries to expand, but confusion remains. Closer
                examination typically reveals:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-4">
                <li>Cluttered vision</li>
                <li>Undefined values</li>
                <li>Fragmented data</li>
                <li>Reactive strategy</li>
                <li>Overwhelmed leadership</li>
              </ul>

              <p className="text-gray-700 mt-4">
                These are the types of organizations that Sabbir Nasir and his
                associates can help{" "}
                <strong>transform and scale to $100 million and beyond.</strong>
                .
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 pt-4">
                A Universal Model for Transformation
              </h3>

              <p className="text-gray-700">
                We understand the work because we’ve already done the work.
                Sabbir Nasir has led the transformation of a grocery chain
                (Shwapno) and a furniture manufacturer and retailer (Otobi) from
                the brink of failure and stagnancy respectively to become the
                largest and most successful organizations in Bangladesh in their
                respective business categories.
              </p>
              <p className="text-gray-700">
                The Sabbir Nasir Transformation Framework has produced
                remarkable growth in the retail and manufacturing sectors and is
                ideal for private equity firms seeking to buy, transform and
                sell companies for profit. However, this approach to
                transformation is industry-agnostic and can be applied to
                virtually any company in the world that is stuck in the Holy
                Trap.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 ">
                Break Through the Wall
              </h3>
              <p className="text-gray-700 text-start !mt-3">
                <strong>
                  We want to hear from you if your company is stuck and needs a
                  turnaround.
                </strong>{" "}
                An overhaul. A fresh perspective. A clear path forward. A
                sustainable strategy. Not just a change in function, but a
                change in thinking and culture. And a transformational architect
                to guide you through the process.
              </p>
              <p className="text-gray-700 text-start">
                Sabbir and his associates will examine every area of your
                business to identify and address issues that are holding you
                back. Vision, values, and culture. Processes, financials, and
                data. Value proposition, brand positioning, and strategic
                planning. Then the transformation begins and blossoms.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-start text-gray-800 ">
                Take the First Step
              </h3>
              <p className="text-gray-700 text-start !mt-3">
                Schedule a complimentary 30-minute discovery call with Sabbir
                Nasir. You’ll begin to{" "}
                <strong>
                  see what is holding you back, and what is possible through
                  transformation.
                </strong>{" "}
                Let’s start this journey together.
              </p>
            </div>

            <div className="mt-2 ">
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
        </MotionDiv>
      </section>
      <section>
        <CustomerFeedback />
      </section>
    </div>
  );
};

export default WhoWeServe;
